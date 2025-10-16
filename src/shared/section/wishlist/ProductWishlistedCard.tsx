"use client";

import { useWishlistStore } from "@/shared/api/stores/wishlistStore";
import { ProductCardItem } from "@/shared/types/product";
import Image from "next/image";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import QuantitySelector from "../components/QuantitySelector";

interface ProductWishlistedCardProps {
  product: ProductCardItem;
}

const ProductWishlistedCard = ({ product }: ProductWishlistedCardProps) => {
  const { removeFromWishlist } = useWishlistStore();

  const handleAddToCart = () => {
    if (!product.stock || product.stock <= 0) return;
    console.log(`Added ${product.name} to cart`);
  };

  const isOutOfStock = !product.stock || product.stock <= 0;

  return (
    <div className="flex gap-4 py-5 border-b border-gray-200 last:border-none">
      {/* Product Image */}
      <div className="relative w-[74px] h-[84px] flex-shrink-0">
        <Image
          src={product.coverUrl}
          alt={product.name}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 gap-3">
        {/* Name & Delete */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <p className="text-sm font-medium line-clamp-1">{product.name}</p>
            <p className="text-xs text-gray-500">${product.price}</p>
          </div>

          {/* Delete Button with Tooltip */}
          <div className="relative group inline-block">
            <button
              onClick={() => removeFromWishlist(product.productId)}
              className="text-2xl text-red-500 cursor-pointer"
            >
              <AiOutlineDelete />
            </button>
            <span
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
               bg-white text-black text-xs px-2 py-1 rounded opacity-0
               group-hover:opacity-100 transition-opacity duration-200
               whitespace-nowrap pointer-events-none"
            >
              Delete product
            </span>
          </div>
        </div>

        {/* Quantity Selector & Add to Cart */}
        <div className="flex justify-between items-center">
          <QuantitySelector
            size="sm"
            stock={product.stock}
            initial={1}
            onChange={(q) => console.log("Quantity changed:", q)}
          />

          {isOutOfStock ? (
            <span className="text-gray-400 text-sm font-medium">
              Out of stock
            </span>
          ) : (
            <button
              onClick={handleAddToCart}
              className="text-sm text-black font-medium cursor-pointer hover:text-primary-main transition-colors"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductWishlistedCard;
