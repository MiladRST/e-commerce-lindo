"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

export default function HeroSlider() {
    return (
        <div className="relative">

            <Swiper className="w-full h-[450px]"
            direction={"vertical"}
            height={450}
            spaceBetween={16}
            modules={[Mousewheel, Pagination]}
            pagination={{ 
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (index, className) => {
                    return `
                        <span class="${className} custom-bullet"></span>
                    `;
                },
            }}
            mousewheel
            loop
            >
            <SwiperSlide>
                <div className="relative w-full h-[450px]">
                    <Image src="/images/hero-1.png" alt="hero slide 1" fill />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="relative w-full h-[450px]">
                    <Image src="/images/hero-1.png" alt="hero slide 1" fill />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className="relative w-full h-[450px]">
                    <Image src="/images/hero-1.png" alt="hero slide 1" fill />
                </div>
            </SwiperSlide>

            </Swiper>

            <div className="custom-pagination absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10" ></div>

        </div>
    )
}