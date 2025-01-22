// pages/admin/dashboard.js
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Product from "../../../components/admin/Product";
import AddProduct from "../../../components/admin/AddProduct";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  //   const router = useRouter();
  const [products, setProducts] = useState([]);
  const productsData = [
    {
      name: "Helmet Pro X",
      category: "Safety Gear",
      price: 49.99,
      rating: 4.7,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Car Seat Organizer",
      category: "Interior",
      price: 23.99,
      rating: 4.6,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
    {
      name: "LED Wheel Lights",
      category: "Lighting",
      price: 15.99,
      rating: 4.4,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Dashboard Ornaments",
      category: "Decorative",
      price: 8.99,
      rating: 4.5,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
    {
      name: "Tank Pad Protector",
      category: "Accessories",
      price: 9.99,
      rating: 4.6,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Phone Mount",
      category: "Utility",
      price: 19.99,
      rating: 4.5,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Steering Wheel Cover",
      category: "Interior",
      price: 12.99,
      rating: 4.3,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
    {
      name: "Exhaust Wrap Kit",
      category: "Performance",
      price: 29.99,
      rating: 4.3,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Handlebar Grips",
      category: "Handlebars",
      price: 12.49,
      rating: 4.2,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Side Mirror Extenders",
      category: "Mirrors",
      price: 18.99,
      rating: 4.1,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Anti-Theft Lock",
      category: "Security",
      price: 22.99,
      rating: 4.8,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Rear Seat Cover",
      category: "Accessories",
      price: 25.49,
      rating: 4.0,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Air Freshener Charm",
      category: "Interior",
      price: 7.99,
      rating: 4.3,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
    {
      name: "Roof Rack",
      category: "Utility",
      price: 89.99,
      rating: 4.7,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
    {
      name: "Car Vacuum Cleaner",
      category: "Cleaning",
      price: 34.99,
      rating: 4.5,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
    {
      name: "Chain Lubricant",
      category: "Maintenance",
      price: 14.99,
      rating: 4.6,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Bike Cover",
      category: "Protection",
      price: 19.99,
      rating: 4.5,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Tire Inflator",
      category: "Utility",
      price: 49.99,
      rating: 4.4,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
    {
      name: "Bluetooth Helmet",
      category: "Safety Gear",
      price: 99.99,
      rating: 4.8,
      vehicleType: "Bike",
      image: "/hero1.jpeg",
    },
    {
      name: "Car Dash Camera",
      category: "Security",
      price: 59.99,
      rating: 4.7,
      vehicleType: "Car",
      image: "/hero1.jpeg",
    },
  ];
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

                {/* name: "Bike Cover",
      category: "Protection",
      price: 19.99,
      rating: 4.5,
      vehicleType: "Bike",
      image: "/hero1.jpeg", */}
              </thead>
              <tbody>
                {productsData.map((product, i) => (
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
