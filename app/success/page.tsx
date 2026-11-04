import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { getPaidProducts } from "@/lib/payments";
import { formatPrice } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Your Downloads", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function SuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams.session_id || "";
  const order = sessionId ? await getPaidProducts(sessionId) : null;

  if (!order || order.products.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-3xl font-extrabold text-navy-900">We couldn&apos;t find a paid order</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          If you just paid, please refresh in a few seconds. Still stuck? Message us with your receipt and we&apos;ll
          sort it out right away.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a href={whatsappLink("Hi, I paid for notes but can't see my download.")} className="btn-gold">
            <Icon name="whatsapp" className="h-4 w-4" /> Get help
          </a>
          <Link href="/courses" className="rounded-xl border border-navy-100 px-5 py-3 text-sm font-bold text-navy-800">
            Back to notes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-x py-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-navy-100 bg-white p-8 shadow-card sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <Icon name="check" className="h-9 w-9" />
        </span>
        <h1 className="mt-6 text-center font-display text-3xl font-extrabold text-navy-900">Payment successful!</h1>
        <p className="mt-2 text-center text-slate-600">
          Thank you{order.email ? ` — a receipt was sent to ${order.email}` : ""}. Your notes are ready to download.
        </p>

        <ul className="mt-10 space-y-4">
          {order.products.map((p) => (
            <li key={p.id} className="flex flex-col gap-4 rounded-2xl border border-navy-100 p-5 sm:flex-row sm:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
                <Icon name="file" className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="font-display font-bold text-navy-900">{p.title}</p>
                <p className="text-xs text-slate-500">
                  PDF · {p.pages} pages · {formatPrice(p.price)}
                </p>
              </div>
              <a
                href={`/api/download?session_id=${encodeURIComponent(sessionId)}&product=${p.id}`}
                className="btn-gold justify-center"
              >
                <Icon name="download" className="h-4 w-4" /> Download
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 rounded-xl bg-gold-400/10 p-4 text-center text-sm text-navy-800">
          <strong>Tip:</strong> bookmark this page — you can come back to it to download your notes again.
        </p>
      </div>
    </div>
  );
}
