"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGetUserByIdQuery } from "@/redux/apiSlice";
import { useRouter } from "next/navigation";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Navbar() {
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
    }
  }, []);

  const { data: user, isLoading, error } = useGetUserByIdQuery(userId, {
    skip: !userId, // Agar userId bo‘lmasa, so‘rov yuborilmaydi
  });

  const nav = [
    { href: "/", title: "Institut" },
    { href: "/", title: "Bo'limlar" },
    { href: "/", title: "Fakultetlar" },
    { href: "/", title: "Yangiliklar" },
    { href: "/", title: "Xizmatlar" },
    { href: "/", title: "Qabul" },
    { href: "/", title: "Bog'lanish" },
  ];

  return (
    <div className="mb-10">
      <div className="flex justify-around bg-nav_bg text-white py-5 items-center">
        <Link href={"/"} className="flex gap-3 items-center">
          <Image src={"/nav_logo.svg"} width={40} height={40} alt="logo" />
          <h2 className="max-w-36 text-[10px]">
            TOSHKENT IQTISODIYOT VA PEDAGOGIKA INSTITUTI
          </h2>
        </Link>

        <ul className="flex justify-around gap-5 items-center max-[1135px]:hidden">
          {nav.map((e, index) => (
            <li key={index} className="max-[1130px]:text-[16px]">
              <Link className="text-[20px]" href={e.href}>
                {e.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 items-center">
          <button className="py-4 px-4 bg-white rounded-full text-black">
            <SearchOutlinedIcon />
          </button>

          <select className="text-white bg-inherit pl-2 text-xl">
            <option className="text-black" value="uz">
              Uz
            </option>
            <option className="text-black" value="ru">
              Ru
            </option>
            <option className="text-black" value="en">
              En
            </option>
          </select>

          <div>
            {isLoading ? (
              <p className="text-gray-300">Loading...</p>
            ) : error || !user ? (
              <Link href="/login" className="px-4 py-2 bg-white text-black rounded-md">
                Login
              </Link>
            ) : (
              <Link href="/profile">
                <Image
                  src={user.avatar ? `http://localhost:3033${user.avatar}` : "/default-avatar.png"}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  alt="Profile"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
