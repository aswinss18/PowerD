"use client";
import { toast } from "react-toastify";
import { addProduct } from "../../lib/actions/products.actions";
import React, { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import Image from "next/image";

export default function AddProduct() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    vehicleType: "Bike", // Default to "Bike"
    image: "",
  });
  const [image, setImage] = useState("/hero1.jpeg");

  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.rating ||
      !newProduct.vehicleType ||
      !newProduct.image
    ) {
      return toast.error("Please enter all details");
    }

    const newProductData = {
      id: products.length + 1,
      ...newProduct,
    };

    setProducts([...products, newProductData]);
    try {
      const response = addProduct(newProductData);

      toast.success("Product added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Product adding failed.");
    }

    setNewProduct({
      name: "",
      category: "",
      price: "",
      rating: "",
      vehicleType: "Bike", // Reset to "Bike"
      image: "",
    });
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex justify-center items-center gap-12">
        <div className="rounded-md   w-[10rem] flex flex-col justify-center items-center">
          <Image src={image} alt="Product Image" width={100} height={100} />
          <UploadButton
            className=" text-white px-4 py-2 rounded-md w-[10rem]"
            endpoint="imageUploader"
            placeholder="Upload Image"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);

              const { key, name, url } = res[0];
              setImage(url);
              console.log(key, name, url);
              toast.success("Upload Completed");
            }}
            onUploadError={(error) => {
              // Do something with the error.
              toast.error(`ERROR! ${error.message}`);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="border p-2 mr-2 w-1/3"
          />
          <select
            value={newProduct.category} // Bind value
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
            className="border p-2 mr-2 w-1/3"
          >
            <option value="">Select Category</option>
            <option value="Safety Gear">Safety Gear</option>
            <option value="Interior">Interior</option>
            <option value="Lighting">Lighting</option>
            <option value="Decorative">Decorative</option>
            <option value="Accessories">Accessories</option>
            <option value="Utility">Utility</option>
            <option value="Performance">Performance</option>
            <option value="Handlebars">Handlebars</option>
            <option value="Mirrors">Mirrors</option>
            <option value="Security">Security</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Protection">Protection</option>
          </select>
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="border p-2 mr-2 w-1/3"
          />
          <input
            type="number"
            placeholder="Rating"
            value={newProduct.rating}
            onChange={(e) =>
              setNewProduct({ ...newProduct, rating: e.target.value })
            }
            className="border p-2 mr-2 w-1/3"
          />
          <select
            value={newProduct.vehicleType} // Bind value
            onChange={(e) =>
              setNewProduct({ ...newProduct, vehicleType: e.target.value })
            }
            className="border p-2 mr-2 w-1/3"
          >
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
          </select>
          <input
            type="text"
            placeholder="Image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="border p-2 mr-2 w-1/3"
          />{" "}
          <button
            onClick={handleAddProduct}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Add Product
          </button>
        </div>
      </div>
    </section>
  );
}
