"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "@/components/PaymentForm";
import convertToSubcurrency from "@/shared/utils/convertToSubcurrency";
import { useCartStore } from "@/shared/api/stores/CartStore";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutSection() {
  const { items } = useCartStore();
  const amount = items.reduce(
    (acc, item) => acc + (item.priceSale ?? item.price) * item.quantity,
    0
  );

  return (
    <div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
          locale: "en",
        }}
      >
        <PaymentForm amount={amount} />
      </Elements>
    </div>
  );
}
