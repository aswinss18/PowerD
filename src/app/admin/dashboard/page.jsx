// pages/admin/dashboard.js
"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  //   const router = useRouter();

  //   useEffect(() => {
  //     if (status === "loading") return; // Wait for session to load

  //     if (!session || session.user.role !== "admin") {
  //       router.push("/unauthorized"); // Redirect non-admin users to unauthorized page
  //     }
  //   }, [session, status, router]);

  //   if (status === "loading") {
  //     return <div>Loading...</div>; // Show loading state while session is being validated
  //   }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
      </header>
      <main className="p-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold">Total Orders</h3>
              <p className="text-2xl">124</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold">Total Sales</h3>
              <p className="text-2xl">$12,345</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold">Products in Stock</h3>
              <p className="text-2xl">456</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Customer</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">#00123</td>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">$123.45</td>
                  <td className="px-4 py-2 text-green-500">Completed</td>
                  <td className="px-4 py-2">2025-01-20</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">#00124</td>
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">$67.89</td>
                  <td className="px-4 py-2 text-yellow-500">Pending</td>
                  <td className="px-4 py-2">2025-01-21</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
