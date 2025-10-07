import React from "react";
import Hero from "../Hero";
import CategorySection from "../CategorySection";
import { _mockCategories } from "@/shared/_mock/_category";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategorySection categories={_mockCategories} />
    </div>
  );
};

export default HomePage;
