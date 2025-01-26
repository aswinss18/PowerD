import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    // },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email is unique for each user
    },
    // password: {
    //   type: String,
    // },
    // phone: {
    //   type: String,
    // },
    // address: {
    //   type: String,
    // },
    // image: {
    //   type: String,
    // },
    // cart: [
    //   {
    //     productId: {
    //       type: mongoose.Schema.Types.ObjectId, // Reference to a product
    //       ref: "products", // Replace "products" with your product model name
    //     },
    //     quantity: {
    //       type: Number,

    //       default: 1,
    //     },
    //   },
    // ],
    // orders: [
    //   {
    //     orderId: {
    //       type: String,
    //     },
    //     products: [
    //       {
    //         productId: {
    //           type: mongoose.Schema.Types.ObjectId,
    //           ref: "products",
    //         },
    //         quantity: {
    //           type: Number,
    //         },
    //       },
    //     ],
    //     totalAmount: {
    //       type: Number,
    //     },
    //     status: {
    //       type: String,
    //       default: "Pending", // Other statuses: "Shipped", "Delivered", "Cancelled"
    //     },
    //     createdAt: {
    //       type: Date,
    //       default: Date.now,
    //     },
    //   },
    // ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Check if the model already exists to prevent overwriting during hot-reloading
const Customers =
  mongoose.models.customers || mongoose.model("customers", customerSchema);

export default Customers;
