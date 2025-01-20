import React from "react";
import Logo from "../common/Logo";
import UserProfile from "./UserProfile";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden md:flex fixed w-screen z-50 bg-gray-300 justify-around items-center py-4 px-8 shadow-md cursor-pointer">
      <Logo />
      <ul className="flex gap-8 text-2xl font-semibold">
        <Link href="/">
          {" "}
          <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
            Home
          </li>
        </Link>
        <Link href="/cart">
          {" "}
          <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
            Cart
          </li>
        </Link>{" "}
        <Link href="/">
          {" "}
          <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
            About Us
          </li>
        </Link>{" "}
        <Link href="/">
          {" "}
          <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
            Contact Us
          </li>
        </Link>{" "}
        <Link href="/">
          {" "}
          <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
            Blog
          </li>
        </Link>
      </ul>
      <UserProfile />
    </div>
  );
}
