import React from "react";
import Hero from "../Hero";
import CategorySection from "../CategorySection";
import { _mockCategories } from "@/shared/_mock/_category";
import FeaturesSection from "../FeaturesSection";
import ProductCarouselSection from "../../components/ProductCarouselSection";
import {
  _mockBestOfferProducts,
  _mockBestSellersProducts,
} from "@/shared/_mock/_product";

const HomePage = () => {
  return (
    <div className="bg-gray-50 p-2 md:p-8">
      <Hero />
      <CategorySection categories={_mockCategories} />
      <ProductCarouselSection
        products={_mockBestOfferProducts}
        title="Our Best Offers"
        seeMoreLink="/promotions"
      />
      <FeaturesSection />
      <ProductCarouselSection
        products={_mockBestSellersProducts}
        title="Best Sellers"
        showSeeMore={false}
      />
    </div>
  );
};

export default HomePage;
