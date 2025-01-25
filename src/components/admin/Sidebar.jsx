"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="fixed  h-screen ">
      {sidebar ? (
        <aside className="w-64 bg-blue-600 text-white flex flex-col fixed h-screen pt-10">
          <header className="py-4 px-6 text-2xl font-bold flex justify-between">
            Admin Panel{" "}
            <span>
              <IoMdCloseCircle
                size={35}
                onClick={() => setSidebar(false)}
                className="cursor-pointer  "
              />
            </span>
          </header>
          <nav className="flex-1">
            <ul className="space-y-2 px-4 " onClick={() => setSidebar(false)}>
              <li>
                <Link
                  href="/admin/dashboard"
                  className="block px-4 py-2 rounded-md hover:bg-blue-500 text-xl font-semibold"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/products"
                  className="block px-4 py-2 rounded-md hover:bg-blue-500 text-xl font-semibold"
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      ) : (
        <TiThMenu
          size={40}
          onClick={() => setSidebar(true)}
          color="white"
          className="cursor-pointer  "
        />
      )}
    </div>
  );
}
