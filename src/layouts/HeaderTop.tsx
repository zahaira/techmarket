"use client";

import { Link } from "@/i18n/navigation";
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import Modal from "./component/Modal";
import AuthPage from "../sections/auth/AuthPage";
import LocaleSwitcher from "./component/LocaleSwitcher";
import { useLocale, useTranslations } from "next-intl";

const HeaderTop = () => {
  const [isAuthPageOpen, setIsAuthPageOpen] = useState(false);
  const tNav = useTranslations("nav");
  const tAuth = useTranslations("auth");
  const locale = useLocale();
  return (
    <div
      className={`${
        locale === "ar" ? " sm:mr-[70px]" : " sm:ml-[70px]"
      } bg-primary-dark hidden sm:block`}
    >
      <div className="container mx-auto  py-2 px-4">
        <div className="flex justify-between items-center">
          <div className="text-light text-xs hover:text-light transition-colors duration-200">
            <Link href="#">{tNav("contact")}</Link>
          </div>
          <div className="flex gap-4 items-center">
            <LocaleSwitcher />
            <div className="text-light">|</div>
            <button
              onClick={() => setIsAuthPageOpen(true)}
              className="flex gap-1 items-center text-light text-xs hover:bg-light hover:rounded-2xl py-1 px-2 hover:text-dark transition-colors duration-200 cursor-pointer"
            >
              <FiUser />
              {tAuth("login")}
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
