"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import watchImage from "@/public/images/watch.png";
export default function CategorySlider() {
    return (
        <Swiper 
        modules={[FreeMode]}
        spaceBetween={16} 
        autoplay
        slidesPerView={'auto'}
        loop={true}
        freeMode={true}
        >
            {
                Array.from({ length: 10 }).map((_, index) => {
                    return (
                        <SwiperSlide key={index} className="w-fit!">
                            <div className="w-fit border bg-transparent p-2 my-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                                <div className="bg-white flex flex-col items-center justify-center p-2 gap-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                                    <div className="relative bg-[#F2DFCE] w-32 h-16 overflow-hidden p-2 mb-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                                        <Image src={watchImage} alt="category" fill className="object-contain" />
                                    </div>
                                    <h2>ساعت</h2>
                                    <Badge variant="default">Watch</Badge>
                                </div>
                            </div>  
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}