import type { MetadataRoute } from 'next';

import { siteUrl } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/case-studies`, lastModified: new Date() },
  ];
}
