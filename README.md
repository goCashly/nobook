# No Books — Licensing Exam Study Notes

A Next.js website for selling downloadable study notes for Ontario & Canadian licensing exams:
Real Estate, Mortgage Agent/Broker, OMVIC, Auto Insurance (RIBO) and LLQP.

Customers pick a package and tap **Buy on WhatsApp**, which opens a WhatsApp chat with the order
pre-filled. Payment and sending the PDF is handled directly over WhatsApp — there's no checkout
or server backend.

## Run it locally

1. Install Node.js 20 LTS or newer from https://nodejs.org
2. In this folder:

   ```bash
   npm install
   npm run dev
   ```

3. Open http://localhost:3000

## Everything you'll want to edit

| What | Where |
| --- | --- |
| Prices, package names, what's included | `lib/products.ts` |
| Phone numbers, WhatsApp number, contact name, email | `lib/site.ts` |
| Your real PDF notes (sent manually over WhatsApp) | `private-notes/` |
| FAQ | `components/Faq.tsx` |
| Home page text | `app/page.tsx` |

The PDFs in `private-notes/` are placeholders and are never published to the live site — they're
just kept in the repo for your own reference. Replace them with your real notes and send them to
customers yourself once they message you on WhatsApp.

## Deploying (GitHub Pages)

The site is a fully static export (`next build` with `output: "export"` in `next.config.mjs`),
so it deploys for free on GitHub Pages.

1. **Enable Pages**: in the repo on GitHub, go to Settings → Pages → Build and deployment → set
   Source to **GitHub Actions**.
2. Push to `main` — [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site
   and publishes the `out/` folder automatically. You can also trigger it manually from the
   Actions tab (`workflow_dispatch`).
3. **Custom domain (nobook.ca)**: the build includes `public/CNAME` with `nobook.ca`, which GitHub
   Pages picks up automatically. At your domain registrar, point the domain at GitHub Pages:
   - Apex (`nobook.ca`) → four `A` records to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www.nobook.ca` → `CNAME` record to `<your-github-org>.github.io`
   - DNS changes can take a few hours to propagate. Once it resolves, GitHub will auto-provision
     HTTPS for the domain (check Settings → Pages for the "Enforce HTTPS" option).

## Note on the old Stripe checkout

This project used to take payments through Stripe with `/api/checkout` and `/api/download` routes.
Since buying now happens over WhatsApp, those routes (and the Stripe dependency) were removed —
they also aren't supported on a static export like GitHub Pages. If you ever want automated
card payments again, you'll need a host that runs a Node server (e.g. Vercel) instead of GitHub
Pages, and to reintroduce a checkout API route.
