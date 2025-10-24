import { Link } from "@/i18n/navigation";
import { _mockCategories } from "@/shared/_mock/_category";
import { getProductCardItemsByCategorySlug } from "@/shared/_mock/_productMock";
import { mapCategoriesToLocale } from "@/shared/_mock/service";
import Breadcrumbs from "@/shared/section/components/Breadcrumbs";
import ProductListView from "@/shared/section/products/view/ProductListView";
import {
  buildBreadcrumbs,
  findCategoryBySlugPath,
} from "@/shared/utils/category";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import React from "react";

interface CategoryPageProps {
  params: { slug: string[] };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const locale = (await cookies()).get("NEXT_LOCALE")?.value || "en";
  const categories = mapCategoriesToLocale(_mockCategories, locale);
  const tNotFound = await getTranslations("NotFound");
  const t = await getTranslations("nav");
  const category = findCategoryBySlugPath(slug, categories);
  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center text-center px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          {tNotFound("title")}
        </h2>
        <p className="text-gray-600 mb-6">{tNotFound("description")}</p>
        <Link
          href="/"
          className="bg-primary-dark text-white px-6 py-3 rounded-full hover:bg-primary-main transition"
        >
          {tNotFound("backHome")}
        </Link>
      </div>
    );
  }
  const breadcrumbLinks = [
    { name: t("home"), href: "/" },
    ...buildBreadcrumbs(category, categories).map((item) => ({
      name: item.name,
      href: item.slugPath ? `/category/${item.slugPath.join("/")}` : undefined,
    })),
  ];

  const products = await getProductCardItemsByCategorySlug(
    slug[slug.length - 1],
    locale
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <Breadcrumbs links={breadcrumbLinks} />
      <ProductListView products={products} category={category} />
    </div>
  );
};

export default CategoryPage;
