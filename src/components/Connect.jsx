"use client";
import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
export default function Connect() {
  return (
    <div className="my-10 border-2 rounded-md  mx-20 max-md:mx-10 px-10 lg:px-24 py-32 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
      <h2 className="text-[82px] max-md:text-6xl">Biz bilan bog'lanish</h2>
      <div className="flex justify-between gap-5 max-xl:flex-col">
        <forma >  
          <h2 className="text-[42px]">Xabar yuborish</h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 max-md:flex-col">
              <input
                type="text"
                placeholder="Ismingiz"
                className="border py-4 pl-3 bg-gray-100 w-full"
              />
              <input
                type="text"
                placeholder="+998"
                className="border py-4 pl-3 bg-gray-100 w-full"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Xabar"
                className="border w-full py-4 pl-3 bg-gray-100"
              />
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <button type="submit" className="bg-nav_bg text-white px-6 py-3">
              Jo'natish
            </button>
          </div>
        </forma>
        <div className="flex flex-col gap-3 text-[36px] max-md:text-2xl justify-center pt-8">
          <a href="#" className="flex items-center gap-5">
            <MailIcon className="bg-gray-100 w-[32px] h-[35]" />{" "}
            <p className="bg-gray-100 py-2 px-3">tipuniversity@mail.uz</p>
          </a>
          <a href="#" className="flex gap-5 items-center py-2 px-3">
            <PhoneInTalkIcon className="bg-gray-100" />{" "}
            <p className="bg-gray-100 py-2 px-3">55 900 06 04</p>
          </a>
        </div>
      </div>
    </div>
  );
}
