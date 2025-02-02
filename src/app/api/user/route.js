import { connectToDatabase } from "../../../lib/database/mongoDB/mongoose";
import Customers from "../../../lib/database/models/customer.modal";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  await connectToDatabase();
  const { email } = await req.json(); // Parse the request body to get email
  try {
    const user = await Customers.findOne({ email });

    if (user) {
      return NextResponse.json({ user }, { status: 200 }); // Return the response correctly
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
