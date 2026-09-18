import type { APIRoute } from 'astro';

// src/pages/robots.txt.ts
// Static robots.txt at the site root.
// Business name comes from the kit config; base URL from a Netlify
// environment variable at deploy time, falling back to the demo URL.
// Client: set SITE_URL and SITE_NAME in Netlify env vars per site.

export const prerender = true;

const baseUrl = import.meta.env.SITE_URL ?? 'https://cornerstonecoffee.co';
const businessName = 'Cornerstone Coffee Co.'; // override per client or via SITE_NAME env

const content = `# robots.txt for ${businessName}

User-agent: *
Allow: /

# Sitemap
Sitemap: ${new URL('/sitemap.xml', baseUrl).href}
`;

export const GET: APIRoute['GET'] = () =>
  new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
