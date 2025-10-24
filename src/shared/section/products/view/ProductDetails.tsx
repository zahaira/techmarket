import { Product } from "@/shared/types/product";
import { findCategoryPathById } from "@/shared/utils/category";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductDetailsSummary from "../ProductDetailsSummary";
import ProductDetailsCarousel from "../ProductDetailsCarousel";
import { useLocale, useTranslations } from "next-intl";
import { mapCategoriesToLocale } from "@/shared/_mock/service";
import { _mockCategories } from "@/shared/_mock/_category";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const tShop = useTranslations("shop");
  const t = useTranslations("nav");
  const locale = useLocale();
  const categories = mapCategoriesToLocale(_mockCategories, locale);
  const categoryPath =
    findCategoryPathById(categories, product.primaryCategoryId) || [];

  const links = [
    { name: t("home"), href: "/" },
    ...categoryPath.map((cat, idx) => ({
      name: cat.name,
      href: `/category/${categoryPath
        .slice(0, idx + 1)
        .map((c) => c.slug)
        .join("/")}`,
    })),
    { name: product.name },
  ];

  return (
    <>
      <Breadcrumbs links={links} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
        <ProductDetailsCarousel product={product} />
        <ProductDetailsSummary product={product} />
      </div>
      <div className="space-y-6 mt-20">
        {/* Titre du produit */}
        <h1 className="text-2xl font-bold text-gray-800">{tShop("details")}</h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Attributs */}
        {product.attributes && product.attributes.length > 0 && (
          <div className="mt-6">
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.attributes.map((attr, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {attr.name}
                      </td>
                      <td className="px-4 py-2 text-gray-900">
                        {String(attr.value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
