import Stripe from "stripe";
import { getProduct, type Product } from "./products";

export const isDemoMode = () => process.env.DEMO_MODE === "true" && !process.env.STRIPE_SECRET_KEY;

let client: Stripe | null = null;
export function stripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  if (!client) client = new Stripe(key);
  return client;
}

export const siteUrl = () => process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/**
 * Looks up a checkout and returns the products it paid for.
 * In demo mode the "session" is simply the product id, so you can test downloads without Stripe.
 */
export async function getPaidProducts(sessionId: string): Promise<{ products: Product[]; email?: string } | null> {
  if (isDemoMode()) {
    if (!sessionId.startsWith("demo_")) return null;
    const product = getProduct(sessionId.slice(5));
    return product ? { products: [product], email: "demo@nobooks.ca" } : null;
  }

  try {
    const session = await stripe().checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return null;
    const ids = (session.metadata?.productIds || "").split(",");
    const paid = ids.map(getProduct).filter((p): p is Product => Boolean(p));
    return { products: paid, email: session.customer_details?.email ?? undefined };
  } catch {
    return null;
  }
}
