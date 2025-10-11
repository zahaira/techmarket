"use client";

import React, { useState } from "react";
import { Product } from "@/shared/types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import NewBadge from "../components/NewBadge";

type ProductDetailsCarouselProps = {
  images?: Product["images"];
  isNew?: boolean;
};

const ProductDetailsCarousel = ({
  images = [],
  isNew = false,
}: ProductDetailsCarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!images.length) return <div>No images available</div>;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Main Carousel */}
      <Swiper
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="w-full rounded-2xl overflow-hidden"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              {isNew && (
                <div className="absolute top-2 right-2 z-20">
                  <NewBadge size="lg" />
                </div>
              )}

              <Image
                src={img}
                alt={`Product image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Carousel */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="w-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`relative w-full aspect-square cursor-pointer rounded-lg overflow-hidden ${
                idx === activeIndex ? "border-2 border-primary" : ""
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className={`object-cover transition-all duration-300 ${
                  idx === activeIndex ? "opacity-100" : "opacity-50"
                }`}
                sizes="(max-width: 768px) 25vw, 15vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductDetailsCarousel;
