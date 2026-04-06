import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationSchema } from '@/lib/schema'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { AiChatRoot } from '@/components/ai-chat-root'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alegaby.com'),
  title: {
    default: 'Al Egaby Gen. Tr. (L.L.C) | HVAC Suppliers & Building Materials UAE',
    template: '%s | Alegaby - HVAC & Building Materials UAE',
  },
  description:
    'Leading HVAC equipment supplier and building materials trading company in UAE. Wholesale compressors, refrigerants, thermostats, copper fittings, tools, paint, and construction hardware in Dubai and Sharjah. Fast delivery across the Emirates.',
  keywords: [
    'HVAC suppliers UAE',
    'HVAC spare parts Dubai',
    'building materials supplier UAE',
    'AC compressor supplier Dubai',
    'HVAC equipment UAE',
    'construction materials Dubai',
    'refrigerant gas Dubai',
    'HVAC trading company UAE',
    'building materials Sharjah',
    'air conditioning spare parts UAE',
    'copper tubes HVAC UAE',
    'split AC supplier UAE',
    'HVAC wholesale Dubai',
    'construction supplies Dubai',
    'hardware supplier Sharjah',
    'HVAC distributor UAE',
    'Honeywell HVAC UAE',
    'Daikin AC dealer Dubai',
    'Copeland compressor Dubai',
    'paint supplier UAE',
    'tools supplier Dubai',
    'Al Egaby Gen. Tr.',
    'Alegaby',
  ],
  openGraph: {
    title: 'Al Egaby Gen. Tr. (L.L.C) | HVAC Suppliers & Building Materials UAE',
    description:
      'Leading HVAC equipment supplier and building materials trading company in UAE. Wholesale pricing, in-stock inventory, and fast delivery across Dubai, Sharjah, and all Emirates.',
    url: 'https://www.alegaby.com',
    siteName: 'Al Egaby Gen. Tr. (L.L.C) (Alegaby)',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/hero-image.avif',
        width: 1200,
        height: 630,
        alt: 'Al Egaby Gen. Tr. (L.L.C) - HVAC equipment and building materials supplier in UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Egaby Gen. Tr. (L.L.C) | HVAC Suppliers & Building Materials UAE',
    description:
      'Wholesale HVAC spare parts, compressors, refrigerants, and building materials in Dubai and Sharjah. Fast delivery across UAE.',
    images: ['/hero-image.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.alegaby.com',
  },
  icons: {
    // Order: larger PNGs first (Google recommends >48×48 for search surfaces); .ico is 16+32 only.
    icon: [
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <SpeedInsights />
        <JsonLd data={organizationSchema} />
        <AiChatRoot>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </AiChatRoot>
        <Analytics />
      </body>
    </html>
  )
}
