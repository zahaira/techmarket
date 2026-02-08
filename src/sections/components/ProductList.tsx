import React from "react";
import ProductCard from "./ProductCard";
import { ProductCardItem } from "@/types/product";

interface ProductListProps {
  products: ProductCardItem[];
}

const ProductList = ({
  products,
}: ProductListProps) => {
  return (
    <section className="py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {products?.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
