"use client";

import { useWishlistStore } from "@/shared/api/stores/wishlistStore";
import React from "react";
import { FiX } from "react-icons/fi";
import ProductWishlistedCard from "./ProductWishlistedCard";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
interface WishlistProps {
  onClose: () => void;
}

const Wishlist = ({ onClose }: WishlistProps) => {
  const { items } = useWishlistStore();
  const t = useTranslations("Wishlist");
  return (
    <div className="h-[calc(100vh-2rem)] overflow-y-auto p-6 md:w-[600px]">
      <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold text-gray-800">
              {t("title")}
            </h3>

            <button
              onClick={onClose}
              aria-label="Close wishlist"
              className="p-1 rounded-full hover:bg-gray-50 transition cursor-pointer"
            >
              <FiX className="text-gray-500 text-2xl" />
            </button>
          </div>
          <p className="text-gray-800 text-sm">
            {t("notSaved")}
            <Link href="/login" className="text-blue-600 hover:underline px-1">
              {t("logIn")}
            </Link>
            {t("or")}
            <Link href="/signup" className="text-blue-600 hover:underline px-1">
              {t("createAccount")}
            </Link>
            {t("toSave")}
          </p>
        </div>
      </div>

      {/* Wishlist content */}
      <div className="p-3">
        {items.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">{t("empty")} 💔</p>
        ) : (
          items.map((item) => (
            <ProductWishlistedCard key={item.productId} product={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
