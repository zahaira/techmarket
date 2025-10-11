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
  const breadcrumbs: { name: string; slugPath: string[] }[] = [];
  let current: Category | undefined = category;
  const path: string[] = [];

  while (current) {
    path.unshift(current.slug); // build full path from root to current
    breadcrumbs.unshift({
      name: current.name,
      slugPath: [...path], // full path for each breadcrumb
    });
    current = allCategories.find((c) => c.categoryId === current?.parentId);
  }

  return breadcrumbs;
}

export function findCategoryPathById(
  categories: Category[],
  categoryId: string,
  path: Category[] = []
): Category[] | null {
  for (const cat of categories) {
    const newPath = [...path, cat];
    if (cat.categoryId === categoryId) {
      return newPath;
    }
    if (cat.children) {
      const childPath = findCategoryPathById(cat.children, categoryId, newPath);
      if (childPath) return childPath;
    }
  }
  return null;
}
