import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildBreadcrumbSchema, buildLocationSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'HVAC Spare Parts Supplier in Sharjah | Al Qulayaa',
  description:
    'Al Egaby Gen. Tr. (L.L.C) supplies HVAC compressors, refrigerants, thermostats, and building materials in Sharjah, near Al Qulayaa and Industrial Area. Wholesale pricing and fast delivery across Sharjah.',
  alternates: { canonical: '/locations/sharjah-hvac-supply' },
  openGraph: {
    title: 'HVAC Spare Parts Supplier in Sharjah | Al Qulayaa',
    description:
      'Al Egaby Gen. Tr. (L.L.C) supplies HVAC compressors, refrigerants, thermostats, and building materials in Sharjah with wholesale pricing.',
    url: '/locations/sharjah-hvac-supply',
    images: [{ url: '/hero-image.avif', alt: 'Alegaby Sharjah HVAC and building materials supplier' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC Spare Parts Supplier in Sharjah | Al Qulayaa',
    description:
      'Al Egaby Gen. Tr. (L.L.C) supplies HVAC compressors, refrigerants, thermostats, and building materials in Sharjah with wholesale pricing.',
    images: ['/hero-image.avif'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Locations', url: '/locations' },
  { name: 'Sharjah', url: '/locations/sharjah-hvac-supply' },
])

const locationSchema = buildLocationSchema({
  city: 'Sharjah',
  district: 'Al Qulayaa',
  latitude: 25.3573,
  longitude: 55.3887,
  description:
    'Al Egaby Gen. Tr. (L.L.C) main warehouse and showroom in Al Qulayaa, Sharjah. Full HVAC equipment and building materials inventory at wholesale prices.',
  telephone: '+97165220089',
})

const areasServed = [
  'Al Qulayaa',
  'Industrial Area 1–12',
  'Al Nahda',
  'Al Khan',
  'Al Majaz',
  'Muwaileh',
  'Al Taawun',
  'Bu Tina',
  'Al Ghuwair',
  'Rolla',
  'Al Yarmook',
  'Sharjah Airport Free Zone',
]

export default function SharjahLocationPage() {
  return (
    <>
      <JsonLd data={[breadcrumb, locationSchema]} />
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
            <span className="text-foreground">Sharjah</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                HVAC Spare Parts & Building Materials Supplier in Sharjah
              </h1>
              <p className="mt-2 text-lg font-medium text-accent">
                Al Qulayaa — Al Egaby Gen. Tr. (L.L.C)
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Al Egaby Gen. Tr. (L.L.C) operates its main warehouse and showroom in Al Qulayaa,
                Sharjah — one of the UAE&apos;s busiest trading hubs for HVAC equipment and
                construction materials. We supply compressors, refrigerant gases, thermostats,
                valves, copper fittings, insulation, tools, paint, electrical products, and
                hardware at wholesale prices to contractors, MEP companies, and developers across
                Sharjah and the Northern Emirates.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our Sharjah location offers walk-in availability for immediate collection, plus
                scheduled delivery to project sites across the Emirate and all of the UAE. Whether
                you need Copeland compressors, Honeywell thermostats, Refron refrigerants, Makita
                power tools, or Jotun paints — we have it in stock at trade prices.
              </p>

              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground">
                  Areas We Serve in Sharjah
                </h2>
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
                  Popular HVAC Products in Sharjah
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'AC Compressors (Copeland, Bristol, Mitsubishi)',
                    'Refrigerant Gases (R410A, R134a, R22)',
                    'Honeywell & Siemens Thermostats',
                    'HVAC Valves & Controls',
                    'Copper Tubes & Fittings (Mueller)',
                    'Insulation (Kimmco Isover, Aerofoam)',
                    'Split AC Units (Daikin, O General)',
                    'HVAC Tools & Accessories',
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
                  <h3 className="font-bold text-foreground">Contact — Sharjah</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Al Qulayaa, Sharjah, UAE
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
                      href="/locations/dubai-hvac-supply"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Dubai delivery area →
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
