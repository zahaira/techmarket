import React from "react";
import ProductList from "../../components/ProductList";
import { ProductCardItem } from "@/shared/types/product";
import { Category } from "@/shared/types/category";
import CategorySection from "../../home/CategorySection";

interface ProductListViewProps {
  products: ProductCardItem[];
  category?: Category;
}
const ProductListView = ({ products, category }: ProductListViewProps) => {
  return (
    <div>
      {category && category.children && category.children.length > 0 && (
        <CategorySection categories={category.children} />
      )}
      <ProductList products={products} title={category?.name} />
    </div>
  );
};

export default ProductListView;
