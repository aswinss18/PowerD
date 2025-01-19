"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const images = [
    "/hero1.jpeg",
    "/hero2.jpeg",
    "/hero3.jpeg",
    "/hero4.jpeg",
    "/hero5.jpeg",
  ];

  return (
    <div className="relative overflow-hidden  h-[500px] md:h-[600px]">
      {/* Scrolling container */}
      <div className="flex animate-scroll space-x-4">
        {/* Original images */}
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[350px] h-[300px] md:w-[500px] md:h-[400px] flex-shrink-0 p-4 mt-28 shadow-xl rounded-3xl border-2 border-gray-600"
          >
            <Image
              fill
              src={src}
              alt={`Slide ${index + 1}`}
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        ))}
        {/* Duplicate images for seamless scrolling */}
        {images.map((src, index) => (
          <div
            key={`duplicate-${index}`}
            className="relative w-[350px] h-[300px] md:w-[500px] md:h-[400px] flex-shrink-0 p-4 mt-28 shadow-xl rounded-3xl border-2 border-gray-600"
          >
            <Image
              fill
              src={src}
              alt={`Duplicate Slide ${index + 1}`}
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
