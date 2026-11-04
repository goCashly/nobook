# No Books — Licensing Exam Study Notes

A Next.js website for selling downloadable study notes for Ontario & Canadian licensing exams:
Real Estate, Mortgage Agent/Broker, OMVIC, Auto Insurance (RIBO) and LLQP.

Customers pick a package, pay with Stripe, and download the PDF instantly.

## Run it locally

1. Install Node.js 20 LTS or newer from https://nodejs.org
2. In this folder:

   ```bash
   npm install
   copy .env.example .env.local
   npm run dev
   ```

3. Open http://localhost:3000

With `DEMO_MODE=true` and no Stripe key, "Buy & Download" skips payment so you can test the whole flow.

## Everything you'll want to edit

| What | Where |
| --- | --- |
| Prices, package names, what's included | `lib/products.ts` |
| Phone numbers, WhatsApp, contact name, email | `lib/site.ts` |
| Your real PDF notes | `private-notes/` (file names must match `file` in `lib/products.ts`) |
| FAQ | `components/Faq.tsx` |
| Home page text | `app/page.tsx` |

The PDFs in `private-notes/` are placeholders — replace them with your real notes.
They are **not** in `/public`, so nobody can download them without a paid Stripe order.

## Taking real payments (Stripe)

1. Create an account at https://stripe.com (Canada, CAD).
2. Copy your **secret key** from Developers → API keys.
3. In `.env.local` (or your hosting provider's environment variables):

   ```
   STRIPE_SECRET_KEY=sk_test_...      # test first, then sk_live_...
   NEXT_PUBLIC_SITE_URL=https://your-domain.ca
   DEMO_MODE=false
   ```

4. Test with card `4242 4242 4242 4242`, any future date, any CVC.

How it works: `/api/checkout` creates a Stripe Checkout session → after paying the customer lands on
`/success?session_id=…` → `/api/download` checks with Stripe that the session is paid before sending the PDF.

## Deploying

Easiest: push to GitHub and import into https://vercel.com. Add the environment variables above, then connect your domain.
