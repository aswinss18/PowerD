import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/database/mongoDB/mongoose";
import Customers from "../../../lib/database/models/customer.modal";
import Products from "../../../lib/database/models/product.modal";

export async function POST(req) {
  try {
    const { email, productId } = await req.json();

    if (!email || !productId) {
      return NextResponse.json(
        { status: false, error: "Email and Product ID are required" },
        { status: 400 }
      );
    }
    ///test///

    await connectToDatabase();

    // Check if the product exists
    const product = await Products.findById(productId);
    if (!product) {
      return NextResponse.json(
        { status: false, error: "Product not found" },
        { status: 404 }
      );
    }

    // Find the customer by email
    let customer = await Customers.findOne({ email });
    if (!customer) {
      return NextResponse.json(
        { status: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Check if the product is already in the cart
    const cartItem = customer.cart.find((item) =>
      item.productId.equals(productId)
    );

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      customer.cart.push({
        productId,
        quantity: 1,
        price: product.price,
      });
    }

    await customer.save();

    return NextResponse.json(
      {
        status: true,
        message: "Product added to cart successfully",
        cart: customer.cart,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return NextResponse.json(
      { status: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { email, productId } = await req.json();

    if (!email || !productId) {
      return NextResponse.json(
        { status: false, error: "Email and Product ID are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Find the customer by email
    let customer = await Customers.findOne({ email });
    if (!customer) {
      return NextResponse.json(
        { status: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Check if the product exists in the cart
    const cartItemIndex = customer.cart.findIndex((item) =>
      item.productId.equals(productId)
    );

    if (cartItemIndex === -1) {
      return NextResponse.json(
        { status: false, error: "Product not found in cart" },
        { status: 404 }
      );
    }

    // Remove the product from the cart
    customer.cart.splice(cartItemIndex, 1);

    await customer.save();

    return NextResponse.json(
      {
        status: true,
        message: "Product removed from cart successfully",
        cart: customer.cart,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return NextResponse.json(
      { status: false, error: error.message },
      { status: 500 }
    );
  }
}
