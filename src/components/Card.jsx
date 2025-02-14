import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Card({ data, p }) {
  const { name, date, image, role, full_name, avatar } = data;
  // console.log("avatar", avatar);
  return (
    <div className="flex flex-col shadow-md w-auto items-center">
      <div className="flex flex-col w-full">
        <Image
          src={
            !p
              ? `http://localhost:3033/uploads/${image}`
              : `http://localhost:3033${avatar}`
          }
          width={380}
          className="w-full"
          height={260}
          alt="img"
        />
        <div className="flex flex-col justify-between pl-3 mt-10">
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-2xl">{p ? full_name : name}</h2>
            <p className="text-xl">{!p ? date : role}</p>
          </div>
          <Link className="mt-16" href={"/"}>
            Batafsil <NavigateNextIcon className="text-4xl" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
