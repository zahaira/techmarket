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
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("homePage");
  return (
    <div className="bg-gray-50 p-2 md:p-8">
      <Hero />
      <CategorySection categories={_mockCategories} />
      <ProductCarouselSection
        products={_mockBestOfferProducts}
        title={t("best_offer")}
        seeMoreLink="/promotions"
      />
      <FeaturesSection />
      <ProductCarouselSection
        products={_mockBestSellersProducts}
        title={t("best_sellers")}
        showSeeMore={false}
      />
    </div>
  );
};

export default HomePage;
