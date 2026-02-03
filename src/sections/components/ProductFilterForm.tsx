import { useState } from "react";

export type ProductFilter = {
  category?: string;
  priceMin?: number;
  priceMax?: number;
  discount?: number;
  search?: string;
  page?: number;
  pageSize?: number;
};

type Props = {
  onFilterChange: (filter: ProductFilter) => void;
};

const categories = ["Electronics", "Clothing", "Books"];

export default function ProductFilterForm({ onFilterChange }: Props) {
  const [filter, setFilter] = useState<ProductFilter>({
    category: "",
    priceMin: undefined,
    priceMax: undefined,
    discount: undefined,
    search: "",
    page: 1,
    pageSize: 10,
  });

  const handleChange = (key: keyof ProductFilter, value: any) => {
    const updated = { ...filter, [key]: value };
    setFilter(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-4 bg-white shadow rounded space-y-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border p-2 rounded"
        value={filter.search}
        onChange={(e) => handleChange("search", e.target.value)}
      />

      {/* Category */}
      <select
        className="w-full border p-2 rounded"
        value={filter.category}
        onChange={(e) => handleChange("category", e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Price */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min Price"
          className="w-1/2 border p-2 rounded"
          value={filter.priceMin ?? ""}
          onChange={(e) => handleChange("priceMin", Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="w-1/2 border p-2 rounded"
          value={filter.priceMax ?? ""}
          onChange={(e) => handleChange("priceMax", Number(e.target.value))}
        />
      </div>

      {/* Discount */}
      <input
        type="number"
        placeholder="Min Discount (%)"
        className="w-full border p-2 rounded"
        value={filter.discount ?? ""}
        onChange={(e) => handleChange("discount", Number(e.target.value))}
      />

      {/* Pagination */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Page"
          className="w-1/2 border p-2 rounded"
          value={filter.page ?? 1}
          onChange={(e) => handleChange("page", Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Page Size"
          className="w-1/2 border p-2 rounded"
          value={filter.pageSize ?? 10}
          onChange={(e) => handleChange("pageSize", Number(e.target.value))}
        />
      </div>
    </div>
  );
}

