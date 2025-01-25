import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex  gap-6 items-center">
      <Link
        href="/admin/dashboard"
        className="text-xl text-blue-700 font-semibold bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Dashboard
      </Link>
      <Link
        href="/admin/products"
        className="text-xl text-blue-700 font-semibold bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Products
      </Link>
    </div>
  );
}
