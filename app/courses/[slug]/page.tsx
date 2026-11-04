import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/Icon";
import ProgramPath from "@/components/ProgramPath";
import { courses, formatPrice, getCourse, productsFor } from "@/lib/products";
import { site, telLink, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = getCourse(params.slug);
  if (!course) return {};
  return { title: `${course.name} Exam Notes`, description: course.summary };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) notFound();
  const items = productsFor(course.slug);
  const steps = items.filter((p) => p.step);
  const bundles = steps.length > 0 ? items.filter((p) => !p.step) : [];
  const stepsTotal = steps.reduce((sum, p) => sum + p.price, 0);
  const others = courses.filter((c) => c.slug !== course.slug);

  return (
    <>
      <PageHero eyebrow={course.regulator} title={`${course.name} exam notes`}>
        {course.summary}
      </PageHero>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <div className="grid gap-4 sm:grid-cols-3">
            {course.highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-card">
                <Icon name="check" className="h-5 w-5 shrink-0 text-emerald-600" />
                <span className="text-sm font-semibold text-navy-900">{h}</span>
              </div>
            ))}
          </div>

          {steps.length > 0 ? (
            <>
              <h2 className="mt-14 font-display text-2xl font-extrabold text-navy-900">Your path to a licence</h2>
              <p className="mt-2 text-slate-600">
                {steps.length} steps, in order. Click any step to see its notes.
              </p>
              <div className="mt-6">
                <ProgramPath steps={steps} />
              </div>

              {bundles.map((b) => (
                <div
                  key={b.id}
                  className="mt-14 grid gap-8 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white sm:p-8 md:grid-cols-2 md:items-center"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Best value</p>
                    <h2 className="mt-2 font-display text-3xl font-extrabold">Get the whole program</h2>
                    <p className="mt-3 text-navy-100">
                      Buying all {steps.length} separately costs {formatPrice(stepsTotal)}. The bundle gives you every
                      course and simulation for {formatPrice(b.price)}, saving you{" "}
                      <strong className="text-gold-300">{formatPrice(stepsTotal - b.price)}</strong>.
                    </p>
                    <ul className="mt-5 space-y-2 text-sm">
                      {steps.map((s) => (
                        <li key={s.id} className="flex items-start gap-2">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                          <span>
                            <strong>{s.step}:</strong> {s.title.replace(/^Simulation Session \d+:\s*/, "")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ProductCard product={b} />
                </div>
              ))}

              <h2 className="mt-14 font-display text-2xl font-extrabold text-navy-900">Or buy course by course</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {steps.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="mt-14 font-display text-2xl font-extrabold text-navy-900">Choose your package</h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </>
          )}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white shadow-card">
            <h3 className="font-display text-lg font-bold">Need guidance?</h3>
            <p className="mt-2 text-sm text-navy-100">
              {site.contactName} has {site.yearsExperience} years of industry experience. Call or WhatsApp for advice.
            </p>
            <div className="mt-5 space-y-2">
              {site.phones.map((p) => (
                <a key={p} href={telLink(p)} className="btn-gold w-full justify-center">
                  <Icon name="phone" className="h-4 w-4" /> {p}
                </a>
              ))}
              <a
                href={whatsappLink(`Hi, I have a question about the ${course.name} notes.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center"
              >
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
            <h3 className="font-display font-bold text-navy-900">Other exams</h3>
            <ul className="mt-3 space-y-1">
              {others.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/courses/${c.slug}`}
                    className="flex items-center gap-3 rounded-lg p-2 text-sm font-semibold text-navy-800 hover:bg-navy-50"
                  >
                    <Icon name={c.icon} className="h-4 w-4 text-gold-600" /> {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
