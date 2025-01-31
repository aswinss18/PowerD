"use client";

import { useSession } from "next-auth/react";
import FeaturedProductSection from "../components/user/FeaturedProductSection";
import HeroSection from "../components/user/HeroSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  console.log(session.data?.user, "user1");

  return (
    <div>
      <HeroSection />
      <FeaturedProductSection user={session.data?.user} />
    </div>
  );
}
