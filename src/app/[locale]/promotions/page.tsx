import { _mockBestOfferProducts } from "@/shared/_mock/_product";
import ProductList from "@/shared/section/components/ProductList";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <ProductList products={_mockBestOfferProducts} title="Our Best Offers" />
    </div>
  );
};

export default page;
