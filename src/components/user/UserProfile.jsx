import Image from "next/image";
import React from "react";

export default function UserProfile() {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <Image
        src="/avatar.jpeg"
        alt="avatar"
        width={40}
        height={40}
        className=" rounded-full"
      />
      <p>Aswin</p>
    </div>
  );
}
