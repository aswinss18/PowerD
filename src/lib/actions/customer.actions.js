"use server";
import Customers from "../database/models/customer.modal";
import { connectToDatabase } from "../database/mongoDB/mongoose";

export const createCustomer = async (user) => {
  console.log("Function triggered with user:", user); // Add this
  try {
    await connectToDatabase();
    const userExists = await Customers.findOne({ email: user?.email });
    console.log("User exists check:", userExists); // Add this

    if (userExists) {
      console.log("User already exists");
      return { status: true, message: "User already exists." };
    }

    const newUser = await Customers.create({ email: user?.email });
    console.log("User created:", newUser); // Add this

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

export const testCreateCustomer = async () => {
  const result = await createCustomer({ email: "xxxdfhdskuh@gmail.com" });
  console.log(result);
};
