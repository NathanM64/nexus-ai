import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/contact'].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
