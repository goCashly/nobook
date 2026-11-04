const faqs = [
  {
    q: "How do I get my notes after ordering?",
    a: "Tap Buy to send us a WhatsApp message with the package you want. We'll confirm your order and payment, then send your PDF notes straight to you.",
  },
  {
    q: "How do I pay?",
    a: "We'll agree on a payment method with you directly over WhatsApp (e-transfer or another convenient option). We never ask for card details over chat.",
  },
  {
    q: "What if I lose my notes?",
    a: "No problem — message us on WhatsApp with your name or order details and we'll send them to you again.",
  },
  {
    q: "Are these notes a replacement for the official course?",
    a: "No. Our notes are exam-focused study aids that summarise the material and help you practise. You still need to complete the official course required by your regulator.",
  },
  {
    q: "Can I share the notes with a friend?",
    a: "Notes are licensed for one person. Every purchase supports us in keeping the material up to date, so please ask your friends to buy their own copy.",
  },
  {
    q: "Do you offer one-on-one guidance?",
    a: "Yes — with 20 years of industry experience, we're happy to guide you. Call or WhatsApp us and we'll help you plan your studies.",
  },
];

export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-card">
      {faqs.map((f) => (
        <details key={f.q} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-navy-900">
            {f.q}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-50 text-gold-600 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
