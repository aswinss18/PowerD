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
      return {
        status: true,
        message: "User already exists.",
        data: userExists,
      };
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

export async function addToCart(items, userId) {
  try {
    console.log("Processing addToCart for user:", userId, "with items:", items);

    // Validate input
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("Cart items must be an array with at least one item.");
    }

    for (const item of items) {
      if (!item.productId || typeof item.productId !== "string") {
        throw new Error(`Invalid productId: ${item.productId}`);
      }
      if (!item.quantity || isNaN(item.quantity) || item.quantity <= 0) {
        throw new Error(`Invalid quantity: ${item.quantity}`);
      }
    }

    // Fetch user from database
    const user = await Customers.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Update cart
    user.cart = items;
    await user.save();

    return { status: true, message: "Cart updated successfully" };
  } catch (error) {
    console.error("Error in addToCart:", error);
    return { status: false, error: error.message };
  }
}

export const testCreateCustomer = async () => {
  const result = await createCustomer({ email: "xxxdfhdskuh@gmail.com" });
  console.log(result);
};
