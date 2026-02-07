"use client";

import React, { useTransition } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import FeaturesSection from "@/sections/home/FeaturesSection";

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

  const SupportLinks = () => (
    <ul className="space-y-2 text-base">
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("faq")}
        </Link>
      </li>
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("shipping_returns")}
        </Link>
      </li>
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("privacy_policy")}
        </Link>
      </li>
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("terms_conditions")}
        </Link>
      </li>
    </ul>
  );

  const QuickLinks = () => (
    <ul className="space-y-2 text-base">
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("home")}
        </Link>
      </li>
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("shop")}
        </Link>
      </li>
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("about_us")}
        </Link>
      </li>
      <li>
        <Link href="/" className="text-gray-500 hover:text-primary-main transition-colors">
          {t("contact")}
        </Link>
      </li>
    </ul>
  );

  return (
    <footer
      className={`bg-light text-black-100 pt-12 pb-6 ${
        locale === "ar" ? "sm:mr-[70px]" : "sm:ml-[70px]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold text-primary-main flex items-center"
          >
            Tech<span className="text-dark">Market</span>
          </Link>
          <p className="text-gray-500 text-base">{t("about_text")}</p>
        </div>

        {/* Quick Links */}
        <div className="hidden md:block">
          <h4 className="text-dark text-lg font-semibold mb-4">{t("quick_links")}</h4>
          {QuickLinks()}
        </div>

        {/* Support */}
        <div className="hidden md:block">
          <h4 className="text-dark text-lg font-semibold mb-4">{t("support")}</h4>
          {SupportLinks()}
        </div>

        <Accordion
          type="single"
          collapsible
          className="md:hidden"
        >
          <AccordionItem value="quick-links" className="group">
            <AccordionTrigger className="hover:no-underline focus:no-underline w-full">
              <span className="text-dark text-lg font-semibold">
               {t("quick_links")}
              </span>
            </AccordionTrigger>
            <AccordionContent className="py-3 px-1">
              {QuickLinks()}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support" className="group">
            <AccordionTrigger className="hover:no-underline focus:no-underline w-full">
              <span className="text-dark text-lg font-semibold">
               {t("support")}
              </span>
            </AccordionTrigger>
            <AccordionContent className="py-3 px-1">
              {SupportLinks()}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Social */}
        <div className="text-center md:text-start">
          <h4 className="text-primary-main font-semibold mb-4">{t("follow_us")}</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="text-primary-light hover:text-primary-main transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-primary-light hover:text-primary-main transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-primary-light hover:text-primary-main transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-primary-light hover:text-primary-main transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <FeaturesSection />
      </div>

      {/* Language Switcher */}
      <div className="mt-6 border-t border-gray-400 pt-6 text-center text-primary-main text-sm">
        <span
          onClick={() => changeLocale("en")}
          className={`mx-2 ${
            locale === "en"
              ? "text-primary-main font-semibold cursor-default"
              : "text-gray-500 hover:text-gray-600 cursor-pointer"
          }`}
        >
          {t("language_en")}
        </span>
        |
        <span
          onClick={() => changeLocale("ar")}
          className={`mx-2 ${
            locale === "ar"
              ? "text-primary-main font-semibold cursor-default"
              : "text-gray-500 hover:text-gray-600 cursor-pointer"
          }`}
        >
          {t("language_ar")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
