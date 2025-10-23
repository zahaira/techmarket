"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { useWishlistStore } from "../api/stores/wishlistStore";
import IconWithBadge from "./component/IconWithBadge";
import Wishlist from "../section/wishlist/Wishlist";
import Modal from "./component/Modal";
import { useCartStore } from "../api/stores/CartStore";
import { useLocale, useTranslations } from "next-intl";

interface HeaderMainProps {
  toggleSidebar: () => void;
}

const HeaderMain = ({ toggleSidebar }: HeaderMainProps) => {
  const { items: wishlistItems } = useWishlistStore();
  const { items: cartItems } = useCartStore();
  const tPlaceHolder = useTranslations("placeholders");

  const wishlistCount = wishlistItems.length;
  const cartCount = cartItems.length;

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const locale = useLocale();
  return (
    <header
      className={` ${
        locale === "ar" ? " sm:mr-[70px]" : " sm:ml-[70px]"
      } border-b border-gray-200 py-4 sm:ml-[70px]`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
          {/* Burger menu (mobile only) */}
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={toggleSidebar}
            className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#4da6ff] text-white rounded-full shadow-md"
          >
            <GiHamburgerMenu className="text-2xl" />
          </button>

          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center"
          >
            Tech<span className="text-[#4da6ff] ml-1">Market</span>
          </Link>

          {/* Mobile Icons */}
          <div className="sm:hidden flex items-center gap-3 text-gray-600 text-[19px] ml-3">
            <IconWithBadge icon={<FiUser />} ariaLabel="User profile" />
            <IconWithBadge
              icon={<FiHeart />}
              count={wishlistCount}
              ariaLabel="Wishlist"
              onClick={() => setIsWishlistOpen(true)}
            />
            <IconWithBadge
              icon={<LuShoppingCart />}
              count={cartCount}
              ariaLabel="Shopping cart"
              href="/cart"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-[300px] md:w-[60%]">
          <input
            type="text"
            placeholder={tPlaceHolder("search")}
            className="w-full border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <BsSearch
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center gap-6 text-gray-600 text-2xl">
          <IconWithBadge
            icon={<FiHeart />}
            count={wishlistCount}
            ariaLabel="Wishlist"
            onClick={() => setIsWishlistOpen(true)}
          />
          <IconWithBadge
            icon={<LuShoppingCart />}
            count={cartCount}
            ariaLabel="Shopping cart"
            href="/cart"
          />
        </div>
      </div>

      {/* Modal Wishlist */}
      <Modal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)}>
        <Wishlist onClose={() => setIsWishlistOpen(false)} />
      </Modal>
    </header>
  );
};

export default HeaderMain;
