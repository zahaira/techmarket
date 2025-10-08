import React from "react";
import Hero from "../Hero";
import CategorySection from "../CategorySection";
import { _mockCategories } from "@/shared/_mock/_category";
import { _mockBestOfferProducts } from "@/shared/_mock/_product";
import FeaturesSection from "../FeaturesSection";
import ProductCarouselSection from "../../components/ProductCarouselSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategorySection categories={_mockCategories} />
      <ProductCarouselSection
        products={_mockBestOfferProducts}
        title="Our Best Offers"
      />
      <FeaturesSection />
      <ProductCarouselSection
        products={_mockBestOfferProducts}
        title="Best Sellers"
      />
    </div>
  );
};

export default HomePage;
