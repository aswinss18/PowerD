"use client"; // ✅ This is a client component

import axios from "axios";
import Image from "next/image";
import React, { Suspense, useTransition } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
// ✅ Import from server actions

export default function ProductCard({ product, user }) {
  // Debugging log

  const [isPending, startTransition] = useTransition(); // ✅ To avoid blocking UI

  const handleClick = () => {
    startTransition(async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/addToCart",
          {
            email: user.email,
            productId: product._id,
          }
        );

        response?.data?.status === true
          ? toast.success("1 Item added to cart.")
          : toast.error("Failed to add to cart.");
      } catch (error) {
        console.error("Failed to add to cart:", error);
      }
    });
  };

  // Function to generate stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-gray-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="border-2 border-gray-400 md:h-[500px] md:w-[320px] p-4 rounded-md flex flex-col justify-around items-center">
      <div className="relative md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] w-[300px] h-[300px] object-cover shadow-xl rounded-md overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            fill
            src={product.image}
            alt={product.name}
            objectFit="cover"
          />
        </Suspense>
      </div>
      <div className="w-full">
        <p>{product.category}</p>
        <p>{product.name}</p>
        {renderStars(product.rating)}
      </div>
      <div className="w-full flex justify-between pr-8 text-xl cursor-pointer">
        <span>
          {product.price} Rs
          <span className="line-through text-[#8a8a8a] px-4">
            {Math.floor(product.price * 1.2)} Rs
          </span>
        </span>

        <FaCartPlus
          size={34}
          onClick={() => handleClick(product._id)} // ✅ Calls the server action correctly
          color={isPending ? "gray" : "#8a8a8a"} // 🔄 Indicates loading state
          className="mb-6"
        />
      </div>
    </div>
  );
}
