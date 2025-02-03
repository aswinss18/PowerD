"use client";

import { useEffect, useState } from "react";

import CartItem from "./CartItem";
import axios from "axios";

export default function CartItemWrapper({ item }) {
  const [productdetail, setProductDetail] = useState(null);

  useEffect(() => {
    const fetchProductDetailById = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/product", {
          productId: item.productId,
        });

        setProductDetail(response?.data?.data || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetailById();
  }, [item.productId]); // ✅ Ensures API call happens only once per productId change

  if (!productdetail) {
    return <p>Loading...</p>; // ✅ Prevents rendering issues while data loads
  }

  return <CartItem product={productdetail} item={item} />;
}
