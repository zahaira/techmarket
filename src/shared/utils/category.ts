import { Category } from "../types/category";

export function findCategoryBySlugPath(
  slugArray: string[],
  categories: Category[]
): Category | null {
  let currentLevel = categories;
  let category: Category | undefined;

  for (const slug of slugArray) {
    category = currentLevel.find((c) => c.slug === slug);
    if (!category) return null;
    currentLevel = category.children || [];
  }

  return category || null;
}

export function buildBreadcrumbs(
  category: Category,
  allCategories: Category[]
) {
  const breadcrumbs: Category[] = [];
  let current: Category | undefined = category;

  while (current) {
    breadcrumbs.unshift(current);
    current = allCategories.find((c) => c.categoryId === current?.parentId);
  }

  return breadcrumbs;
}
