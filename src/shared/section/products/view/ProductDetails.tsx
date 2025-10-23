import { _mockCategories } from "@/shared/_mock/_category";
import { Product } from "@/shared/types/product";
import { findCategoryPathById } from "@/shared/utils/category";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductDetailsSummary from "../ProductDetailsSummary";
import ProductDetailsCarousel from "../ProductDetailsCarousel";
import { useTranslations } from "next-intl";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const tShop = useTranslations("shop");
  const t = useTranslations("nav");
  const categoryPath =
    findCategoryPathById(_mockCategories, product.primaryCategoryId) || [];

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
        {product.attributes && (
          <div className="mt-6">
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full">
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(product.attributes).map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {key}
                      </td>
                      <td className="px-4 py-2 text-gray-900">{value}</td>
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
