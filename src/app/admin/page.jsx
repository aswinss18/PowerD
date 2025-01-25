"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { loginAdmin } from "../../lib/actions/admin.actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function HomeAdmin() {
  const session = useSession();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = async () => {
    try {
      if (session.status === "authenticated") {
        const response = await loginAdmin(session?.data?.user?.email);
        setLoggedIn(response.adminExist);
        if (!response.adminExist) {
          router.push("/unauthorised");
          toast.error("You are not an admin to access this page");
        }
        console.log("Resopnse", response);
      }
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };
  console.log(session?.data?.user?.email);
  console.log(loggedIn);
  return (
    <div className="bg-blue-500 w-screen h-screen flex flex-col gap-24 justify-center items-center">
      <h1 className="text-6xl font-bold text-white">Welcome to admin page </h1>
      <div className="flex gap-10">
        {loggedIn ? (
          <>
            {" "}
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
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-white p-4 text-blue-700 font-semibold text-3xl rounded-xl hover:bg-gray-300 transition-all ease-in-out duration-300"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
