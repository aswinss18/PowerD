import React from "react";

export default function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-500">Price: ${item.price}</p>
      </div>
      <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600">
        Remove
      </button>
    </div>
  );
}
