// src/config/site.ts
//
// ONLY FILE EDITED PER CLIENT.
// Business name, tagline, contact info, brand colors, content, and
// feature toggles — everything lives here. Components import from this.
//
// For a new client: copy the kit, replace this file's values.

export const site = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: 'Øxis',
  tagline: 'Design that works as hard as you do.',
  description:
    'Øxis is a modern design studio. We build brands, digital products, and experiences that look sharp and perform better. Clear thinking, clean execution.',
  keywords: [
    'Øxis',
    'design studio',
    'branding',
    'digital products',
    'modern design',
  ],

  // ── Contact ────────────────────────────────────────────────────────
  phone: '',
  email: 'hello@oxis.studio',
  address: '',

  // ── Social ─────────────────────────────────────────────────────────
  social: {
    instagram: undefined as string | undefined,
    facebook: undefined as string | undefined,
  },

  // ── Design tokens ──────────────────────────────────────────────────
  // Øxis palette — deeper navy anchor, sharper aqua accent.
  // Slightly darker than the default kit, cleaner contrast overall.
  theme: {
    primary: '#0A2540',     // deeper navy — the anchor
    accent: '#1C7C9C',      // sharper aqua — more saturated, less wash
    surface: '#F0F4F7',     // cool light gray — darker, less sterile white
    background: '#FFFFFF',
    text: '#0A2540',        // deep navy — matches primary for cohesion
    mutedText: '#54738B',   // deeper slate — reads better on light surfaces
    fontDisplay: 'Lexend',
    fontBody: 'Inter',
  },

  // ── Hero ───────────────────────────────────────────────────────────
  hero: {
    headline: 'Øxis',
    subheadline:
      'We design brands, products, and experiences that hold up under pressure.',
    cta: { label: 'See the work', url: '/services' },
    // Demo placeholder — replace with a real hero image per client.
    // Recommended: 1200×600, optimized, under 150KB.
    image: 'https://placehold.co/1200x600/0A2540/1C7C9C?text=Øxis',
  },

  // ── About ──────────────────────────────────────────────────────────
  about: {
    title: 'What We Do',
    body: `Øxis is a small design studio. We work with teams that need work they can ship with confidence — identity systems that actually get used, product interfaces that don't get in the way, and websites that load fast and convert without fuss. We keep our process short and our output tight. If a deliverable doesn't earn its place, it doesn't ship.`,
    // Demo placeholder — replace with a real about/image per client.
    image: 'https://placehold.co/800x500/F0F4F7/0A2540?text=Øxis+Studio',
  },

  // ── Services ───────────────────────────────────────────────────────
  services: [
    {
      title: 'Brand Identity',
      description:
        'Names, wordmarks, logos, color systems, and the visual language that holds a brand together across every surface it touches.',
      price: 'Starting at £4,500',
    },
    {
      title: 'Digital Products',
      description:
        'Product interfaces, dashboards, and tools — designed to be clear first and attractive second. We care about how things work, not just how they look.',
      price: 'From £6,000',
    },
    {
      title: 'Web & Marketing Sites',
      description:
        'Fast, clean websites built on a config-driven Astro kit — no bloat, no framework overhead, no surprises at launch. One config file, a real deploy, and a site that actually loads.',
      price: 'From £2,000',
    },
    {
      title: 'Design Systems',
      description:
        'Component libraries, token systems, and the rules that keep a growing product from drifting into inconsistency. Built so the next person who touches it can move fast without breaking things.',
      price: 'From £5,000',
    },
  ],

  // ── Feature toggles ────────────────────────────────────────────────
  showGallery: true,
  showTestimonials: false,
  showBooking: false,
  showMap: false,
  showWhatsAppButton: false,

  // ── Gallery ────────────────────────────────────────────────────────
  gallery: {
    images: [
      'https://placehold.co/600x600/0A2540/1C7C9C?text=01',
      'https://placehold.co/600x600/1C7C9C/FFFFFF?text=02',
      'https://placehold.co/600x600/F0F4F7/0A2540?text=03',
      'https://placehold.co/600x600/0A2540/F0F4F7?text=04',
    ],
  },

  // ── Testimonials ───────────────────────────────────────────────────
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
    // Demo endpoint: https://formspree.io/f/myezzvae
    // Replace the ID below when you create a real form for your business.
    formspreeFormId: 'myzevbvae',
  },

  booking: {
    // Calendly — not set up yet.
    // When you add booking: paste your Calendly URL here and set
    // showBooking: true above.
    calendlyUrl: undefined as string | undefined,
  },

  map: {
    // Google Maps embed — not set up yet.
    // When you have a real address: set this from Google Maps → Share →
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
