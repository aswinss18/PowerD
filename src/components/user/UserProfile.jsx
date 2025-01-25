"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

export default function UserProfile({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center cursor-pointer relative">
      <Image
        onClick={() => setIsModalOpen(!isModalOpen)}
        src={data?.user?.image || "/avatar.png"}
        alt="avatar"
        width={40}
        height={40}
        className=" rounded-full"
      />
      {isModalOpen && (
        <div className=" absolute bg-white min-w-[100px]    rounded-md shadow-md border-2 border-gray-400 bottom-[-100px] flex flex-col items-center text-xl text-gray-800 font-semibold">
          <p className="px-2 text-gray-500">{data?.user?.name || "Unknown"}</p>
          <p className="px-2 text-gray-500">{data?.user?.email || "Unknown"}</p>
          <p
            className="hover:bg-gray-200  p-2 w-full text-center"
            onClick={() => signOut()}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
