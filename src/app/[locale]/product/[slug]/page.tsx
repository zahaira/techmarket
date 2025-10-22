import NotFound from "@/app/[locale]/not-found";
import { getProductBySlug } from "@/shared/_mock/_product";
import ProductDetails from "@/shared/section/products/view/ProductDetails";
import React from "react";

interface props {
  params: { slug: string };
}

const page = async ({ params }: props) => {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return NotFound();
  }
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductDetails product={product} />
    </div>
  );
};

export default page;
