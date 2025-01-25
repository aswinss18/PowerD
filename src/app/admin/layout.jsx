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
      }
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <div className="bg-blue-500 w-screen h-screen flex flex-col gap-24 justify-center items-center">
      <h1 className="text-6xl font-bold text-white">Welcome to admin page </h1>
      <div className="flex gap-10">
        {loggedIn ? (
          { children }
        ) : (
          <div className="flex flex-col gap-14 items-center">
            <p className="text-3xl font-semibold text-white">
              Unauthorised : )
            </p>
            <button
              className="text-xl text-blue-700 font-semibold bg-white px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
              onClick={handleSignIn}
            >
              Sign In as Admin
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
