import React from "react";

export default function Product({ product, id }) {
  return (
    <tr key={product.id} className="odd:bg-gray-50">
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{product.name}</td>
      <td className="px-4 py-2">${product.category}</td>
      <td className="px-4 py-2">{product.price}</td>
      <td className="px-4 py-2">{product.rating}</td>
      <td className="px-4 py-2">{product.vehicleType}</td>
      <td className="px-4 py-2">{product.image}</td>
      <td className="px-4 py-2 space-x-4">
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-1 rounded-md">
          Delete
        </button>
      </td>
    </tr>
  );
}
