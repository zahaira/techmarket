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
import en from "../../../messages/en.json";
import ar from "../../../messages/ar.json";

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = locale === "ar" ? ar.NotFound : en.NotFound;
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
