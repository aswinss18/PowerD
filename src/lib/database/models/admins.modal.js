import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },
    imgKey: {
      type: String,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Check if the model already exists to prevent overwriting during hot-reloading
const Admins =
  mongoose.models.Products || mongoose.model("admins", adminSchema);

export default Admins;
