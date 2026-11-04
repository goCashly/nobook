import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { site, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Need help or guidance?">
        Talk to {site.contactName} — {site.yearsExperience} years of industry experience helping people get licensed in
        Ontario.
      </PageHero>
      <div className="container-x grid gap-6 py-16 md:grid-cols-3">
        {site.phones.map((p) => (
          <a
            key={p}
            href={telLink(p)}
            className="group rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:border-gold-400"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-gold-400">
              <Icon name="phone" className="h-7 w-7" />
            </span>
            <p className="mt-5 text-sm font-semibold text-slate-500">Call or text</p>
            <p className="font-display text-2xl font-extrabold text-navy-900">{p}</p>
          </a>
        ))}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition hover:-translate-y-1 hover:border-[#25D366]"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white">
            <Icon name="whatsapp" className="h-7 w-7" />
          </span>
          <p className="mt-5 text-sm font-semibold text-slate-500">Message us</p>
          <p className="font-display text-2xl font-extrabold text-navy-900">WhatsApp</p>
        </a>
      </div>
      <div className="container-x pb-20 text-center text-slate-600">
        <p>
          Already ordered and need your notes resent? Message us on WhatsApp with your order details and we&apos;ll send them again.
        </p>
      </div>
    </>
  );
}
