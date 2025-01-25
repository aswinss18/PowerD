import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link href="/admin/dashboard">Dashboard</Link>
      <Link href="/admin/products">Products</Link>
    </div>
  );
}
