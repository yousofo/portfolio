"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// Import Swiper styles
import "swiper/css";
export default function MainSwiperWrapper({ slides = [] }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1} 
      navigation
      modules={[Navigation]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide }</SwiperSlide>
      ))}
    </Swiper>
  );
}
