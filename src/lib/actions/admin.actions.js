"use server";

import Admins from "../database/models/admins.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const loginAdmin = async (admin) => {
  try {
    await connectToDatabase();
    const adminExist = await Admins.findOne({ email: admin.email });
    // Convert the Mongoose document to a plain object
    if (!adminExist) return { error: "Admin not found" };
    return plainProduct;
  } catch (error) {
    console.error(error);
    return { error };
  }
};
