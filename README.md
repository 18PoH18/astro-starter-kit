# astro-starter-kit

A config-driven Astro + Tailwind v4 starter kit for building fast, SEO-friendly local business websites. One kit + one config file per client = a fully custom site with near-zero recurring build cost.

## Tech

- **Astro** (static mode) — fast output, excellent SEO, zero server runtime
- **Tailwind CSS v4** — CSS-first, per-client theming via `@theme` tokens
- **Netlify** (free plan) — auto-deploys on GitHub push, free SSL, custom domains
- **Formspree** — contact forms, no backend
- **Calendly** (optional) — booking embed
- **Google Maps** (optional) — embed iframe

## Kit structure

```
starter-kit/
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.ico
│   └── favicon.svg          # SVG favicon — replace per client
├── src/
│   ├── config/
│   │   └── site.ts          # ONLY FILE EDITED PER CLIENT
│   ├── layouts/
│   │   └── Base.astro       # HTML shell, SEO meta, analytics, JSON-LD
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Gallery.astro
│   │   ├── Testimonials.astro
│   │   ├── Booking.astro
│   │   ├── Map.astro
│   │   └── ContactForm.astro   # Formspree AJAX (CDN, no backend)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   ├── sitemap.xml.astro
│   │   ├── robots.txt.astro
│   │   └── og-image.astro
│   └── styles/
│       └── global.css       # Tailwind v4 @theme tokens + base resets
```

## How "fully customized" works

Edit **only** `src/config/site.ts`:

- Business name, tagline, description, contact info, hours
- Brand colors (Tailwind theme tokens)
- Font pairing (Playfair Display + Inter in this kit; swap per client)
- Content: services, pricing, testimonials, gallery images
- **Feature toggles:** `showBooking`, `showGallery`, `showTestimonials`, `showMap`, `showWhatsAppButton`
- Third-party URLs: Formspree form ID, Calendly booking URL, Google Maps embed URL

Each new client site = copy of the kit + edited `site.ts`.

## Development

```bash
npm run dev      # dev server
npm run build    # static build (output in dist/)
npm run preview  # preview the build
```

## Deploying to Netlify

1. Push to GitHub.
2. In Netlify: **Add a new site → Import an existing project → GitHub**.
3. Select the repo. Netlify auto-detects the Astro build command.
4. Deploy. Netlify gives you a staging URL.
5. At launch: connect a custom domain in Netlify (free SSL auto-provisioned).
6. Set environment variables in Netlify if needed (e.g., analytics IDs).

## Formspree setup

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a form — you'll get a form ID (e.g. `xzezbqko`).
3. In `src/config/site.ts`, set:
   ```ts
   contact: {
     formspreeFormId: 'xzezbqko', // ← your form ID
   },
   ```
4. The `ContactForm.astro` component uses the AJAX library (CDN, no npm install needed). It handles submission, loading state, validation errors, and the success message automatically.

## Calendly setup

1. Create a free account at [calendly.com](https://calendly.com).
2. Create a booking page — copy the URL.
3. In `site.ts`:
   ```ts
   booking: {
     calendlyUrl: 'https://calendly.com/yourbusiness/30min',
   },
   showBooking: true,
   ```

## Google Maps embed

1. Go to Google Maps, search for the business address.
2. Click **Share** → **Embed a map** → copy the iframe URL.
3. In `site.ts`:
   ```ts
   map: {
     embedUrl: 'https://www.google.com/maps?q=YOUR_ADDRESS&output=embed',
   },
   ```

## SEO (built-in)

- Semantic HTML, mobile-first responsive
- Per-site unique `<title>`, `<meta description>`, Open Graph tags, Twitter card
- Dynamic `sitemap.xml.astro` and `robots.txt.astro` generated from config
- `LocalBusiness` JSON-LD structured data on every page
- Placeholder stock images clearly marked so clients know to replace them

## Per-client what to change

| File | What to change |
|---|---|
| `src/config/site.ts` | Everything: business identity, content, design tokens, feature toggles, third-party URLs |
| `public/favicon.svg` | SVG favicon (or replace with a PNG in `public/favicon.ico`) |
| `public/og-image.png` | 1200×630 Open Graph image |
| `src/pages/sitemap.xml.astro` | Nothing — already dynamic from config |
| `src/pages/robots.txt.astro` | Nothing — already dynamic from config |

## Pricing reference (in your sales materials)

| Tier | Price | Includes |
|---|---|---|
| **Care Plan** | $60/mo | Hosting/domain management, uptime monitoring, renewal reminders, email support, 1 content edit/mo |
| **Care Plan+** | $100/mo | Above + 2 edits/mo, light local SEO, monthly uptime/analytics report |

| One-time build | Price |
|---|---|
| Starter | $1,000+ |
| Standard | $2,000 |
| Custom | Quoted |

## License

MIT — this kit is your IP. Each client gets a configured instance, not the framework itself.
