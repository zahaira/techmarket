import React from "react";
import Hero from "../Hero";
import CategorySection from "../CategorySection";
import { _mockCategories } from "@/shared/_mock/_category";
import FeaturesSection from "../FeaturesSection";
import ProductCarouselSection from "../../components/ProductCarouselSection";
import { useLocale, useTranslations } from "next-intl";
import { mapCategoriesToLocale } from "@/shared/_mock/service";
import {
  _mockBestOfferProducts,
  _mockBestSellersProducts,
} from "@/shared/_mock/_productMock";

const HomePage = () => {
  const t = useTranslations("homePage");
  const locale = useLocale();
  const bestOfferProducts = _mockBestOfferProducts(locale);
  const bestSellersProducts = _mockBestSellersProducts(locale);

  const categories = mapCategoriesToLocale(_mockCategories, locale);
  return (
    <div className="bg-gray-50 p-2 md:p-8">
      <Hero />
      <CategorySection categories={categories} />
      <ProductCarouselSection
        products={bestOfferProducts}
        title={t("best_offer")}
        seeMoreLink="/promotions"
      />
      <FeaturesSection />
      <ProductCarouselSection
        products={bestSellersProducts}
        title={t("best_sellers")}
        showSeeMore={false}
      />
    </div>
  );
};

export default HomePage;
