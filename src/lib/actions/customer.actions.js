"use server";
import Customers from "../database/models/customer.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const createCustomer = async (user) => {
  // Add this
  try {
    await connectToDatabase();
    const userExists = await Customers.findOne({ email: user?.email });
    // Add this

    if (userExists) {
      console.log("User already exists");
      return {
        status: true,
        message: "User already exists.",
        data: userExists,
      };
    }

    const newUser = await Customers.create({ email: user?.email });

    if (newUser) {
      console.log("New user created:", newUser); // Add this
      return {
        status: true,
        message: "User created.",
        data: newUser,
      };
    }

    // Add this

    return { status: true, message: "User created." };
  } catch (error) {
    console.error("Error in createCustomer:", error);
    return {
      status: false,
      message: "An error occurred while creating the customer.",
      error: error.message,
    };
  }
};
