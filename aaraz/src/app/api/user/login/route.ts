import { NextRequest, NextResponse } from "next/server";
import DBconnect from "../../../../../lib/dbConnect"
import UserSchema from "../../../../../models/User"

export const POST = async (req: NextRequest) => {
    try {
      await DBconnect();
      const { email, password } = await req.json();
  
      // Find the user by email
      const user = await UserSchema.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { message: "Invalid email or password." },
          { status: 401 }
        );
      }
  
      // Check if the password matches (in plain text)
      if (password !== user.password) {
        return NextResponse.json(
          { message: "Invalid email or password." },
          { status: 401 }
        );
      }
  
      // Successful login
      return NextResponse.json(
        { message: "Login successful", user },
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Error during login:", error.message);
      return NextResponse.json(
        { message: "Failed to login.", error: error.message },
        { status: 500 }
      );
    }
  };