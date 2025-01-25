"use server";

import Admins from "../database/models/admins.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const loginAdmin = async (email) => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Check if the admin exists in the database
    const adminExist = await Admins.findOne({ email }); // Convert to a plain object
    if (!adminExist) {
      return { error: "Admin not found", adminExist: false };
    }

    return { adminExist: true, data: adminExist };
  } catch (error) {
    console.error("Error during admin login:", error.message);
    return { error: error.message };
  }
};
