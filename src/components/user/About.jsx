import React from "react";
import Logo from "../common/Logo";

export default function About() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Welcome to Power-D Automotives, your go-to destination for premium
              automobile accessories! Whether you’re a motorcycle enthusiast or
              a car owner, we offer high-quality products to enhance the look,
              feel, and performance of your vehicle. Our collection includes
              everything from stylish exterior mods to functional interior
              accessories, designed to meet the needs of every driver and rider.
            </p>
            <p className="text-lg text-gray-700">
              At [Your Brand Name], we focus on providing top-notch products
              with a seamless shopping experience. We are a dropshipping-based
              eCommerce store, so you can count on fast shipping and reliable
              customer service. We carefully select each product to ensure that
              it meets our high standards, so you can feel confident in every
              purchase.
            </p>
            <p className="text-lg text-gray-700">
              Our goal is to make it easier for you to accessorize and customize
              your vehicle with premium, affordable products. No matter your
              budget or vehicle type, we are dedicated to helping you find
              exactly what you need to give your bike or car that perfect touch!
            </p>
          </div>

          <div>
            <Logo />
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-blue-600">
            Why Choose Us?
          </h3>
          <p className="text-lg text-gray-700 mt-4">We offer:</p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Top-quality products sourced from trusted suppliers.</li>
            <li>Fast and reliable shipping for your convenience.</li>
            <li>Competitive prices to fit all budgets.</li>
            <li>Customer-first approach with dedicated support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
