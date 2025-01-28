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

export const addToCart = async (newCartItems, userId) => {
  try {
    await connectToDatabase();

    const customer = await Customers.findById(userId);

    if (!customer) {
      return { status: false, error: "Customer not found" };
    }

    if (!customer.cart) {
      customer.cart = [];
    }

    newCartItems.forEach((newItem) => {
      const existingItem = customer.cart.find(
        (item) => item.productId.toString() === newItem.productId
      );

      if (existingItem) {
        existingItem.quantity += parseInt(newItem.quantity);
      } else {
        customer.cart.push({
          productId: newItem.productId,
          quantity: parseInt(newItem.quantity),
        });
      }
    });

    // ✅ Use findByIdAndUpdate with $set to ensure changes persist
    await Customers.findByIdAndUpdate(
      userId,
      { $set: { cart: customer.cart } },
      { new: true }
    );

    return { status: true, data: customer.cart };
  } catch (error) {
    console.error("Error in addToCart:", error);
    return { status: false, error };
  }
};

export const testCreateCustomer = async () => {
  const result = await createCustomer({ email: "xxxdfhdskuh@gmail.com" });
  console.log(result);
};
