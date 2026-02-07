"use client";

import { _mockCategories } from "@/_mock/_category";
import { ProductFilter } from "@/types/product";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { FiRefreshCw } from "react-icons/fi";


type Props = {
  filters: ProductFilter;
  setFilters: React.Dispatch<React.SetStateAction<ProductFilter>>;
  canReset: boolean;
  options: {
    categories: { categoryId: string; name: string }[];
  };
};

const ProductFilterForm = ({ filters, setFilters, canReset, options }: Props) => {
  const tFilter = useTranslations("filter");
  const instanceId = React.useId();

  return (
    <aside className="w-full bg-white rounded-xl p-4 space-y-6">
      {/* CATEGORY */}
      <div>
        <h3 className="font-semibold mb-3">{tFilter("category")}</h3>
        <div className="space-y-2">
          {options.categories.map((cat) => (
            <label key={cat.categoryId} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.categoryId)}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    categories: e.target.checked
                      ? [...prev.categories, cat.categoryId]
                      : prev.categories.filter((c) => c !== cat.categoryId),
                  }))
                }
                className="accent-primary-main"
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div>
        <h3 className="font-semibold mb-3">{tFilter("price")}</h3>
        <input
          type="range"
          min={0}
          max={5000}
          value={filters.price}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              price: Number(e.target.value),
            }))
          }
          className="w-full accent-primary-main"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0 DH</span>
          <span>{filters.price} DH</span>
        </div>
      </div>

      {/* DISCOUNT */}
      <div>
        <h3 className="font-semibold mb-3">{tFilter("discount")}</h3>
        <div className="space-y-2">
          {[50, 40, 30, 20, 10].map((percent) => (
            <label
              key={percent}
              className="flex items-center gap-2 text-sm cursor-pointer select-none"
            >
              <input
                type="radio"
                name={`discount-${instanceId}`}
                value={percent}
                checked={filters.discount === percent}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    discount: Number(e.target.value), 
                  }))
                }
                className="accent-primary-main w-4 h-4" 
              />
              {tFilter(`discountOptions.${percent}`)}
            </label>
          ))}
        </div>
      </div>

      {/* RESET */}
      <button
        disabled={!canReset}
        onClick={() =>
          setFilters({
            categories: [],
            price: 5000,
            discount: null,
          })
        }
        className={`w-full flex items-center justify-center gap-2 text-sm py-2 rounded-lg border hover:bg-gray-100 transition
          ${canReset ? "text-primary-main hover:bg-gray-100 cursor-pointer"
          : "text-gray-400 cursor-default opacity-60"
        }`}
      >
        <FiRefreshCw className={canReset ? "text-primary-main" : "text-gray-600"} />
        {tFilter("reset")}
      </button>
    </aside>
  );
};

export default ProductFilterForm;
