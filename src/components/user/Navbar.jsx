"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import Logo from "../common/Logo";
import UserProfile from "./UserProfile";
import Link from "next/link";
import { createCustomer } from "../../lib/actions/customer.actions";
import LoginButton from "./LoginButton";

export default function Navbar() {
  const session = useSession();

  const handleSignIn = async () => {
    try {
      const response = await signIn("google", { redirect: false }); // `redirect: false` to avoid redirecting immediately
      if (response?.error) {
        console.error("Sign in failed:", response?.error);
        return;
      }

      // Ensure session is available after sign-in
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <div className="hidden md:flex fixed w-screen z-50 bg-gray-300 justify-around items-center py-4 px-8 shadow-md cursor-pointer">
      <Logo />
      {/* ////////////// developmenbt?????? */}
      {session.status === "authenticated" && (
        <ul className="flex gap-8 text-2xl font-semibold">
          <Link href="/">
            <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
              Home
            </li>
          </Link>
          <Link href="/cart">
            <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300 relative">
              Cart
              <span className="absolute bg-red-500 w-5 h-5 rounded-full text-[16px] top-0 right-[-12px] flex justify-center items-center text-white">
                1
              </span>
            </li>
          </Link>
          <Link href="/about">
            <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
              About Us
            </li>
          </Link>
          <Link href="/contact">
            <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
              Contact Us
            </li>
          </Link>
          <Link href="/blog">
            <li className="hover:border-b-black border-b-2 border-transparent px-2 transition-all ease-in-out duration-300">
              Blog
            </li>
          </Link>
        </ul>
      )}
      {session.status === "unauthenticated" ? (
        <LoginButton handleSignIn={handleSignIn} data={session?.data} />
      ) : (
        <UserProfile data={session?.data} />
      )}
    </div>
  );
}
