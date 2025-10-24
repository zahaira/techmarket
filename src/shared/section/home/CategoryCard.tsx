import { Category } from "@/shared/types/category";
import Image from "next/image";
import React from "react";
import { useRouter } from "@/i18n/navigation";
import { _mockCategories } from "@/shared/_mock/_category";

interface CategoryCardProps {
  category: Category;
}

// Helper to get full path recursively using parentId
const getCategoryPath = (
  category: Category,
  allCategories: Category[]
): string => {
  const pathSegments: string[] = [];
  let current: Category | undefined = category;

  while (current) {
    pathSegments.unshift(current.slug); // prepend slug
    if (!current.parentId) break; // stop if no parent
    current = allCategories.find((c) => c.categoryId === current?.parentId);
  }

  return `/category/${pathSegments.join("/")}`;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(getCategoryPath(category, _mockCategories))}
      className="h-[140px] w-[120px] sm:h-[200px] sm:w-[200px] flex flex-col gap-4 justify-center items-center cursor-pointer"
    >
      <div className="relative w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] rounded-full bg-blue-50 flex items-center justify-center overflow-hidden">
        <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]">
          <Image src={category.image} alt={category.name} fill className="" />
        </div>
      </div>

      <div>
        <h3 className="text-gray-800 font-semibold text-sm md:text-base">
          {category.name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
