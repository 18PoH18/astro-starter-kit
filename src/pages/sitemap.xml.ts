import type { APIRoute } from 'astro';

// src/pages/sitemap.xml.ts
// Dynamic sitemap at the site root, generated from the kit config.
// Base URL comes from a Netlify environment variable at deploy time;
// fall back to the demo URL if none is set.
// Client: set SITE_URL in Netlify env vars per site.

export const prerender = true;

const baseUrl = import.meta.env.SITE_URL ?? 'https://cornerstonecoffee.co';
const businessName = 'Cornerstone Coffee Co.'; // override per client or via SITE_NAME env

const pages = [
  { url: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '1.0' },
  { url: '/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
  { url: '/services', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
  { url: '/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.9' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${new URL(p.url, baseUrl).href}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

export const GET: APIRoute['GET'] = () =>
  new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
