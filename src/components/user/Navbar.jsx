import React from "react";
import Logo from "../common/Logo";
import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="hidden md:flex bg-gray-300 justify-around items-center py-4 px-8 shadow-md">
      <Logo />
      <ul className="flex gap-8 text-2xl font-semibold">
        <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
          Home
        </li>
        <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
          Shop
        </li>
        <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
          About Us
        </li>
        <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
          Contact Us
        </li>
        <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
          Blog
        </li>
      </ul>
      <UserProfile />
    </div>
  );
}
