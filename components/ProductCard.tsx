import Icon from "./Icon";
import BuyButton from "./BuyButton";
import { formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const saving = product.compareAt ? product.compareAt - product.price : 0;

  return (
    <article
      id={product.id}
      className={`relative flex scroll-mt-32 flex-col rounded-2xl border bg-white p-6 shadow-card transition hover:-translate-y-1 ${
        product.bestValue ? "border-gold-400 ring-2 ring-gold-400/40" : "border-navy-100"
      }`}
    >
      {product.bestValue && (
        <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-900 shadow">
          Best value
        </span>
      )}
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
          <Icon name="file" className="h-6 w-6" />
        </span>
        <div>
          {product.step && (
            <span
              className={`mb-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                product.kind === "simulation" ? "bg-gold-400/20 text-gold-600" : "bg-navy-50 text-navy-600"
              }`}
            >
              {product.step}
            </span>
          )}
          <h3 className="font-display text-lg font-bold leading-snug text-navy-900">{product.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{product.description}</p>
        </div>
      </div>

      <div className="mt-5 flex items-end gap-2">
        <span className="font-display text-3xl font-extrabold text-navy-900">{formatPrice(product.price)}</span>
        {product.compareAt && (
          <span className="mb-1 text-sm text-slate-400 line-through">{formatPrice(product.compareAt)}</span>
        )}
        {saving > 0 && (
          <span className="mb-1 ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">
            Save {formatPrice(saving)}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-slate-500">
        PDF · {product.pages} pages{product.questions ? ` · ${product.questions}+ questions` : ""} · Instant download
      </p>

      <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
        {product.includes.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> {i}
          </li>
        ))}
      </ul>

      <BuyButton productId={product.id} className="mt-6" />
    </article>
  );
}
