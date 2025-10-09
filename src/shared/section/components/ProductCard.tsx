import { ProductCardItem } from "@/shared/types/product";
import Image from "next/image";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

interface ProductCardProps {
  product: ProductCardItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative w-full max-w-[200px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100 rounded-t-xl">
        <Image
          src={product.coverUrl}
          alt={product.name}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges Container */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {/* Discount Badge */}
          {product.discountPercentage ? (
            <div className="rounded-full bg-primary-light px-2 py-0.5 text-xs font-bold text-primary-dark shadow">
              -{product.discountPercentage}%
            </div>
          ) : (
            <div className="hidden"></div>
          )}

          {/* NEW Badge */}
          {product.new && (
            <div className="rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-green-50 shadow">
              NEW
            </div>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow transition-all duration-300 hover:bg-red-50 hover:scale-110">
          <FiHeart className="h-4 w-4 text-gray-600 hover:text-primary" />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-2 transition-transform duration-300 group-hover:translate-y-0">
          <button className="flex w-full items-center justify-center gap-1 rounded-md bg-white py-2 text-sm font-semibold text-gray-900 transition-all duration-300 hover:text-primary-dark cursor-pointer">
            <LuShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col justify-between h-[100px]">
        {/* Product name */}
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 cursor-pointer leading-tight">
          {product.name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary-dark">
            ${product.priceSale.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
