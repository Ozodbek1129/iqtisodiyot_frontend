"use client"; // Agar Next.js 13+ versiyasida ishlayotgan bo'lsangiz

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        // loop
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img
            src="/images/slide1.jpg"
            alt="Slide 1"
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slide2.jpg"
            alt="Slide 2"
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slide3.jpg"
            alt="Slide 3"
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
