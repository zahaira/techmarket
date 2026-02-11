import { getSearchProductsPaginated } from "@/_mock/_productMock";
import Pagination from "@/components/Pagination";
import ProductListView from "@/sections/products/view/ProductListView";
import { cookies } from "next/headers";

type Props = {
  searchParams: Promise<{ page?: string; query?: string }>;  
};

export default async function Page({ searchParams }: Props){
    const { page: pageParam, query: queryParam } = await searchParams;
    const locale = (await cookies()).get("NEXT_LOCALE")?.value || "en";
    const page = Number(pageParam) || 1;
    const limit = 22;
    const result = getSearchProductsPaginated(locale, page, limit, queryParam)

    return(
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
          <ProductListView products={result.data} query={queryParam} />
          <Pagination
            currentPage={result.page}
            totalPages={result.totalPages}
          />
        </div>
    );
}