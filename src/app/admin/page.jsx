import Link from "next/link";
import React from "react";

export default function HomeAdmin() {
  return (
    <div className="bg-blue-500 w-screen h-screen flex flex-col gap-24 justify-center items-center">
      <h1 className="text-6xl font-bold text-white">Welcome to admin page </h1>
      <div className="flex gap-10">
        <Link
          href="/admin/dashboard"
          className="bg-white p-4 text-blue-700 font-semibold text-3xl rounded-xl hover:bg-gray-300 transition-all ease-in-out duration-300"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className="bg-white p-4 text-blue-700 font-semibold text-3xl rounded-xl hover:bg-gray-300 transition-all ease-in-out duration-300"
        >
          Products
        </Link>
      </div>
    </div>
  );
}
