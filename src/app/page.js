"use client";

import { useSession } from "next-auth/react";
import FeaturedProductSection from "../components/user/FeaturedProductSection";
import HeroSection from "../components/user/HeroSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push("/unauthorised");
  }

  return (
    <div>
      <HeroSection />
      <FeaturedProductSection />
    </div>
  );
}
