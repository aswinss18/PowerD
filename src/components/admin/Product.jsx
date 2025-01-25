import Image from "next/image";
import React from "react";

export default function Product({ product, id }) {
  return (
    <tr
      key={product.id}
      className="odd:bg-gray-50 hover:bg-gray-200   transition-all ease-in-out duration-100 "
    >
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{product.name}</td>
      <td className="px-4 py-2">{product.category}</td>
      <td className="px-4 py-2">{product.price} Rs</td>
      <td className="px-4 py-2">{product.rating}</td>
      <td className="px-4 py-2">{product.vehicleType}</td>
      <td>
        <Image
          src={product.image}
          alt={product.name}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </td>

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
