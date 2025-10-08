import { Product } from "@/shared/types/product";
import Image from "next/image";
import React from "react";
import WarrantyBadge from "../components/WarrantyBadge";
import { fCurrency } from "@/shared/utils/format-number";
import { isNew } from "@/shared/utils/help";
import NewBadge from "../components/NewBadge";

interface props {
  product: Product;
}

const CardHero = ({ product }: props) => {
  return (
    <div
      className={`p-8 md:p-12 lg:p-16 h-[500px] md:h-[400px]  rounded-4xl flex flex-col md:grid md:grid-cols-2 gap-4 bg-gradient-to-br ${
        product.bgGradient || "from-orange-50 via-pink-50 to-blue-50"
      }`}
    >
      <div className="flex flex-col gap-2">
        {product.warranty && <WarrantyBadge warranty={product.warranty} />}

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">
          {product.name}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2 flex-1">
          {product.subDescription}
        </p>
        {product.discount && (
          <span className=" text-primary-dark px-2 py-1 text-3xl rounded-2xl w-max font-semibold ">
            -{product.discount.value}% Off
          </span>
        )}
        {!product.discount && isNew(product.createdAt) && <NewBadge />}

        <span
          className="inline-block bg-white text-3xl md:text-3xl text-primary-dark font-bold px-4 py-2 rounded-2xl shadow-md w-max"
          aria-label={`Prix: ${fCurrency(product.price)}`}
        >
          {fCurrency(product.price)}
        </span>
      </div>

      <div className="relative w-full h-full">
        <Image
          alt={product.name}
          src={product.coverUrl}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default CardHero;
