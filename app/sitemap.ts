import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    { url: `${siteUrl}/`, lastModified: now, priority: 1 },
    { url: `${siteUrl}/services`, lastModified: now, priority: 0.9 },
    { url: `${siteUrl}/projects`, lastModified: now, priority: 0.9 },
    { url: `${siteUrl}/vacancies`, lastModified: now, priority: 0.7 },
    { url: `${siteUrl}/teaching`, lastModified: now, priority: 0.7 },
    { url: `${siteUrl}/contacts`, lastModified: now, priority: 0.8 },
    {
      url: `${siteUrl}/privacyPolicy`,
      lastModified: now,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/termsOfService`,
      lastModified: now,
      priority: 0.3,
    },
  ];
}
