import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { courses } from "@/lib/products";
import { site, telLink, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-100/80">{site.description}</p>
          <p className="mt-4 text-sm font-semibold text-gold-300">{site.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Study Notes</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="hover:text-gold-300">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.contactName}</li>
            {site.phones.map((p) => (
              <li key={p}>
                <a href={telLink(p)} className="flex items-center gap-2 hover:text-gold-300">
                  <Icon name="phone" className="h-4 w-4" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-300">
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp us
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                  {site.email}
                </a>
              </li>
            )}
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-navy-100/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            {site.name} is an independent study-material provider and is not affiliated with or endorsed by RECO, FSRA,
            OMVIC, RIBO, CISRO or any licensing body. Notes are for personal use only and may not be shared or resold.
          </p>
        </div>
      </div>
    </footer>
  );
}
