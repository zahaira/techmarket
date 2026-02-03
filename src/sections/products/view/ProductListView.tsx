"use client";
import React, { useState } from "react";
import ProductList from "../../components/ProductList";
import { ProductCardItem, ProductFilter } from "@/types/product";
import { Category } from "@/types/category";
import CategorySection from "../../home/CategorySection";
import ProductFilterForm from "../../components/ProductFilterForm";

interface ProductListViewProps {
  products: ProductCardItem[];
  category?: Category;
}
const ProductListView = ({ products, category }: ProductListViewProps) => {
  const [filter, setFilter] = useState<ProductFilter>({});
  return (
    <div>
      {category && category.children && category.children.length > 0 && (
        <CategorySection categories={category.children} />
      )}
      <ProductFilterForm onFilterChange={setFilter} />

      <ProductList products={products} title={category?.name} />
    </div>
  );
};

export default ProductListView;
