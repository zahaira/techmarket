"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import CategoryCard from "./CategoryCard";
import { Category } from "@/shared/types/category";

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-8 px-1 sm:px-4 bg-gray-50 flex justify-center">
      <Swiper
        slidesPerView="auto"
        breakpoints={{
          0: { spaceBetween: 5 },
          640: { spaceBetween: 30 },
        }}
        modules={[Navigation]}
        navigation
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.categoryId}
            className="!w-[120px] sm:!w-[200px]"
          >
            <CategoryCard category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySection;
