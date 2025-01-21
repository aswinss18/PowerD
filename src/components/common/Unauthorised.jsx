"use client";

import { signIn } from "next-auth/react";

import React from "react";

const Unauthorized = () => {
  const handleSignIn = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-600">
          Unauthorized Access
        </h1>
        <p className="mt-4 text-gray-700">
          You are not logged in. Please log in to access this page.
        </p>
        <button
          onClick={handleSignIn}
          className="px-6 py-2 mt-6 text-white bg-gray-600 rounded hover:bg-gray-500 focus:outline-none"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
