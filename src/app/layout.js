"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/user/Navbar";
import Menubar from "../components/user/Menubar";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Sidebar from "../components/admin/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

///small change ///
export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main>
            {pathname.includes("admin") ? (
              <Sidebar />
            ) : (
              <>
                <Navbar />
                <Menubar />
              </>
            )}

            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
