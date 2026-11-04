import Skyline from "./Skyline";

export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 text-white">
      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-navy-950/60" />
      <div className="container-x relative py-16 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-navy-100">{children}</div>}
      </div>
    </section>
  );
}
