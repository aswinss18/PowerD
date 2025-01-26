"use client";

import { createCustomer } from "../../lib/actions/customer.actions";
import { signIn, useSession } from "next-auth/react";

import React from "react";

const Unauthorized = () => {
  const session = useSession();

  const handleSignIn = async () => {
    try {
      // Trigger sign-in
      await signIn("google", { callbackUrl: "/" });

      // Wait for the session to update after sign-in
      const interval = setInterval(async () => {
        const updatedSession = await fetch("/api/auth/session").then((res) =>
          res.json()
        );
        if (updatedSession && updatedSession.user) {
          clearInterval(interval); // Stop the interval once the session is updated
          await createCustomer(updatedSession.user); // Call createCustomer with updated user
        }
      }, 500); // Check every 500ms
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
