import { NextRequest, NextResponse } from "next/server";
import DBconnect from "../../../../lib/dbConnect";
import UserSchema from "../../../../models/User";

// Get User by ID (GET)
export const GET = async (req: NextRequest, { params }: any): Promise<NextResponse> => {
  const { id } = params;  // Extract userId from URL params

  try {
    await DBconnect();

    // Find user by ID
    const user = await UserSchema.findById(id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { user },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching user by ID:", error.message);
    return NextResponse.json(
      { message: "Failed to fetch user by ID.", error: error.message },
      { status: 500 }
    );
  }
};

// Update User (PUT)
export const PUT = async (req: NextRequest, { params }: any): Promise<NextResponse> => {
  const { id } = params;  // Extract userId from URL params

  try {
    await DBconnect();

    // Parse the incoming JSON request body
    const { name, email, phoneNumber, address }: any = await req.json();

    // Find and update the user by ID
    const updatedUser = await UserSchema.findByIdAndUpdate(
      id,
      { name, email, phoneNumber, address },
      { new: true }  // Returns the updated document
    );

    if (!updatedUser) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating user:", error.message);
    return NextResponse.json(
      { message: "Failed to update user.", error: error.message },
      { status: 500 }
    );
  }
};

// Delete User (DELETE)
export const DELETE = async (req: NextRequest, { params }: any): Promise<NextResponse> => {
  const { id } = params;  // Extract userId from URL params

  try {
    await DBconnect();

    // Find and delete the user by ID
    const deletedUser = await UserSchema.findByIdAndDelete(id);
    if (!deletedUser) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User deleted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting user:", error.message);
    return NextResponse.json(
      { message: "Failed to delete user.", error: error.message },
      { status: 500 }
    );
  }
};
