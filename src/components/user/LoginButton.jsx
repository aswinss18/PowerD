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
    const result = await createCustomer({ email: data?.user?.email });

    // Check the result
  };
  createCustomer({ email: data?.user?.email });
  return (
    <button
      onClick={customerLogin}
      className="text-white font-semibold bg-gray-600 px-6 py-2 rounded-lg text-xl hover:bg-gray-700 transition-all ease-in-out duration-300"
    >
      Login
    </button>
  );
}
