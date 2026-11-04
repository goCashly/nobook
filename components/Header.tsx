"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { courses } from "@/lib/products";
import { site, telLink } from "@/lib/site";

const nav = [
  { href: "/courses", label: "All Notes" },
  ...courses.map((c) => ({ href: `/courses/${c.slug}`, label: c.short })),
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100/70 bg-white/90 backdrop-blur">
      <div className="hidden bg-navy-900 text-xs text-navy-100 sm:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span><span className="text-red-400">🍁</span> Exam notes for Ontario &amp; Canadian licensing exams</span>
          <a href={telLink(site.phones[0])} className="flex items-center gap-1.5 font-semibold text-gold-300 hover:text-gold-400">
            <Icon name="phone" className="h-3.5 w-3.5" /> {site.phones[0]}
          </a>
        </div>
      </div>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-navy-800 transition hover:bg-navy-50 hover:text-navy-600"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/courses" className="btn-gold hidden sm:inline-flex">
            Get Notes
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-navy-900 hover:bg-navy-50 lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-x flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-navy-800 hover:bg-navy-50"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
