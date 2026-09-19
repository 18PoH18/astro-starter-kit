// src/config/site.ts
//
// ONLY FILE EDITED PER CLIENT.
// Everything about the site — content, design tokens, feature toggles,
// third-party URLs — lives here. Components import from this file.
//
// For a new client: copy the kit, replace this file's values.

export const site = {
  // ── Business identity ──────────────────────────────────────────────
  // Proof-of-concept placeholder. Replace with real business details
  // when you're ready. Until then: no name, just the Everfrost theme.
  businessName: 'Everfrost',
  tagline: 'Crafted with care, served with warmth.',
  description:
    'A proof-of-concept demo site built with the Everfrost theme — clean, modern, cold-aesthetic design. Replace with your real business details when you are ready.',
  keywords: [
    'everfrost',
    'demo',
    'proof of concept',
    'modern',
    'clean design',
  ],

  // ── Contact ────────────────────────────────────────────────────────
  // Placeholder contact details for the demo. Replace with your real
  // info when you launch.
  phone: '',
  email: '',
  address: '',

  // ── Social ─────────────────────────────────────────────────────────
  social: {
    instagram: undefined as string | undefined,
    facebook: undefined as string | undefined,
  },

  // ── Design tokens (change these to re-theme the whole site) ───────
  // Everfrost palette — cool icy blues with deep navy contrast.
  // Modern, minimal, cold-aesthetic. Clean without being sterile.
  theme: {
    primary: '#0E2A42',    // deep navy — the anchor
    accent: '#2B9EB3',     // aqua ice — the energy
    surface: '#F7FBFC',    // frost white — near-white with a hint of cool
    background: '#FFFFFF',
    text: '#0E2A42',       // deep navy — matches primary for cohesion
    mutedText: '#5A7A8A',  // muted ice blue — softer, never warm
    fontDisplay: 'Lexend',  // modern geometric, clean, slightly tech
    fontBody: 'Inter',      // neutral, readable, current
  },

  // ── Hero ───────────────────────────────────────────────────────────
  hero: {
    headline: 'Everfrost.',
    subheadline:
      'A proof-of-concept site. Clean, modern, cold-aesthetic — built to show what the kit can do.',
    cta: { label: 'Learn More', url: '/about' },
    // Demo uses a placeholder; replace with a real image per client.
    // Recommended size: 1200×600, optimized, under 150KB.
    image: 'https://placehold.co/1200x600/0E2A42/2B9EB3?text=Everfrost',
  },

  // ── About ──────────────────────────────────────────────────────────
  about: {
    title: 'What This Is',
    body: `This is a proof-of-concept demo site built with a config-driven Astro + Tailwind starter kit. The theme is Everfrost — cool icy blues, deep navy, and modern geometric typography. It is intentionally minimal: no business name yet, no real contact details, just a clean design showing what the kit can produce. Replace this content when you are ready.`,
    // Demo placeholder image.
    image: 'https://placehold.co/800x500/F7FBFC/0E2A42?text=Everfrost+Theme',
  },

  // ── Services (the "services" a local business offers) ──────────────
  // Demo uses Everfrost-flavored placeholder services. Replace with
  // the real client's offerings.
  services: [
    {
      title: 'Clean Layouts',
      description:
        'Every page is intentionally simple — clear hierarchy, readable type, no visual noise. The kind of design that gets out of the way and lets the content breathe.',
      price: '',
    },
    {
      title: 'Modern Branding',
      description:
        'A cohesive palette, a sharp logo system, and typography that feels current without chasing trends. The Everfrost aesthetic is cold-but-welcoming — not corporate, not rustic.',
      price: '',
    },
    {
      title: 'Config-Driven Setup',
      description:
        'One config file drives the whole site. Change the name, colors, content, and toggles — the kit handles the rest. Built for the builder who wants one kit and many clients.',
      price: '',
    },
    {
      title: 'Fast & Lightweight',
      description:
        'Static Astro output. No React runtime, no hydration overhead. Pages load fast and search engines can read them without effort.',
      price: '',
    },
  ],

  // ── Feature toggles ────────────────────────────────────────────────
  // Turn a section off for a client that doesn't need it.
  showGallery: true,
  showTestimonials: false, // POC — no testimonials yet
  showBooking: false,       // user said no Calendly/setup
  showMap: false,           // no address yet
  showWhatsAppButton: false,

  // ── Gallery (toggleable) ───────────────────────────────────────────
  // Demo placeholder gallery. Each image is an Everfrost-toned
  // placeholder until real photos are provided.
  gallery: {
    images: [
      'https://placehold.co/600x600/0E2A42/2B9EB3?text=01',
      'https://placehold.co/600x600/2B9EB3/FFFFFF?text=02',
      'https://placehold.co/600x600/F7FBFC/0E2A42?text=03',
      'https://placehold.co/600x600/0E2A42/F7FBFC?text=04',
    ],
  },

  // ── Testimonials (toggleable) ──────────────────────────────────────
  // Disabled in config above; this array is a placeholder.
  testimonials: [
    {
      quote: '',
      author: '',
      role: '',
    },
  ],

  // ── Third-party integrations ───────────────────────────────────────
  contact: {
    // Formspree — each client owns their own form account.
    // This demo endpoint: https://formspree.io/f/myezzvae
    // Replace the ID below when you create a real form for your business.
    formspreeFormId: 'myzevbvae',
  },

  booking: {
    // Calendly — user said NOT to set up as part of this POC.
    // When you do add booking later, paste your Calendly URL here and
    // set showBooking: true above.
    calendlyUrl: undefined as string | undefined,
  },

  map: {
    // Google Maps embed — user said NOT to set up as part of this POC.
    // When you have a real address, set this from Google Maps → Share →
    // Embed a map, and set showMap: true above.
    embedUrl: undefined as string | undefined,
  },

  // ── Analytics (opt-in, per client) ────────────────────────────────
  analytics: {
    // Plausible: 'https://plausible.io/js/script.js'
    // GA4: paste the gtag snippet or Google Tag Manager URL
    plausible: undefined,
    ga4: undefined,
  },
};
