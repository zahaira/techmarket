"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import Modal from "./component/Modal";
import AuthPage from "../section/auth/AuthPage";
import LocaleSwitcher from "./component/LocaleSwitcher";

const HeaderTop = () => {
  const [isAuthPageOpen, setIsAuthPageOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 hidden sm:block sm:ml-[70px]">
      <div className="container mx-auto  py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-xs hover:text-gray-800 transition-colors duration-200">
            <Link href="#">Contact-us</Link>
          </div>
          <div className="flex gap-4 items-center">
            <LocaleSwitcher />
            <div className="text-gray-500">|</div>
            <button
              onClick={() => setIsAuthPageOpen(true)}
              className="flex gap-1 items-center text-gray-500 text-xs hover:bg-gray-100 hover:rounded-2xl py-1 px-2 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
            >
              <FiUser />
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* Modal Wishlist */}
      <Modal isOpen={isAuthPageOpen} onClose={() => setIsAuthPageOpen(false)}>
        <AuthPage onClose={() => setIsAuthPageOpen(false)} />
      </Modal>
    </div>
  );
};

export default HeaderTop;
