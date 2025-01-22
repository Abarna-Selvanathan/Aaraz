import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import DBconnect from "../../../../lib/dbConnect";
import User from "../../../../models/User";

const JWT_SECRET = process.env.JWT_SECRET;

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();

    const { username, email, password }: { username: string; email: string; password: string } = await req.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user to the database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET!, { expiresIn: "1h" });

    return NextResponse.json({ message: "User created successfully", token }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error registering user:", (error as Error).message);
    return NextResponse.json(
      { message: "Failed to register user", error: (error as Error).message },
      { status: 500 }
    );
  }
};


// get all


export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();

    // Retrieve all users
    const users = await User.find({});
    return NextResponse.json(
      { users },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    return NextResponse.json(
      { message: "Failed to fetch users.", error: error.message },
      { status: 500 }
    );
  }
};

