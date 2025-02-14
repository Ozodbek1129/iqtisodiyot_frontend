"use client";
// import Card from '@/components/Card'
import Connect from "@/components/Connect";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import React from "react";
// import Slider from "@/components/Swiper";
import News from "@/components/news";
import Events from "@/components/Events";
import Pedagoks from "@/components/Pedagoks";
export default function page() {
  return (
    <div>
      {/* <Slider/> */}
      <Hero />
      <Numbers />
      <News />
      <Pedagoks/>
      <Events/>
      {/* <Card/> */}
      <Connect />
    </div>
  );
}
