//discount
export type DiscountType = "percentage" | "fixed";

export interface Discount {
  type: DiscountType;
  value: number; // 10% ou 50€
  startAt?: string; // date ISO
  endAt?: string; // date ISO
}

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
  price: number; // prix de base (pour affichage si pas de variant)
  discount?: Discount; // discount global du produit
  stock: number; // stock total (optionnel si toutes les variantes ont leur stock)
  seoTitle?: string;
  seoDescription?: string;
  coverUrl: string; // image principale
  images: string[]; // autres images du produit
  categoryIds: string[]; // plusieurs catégories possibles
  attributes?: ProductAttribute; // attributs généraux du produit
  warranty?: number;
  bestSeller?: boolean;
  bgGradient?: string;
  variants?: ProductVariant[]; // liste des variantes
  createdAt: Date;
  updatedAt: Date;
}

// 3. Product Variant (optional but useful)

export interface ProductVariant {
  id: string; // identifiant unique de la variante (SKU)
  productId: string; // référence au produit parent
  name: string; // ex: "256GB, Noir"
  price: number; // prix spécifique à la variante
  stock: number; // stock disponible
  attributes?: ProductAttribute; // couleur, taille, RAM, etc.
  discount?: Discount; // optionnel, peut avoir un discount spécifique
}
