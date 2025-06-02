"use client";
import React, { createContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import { create } from "zustand";
import "./styles.css"
export const useSwiperStore = create((set) => ({
    swiper: 1,
    setSwiper: (swiper) => set({ swiper }),
}));

export default function MainSwiperWrapper({ slides = [] }) {
    const {setSwiper} = useSwiperStore();

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            className="flex-1 w-full h-full main-swiper"
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
        >
            {slides.map((slide, index) => (
                <SwiperSlide  key={index}>
                  <div className="w-full h-full flex justify-center items-center">
                    {slide}
                  </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
