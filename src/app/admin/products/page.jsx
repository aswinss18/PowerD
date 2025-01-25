// pages/admin/dashboard.js
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Product from "../../../components/admin/Product";
import AddProduct from "../../../components/admin/AddProduct";
import { getProducts } from "../../../lib/actions/products.actions";

import { toast } from "react-toastify";

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getProducts();
      console.log(response);
      setProducts(response.data);
      toast.success("Products are loaded successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Products are failed to load.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        <AddProduct />

        <section>
          <h2 className="text-xl font-semibold mb-4">Product List</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">vehicleType</th>
                  <th className="px-4 py-2">image</th>{" "}
                  <th className="px-4 py-2">actions</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, i) => (
                  <Product product={product} key={i} id={i + 1} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
