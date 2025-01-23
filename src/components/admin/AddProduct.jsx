"use client";
import { addProduct } from "../../lib/actions/products.actions";
import React, { useState } from "react";

export default function AddProduct() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({});
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Please fill in all fields.");
      return;
    }

    const newProductData = {
      id: products.length + 1,
      ...newProduct,
    };

    setProducts([...products, newProductData]);

    addProduct(newProductData);
    setNewProduct({});
  };
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
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
        />{" "}
        <input
          type="number"
          placeholder="Rating"
          value={newProduct.rating}
          onChange={(e) =>
            setNewProduct({ ...newProduct, rating: e.target.value })
          }
          className="border p-2 mr-2 w-1/3"
        />{" "}
        <select
          onChange={(e) =>
            setNewProduct({ ...newProduct, vehicleType: e.target.value })
          }
          className="border p-2 mr-2 w-1/3"
        >
          <option value="Bike">Bike</option>
          <option value="Car">Car</option>
        </select>{" "}
        {/* <input
          type="file"
          placeholder="Image"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2 mr-2 w-1/3"
        />{" "} */}
        <input
          type="text"
          placeholder="Image"
          className="border p-2 mr-2 w-1/3"
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Product
        </button>
      </div>
    </section>
  );
}
