import { useCartStore } from "@/shared/api/stores/CartStore";
import { fCurrency } from "@/shared/utils/format-number";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SummarySection = () => {
  const tCart = useTranslations("cart");
  const tCheckout = useTranslations("checkout");
  const tShop = useTranslations("shop");
  const { items } = useCartStore();
  const subtotal = items.reduce(
    (acc, item) => acc + (item.priceSale ?? item.price) * item.quantity,
    0
  );

  return (
    <div className="w-full lg:w-100 flex-shrink-0">
      <div className="rounded-lg p-4 shadow-sm bg-white sticky top-24 space-y-4">
        <h2 className="text-lg font-semibold mb-2">
          {tCheckout("order_summary")}
        </h2>

        <div className="">
          <div className="grid grid-cols-[3fr_1fr] border-b border-gray-300 pb-2">
            <div>{tShop("product")}</div>
            <div className="text-end">{tCart("subtotal")}</div>
          </div>
          <div className="divide-y divide-gray-200">
            {items.map((product) => {
              const productPrice = product.priceSale ?? product.price;
              const productSubtotal = productPrice * product.quantity;

              return (
                <div
                  key={product.productId}
                  className="grid grid-cols-[3fr_1fr] py-3"
                >
                  <div className="flex gap-2">
                    <div className="relative w-15 h-15">
                      <Image
                        src={product.coverUrl}
                        alt={product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900 text-sm">
                        {product.name}
                      </span>
                      <span className="text-xs text-gray-700">
                        {tShop("quantity")} : {product.quantity}
                      </span>
                    </div>
                  </div>
                  <span className="text-end text-gray-700">
                    {fCurrency(productSubtotal)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="border-gray-300" />

        <div className="flex justify-between font-bold text-lg text-primary-dark">
          <span>{tCart("total")}</span>
          <span>{fCurrency(subtotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
