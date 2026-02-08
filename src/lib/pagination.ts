export type PaginatedResult<T> = {
  data: T[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
};

export function paginate<T>(
  items: T[],
  page: number,
  limit: number
): PaginatedResult<T> {
  const total = items.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: items.slice(start, end),
    total,
    totalPages,
    page,
    limit,
  };
}
