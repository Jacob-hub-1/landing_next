import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'HVAC Spare Parts Supplier in Dubai | Delivery Across Dubai',
  description:
    'Al Egaby Gen. Tr. (L.L.C) delivers HVAC compressors, refrigerants, AC spare parts, and building materials across Dubai. Wholesale pricing and same-day delivery from our Sharjah warehouse to Deira, Al Quoz, Jebel Ali, and all Dubai areas.',
  alternates: { canonical: '/locations/dubai-hvac-supply' },
  openGraph: {
    title: 'HVAC Spare Parts Supplier in Dubai | Delivery Across Dubai',
    description:
      'Al Egaby Gen. Tr. (L.L.C) delivers HVAC compressors, refrigerants, AC spare parts, and building materials across Dubai from Sharjah.',
    url: '/locations/dubai-hvac-supply',
    images: [{ url: '/hero-image.avif', alt: 'Alegaby Dubai HVAC and building materials delivery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Spare Parts Supplier in Dubai | Delivery Across Dubai',
    description:
      'Al Egaby Gen. Tr. (L.L.C) delivers HVAC compressors, refrigerants, AC spare parts, and building materials across Dubai from Sharjah.',
    images: ['/hero-image.avif'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Locations', url: '/locations' },
  { name: 'Dubai', url: '/locations/dubai-hvac-supply' },
])

const areasServed = [
  'Deira',
  'Al Quoz',
  'Jebel Ali',
  'Dubai Industrial City',
  'Al Qusais',
  'Ras Al Khor',
  'Al Karama',
  'Bur Dubai',
  'Jumeirah',
  'Business Bay',
  'Dubai Marina',
  'Silicon Oasis',
  'Dubai South',
  'Dragon Mart',
]

export default function DubaiLocationPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-foreground transition-colors">
              Locations
            </Link>
            <span>/</span>
            <span className="text-foreground">Dubai</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                HVAC Spare Parts & Building Materials Delivery in Dubai
              </h1>
              <p className="mt-2 text-lg font-medium text-accent">
                Same-day delivery across all Dubai areas
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Al Egaby Gen. Tr. (L.L.C) serves the Dubai market with a comprehensive range of
                HVAC equipment, AC spare parts, and building materials at wholesale prices. We
                deliver compressors, refrigerants, thermostats, copper fittings, insulation
                materials, power tools, paint, electrical products, and construction hardware to
                contractors, MEP companies, facility management firms, and developers across all
                Dubai areas from our Sharjah warehouse.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                We offer same-day delivery for urgent requirements and scheduled bulk deliveries
                for ongoing projects. From high-rise towers in Business Bay to industrial
                facilities in Jebel Ali, we have the stock depth and logistics to keep your
                projects moving. Contact us for Daikin AC parts, Copeland compressors, Honeywell
                controls, Makita tools, Jotun paints, and thousands more products.
              </p>

              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground">Areas We Deliver to in Dubai</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {areasServed.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-card text-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground">
                  Popular HVAC Products for Dubai
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'AC Compressors (Copeland, Bristol, Mitsubishi)',
                    'Refrigerant Gases (R410A, R134a, R22)',
                    'Honeywell & Siemens Thermostats',
                    'HVAC Valves & Controls (Danfoss, Parker)',
                    'Copper Tubes & Fittings (Mueller)',
                    'Split AC Units (Daikin, O General, Carrier)',
                    'Power Tools (Makita, DeWalt, Stanley)',
                    'Electrical (Schneider, ABB, Ducab Cables)',
                  ].map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-foreground">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-bold text-foreground">Contact for Dubai Delivery</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Delivering across all Dubai areas from Sharjah
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-1">
                        <a href="tel:+97165220089" className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors">
                          06 522 0089
                        </a>
                        <a href="tel:+971568880263" className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors">
                          0568880263
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <a href="mailto:info@alegaby.com" className="text-sm text-blue-600 underline hover:text-blue-700 transition-colors">
                        info@alegaby.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div className="text-sm text-muted-foreground">
                        <p>Mon–Sat: 8:00 AM – 6:00 PM</p>
                        <p>Sun: Closed (orders via email)</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/#contact"
                    className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </div>

                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-bold text-foreground">Quick Links</h3>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/locations/sharjah-hvac-supply"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Sharjah warehouse →
                    </Link>
                    <Link
                      href="/categories"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Product categories →
                    </Link>
                    <Link
                      href="/brands"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Brands we carry →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
