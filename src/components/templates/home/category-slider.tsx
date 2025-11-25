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
import type { ProductCategory } from "@/types";
export default function CategorySlider({ categories } : { categories: ProductCategory[] }) {
    return (
        <Swiper 
        modules={[FreeMode]}
        spaceBetween={16} 
        autoplay
        slidesPerView={'auto'}
        loop={false}
        freeMode={true}
        >
            {
                categories.map((category: ProductCategory) => {
                    return (
                        <SwiperSlide key={category.slug} className="w-fit!">
                            <div className="w-fit border bg-transparent p-2 my-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                                <div className="bg-white flex flex-col items-center justify-center p-2 gap-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                                    <div className="relative bg-[#F2DFCE] w-32 h-16 overflow-hidden p-2 mb-2" style={{ borderRadius: "999px 999px 100px 100px"}}>
                                        <Image src={watchImage} alt="category" fill className="object-contain" />
                                    </div>
                                    <h2 className="text-sm">{category.name}</h2>
                                    <Badge variant="default">{category.slug}</Badge>
                                </div>
                            </div>  
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}