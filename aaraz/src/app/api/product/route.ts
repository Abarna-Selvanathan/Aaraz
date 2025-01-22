import { NextRequest, NextResponse } from "next/server";
import DBconnect from "../../../../lib/dbConnect";
import Product, { IProduct } from "../../../../models/Product"; // Assuming IProduct is the interface for your Product model

// Handle GET requests (Fetch all products)
export const GET = async (): Promise<NextResponse> => {
  try {
    await DBconnect();
    const products: IProduct[] = await Product.find();
    return NextResponse.json(products, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching products:", (error as Error).message);
    return NextResponse.json(
      { message: "Failed to fetch products.", error: (error as Error).message },
      { status: 500 }
    );
  }
};

// Handle POST requests (Add a new Product)
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();
    const newProduct: IProduct = await req.json();
    console.log("Product to save:", newProduct);
    const savedProduct: IProduct = await Product.create(newProduct);
    return NextResponse.json(
      { message: "Product saved successfully", savedProduct },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error saving Product:", (error as Error).message);
    return NextResponse.json(
      { message: "Failed to save Product.", error: (error as Error).message },
      { status: 500 }
    );
  }
};

// Handle GET requests for a single Product (Fetch a Product by ID)
export const GET_BY_ID = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();
    const { searchParams } = new URL(req.url);
    const id: string | null = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }
    const product: IProduct | null = await Product.findById(id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching Product:", (error as Error).message);
    return NextResponse.json(
      { message: "Failed to fetch Product.", error: (error as Error).message },
      { status: 500 }
    );
  }
};

// Handle PATCH requests (Update a Product)
export const PATCH = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();
    const { searchParams } = new URL(req.url);
    const id: string | null = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }
    const updateData: Partial<IProduct> = await req.json();
    console.log("Product to update:", updateData);
    const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Product updated successfully", updatedProduct },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error updating Product:", (error as Error).message);
    return NextResponse.json(
      { message: "Failed to update Product.", error: (error as Error).message },
      { status: 500 }
    );
  }
};

// Handle DELETE requests (Delete a Product)
export const DELETE = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await DBconnect();
    const { id }: { id: string } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }
    const deletedProduct: IProduct | null = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Product deleted successfully", deletedProduct },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error deleting Product:", (error as Error).message);
    return NextResponse.json(
      { message: "Failed to delete Product.", error: (error as Error).message },
      { status: 500 }
    );
  }
};
