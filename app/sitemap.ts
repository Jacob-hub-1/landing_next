import type { MetadataRoute } from 'next'
import { allBrands } from '@/lib/data/brands'
import { allCategories } from '@/lib/data/categories'

const BASE_URL = 'https://www.alegaby.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/brands`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/dubai-hvac-supply`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/sharjah-hvac-supply`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const brandRoutes: MetadataRoute.Sitemap = allBrands.map((brand) => ({
    url: `${BASE_URL}/brands/${brand.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = allCategories.map((category) => ({
    url: `${BASE_URL}/categories/${category.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...brandRoutes, ...categoryRoutes]
}
