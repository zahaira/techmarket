import { Category } from "@/shared/types/category";
import Image from "next/image";
import React from "react";

interface CategoryCardProps {
  category: Category;
}
const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="h-[140px] w-[120px]  sm:h-[200px] sm:w-[200px] flex flex-col gap-4 justify-center items-center cursor-pointer">
      <div className="relative w-[90px] h-[90px] sm:w-[150px] sm:h-[150px]  rounded-full bg-blue-50 flex items-center justify-center overflow-hidden">
        <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]">
          <Image src={category.image} alt={category.name} fill className="" />
        </div>
      </div>

      <div className="">
        <h3 className="text-gray-800 font-semibold text-sm md:text-base">
          {category.name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
