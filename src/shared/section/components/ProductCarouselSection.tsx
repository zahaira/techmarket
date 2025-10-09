"use client";

import { ProductCardItem } from "@/shared/types/product";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface ProductCarouselSectionProps {
  title: string;
  products: ProductCardItem[];
  showSeeMore?: boolean;
  seeMoreLink?: string;
}

const ProductCarouselSection = ({
  title,
  products,
  showSeeMore = true,
  seeMoreLink = "#",
}: ProductCarouselSectionProps) => {
  return (
    <section className="py-8 px-1 sm:px-4 bg-gray-50">
      <div className="flex items-center justify-between mb-6 px-4 sm:px-0">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {showSeeMore && (
          <Link
            href={seeMoreLink}
            className="text-sm font-semibold text-gray-700 tracking-wide hover:text-gray-600 relative group cursor-pointer"
          >
            See More +
            <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        )}
      </div>

      <div className="flex justify-center">
        <Swiper
          slidesPerView="auto"
          breakpoints={{
            0: { spaceBetween: 5 },
            640: { spaceBetween: 30 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.productId}
              className="!w-[180px] sm:!w-[200px]"
            >
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarouselSection;
