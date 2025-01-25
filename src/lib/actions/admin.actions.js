"use server";

import Admins from "../database/models/admins.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const loginAdmin = async (email) => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Find the admin document
    const admin = await Admins.findOne({ email });

    if (!admin) {
      return { error: "Admin not found", adminExist: false };
    }

    // Convert the Mongoose document to a plain object
    const adminData = admin.toObject();

    // Convert the `_id` field to a string
    return {
      adminExist: true,
      data: {
        ...adminData,
        _id: adminData._id.toString(),
      },
    };
  } catch (error) {
    console.error("Error during admin login:", error.message);
    return { error: error.message };
  }
};
