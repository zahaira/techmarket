"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import CardHero from "./CardHero";
import { useLocale } from "next-intl";
import { _heroMockProducts } from "@/shared/_mock/_productMock";

const Hero = () => {
  const locale = useLocale();
  const heroProducts = _heroMockProducts(locale);
  return (
    <div className="rounded-2xl overflow-hidden ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        {heroProducts.map((product) => (
          <SwiperSlide key={product.productId}>
            <CardHero product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
