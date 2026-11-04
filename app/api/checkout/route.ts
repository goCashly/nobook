import { NextResponse } from "next/server";
import { getProduct, type Product } from "@/lib/products";
import { isDemoMode, siteUrl, stripe } from "@/lib/payments";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const ids: string[] = Array.isArray(body.productIds) ? body.productIds : [];
  const items = ids.map(getProduct).filter((p): p is Product => Boolean(p));
  if (items.length === 0) return NextResponse.json({ error: "Unknown product" }, { status: 400 });

  if (isDemoMode()) {
    // No real payment — jump straight to the download page (local testing only)
    return NextResponse.json({ url: `/success?session_id=demo_${items[0].id}` });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Payments are not configured yet. Please contact us." }, { status: 503 });
  }

  const session = await stripe().checkout.sessions.create({
    mode: "payment",
    line_items: items.map((p) => ({
      quantity: 1,
      price_data: {
        currency: "cad",
        unit_amount: p.price,
        product_data: { name: p.title, description: p.description },
      },
    })),
    metadata: { productIds: items.map((p) => p.id).join(",") },
    automatic_tax: { enabled: false },
    allow_promotion_codes: true,
    success_url: `${siteUrl()}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl()}/courses/${items[0].course}`,
  });

  return NextResponse.json({ url: session.url });
}
