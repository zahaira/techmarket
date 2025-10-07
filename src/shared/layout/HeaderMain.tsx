import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";

interface HeaderMainProps {
  toggleSidebar: () => void;
}

interface IconWithBadgeProps {
  icon: React.ReactElement;
  count?: number;
  ariaLabel?: string;
  onClick?: () => void;
}

const IconWithBadge = ({
  icon,
  count,
  ariaLabel,
  onClick,
}: IconWithBadgeProps) => (
  <button
    type="button"
    aria-label={ariaLabel}
    onClick={onClick}
    className="relative cursor-pointer hover:text-blue-600 transition focus:outline-none"
  >
    {icon}
    {count !== undefined && count > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-semibold rounded-full w-4 h-4 grid place-items-center">
        {count}
      </span>
    )}
  </button>
);

const HeaderMain = ({ toggleSidebar }: HeaderMainProps) => {
  const wishlistCount = 0;
  const cartCount = 0;

  return (
    <header className="border-b border-gray-200 py-4 sm:ml-[70px]">
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
            href="/"
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
            />
            <IconWithBadge
              icon={<LuShoppingCart />}
              count={cartCount}
              ariaLabel="Shopping cart"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-[300px] md:w-[60%]">
          <input
            type="text"
            placeholder="Search products..."
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
          />
          <IconWithBadge
            icon={<LuShoppingCart />}
            count={cartCount}
            ariaLabel="Shopping cart"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
