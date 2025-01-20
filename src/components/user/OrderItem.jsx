import React from "react";

export default function OrderItem({ order }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h4 className="text-lg font-semibold text-blue-600">Order #{order.id}</h4>
      <p className="text-sm text-gray-500">
        Date: {new Date(order.date).toLocaleDateString()}
      </p>
      <ul className="mt-2 space-y-2">
        {order.items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>
              {item.quantity} x ${item.price}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xl font-bold">Total: ${order.total}</p>
    </div>
  );
}
