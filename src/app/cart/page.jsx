"use client";
import React, { useState } from "react";
import Cart from "../../components/user/Cart";
import OrderHistory from "../../components/user/OrderHistory";

export default function Page() {
  const [showCart, setShowCart] = useState(true); // State to toggle between Cart and OrderHistory

  const toggleView = () => {
    setShowCart((prevState) => !prevState); // Toggle between true (Cart) and false (OrderHistory)
  };

  return (
    <div className="max-w-2xl mx-auto px-6 pt-[10rem]">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={toggleView}
          className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
        >
          {showCart ? "View Order History" : "View Cart"}
        </button>
      </div>
      {showCart ? <Cart /> : <OrderHistory />}{" "}
      {/* Conditional rendering based on the state */}
    </div>
  );
}
