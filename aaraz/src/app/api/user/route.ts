import { NextRequest, NextResponse } from "next/server";
import DBconnect from "../../../../lib/dbConnect";
import UserSchema from "../../../../models/User";

// Define the type for the incoming request body
interface UserPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  address: string;
}

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

    // Create a new user instance
    const newUser = new UserSchema({
      name,
      email,
      phoneNumber,
      password,
      address,
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
