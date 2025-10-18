import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const body = await req.text(); // important : on doit utiliser raw body pour vérifier le webhook

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET! // à récupérer depuis le dashboard Stripe
    );

    // ⚡ Gérer les événements
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const products = JSON.parse(paymentIntent.metadata.products || "[]");
        console.log("✅ Paiement réussi pour:", products);
        // ici tu peux mettre à jour ta DB pour marquer la commande comme payée
        break;

      case "payment_intent.payment_failed":
        console.log("❌ Paiement échoué :", event.data.object);
        break;

      default:
        console.log(`Event non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
