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

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <HeaderTop />
          <HeaderWithSidebar />
          <main className="sm:pl-[70px] w-full">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
