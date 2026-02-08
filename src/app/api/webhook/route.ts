import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// If the Stripe key is not set (build/demo), return a mock
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn("⚠️ Stripe key missing — using mock endpoint for build.");
}

export async function POST(req: NextRequest) {
  // ⚡ Build/demo mode: return a mock response
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.log("⚡ Using mock webhook response during build/demo");
    return NextResponse.json({
      received: true,
      message: "Mock webhook response",
    });
  }

  // ⚡ Real runtime mode
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text(); // important: use raw body to verify the webhook

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // ⚡ Handle Stripe events
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const products = JSON.parse(paymentIntent.metadata.products || "[]");
        console.log("✅ Paiement réussi pour:", products);
        // Update your database here if necessary
        break;
      }
      case "payment_intent.payment_failed":
        console.log("❌ Paiement échoué :", event.data.object);
        break;
      default:
        console.log(`Event non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
