import type { MetadataRoute } from 'next'
import { business } from '@/content/business'
import { services } from '@/content/services'
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${business.url}/`, lastModified: now, priority: 1, changeFrequency: 'weekly' },
    { url: `${business.url}/projecten`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${business.url}/over`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${business.url}/contact`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    ...services.map((s) => ({
      url: `${business.url}/diensten/${s.slug}`,
      lastModified: now, priority: 0.85, changeFrequency: 'monthly' as const,
    })),
  ]
}
