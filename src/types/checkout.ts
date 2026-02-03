import { ProductCardItem } from "./product";

export interface CartItem extends ProductCardItem {
  quantity: number;
}
