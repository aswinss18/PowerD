import Image from "next/image";
import React, { Suspense } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product }) {
  // Function to generate stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars

    return (
      <div className="flex items-center space-x-1">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {/* Half Star */}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-gray-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="border-2 border-gray-400 h-[500px] w-[320px] p-4 rounded-md flex flex-col justify-around items-center">
      <div className="relative w-[300px] h-[300px] object-cover shadow-xl">
        <Suspense fallback={<div>Loading...</div>}>
          <Image fill src={product.image} alt={product.name} />
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
        <FaCartPlus size={28} color="#8a8a8a" />
      </div>
    </div>
  );
}
