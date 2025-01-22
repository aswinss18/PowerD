"use client";
import React, { useState } from "react";

export default function AddProduct() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      alert("Please fill in all fields.");
      return;
    }

    const newProductData = {
      id: products.length + 1,
      ...newProduct,
    };

    setProducts([...products, newProductData]);
    setNewProduct({ name: "", price: "", stock: "" });
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
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2 mr-2 w-1/3"
        />{" "}
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
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2 mr-2 w-1/3"
        />{" "}
        <select
          type="number"
          onChange={(e) =>
            setNewProduct({ ...newProduct, vehicleType: e.target.value })
          }
          className="border p-2 mr-2 w-1/3"
        >
          <option value="Bike">Bike</option>
          <option value="Car">Car</option>
        </select>{" "}
        <input
          type="file"
          placeholder="Image"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
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
    </section>
  );
}
