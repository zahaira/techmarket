import NotFound from "@/app/not-found";
import { _mockCategories } from "@/shared/_mock/_category";
import { getProductCardItemsByCategorySlug } from "@/shared/_mock/_product";
import Breadcrumbs from "@/shared/section/components/Breadcrumbs";
import ProductListView from "@/shared/section/products/view/ProductListView";
import {
  buildBreadcrumbs,
  findCategoryBySlugPath,
} from "@/shared/utils/category";
import React from "react";

interface CategoryPageProps {
  params: { slug: string[] };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  const category = findCategoryBySlugPath(slug, _mockCategories);
  if (!category) {
    return NotFound();
  }
  const breadcrumbs = buildBreadcrumbs(category, _mockCategories);

  const products = await getProductCardItemsByCategorySlug(
    slug[slug.length - 1]
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={breadcrumbs} slugArray={slug} />
      <ProductListView products={products} category={category} />
    </div>
  );
};

export default CategoryPage;
