import { _mockBestOfferProducts } from "@/shared/_mock/_productMock";
import ProductList from "@/shared/section/components/ProductList";
import { useLocale } from "next-intl";
import React from "react";

const Page = () => {
  const locale = useLocale();
  const bestOfferProducts = _mockBestOfferProducts(locale);
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <ProductList products={bestOfferProducts} title="Our Best Offers" />
    </div>
  );
};

export default Page;
