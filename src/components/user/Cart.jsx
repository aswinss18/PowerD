"use client";
import { useEffect, useState } from "react";

import axios from "axios";
import { useSession } from "next-auth/react";
import CartItemWrapper from "./CartItemWrapper";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      fetchData();
    }
  }, [status]);

  const fetchData = async () => {
    try {
      // Debugging session data
      if (!session?.user?.email) return; // Avoid API call if session is missing

      const { data } = await axios.post("http://localhost:3000/api/user", {
        email: session.user.email,
      });

      setCart(data?.user?.cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // const getTotalPrice = () => {
  //   return cart.reduce((total, item) => total + item.price, 0);
  // };

  return (
    <div className="max-w-lg py-4 ">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => <CartItemWrapper key={item.productId} item={item} />)
      )}
      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Total: </h3>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
}
