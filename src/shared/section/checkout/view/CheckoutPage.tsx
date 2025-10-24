"use client";

import React, { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useCartStore } from "@/shared/api/stores/CartStore";
import SummarySection from "../SummarySection";
import PersonalInfoForm from "./PersonalInfoForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import CheckoutSection from "./CheckoutSection";

const CheckoutPage = () => {
  const router = useRouter();
  const { items } = useCartStore();

  const [shippingMethod, setShippingMethod] = useState("home");

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-700">
        <p className="text-xl font-semibold">Your cart is empty</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-4 py-2 bg-primary-main text-white rounded hover:bg-primary-dark transition"
        >
          Continue Shopping
        </button>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full flex flex-col gap-6">
          <Accordion
            type="single"
            collapsible
            className="bg-white p-3 rounded-lg shadow-md my-3"
          >
            <AccordionItem value="item-1" className="group">
              <AccordionTrigger className="hover:no-underline focus:no-underline w-full">
                <span className="font-medium text-base">
                  1. Customer address
                </span>
              </AccordionTrigger>
              <div className="px-1 flex flex-col gap-1 group-data-[state=open]:hidden transition-all duration-300">
                <hr className="w-full border-gray-300 my-1" />

                <span className="text-gray-800 text-sm">zahaira jaada</span>
                <span className="text-sm text-gray-600">
                  boukhakef, 122 rue jjj | sale | +2127655444
                </span>
              </div>

              <AccordionContent className="py-3 px-1">
                <PersonalInfoForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Shipping Method */}
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div>
              <h2 className="font-medium text-base">2. Shipping Method</h2>
              <hr className="w-full border-gray-300 mb-3 mt-5" />
            </div>

            <div className="flex gap-4 text-sm text-gray-800">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  value="home"
                  checked={shippingMethod === "home"}
                  onChange={() => setShippingMethod("home")}
                />
                Home Delivery (Free)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  value="store"
                  checked={shippingMethod === "store"}
                  onChange={() => setShippingMethod("store")}
                />
                Pickup Store
              </label>
            </div>
          </div>

          {/* Peyment Method */}
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <div>
              <h2 className="font-medium text-base">3. Payment</h2>
              <hr className="w-full border-gray-300 mb-3 mt-5" />
            </div>

            <CheckoutSection />
          </div>
        </div>
        {/* --- Summary Section --- */}
        <SummarySection />
      </div>
    </div>
  );
};

export default CheckoutPage;
