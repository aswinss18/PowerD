"use client";
import { useState } from "react";
import Logo from "../common/Logo";
import { IoMdCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import UserProfile from "./UserProfile";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="md:hidden bg-gray-300 w-3/4 fixed right-0 z-50 h-full py-6 px-8 flex flex-col  justify-between cursor-pointer shadow-xl">
      <div>
        <div className="flex items-center justify-between">
          <UserProfile />
          <IoMdCloseCircle size={35} onClick={() => setIsOpen(false)} />
        </div>
        <ul className="text-3xl px-2  flex flex-col gap-5 mt-12  ">
          <li className="hover:underline transition-all ease-in-out duration-300">
            Home
          </li>
          <li className="hover:underline transition-all ease-in-out duration-300">
            Shop
          </li>
          <li className="hover:underline transition-all ease-in-out duration-300">
            About Us
          </li>
          <li className="hover:underline transition-all ease-in-out duration-300">
            Contact Us
          </li>
          <li className="hover:underline transition-all ease-in-out duration-300">
            Blog
          </li>
        </ul>
      </div>

      <p>© 2025 PowerD automotives. All Rights Reserved.</p>
    </div>
  ) : (
    <div className="md:hidden  fixed w-screen h-[70px] flex items-center justify-between px-5 z-50 bg-gray-300 shadow-md">
      <Logo />
      <TiThMenu size={45} onClick={() => setIsOpen(true)} />
    </div>
  );
}
