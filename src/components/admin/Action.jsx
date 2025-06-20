"use client";

import { UploadButton } from "@uploadthing/react";
import {
  updateProduct,
  deleteProduct,
} from "../../lib/actions/products.actions";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Action({ product }) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleEdit = async () => {
    setEditing(true);
    try {
      const response = await updateProduct(product._id, updatedProduct);
      toast.success("Product edited successfully.");
      setEditing(false);
    } catch (error) {
      toast.error("Product editing failed.");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteProduct(product._id, product.imgKey);
      toast.success("Product deleted successfully.");
      setDeleting(false);
    } catch (error) {
      toast.error("Product deletion failed.");
    }
  };

  return (
    <>
      {!editing && !deleting ? (
        <td className="px-4 py-2 space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-md "
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            onClick={() => setDeleting(true)}
            className="bg-red-500 text-white px-4 py-1 rounded-md"
          >
            Delete
          </button>
        </td>
      ) : deleting ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            {/* Modal Header */}
            <h2 className="text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mt-2">
              Are you sure you want to delete this item? This action cannot be
              undone.
            </p>

            {/* Modal Actions */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setDeleting(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <section className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-70 flex justify-center items-center">
          <div className="bg-white h-[20rem] shadow-md relative rounded-lg p-4 mb-6 flex justify-center items-center gap-12">
            <span
              className="font-bold absolute top-4 right-4 cursor-pointer bg-gray-200 p-2 rounded-full"
              onClick={() => setEditing(false)}
            >
              X
            </span>
            <div className="  w-[12rem] flex flex-col justify-center items-center">
              <p className="font-medium mb-2 w-full text-center text-gray-700">
                Upload Product Image
              </p>
              <Image
                className="rounded-md"
                src={updatedProduct.image}
                alt="Product Image"
                width={100}
                height={100}
              />
              <UploadButton
                className=" text-white px-4 py-2 rounded-md w-[10rem]"
                endpoint="imageUploader"
                placeholder="Upload Image"
                onClientUploadComplete={(res) => {
                  const { key, name, url } = res[0];
                  setUpdatedProduct({ ...updatedProduct, image: url });
                  toast.success("Upload Completed");
                }}
                onUploadError={(error) => {
                  // Do something with the error.
                  toast.error(`ERROR! ${error.message}`);
                }}
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
                className="border p-2 mr-2 "
              />
              <select
                value={updatedProduct.category} // Bind value
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    category: e.target.value,
                  })
                }
                className="border p-2 mr-2 "
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
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
                className="border p-2 mr-2 "
              />
              <input
                type="number"
                placeholder="Rating"
                value={updatedProduct.rating}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    rating: e.target.value,
                  })
                }
                className="border p-2 mr-2"
              />
              <select
                value={updatedProduct.vehicleType} // Bind value
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    vehicleType: e.target.value,
                  })
                }
                className="border p-2 mr-2 "
              >
                <option value="Bike">Bike</option>
                <option value="Car">Car</option>
              </select>
              <button
                onClick={handleEdit}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Edit Product
              </button>
            </div>{" "}
          </div>
        </section>
      )}
    </>
  );
}
