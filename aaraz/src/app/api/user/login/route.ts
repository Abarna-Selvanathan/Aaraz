import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import DBconnect from "../../../../../lib/dbConnect";
import User from "../../../../../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();

    const { email, password }: { email: string; password: string } = await req.json();

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error logging in:", (error as Error).message);
    return NextResponse.json(
      { message: "Failed to log in", error: (error as Error).message },
      { status: 500 }
    );
  }
};
