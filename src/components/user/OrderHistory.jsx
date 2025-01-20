"use client";

import React, { useState } from "react";
import OrderItem from "./OrderItem";

export default function OrderHistory() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "2024-12-01T12:00:00Z",
      items: [
        { id: 1, name: "Item 1", price: 10, quantity: 2 },
        { id: 2, name: "Item 2", price: 20, quantity: 1 },
      ],
      total: 40,
    },
    {
      id: 2,
      date: "2024-12-15T15:30:00Z",
      items: [
        { id: 3, name: "Item 3", price: 15, quantity: 3 },
        { id: 4, name: "Item 4", price: 25, quantity: 2 },
      ],
      total: 95,
    },
  ]);

  return (
    <div className="max-w-2xl  py-6">
      <h2 className="text-3xl font-bold mb-6">Order History</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">You have no order history.</p>
      ) : (
        orders.map((order) => <OrderItem key={order.id} order={order} />)
      )}
    </div>
  );
}
