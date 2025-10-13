import { Product, ProductCardItem } from "../types/product";

export const toProductCardItem = (product: Product): ProductCardItem => ({
  productId: product.productId,
  name: product.name,
  price: product.price,
  stock: product.stock,
  isNew: product.isNew,
  coverUrl: product.coverUrl,
  slug: product.slug,
  discountPercentage: product.discountPercentage,
  priceSale: product.priceSale,
});
