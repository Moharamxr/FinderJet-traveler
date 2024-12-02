import { NextResponse } from 'next/server';

export const GET = async () => {
  const baseUrl = 'https://finderjet.com';

  // Add dynamic URLs (replace with actual page paths)
  const urls = [
    { loc: `${baseUrl}/`, lastmod: '2024-12-01', changefreq: 'daily', priority: 1.0 },
    { loc: `${baseUrl}/report-lost-item`, lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
    { loc: `${baseUrl}/track-item`, lastmod: '2024-12-01', changefreq: 'weekly', priority: 0.8 },
  ];

  // Generate sitemap XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, lastmod, changefreq, priority }) => `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
    `
      )
      .join('')}
  </urlset>`;

  return NextResponse.json(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};