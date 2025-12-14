"use client"
import { useState } from 'react';
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

interface ProductGalleryProps {
  images?: string[];
}

export default function ProductGallery({ images = [] }: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // Default images if none provided
  const galleryImages = images.length > 0 
    ? images 
    : [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        "https://swiperjs.com/demos/images/nature-4.jpg",
        "https://swiperjs.com/demos/images/nature-5.jpg",
        "https://swiperjs.com/demos/images/nature-6.jpg",
        "https://swiperjs.com/demos/images/nature-7.jpg",
        "https://swiperjs.com/demos/images/nature-8.jpg",
        "https://swiperjs.com/demos/images/nature-9.jpg",
        "https://swiperjs.com/demos/images/nature-10.jpg",
      ];

  return (
    <div className="w-full space-y-4">
      {/* Main Gallery Swiper */}
      <div className="overflow-hidden rounded-2xl lg:rounded-tl-[250px] h-[400px]">
        <Swiper
          style={{ height: '400px' }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Thumbs]}
          className="h-full"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="border rounded-2xl p-2">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={4}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbnail-swiper"
          breakpoints={{
            640: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80px, 100px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
