"use server";

import { NextResponse } from "next/server";
import Products from "../database/models/product.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const addProduct = async (product) => {
  try {
    await connectToDatabase();
    const newProduct = await Products.create(product);
    // Convert the Mongoose document to a plain object
    const plainProduct = newProduct.toObject();
    return NextResponse.json(plainProduct, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
