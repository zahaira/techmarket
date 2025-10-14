"use client";

import React from "react";
import QuantitySelector from "@/shared/section/components/QuantitySelector";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/shared/api/stores/CartStore";
import { fCurrency } from "@/shared/utils/format-number";
import Link from "next/link";

const CartPage = () => {
  const router = useRouter();
  const { items, removeFromCart, updateQuantity } = useCartStore();

  const subtotal = items.reduce(
    (acc, item) => acc + (item.priceSale ?? item.price) * item.quantity,
    0
  );

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-700">
        <p className="text-xl font-semibold">Your cart is empty</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-4 py-2 cursor-pointer bg-primary text-white rounded hover:bg-primary-dark transition"
        >
          Continue Shopping
        </button>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-white p-12 shadow-sm rounded-lg">
          <div className="hidden md:grid grid-cols-[25px_90px_1fr_100px_120px_100px] gap-4 font-semibold text-gray-600 border-b border-gray-300 pb-2">
            <div></div>
            <div></div>
            <div>Product</div>
            <div className="text-center">Price</div>
            <div className="text-center">Quantity</div>
            <div className="text-center">Subtotal</div>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {items.map((product) => {
              const productPrice = product.priceSale ?? product.price;
              const productSubtotal = productPrice * product.quantity;

              return (
                <div
                  key={product.productId}
                  className="py-4 grid grid-cols-1 md:grid-cols-[25px_90px_1fr_100px_120px_100px] items-center gap-4"
                >
                  <button
                    onClick={() => removeFromCart(product.productId)}
                    className="text-gray-500 cursor-pointer transition self-start md:self-center hidden md:block "
                  >
                    <FiX className="text-lg" />
                  </button>

                  {/* --- MOBILE --- */}
                  <div className="md:hidden grid grid-cols-[90px_1fr] gap-4 items-start">
                    {/* Image */}
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Link href={`/product/${product.slug}`}>
                        <Image
                          src={product.coverUrl}
                          alt={product.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </Link>
                    </div>

                    {/* Infos produit */}
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/product/${product.slug}`}
                          className="font-medium text-gray-900 hover:text-gray-700 text-sm sm:text-base"
                        >
                          {product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(product.productId)}
                          className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                        >
                          <FiX className="text-lg" />
                        </button>
                      </div>

                      {/* Infos supplémentaires */}
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-gray-700 text-sm">
                          <span>Price:</span>
                          <span className="font-medium">
                            {fCurrency(productPrice)}
                          </span>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">Quantity:</span>
                          <QuantitySelector
                            stock={product.stock}
                            initial={product.quantity}
                            size="sm"
                            onChange={(q) =>
                              updateQuantity(product.productId, q)
                            }
                          />
                        </div>

                        <div className="flex justify-between font-semibold text-gray-900 text-sm">
                          <span>Subtotal:</span>
                          <span>{fCurrency(productSubtotal)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* --- DESKTOP ----*/}
                  <div className="hidden md:block relative w-24 h-24">
                    <Link href={`/product/${product.slug}`}>
                      <Image
                        src={product.coverUrl}
                        alt={product.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </Link>
                  </div>

                  <div className="hidden md:block font-medium text-gray-900">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </div>

                  <div className="hidden md:block text-gray-700 font-medium text-center">
                    {fCurrency(productPrice)}
                  </div>

                  <div className="hidden md:flex justify-center">
                    <QuantitySelector
                      stock={product.stock}
                      initial={product.quantity}
                      size="sm"
                      onChange={(q) => updateQuantity(product.productId, q)}
                    />
                  </div>

                  <div className="hidden md:block text-gray-900 text-center font-semibold">
                    {fCurrency(productSubtotal)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Summary Section --- */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="rounded-lg p-4 shadow-sm bg-white sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} Dhs</span>
            </div>

            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-2 border-gray-300" />

            <div className="text-center flex flex-col gap-3 my-2">
              <span className="text-gray-700 text-sm">We accept</span>
              <div className="flex gap-4 justify-center">
                <Image
                  src="/images/visa.png"
                  alt="visa"
                  width={64}
                  height={64}
                />
                <Image
                  src="/images/mastercard.png"
                  alt="visa"
                  width={64}
                  height={64}
                />
              </div>
            </div>

            <div className="flex justify-between font-bold text-lg text-primary-dark">
              <span>Total</span>
              <span>{subtotal.toFixed(2)} Dhs</span>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="mt-4 w-full bg-primary-dark cursor-pointer text-white py-2 rounded-md hover:bg-primary transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
