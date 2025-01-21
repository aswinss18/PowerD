// pages/admin/dashboard.js
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  //   const router = useRouter();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  //   useEffect(() => {
  //     if (status === "loading") return; // Wait for session to load

  //     if (!session || session.user.role !== "admin") {
  //       router.push("/unauthorized"); // Redirect non-admin users to unauthorized page
  //     }
  //   }, [session, status, router]);

  //   useEffect(() => {
  //     // Fetch existing products (mock API call)
  //     setProducts([
  //       { id: 1, name: "Product A", price: 100, stock: 50 },
  //       { id: 2, name: "Product B", price: 200, stock: 30 },
  //     ]);
  //   }, []);

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

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state while session is being validated
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
      </header>
      <main className="p-6">
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
              placeholder="Stock"
              value={newProduct.stock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
              className="border p-2 mr-2 w-1/3"
            />
            <button
              onClick={handleAddProduct}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Add Product
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Product List</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Stock</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="odd:bg-gray-50">
                    <td className="px-4 py-2">{product.id}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">${product.price}</td>
                    <td className="px-4 py-2">{product.stock}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
