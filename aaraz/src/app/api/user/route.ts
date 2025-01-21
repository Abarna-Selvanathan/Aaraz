import { NextRequest, NextResponse } from "next/server";
import DBconnect from "../../../../lib/dbConnect";
import UserSchema from "../../../../models/User";

export const POST = async (req: NextRequest) => {
  try {
    await DBconnect();
    const { fName, lName, email, phoneNumber, password } = await req.json();

    // Check if the user already exists
    const existingUser = await UserSchema.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Create a new user instance
    const newUser = new UserSchema({
      name: {fName, lName},
      email,
      phoneNumber,
      password,
    });

    // Save the user to the database
    await newUser.save();

    return NextResponse.json(
      { message: "Account created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to create account.", error: error.message },
      { status: 500 }
    );
  }
};
