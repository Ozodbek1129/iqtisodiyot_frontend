import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export default function Card({data}) {
  const {title, date} = data;
  return (
    <div className="mx-10 shadow-md">
      <div className="flex flex-col justify-between shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-md w-[350px] h-[500px] px-5">
        <div className="flex flex-col gap-5">
          <Image src={"/"} width={380} height={260} alt="img" />
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">{title}</h2>
            <p>{date}</p>
          </div>
        </div>

        <Link className="mb-5" href={"/"}>
          Batafsil <NavigateNextIcon className="text-4xl" />{" "}
        </Link>
      </div>
    </div>
  );
}
