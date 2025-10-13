import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductCardItem } from "@/shared/types/product";

interface WishlistStore {
  items: ProductCardItem[];
  addToWishlist: (product: ProductCardItem) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (product) => {
        const { items } = get();
        if (!items.find((p) => p.productId === product.productId)) {
          set({ items: [...items, product] });
        }
      },
      removeFromWishlist: (productId) => {
        set({ items: get().items.filter((p) => p.productId !== productId) });
      },
      isInWishlist: (productId) => {
        return get().items.some((p) => p.productId === productId);
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
