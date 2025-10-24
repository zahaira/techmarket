// import { NextResponse } from "next/server";
import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { amount } = await req.json();
//     const items = [
//       { id: "prod_1", name: "MacBook Air M3", price: 1200, quantity: 1 },
//       { id: "prod_2", name: "iPhone 15", price: 999, quantity: 2 },
//     ];

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "usd",
//       automatic_payment_methods: { enabled: true },
//       metadata: {
//         userId: "user_123",
//         orderId: "order_789",
//         products: JSON.stringify(items),
//       },
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     console.error("Internal Error:", error);
//     return NextResponse.json(
//       { error: `Internal Server Error: ${error}` },
//       { status: 500 }
//     );
//   }
// }

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("⚠️ Stripe key missing — using mock endpoint for build.");
}

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return Response.json({ clientSecret: "mock_secret_for_demo" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
  });

  return Response.json({ clientSecret: paymentIntent.client_secret });
}
