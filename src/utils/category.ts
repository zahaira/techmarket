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
  const stack: Category[] = [];

  let current: Category | undefined = category;
  while (current) {
    stack.unshift(current);
    current = allCategories.find((c) => c.categoryId === current?.parentId);
  }

  const path: string[] = [];
  for (const cat of stack) {
    path.push(cat.slug);
    breadcrumbs.push({
      name: cat.name,
      slugPath: [...path],
    });
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
