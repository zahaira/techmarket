"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/shared/types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import NewBadge from "../components/NewBadge";
import { useWishlistStore } from "@/shared/api/stores/wishlistStore";
import { toProductCardItem } from "@/shared/utils/product";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

type ProductDetailsCarouselProps = {
  product: Product;
};

const ProductDetailsCarousel = ({ product }: ProductDetailsCarouselProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useWishlistStore();
  const isWishlisted = isInWishlist(product.productId);
  const handleWishlistClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(product.productId);
    } else {
      addToWishlist(toProductCardItem(product));
    }
  };

  if (!product.images.length) return <div>No images available</div>;

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
        {product.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <button
                onClick={handleWishlistClick}
                className="absolute right-2 top-2 z-20 rounded-full bg-white p-1.5 shadow transition-all duration-300 hover:bg-red-50 hover:scale-110 cursor-pointer"
              >
                {mounted && isWishlisted ? (
                  <FaHeart className="h-6 w-6 text-primary-main" />
                ) : (
                  <FiHeart className="h-6 w-6 text-gray-600 hover:text-primary-main" />
                )}
              </button>

              {product.isNew && (
                <div className="absolute top-2 left-2 z-20">
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
        {product.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`relative w-full aspect-square cursor-pointer rounded-lg overflow-hidden ${
                idx === activeIndex ? "border-2 border-primary-main" : ""
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
