import { ProductCardItem } from "@/shared/types/product";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { LuShoppingCart } from "react-icons/lu";

interface ProductAddToCartButtonProps {
  product: ProductCardItem;
  isInCart: boolean;
  addToCart: (product: ProductCardItem, quantity?: number) => void;
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: { btn: "p-2 text-sm", icon: "h-4 w-4" },
  md: { btn: "px-6 py-3", icon: "h-5 w-5" },
};

const ProductAddToCartButton = ({
  product,
  isInCart,
  addToCart,
  size = "sm",
}: ProductAddToCartButtonProps) => {
  const tBtn = useTranslations("buttons");
  const tShop = useTranslations("shop");
  const router = useRouter();

  const handleClick = () => {
    if (isInCart) {
      router.push("/cart");
    } else {
      addToCart(product);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={product.stock === 0}
      className={`flex w-full items-center justify-center gap-1 rounded-[12px] ${
        sizeStyles[size].btn
      } py-2 font-semibold transition-all duration-300 shadow-md ${
        product.stock === 0
          ? "bg-gray-300 text-gray-600"
          : size === "md"
          ? "bg-primary-dark hover:bg-primary-main text-white cursor-pointer"
          : "bg-white text-black hover:text-primary-main cursor-pointer"
      }`}
    >
      <LuShoppingCart className={`${sizeStyles[size].icon}`} />
      {product.stock === 0
        ? tShop("out_of_stock")
        : isInCart
        ? tBtn("view_cart")
        : tBtn("add_to_cart")}
    </button>
  );
};

export default ProductAddToCartButton;
