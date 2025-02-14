"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetUserByIdQuery } from "@/redux/apiSlice";
import Link from "next/link";

export default function Profile() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      if (!storedUserId) {
        router.push("/");
      } else {
        setUserId(storedUserId);
      }
    }
  }, [router]);

  const {
    data: user,
    isLoading,
    error,
  } = useGetUserByIdQuery(userId, {
    skip: !userId,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !user) return <p>Foydalanuvchi topilmadi</p>;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 shadow-lg bg-white backdrop-blur-sm">
      <div className="border py-10 px-20 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <img
          src={`http://localhost:3033${user.avatar}` || "/default-avatar.png"}
          className="w-24 h-24 rounded-full mb-4"
        />
        <p>
          <strong>Full Name:</strong> {user.full_name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <div className="flex justify-between items-center">
          <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            router.push("/"); // Logout bo‘lganda login sahifasiga qaytarish
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Logout
        </button>
        <Link href={"/"} className="pt-5">Go Back</Link>
        </div>
        
      </div>
    </div>
  );
}
