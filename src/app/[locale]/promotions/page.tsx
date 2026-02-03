"use client";
import { _mockBestOfferProducts } from "@/_mock/_productMock";
import ProductFilterForm from "@/sections/components/ProductFilterForm";
import ProductList from "@/sections/components/ProductList";
import { ProductFilter } from "@/types/product";
import { useLocale } from "next-intl";
import React, { useState } from "react";

const Page = () => {
  const locale = useLocale();
  const bestOfferProducts = _mockBestOfferProducts(locale);
  const [filter, setFilter] = useState<ProductFilter>({});
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <ProductFilterForm onFilterChange={setFilter} />
      <ProductList products={bestOfferProducts} title="Our Best Offers" />
    </div>
  );
};

export default Page;
