import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/Icon";
import { courses, productsFor } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Study Notes & Prices",
  description: "Prices for Real Estate, Mortgage, OMVIC, RIBO auto insurance and LLQP exam study notes. Order on WhatsApp.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero eyebrow="Shop" title="All study notes & prices">
        Choose your exam, message us on WhatsApp, and get your notes right away.
      </PageHero>

      <div className="sticky top-16 z-30 border-b border-navy-100 bg-white/95 backdrop-blur">
        <div className="container-x flex gap-2 overflow-x-auto py-3">
          {courses.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-navy-100 px-4 py-2 text-sm font-semibold text-navy-800 hover:border-gold-400 hover:bg-gold-400/10"
            >
              <Icon name={c.icon} className="h-4 w-4 text-gold-600" /> {c.short}
            </a>
          ))}
        </div>
      </div>

      <div className="container-x space-y-20 py-16">
        {courses.map((c) => (
          <section key={c.slug} id={c.slug} className="scroll-mt-36">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-gold-400 ring-4 ring-gold-400/30">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <div>
                  <p className="eyebrow">{c.regulator}</p>
                  <h2 className="font-display text-2xl font-extrabold text-navy-900 sm:text-3xl">{c.name}</h2>
                </div>
              </div>
              <Link href={`/courses/${c.slug}`} className="flex items-center gap-1 text-sm font-bold text-navy-700 hover:text-gold-600">
                Course details <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {productsFor(c.slug).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
