"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductList from "../../components/ProductList";
import { ProductCardItem, ProductFilter } from "@/types/product";
import { Category } from "@/types/category";
import CategorySection from "../../home/CategorySection";
import { useLocale, useTranslations } from "next-intl";
import ProductFilterForm from "@/sections/components/ProductFilterForm";
import { BiSort } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { getCategoriesByLocale } from "@/_mock/_category";
import { orderBy } from "@/utils/helper";

interface ProductListViewProps {
  products: ProductCardItem[];
  category?: Category;
  title?: string;
  query?: string;
}
const ProductListView = ({ products, category, title, query: searchTerm }: ProductListViewProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const tFilter = useTranslations("filter");
  const tSearch = useTranslations("search");
  const locale = useLocale();
  const [sortValue, setSortValue] = useState("popularity");
  const sortOptions = [
    { value: "popularity", label: tFilter("sort.popularity") },
    { value: "priceLow", label: tFilter("sort.priceLow") },
    { value: "priceHigh", label: tFilter("sort.priceHigh") },
    { value: "newest", label: tFilter("sort.newest") },
  ];
  const finalTitle =
    category?.name ??
    title ??
    tSearch('results', { query: searchTerm ?? '' });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    }

    if (isSortOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortOpen]);

  const [filters, setFilters] = useState<ProductFilter>({
    categories: [],
    price: 5000,
    discount: null,
  });
  const canReset = filters.categories.length > 0 ||
    filters.discount !== null ||
    filters.price !== 5000;

  const dataFiltered =  applyFilter({inputData: products, filters: filters, sortBy: sortValue});
  return (
    <div>
      {category && category.children && category.children.length > 0 && (
        <CategorySection categories={category.children} />
      )}

      <div className="flex gap-6">
        <aside className="hidden md:block w-64 shrink-0 h-fit">
          <ProductFilterForm 
            filters={filters} 
            setFilters={setFilters} 
            canReset={canReset} 
            options={{
              categories: getCategoriesByLocale(locale)
            }}
            isOpen={open}
          />
        </aside>
        <section className="flex-1">
          {/* Desktop header avec titre et tri */}
          <div className="hidden md:flex items-center mb-4 justify-between">
            {/* Titre */}
            <h2 className="text-2xl font-bold m-0">{finalTitle}</h2>
            {/* Select tri */}
            <div className="relative">
              <select
                value={sortValue}
                onChange={(e) => setSortValue(e.target.value)}
                className="border rounded-lg py-2 pl-3 pr-8 text-sm appearance-none bg-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <BiSort className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
            
          {/* Mobile title */}
          <h2 className="md:hidden text-2xl font-bold mb-4">{finalTitle}</h2>

          {/* Mobile filter + sort */}
          <div className="md:hidden mb-4 flex justify-between">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-4 text-sm bg-white hover:bg-gray-100 hover:cursor-pointer"
            >
              <FiFilter size={18} className={canReset ? "text-primary-main" : ""} />
              {tFilter('title')}
            </button>
              <div className="relative">
                <div className="block md:hidden">
                  <button
                    onClick={() => setIsSortOpen(true)}
                    className="w-full flex items-center justify-between border rounded-xl px-4 py-3 text-sm bg-white"
                  >
                    <span>
                      {sortOptions.find(o => o.value === sortValue)?.label}
                    </span>
                    <BiSort className="w-4 h-4" />

                  </button>

                  {isSortOpen && (
                    <div className="fixed inset-0 z-50 bg-black/40">
                      <div ref={sortRef} className="absolute bottom-0 w-full bg-white rounded-t-2xl p-4">
                        <h3 className="font-semibold mb-4">{tFilter('sort.sortBy')}</h3>
                  
                        {sortOptions.map(option => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortValue(option.value);
                              setIsSortOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg mb-2 ${
                              sortValue === option.value
                                ? "bg-primary-main text-white"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
          </div>
          {dataFiltered.length > 0 ? (
            <ProductList products={dataFiltered} />
          ) : (
            <div className="text-center text-gray-500 py-20 text-lg">
              {tFilter("noResults")}
            </div>
          )}
        </section>
        {/* Drawer mobile */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/40">
            <div className="fixed right-0 top-0 h-full w-80 bg-white p-4 flex flex-col">
              <button onClick={() => setOpen(false)} className="hover:cursor-pointer pb-4 self-start">
                ✕
              </button>
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <ProductFilterForm 
                  filters={filters} 
                  setFilters={setFilters} 
                  canReset={canReset} 
                  options={{
                    categories: getCategoriesByLocale(locale)
                  }}
                  isOpen={open}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductListView;


// ----------------------------------------------------------------------


type ApplyFilterProps = {
  sortBy: string;
  filters: ProductFilter;
  inputData: ProductCardItem[];
};

function applyFilter({ inputData, filters, sortBy }: ApplyFilterProps) {
  const discount = filters.discount;
  
  // Calculate the actual price after discount for each product
  const productsWithFinalPrice = inputData.map(product => {
    const finalPrice = product.priceSale ?? product.price * (1 - (product.discountPercentage ?? 0) / 100);
    return { ...product, finalPrice };
  });

  let sortedData = [...productsWithFinalPrice];

  // Tri
  if (sortBy === 'popularity') {
    sortedData = orderBy(sortedData, ['totalSold'], ['desc']);
  }
  if (sortBy === 'newest') {
    sortedData = orderBy(sortedData, ['createdAt'], ['desc']);
  }
  if (sortBy === 'priceHigh') {
    sortedData = orderBy(sortedData, ['finalPrice'], ['desc']);
  }
  if (sortBy === 'priceLow') {
    sortedData = orderBy(sortedData, ['finalPrice'], ['asc']);
  }

  // Filtres
  if (filters.categories.length) {
    sortedData = sortedData.filter(product => product.categoryIds.some(id => filters.categories.includes(id)));
  }
  if (filters.price !== 5000) {
    sortedData = sortedData.filter(product => product.finalPrice <= filters.price);
  }
  if (discount !== null) {
    sortedData = sortedData.filter(product => (product.discountPercentage ?? 0) >= discount);
  }

  return sortedData.map(({ finalPrice, ...rest }) => rest);
}


