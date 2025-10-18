"use client";

import { ProductCardItem } from "@/shared/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import NewBadge from "./NewBadge";
import { useWishlistStore } from "@/shared/api/stores/wishlistStore";
import { FaHeart } from "react-icons/fa";
import { useCartStore } from "@/shared/api/stores/CartStore";
import ProductAddToCartButton from "./ProductAddToCartButton";

interface ProductCardProps {
  product: ProductCardItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { addToCart, items } = useCartStore();
  const isInCart = items.some((i) => i.productId === product.productId);

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useWishlistStore();
  const isWishlisted = isInWishlist(product.productId);
  const handleWishlistClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      removeFromWishlist(product.productId);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="group relative w-full max-w-[200px]">
      <div className="overflow-hidden rounded-xl bg-white shadow-md my-1 transition-all duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative w-full aspect-square overflow-hidden bg-gray-100 rounded-t-xl">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.coverUrl}
              alt={product.name}
              fill
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
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
            {product.isNew && <NewBadge />}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow transition-all duration-300 hover:bg-red-50 hover:scale-110 cursor-pointer"
          >
            {mounted && isWishlisted ? (
              <FaHeart className="h-4 w-4 text-primary-main" />
            ) : (
              <FiHeart className="h-4 w-4 text-gray-600 hover:text-primary-main" />
            )}
          </button>

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-2 transition-transform duration-300 group-hover:translate-y-0">
            <ProductAddToCartButton
              product={product}
              isInCart={isInCart}
              addToCart={addToCart}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 flex flex-col justify-between h-[100px]">
          {/* Product name */}
          <Link href={`/product/${product.slug}`}>
            <h3 className="line-clamp-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 cursor-pointer leading-tight">
              {product.name}
            </h3>
          </Link>

          {/* Price Section */}
          <div className="flex items-center gap-2 mt-2">
            {product.priceSale ? (
              <>
                <span className="text-lg font-bold text-primary-dark">
                  ${product.priceSale.toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary-dark">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
