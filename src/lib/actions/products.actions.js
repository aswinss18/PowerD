"use server";

import Products from "../database/models/product.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const addProduct = async (product) => {
  try {
    await connectToDatabase();
    const newProduct = await Products.create(product);
    // Convert the Mongoose document to a plain object
    const plainProduct = newProduct.toObject();
    return plainProduct;
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const getProducts = async () => {
  try {
    await connectToDatabase();
    const allProducts = await Products.find({});

    return { status: true, data: allProducts };
  } catch (error) {
    console.error(error);
    return { status: false, error };
  }
};
export const updateProduct = async (id, data) => {
  try {
    await connectToDatabase();
    const updatedProducts = await Products.findByIdAndUpdate(id, data);

    return { status: true, data: updatedProducts };
  } catch (error) {
    console.error(error);
    return { status: false, error };
  }
};
