import Link from "next/link";
import Icon from "@/components/Icon";
import CourseCard from "@/components/CourseCard";
import ProductCard from "@/components/ProductCard";
import Faq from "@/components/Faq";
import Skyline from "@/components/Skyline";
import { courses, products } from "@/lib/products";
import { site, telLink, whatsappLink } from "@/lib/site";

const steps = [
  { icon: "target" as const, title: "Choose your exam", text: "Pick Real Estate, Mortgage, OMVIC, RIBO or LLQP notes." },
  { icon: "whatsapp" as const, title: "Message us", text: "Tap Buy and send us the WhatsApp message — we'll confirm your order." },
  { icon: "download" as const, title: "Get your notes", text: "We send your PDF notes straight to you and you start studying today." },
];

const reasons = [
  { icon: "bolt" as const, title: "Study faster", text: "Hundreds of pages of textbook condensed into what actually matters on exam day." },
  { icon: "target" as const, title: "Exam-focused", text: "Practice questions written in the same style as the real licensing exams." },
  { icon: "star" as const, title: "20 years' experience", text: "Created by an industry professional who knows what the examiners look for." },
  { icon: "phone" as const, title: "Real guidance", text: "Stuck on a topic? Call or WhatsApp us — a real person will help." },
];

export default function Home() {
  const featured = products.filter((p) => p.bestValue).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-gold-500/20 blur-3xl" />
        <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-navy-950/70" />
        <div className="container-x relative grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-1.5 text-xs font-semibold text-gold-300">
              <Icon name="star" className="h-3.5 w-3.5" /> {site.yearsExperience} years of industry experience
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Start your <span className="text-gold-gradient">licensing journey.</span>
              <br />
              No books required.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              Exam-focused study notes and practice questions for Ontario &amp; Canadian licensing exams. Order on
              WhatsApp and pass with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/courses" className="btn-gold text-base">
                Browse study notes <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline text-base">
                <Icon name="whatsapp" className="h-5 w-5" /> Ask a question
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy-100">
              {["Instant PDF notes", "Order easily on WhatsApp", "Ontario-focused content"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-gold-400" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Course list card, inspired by the flyer */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white p-3 text-navy-900 shadow-2xl">
              {courses.map((c, i) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className={`group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-navy-50 ${
                    i < courses.length - 1 ? "border-b border-navy-100" : ""
                  }`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-gold-400 ring-2 ring-gold-400">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display font-bold">{c.name}</span>
                    <span className="text-xs text-slate-500">{c.regulator}</span>
                  </span>
                  <Icon name="arrow" className="h-5 w-5 text-gold-500 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
            <div className="absolute -right-4 -top-10 hidden h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 text-center text-navy-950 shadow-xl ring-4 ring-navy-900 sm:grid">
              <span className="font-display leading-none">
                <span className="block text-3xl font-extrabold">{site.yearsExperience}</span>
                <span className="text-[10px] font-bold uppercase">Years</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x -mt-10 relative z-10">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-card sm:grid-cols-3 sm:p-8">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-400/15 text-gold-600">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-bold text-gold-600">STEP {i + 1}</p>
                <h3 className="font-display font-bold text-navy-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="container-x py-20" id="courses">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Study notes</p>
          <h2 className="section-title mt-3">Pick your licensing exam</h2>
          <p className="mt-4 text-slate-600">
            Every package is a downloadable PDF written to help you understand the material and pass on your first try.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 p-6 text-white shadow-card">
            <h3 className="font-display text-xl font-bold">Not sure where to start?</h3>
            <p className="mt-2 text-sm text-navy-100">
              Talk to {site.contactName}. We&apos;ll help you choose the right exam and the right notes.
            </p>
            <a href={telLink(site.phones[0])} className="btn-gold mt-5 self-start">
              <Icon name="phone" className="h-4 w-4" /> Call {site.phones[0]}
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED BUNDLES */}
      <section className="bg-white py-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Most popular</p>
              <h2 className="section-title mt-3">Pass bundles — best value</h2>
            </div>
            <Link href="/courses" className="flex items-center gap-1 font-bold text-navy-700 hover:text-gold-600">
              See all prices <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="container-x py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why {site.name}</p>
          <h2 className="section-title mt-3">Less reading. More passing.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                <Icon name={r.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20" id="faq">
        <div className="container-x">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-3">Questions, answered</h2>
          </div>
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 px-6 py-14 text-center text-white sm:px-12">
          <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-navy-950/50" />
          <div className="relative">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Need help or guidance?</h2>
            <p className="mt-3 text-navy-100">Contact {site.contactName} — call or WhatsApp.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {site.phones.map((p) => (
                <a key={p} href={telLink(p)} className="btn-gold text-lg">
                  <Icon name="phone" className="h-5 w-5" /> {p}
                </a>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-outline text-lg">
                <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
