"use server";

import Products from "../database/models/product.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const addProduct = async (product) => {
  try {
    await connectToDatabase();
    const newProduct = await Products.create(product);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};
