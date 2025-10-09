import React from "react";
import ProductCard from "./ProductCard";
import { ProductCardItem } from "@/shared/types/product";

interface ProductListProps {
  products: ProductCardItem[];
  title?: string;
}

const ProductList = ({
  products,
  title = "All Products",
}: ProductListProps) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {products?.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
