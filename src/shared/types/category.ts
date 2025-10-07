// 1. Category
export type Category = {
  categoryId: string;
  name: string;
  slug: string; // e.g. "mobile-phones" Use slug for routes:
  // /category/laptops
  // /category/phones
  // /category/accessories
  seoTitle?: string;
  seoDescription?: string;
  iconName: string;
  image: string;
  children?: Category[];
};
