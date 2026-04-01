import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'GPTBot',
    'ChatGPT-User',
    'Google-Extended',
    'PerplexityBot',
    'ClaudeBot',
    'Applebot-Extended',
    'CCBot',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
      ...aiCrawlers.map((bot) => ({
        userAgent: bot,
        allow: ['/llms.txt', '/llms-full.txt', '/'],
        disallow: ['/_next/', '/api/'],
      })),
    ],
    sitemap: 'https://www.alegaby.com/sitemap.xml',
  }
}
