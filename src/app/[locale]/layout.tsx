import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import HeaderTop from "@/shared/layout/HeaderTop";
import HeaderWithSidebar from "@/shared/layout/HeaderWithSidebar";
import Footer from "@/shared/layout/Footer";
import "./globals.css";
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: {
    default: "techmarket",
    template: "%s - Techmarket",
  },
  description:
    "Shop the latest PCs, smartphones, headphones, keyboards, and accessories at TechStore. Enjoy fast delivery, great deals, and secure online shopping.",
  keywords: [
    "PC",
    "laptop",
    "smartphone",
    "headphones",
    "keyboard",
    "gaming gear",
    "electronics",
    "online store",
    "tech store",
    "computer accessories",
    "mobile devices",
  ],
  twitter: {
    card: "summary_large_image",
  },
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider>
          <HeaderTop />
          <HeaderWithSidebar />
          <main
            className={`${
              locale === "ar" ? "sm:pr-[70px] " : "sm:pl-[70px] "
            } w-full`}
          >
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
