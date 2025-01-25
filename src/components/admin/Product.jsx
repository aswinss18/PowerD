import Image from "next/image";
import React from "react";
import Action from "./Action";

export default function Product({ product, id }) {
  return (
    <tr
      key={product._id}
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
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </td>
      <Action product={product} />
    </tr>
  );
}
