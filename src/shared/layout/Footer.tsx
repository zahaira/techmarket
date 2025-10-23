"use client";

import React, { useTransition } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("footer");
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };

  return (
    <footer
      className={`bg-gray-900 text-gray-300 pt-12 pb-6 ${
        locale === "ar" ? "sm:mr-[70px]" : "sm:ml-[70px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">
            {t("shop_name")}
          </h3>
          <p className="text-gray-400 text-sm">{t("about_text")}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t("quick_links")}</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("shop")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("about_us")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t("support")}</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("faq")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("shipping_returns")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("privacy_policy")}
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                {t("terms_conditions")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold mb-4">{t("follow_us")}</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Language Switcher */}
      <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <span
          onClick={() => changeLocale("en")}
          className={`mx-2 ${
            locale === "en"
              ? "text-white font-semibold cursor-default"
              : "text-gray-400 hover:text-white cursor-pointer"
          }`}
        >
          {t("language_en")}
        </span>
        |
        <span
          onClick={() => changeLocale("ar")}
          className={`mx-2 ${
            locale === "ar"
              ? "text-white font-semibold cursor-default"
              : "text-gray-400 hover:text-white cursor-pointer"
          }`}
        >
          {t("language_ar")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
