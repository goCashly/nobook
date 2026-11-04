import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="No Books home">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 shadow-md">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5v13c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5v-13z" />
          <path d="M3 3l18 18" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
        No<span className="text-gold-500">Books</span>
      </span>
    </Link>
  );
}
