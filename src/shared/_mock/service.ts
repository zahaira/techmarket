import { Category } from "../types/category";
import { _mockCategories, CategoryBackend } from "./_category";

// 2. Fonction de transformation
export function mapCategoriesToLocale(
  categories: CategoryBackend[],
  locale: string
): Category[] {
  return categories.map((cat) => {
    const translation = cat.translations.find((t) => t.locale === locale);
    if (!translation) {
      throw new Error(
        `Translation not found for category ${cat.categoryId} and locale ${locale}`
      );
    }

    return {
      categoryId: cat.categoryId,
      name: translation.name,
      slug: cat.slug,
      seoTitle: translation.seoTitle,
      seoDescription: translation.seoDescription,
      iconName: cat.iconName,
      image: cat.image,
      parentId: cat.parentId,
      children: cat.children
        ? mapCategoriesToLocale(cat.children, locale)
        : undefined,
    };
  });
}

// 3. Utilisation
// const categoriesEn = mapCategoriesToLocale(_mockCategories, "en");
// const categoriesAr = mapCategoriesToLocale(_mockCategories, "ar");
