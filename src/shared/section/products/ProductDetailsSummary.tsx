"use client";

import React from "react";
import { Product } from "@/shared/types/product";
import { LuShoppingCart } from "react-icons/lu";
import QuantitySelector from "../components/QuantitySelector";
import BestSellerBadge from "../components/BestSellerBadge";
import { fCurrency } from "@/shared/utils/format-number";
import ProductAddToCartButton from "../components/ProductAddToCartButton";
import { useCartStore } from "@/shared/api/stores/CartStore";

interface ProductDetailsSummaryProps {
  product: Product;
}

const ProductDetailsSummary = ({ product }: ProductDetailsSummaryProps) => {
  const { addToCart, items } = useCartStore();
  const isInCart = items.some((i) => i.productId === product.productId);

  return (
    <div className="flex flex-col gap-4 sm:px-6">
      <div className="flex flex-col gap-2">
        {/* Stock Status */}
        <p
          className={`font-semibold ${
            product.stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        {/* Badge Best Seller */}
        {product.isBestSeller && <BestSellerBadge />}

        {/* Nom du produit */}
        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

        {/* Sub-description */}
        {product.subDescription && (
          <p className="text-gray-600 text-sm md:text-base">
            {product.subDescription}
          </p>
        )}
      </div>

      {/* Prix */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{fCurrency(product.price)}</span>
        {product.priceSale && (
          <span className="text-gray-400 font-semibold line-through">
            {fCurrency(product.priceSale)}
          </span>
        )}
      </div>

      {product.warranty && product.warranty > 0 && (
        <div className="flex gap-3 bg-gray-100 w-max p-4 sm:px-9 mx-auto text-gray-700">
          <p>Warranty:</p>
          <div>{product.warranty} years</div>
        </div>
      )}

      {/* Variantes / attributs */}
      {product.attributes && Object.keys(product.attributes).length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Key Points
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-500">
            {Object.entries(product.attributes).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold capitalize pr-2">{key} :</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Short Description / Shipping Info */}
      <p className="text-gray-500 text-sm">
        Livraison gratuite à partir de 50€ d&apos;achat.
      </p>

      {product.stock > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Quantity</p>
          <QuantitySelector
            stock={product.stock}
            initial={1}
            onChange={(q) => console.log("Quantity changed:", q)}
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full">
        {/* Add to Cart */}
        <div className="w-full sm:w-1/2">
          <ProductAddToCartButton
            product={product}
            isInCart={isInCart}
            addToCart={addToCart}
            size="md"
          />
        </div>

        {/* Buy Now */}
        <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-[12px] font-semibold transition w-full sm:w-1/2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsSummary;
