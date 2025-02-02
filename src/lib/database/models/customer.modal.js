import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cart: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists to prevent overwriting during hot-reloading
const Customers =
  mongoose.models.customers || mongoose.model("customers", customerSchema);

export default Customers;
