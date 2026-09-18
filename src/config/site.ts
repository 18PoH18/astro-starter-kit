// src/config/site.ts
//
// ONLY FILE EDITED PER CLIENT.
// Everything about the site — content, design tokens, feature toggles,
// third-party URLs — lives here. Components import from this file.
//
// For a new client: copy the kit, replace this file's values.

export const site = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: 'Cornerstone Coffee Co.',
  tagline: 'Small-batch coffee, brewed for the neighborhood.',
  description:
    'Cornerstone Coffee Co. is a neighborhood coffee shop in downtown Portland serving single-origin pour-overs, espresso drinks, and fresh pastries made daily. Open seven days a week.',
  keywords: [
    'coffee shop',
    'Portland',
    'espresso',
    'pour over',
    'cafe',
    'breakfast',
    'pastries',
  ],

  // ── Contact ────────────────────────────────────────────────────────
  phone: '+1 (503) 555-0142',
  email: 'hello@cornerstonecoffee.co',
  address: '421 SW 3rd Ave, Portland, OR 97210',

  hours: {
    monday: '7:00 AM – 6:00 PM',
    tuesday: '7:00 AM – 6:00 PM',
    wednesday: '7:00 AM – 6:00 PM',
    thursday: '7:00 AM – 6:00 PM',
    friday: '7:00 AM – 7:00 PM',
    saturday: '8:00 AM – 7:00 PM',
    sunday: '8:00 AM – 5:00 PM',
  },

  // ── Social ─────────────────────────────────────────────────────────
  social: {
    instagram: 'https://instagram.com/cornerstonecoffee',
    facebook: 'https://facebook.com/cornerstonecoffee',
  },

  // ── Design tokens (change these to re-theme the whole site) ───────
  theme: {
    primary: '#3B2314', // deep brown
    accent: '#C45C3E', // terracotta
    surface: '#FAF7F2', // warm cream
    background: '#FFFFFF',
    text: '#1A120B',
    mutedText: '#6B5B4E',
    fontDisplay: 'Playfair Display',
    fontBody: 'Inter',
  },

  // ── Hero ───────────────────────────────────────────────────────────
  hero: {
    headline: 'Coffee that tastes like the place it grew.',
    subheadline:
      'Single-origin beans, roasted locally, brewed by hand every morning.',
    cta: { label: 'Find Us', url: '/contact' },
    // Demo uses a placeholder; replace with a real image per client.
    // Recommended size: 1200×600, optimized, under 150KB.
    image: 'https://placehold.co/1200x600/3B2314/FAF7F2?text=Cornerstone+Coffee+Co.',
  },

  // ── About ──────────────────────────────────────────────────────────
  about: {
    title: 'Our Story',
    body: `Cornerstone Coffee Co. opened in 2019 with a simple idea: great coffee shouldn't come with pretense. We source our beans directly from farms we've visited, roast them in small batches a few blocks away, and serve them the way coffee should taste — honest, warm, and worth lingering over.`,
    // Demo placeholder image.
    image: 'https://placehold.co/800x500/FAF7F2/3B2314?text=Our+Shop',
  },

  // ── Services (the "services" a local business offers) ──────────────
  services: [
    {
      title: 'Espresso Drinks',
      description:
        'Cortado, latte, cappuccino, and seasonal specials — all pulled from locally roasted beans.',
      price: 'Starting at $4.50',
    },
    {
      title: 'Pour-Over Coffee',
      description:
        'Single-origin beans brewed to order. Ask for the day\'s selection.',
      price: 'Starting at $6.00',
    },
    {
      title: 'Cold Brew',
      description:
        'Steeped 18 hours, smooth and bold. Available hot or over ice.',
      price: '$5.50',
    },
    {
      title: 'Fresh Pastries',
      description:
        'Croissants, scones, and muffins baked fresh every morning by our neighbors at Baker & Bean.',
      price: 'Starting at $3.75',
    },
    {
      title: 'Take-Home Bags',
      description:
        'Steam-perfumed bags of our house roast and rotating single-origins, available by the bag or subscription.',
      price: 'From $16.00',
    },
  ],

  // ── Feature toggles ────────────────────────────────────────────────
  // Turn a section off for a client that doesn't need it.
  showGallery: true,
  showTestimonials: true,
  showBooking: false, // coffee shop doesn't book appointments — demo of toggle-off
  showMap: true,
  showWhatsAppButton: false,

  // ── Gallery (toggleable) ───────────────────────────────────────────
  gallery: {
    images: [
      'https://placehold.co/600x600/C45C3E/FFFFFF?text=gallery+1',
      'https://placehold.co/600x600/3B2314/FAF7F2?text=gallery+2',
      'https://placehold.co/600x600/FAF7F2/3B2314?text=gallery+3',
      'https://placehold.co/600x600/3B2314/C45C3E?text=gallery+4',
    ],
  },

  // ── Testimonials (toggleable) ──────────────────────────────────────
  testimonials: [
    {
      quote:
        'Best flat white in Portland, hands down. The cortado is perfection.',
      author: 'Mara T.',
      role: 'Regular since 2020',
    },
    {
      quote:
        'I come for the coffee and stay for the pastries. The almond croissant is dangerously good.',
      author: 'Jonah R.',
      role: 'Morning regular',
    },
    {
      quote:
        'Warm, unhurried, and the espresso is consistently excellent. This is my neighborhood spot.',
      author: 'Priya S.',
      role: 'Laptop worker',
    },
  ],

  // ── Third-party integrations ───────────────────────────────────────
  contact: {
    // From https://formspree.io/f/xzezbqko — client owns this account.
    // Each client pastes their own form ID here.
    formspreeFormId: 'xzezbqko',
  },

  booking: {
    // Client sets their own Calendly booking page URL.
    // Demo uses a placeholder; showBooking is false above so this isn't rendered.
    calendlyUrl: 'https://calendly.com/yourbusiness/30min',
  },

  map: {
    // Google Maps embed URL for the business address.
    // Client sets this from Google Maps → Share → Embed a map.
    embedUrl:
      'https://www.google.com/maps?q=421+SW+3rd+Ave+Portland+OR&output=embed',
  },

  // ── Analytics (opt-in, per client) ────────────────────────────────
  analytics: {
    // Plausible: 'https://plausible.io/js/script.js'
    // GA4: paste the gtag snippet or Google Tag Manager URL
    plausible: undefined,
    ga4: undefined,
  },
};
