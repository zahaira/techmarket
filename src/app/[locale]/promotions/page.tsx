import { getBestOfferProductsPaginated } from "@/_mock/_productMock";
import Pagination from "@/components/Pagination";
import ProductListView from "@/sections/products/view/ProductListView";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import React from "react";

type Props = {
  searchParams: Promise<{ page?: string }>;  
};

const Page = async ({ searchParams }: Props) => {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const limit = 22;
  const locale = (await cookies()).get("NEXT_LOCALE")?.value || "en";
  const t = await getTranslations("homePage");
  const result = getBestOfferProductsPaginated(locale, page, limit);
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <ProductListView products={result.data} title={t('best_offer')} />
      <Pagination
        currentPage={result.page}
        totalPages={result.totalPages}
      />
    </div>
  );
};

export default Page;
