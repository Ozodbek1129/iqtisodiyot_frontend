import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const nav = [
    { href: "/", title: "Institut haqida" },
    { href: "/", title: "Bo'limlar" },
    { href: "/", title: "Rahbariyat" },
    { href: "/", title: "Institut tarixi" },
    { href: "/", title: "Adminstratsiya" },
    { href: "/", title: "Ilmiy bo'lim" },
    { href: "/", title: "Devonxona" },
  ];
  return (
    <div className="bg-nav_bg text-white flex flex-col py-5 gap-10">
      <div className="flex gap-3 items-center justify-center px-5">
        <Image src={"/nav_logo.svg"} width={125} height={125} alt="logo" />
        <h2 className="max-w-[360px] text-[26px]">
          TOSHKENT IQTISODIYOT VA PEDAGOGIKA INSTITUTI
        </h2>
      </div>
      <ul className="grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 pl-10">
        {nav &&
          nav.map((e, index) => (
            <li key={index} className="text-[20px]">
              <Link className="text-[20px]" href={e.href}>
                {e.title}
              </Link>
            </li>
          ))}
      </ul>
      <div className="flex justify-around max-md:flex-col max-md:pl-10">
        <div className="flex gap-5">
          <a href="#">Aloqa: +998 55 900 06 04</a>
          <a href="#">E-mail: tipiunversity@mail.uz</a>
        </div>
        <div className="flex gap-5">
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TelegramIcon />
          </a>
        </div>
        <p>Powered by Sector Soft</p>
      </div>
    </div>
  );
}
