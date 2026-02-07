// 2. Product

export type ProductFilter = {
  categories: string[];
  price: number;
  discount: number | null;
};
export type kProductFilter = {
  categoryId?: string[];
  priceMin?: number;
  priceMax?: number;
  discount?: number;
  search?: string;
  page?: number;
  size?: number;
};

export interface ProductAttribute {
  name: string;
  value: string | boolean | number;
}
export interface Product {
  productId: string;
  name: string;
  slug: string;
  subDescription?: string;
  description?: string;
  price: number;
  priceSale?: number;
  discountPercentage?: number;
  stock: number;
  seoTitle?: string;
  seoDescription?: string;
  coverUrl: string;
  images: string[];
  categoryIds: string[];
  primaryCategoryId: string; // used for breadcrumbs and canonical paths
  keyPoints?: ProductAttribute[];
  attributes?: ProductAttribute[];
  warranty?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  totalSold: number;
  bgGradient?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductCardItem {
  productId: string;
  name: string;
  stock: number;
  price: number;
  priceSale?: number;
  slug: string;
  discountPercentage?: number;
  isNew?: boolean;
  totalSold: number;
  coverUrl: string;
  createdAt: Date;
  categoryIds: string[];
}
