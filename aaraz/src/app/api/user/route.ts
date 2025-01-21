import { NextRequest, NextResponse } from "next/server";
import DBconnect from "../../../../lib/dbConnect";
import UserSchema from "../../../../models/User";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();
    console.log("Database connected successfully");

    // Parse and validate the request body
    const body: UserPayload = await req.json();
    const { name, email, phoneNumber, password, address } = body;

    console.log("Payload received:", { name, email, phoneNumber, address });

    // Check if the user already exists
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Create a new user instance with userId explicitly set
    const newUser = new UserSchema({
      name,
      email,
      phoneNumber,
      password,
      address,
      userId: `U${Date.now()}` // Manually set userId here
    });
    console.log("New user created:", newUser);

    // Save the user to the database
    await newUser.save();
    console.log("User saved successfully");

    return NextResponse.json(
      { message: "Account created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to create account.", error: error.message },
      { status: 500 }
    );
  }
};

// get all


export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();

    // Retrieve all users
    const users = await UserSchema.find({});
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