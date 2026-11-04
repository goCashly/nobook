import Icon from "./Icon";
import { formatPrice, type Product } from "@/lib/products";

// Step-by-step path through a program (e.g. Course 1 → Simulation 2), each step linking to its package
export default function ProgramPath({ steps }: { steps: Product[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => {
        const sim = s.kind === "simulation";
        return (
          <li key={s.id} className="relative">
            <a
              href={`#${s.id}`}
              className={`group flex h-full flex-col rounded-2xl border p-4 transition hover:-translate-y-1 hover:shadow-card ${
                sim ? "border-gold-400/60 bg-gold-400/10" : "border-navy-100 bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-extrabold ${
                    sim ? "bg-gold-500 text-navy-950" : "bg-navy-900 text-gold-400"
                  }`}
                >
                  {i + 1}
                </span>
                <span className={`text-xs font-bold uppercase tracking-wide ${sim ? "text-gold-600" : "text-navy-600"}`}>
                  {s.step}
                </span>
              </div>
              <p className="mt-3 flex-1 font-display text-sm font-bold leading-snug text-navy-900">
                {s.title.replace(/^Simulation Session \d+:\s*/, "")}
              </p>
              <p className="mt-3 flex items-center justify-between text-sm">
                <span className="font-bold text-navy-900">{formatPrice(s.price)}</span>
                <Icon name="arrow" className="h-4 w-4 text-gold-600 transition group-hover:translate-x-1" />
              </p>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
