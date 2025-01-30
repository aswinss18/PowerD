"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { getProducts } from "../../lib/actions/products.actions";

import { toast } from "react-toastify";

export default function FeaturedProductSection({ user }) {
  const [productsData, setProductsData] = useState([]);
  // const products = [
  //   {
  //     name: "Helmet Pro X",
  //     category: "Safety Gear",
  //     price: 49.99,
  //     rating: 4.7,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Car Seat Organizer",
  //     category: "Interior",
  //     price: 23.99,
  //     rating: 4.6,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "LED Wheel Lights",
  //     category: "Lighting",
  //     price: 15.99,
  //     rating: 4.4,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Dashboard Ornaments",
  //     category: "Decorative",
  //     price: 8.99,
  //     rating: 4.5,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Tank Pad Protector",
  //     category: "Accessories",
  //     price: 9.99,
  //     rating: 4.6,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Phone Mount",
  //     category: "Utility",
  //     price: 19.99,
  //     rating: 4.5,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Steering Wheel Cover",
  //     category: "Interior",
  //     price: 12.99,
  //     rating: 4.3,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Exhaust Wrap Kit",
  //     category: "Performance",
  //     price: 29.99,
  //     rating: 4.3,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Handlebar Grips",
  //     category: "Handlebars",
  //     price: 12.49,
  //     rating: 4.2,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Side Mirror Extenders",
  //     category: "Mirrors",
  //     price: 18.99,
  //     rating: 4.1,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Anti-Theft Lock",
  //     category: "Security",
  //     price: 22.99,
  //     rating: 4.8,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Rear Seat Cover",
  //     category: "Accessories",
  //     price: 25.49,
  //     rating: 4.0,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Air Freshener Charm",
  //     category: "Interior",
  //     price: 7.99,
  //     rating: 4.3,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Roof Rack",
  //     category: "Utility",
  //     price: 89.99,
  //     rating: 4.7,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Car Vacuum Cleaner",
  //     category: "Cleaning",
  //     price: 34.99,
  //     rating: 4.5,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Chain Lubricant",
  //     category: "Maintenance",
  //     price: 14.99,
  //     rating: 4.6,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Bike Cover",
  //     category: "Protection",
  //     price: 19.99,
  //     rating: 4.5,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Tire Inflator",
  //     category: "Utility",
  //     price: 49.99,
  //     rating: 4.4,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Bluetooth Helmet",
  //     category: "Safety Gear",
  //     price: 99.99,
  //     rating: 4.8,
  //     vehicleType: "Bike",
  //     image: "/hero1.jpeg",
  //   },
  //   {
  //     name: "Car Dash Camera",
  //     category: "Security",
  //     price: 59.99,
  //     rating: 4.7,
  //     vehicleType: "Car",
  //     image: "/hero1.jpeg",
  //   },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await getProducts();
    setProductsData(data);

    if (!data) return toast.error("Failed to load products.");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20  ">
      <div className="flex items-center justify-between md:w-3/4 w-[90%] cursor-pointer">
        <h3 className="text-xl md:text-4xl font-semibold ">
          What we <span className="text-gray-400">offer</span>
        </h3>
        <div className="flex gap-10">
          {" "}
          <div className="text-2xl lg:flex gap-6 hidden">
            <span className="border-b-2 hover:border-gray-400 border-b-transparent px-2 transition-all ease-in-out duration-300">
              New arrivals
            </span>
            <span className="border-b-2 hover:border-gray-400 border-b-transparent px-2 transition-all ease-in-out duration-300">
              Car accessories
            </span>
            <span className="border-b-2 hover:border-gray-400 border-b-transparent px-2 transition-all ease-in-out duration-300">
              Bike accessories
            </span>
          </div>{" "}
          <select className=" w-full border-2 hover:border-gray-400 border-gray-400 px-2 py-2 transition-all ease-in-out duration-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-600 lg:hidden">
            <option value="" disabled defaultValue={""}>
              Select a category
            </option>
            <option value="new-arrivals">New Arrivals</option>
            <option value="car-accessories">Car Accessories</option>z
            <option value="bike-accessories">Bike Accessories</option>
          </select>
          <div className="md:flex justify-center items-center gap-4 text-2xl hidden ">
            <MdOutlineKeyboardArrowLeft size={40} />
            <span>2</span>
            <MdOutlineKeyboardArrowRight size={40} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 ">
        {productsData.length > 0 ? (
          productsData.map((product, index) => (
            <ProductCard key={index} product={product} user={user} />
          ))
        ) : (
          <p className="text-3xl font-bold text-gray-600 border-2">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
