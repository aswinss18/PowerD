import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/database/mongoDB/mongoose";
import Products from "../../../lib/database/models/product.modal";

export async function POST(req) {
  try {
    // Parse the request body to get productId
    const { productId } = await req.json();

    if (!productId) {
      return NextResponse.json(
        { status: false, error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Find the product in MongoDB
    const product = await Products.findById(productId).lean();

    if (!product) {
      return NextResponse.json(
        { status: false, error: "Product not found" },
        { status: 404 }
      );
    }

    // Convert MongoDB ObjectId and Date fields to strings
    const formattedProduct = {
      ...product,
      _id: product._id.toString(),
      createdAt: product.createdAt?.toISOString(),
      updatedAt: product.updatedAt?.toISOString(),
    };

    return NextResponse.json(
      { status: true, data: formattedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { status: false, error: error.message },
      { status: 500 }
    );
  }
}
