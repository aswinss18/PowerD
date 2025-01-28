import {
  createCustomer,
  testCreateCustomer,
} from "../../lib/actions/customer.actions";
import React from "react";

export default function LoginButton({ handleSignIn, data }) {
  console.log("data", data);
  const customerLogin = async () => {
    await handleSignIn();
    // Now call createCustomer
    const result = await testCreateCustomer();

    // Check the result
  };

  return (
    <button
      onClick={customerLogin}
      className="text-white font-semibold bg-gray-600 px-6 py-2 rounded-lg text-xl hover:bg-gray-700 transition-all ease-in-out duration-300"
    >
      {data?.user?.name || "Unknown"}
      Login
    </button>
  );
}
