// 2. Product
export interface ProductAttribute {
  [key: string]: string | number | boolean; // { color: "red", storage: "128GB"}
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
  keyPoints?: ProductAttribute;
  attributes?: ProductAttribute;
  warranty?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  bgGradient?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductCardItem {
  productId: string;
  name: string;
  price: number;
  priceSale: number;
  slug: string;
  discountPercentage?: number;
  isNew?: boolean;
  coverUrl: string;
}
