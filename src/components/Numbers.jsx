import React from "react";

export default function Numbers() {
  return (
    <div className="bg-nav_bg my-10 py-16 px-5">
      <div className="flex justify-around text-white max-lg:flex-col max-lg:items-center">
        <div>
          <h2 className="border-b text-[73px] max-md:5xl">Sonlarda</h2>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between max-md:flex-col">
            <div className="flex flex-col ">
              <h2 className="border-b text-[73px] max-md:5xl">11,000+</h2>
              <p className="text-[21px]">Talabalar</p>
            </div>
            <div className="flex flex-col">
              <h2 className="border-b text-[73px] max-md:5xl">400+</h2>
              <p className="text-[21px]">O'qituvchilar</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="border-b text-[73px] max-md:5xl">1 Milliard qiymatli</h2>
            <p className="text-[21px]">Gradlar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
