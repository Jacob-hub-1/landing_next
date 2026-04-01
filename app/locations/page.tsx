import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'HVAC & Building Materials Supplier Locations in UAE',
  description:
    'Al Egaby Gen. Tr. (L.L.C) supplies HVAC equipment and building materials across the UAE from our warehouse in Sharjah with delivery to Dubai and all Emirates. Visit us for wholesale pricing and in-stock availability.',
  alternates: { canonical: '/locations' },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Locations', url: '/locations' },
])

const deliveryAreas = [
  'Dubai',
  'Abu Dhabi',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain',
  'Al Ain',
]

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              HVAC & Building Materials Supplier Locations in UAE
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Al Egaby Gen. Tr. (L.L.C) operates from our main warehouse in Al Qulayaa, Sharjah,
              serving contractors, MEP companies, developers, and facility managers across the
              United Arab Emirates. Visit our warehouse for instant availability or request
              delivery to your project site anywhere in the UAE.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
              <h2 className="text-2xl font-bold text-foreground">
                Main Warehouse — Sharjah
              </h2>
              <p className="mt-1 text-sm font-medium text-accent">Al Qulayaa</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our main warehouse and showroom in Al Qulayaa, Sharjah. Full HVAC equipment
                and building materials inventory with wholesale pricing for contractors and
                project buyers. Walk-in and delivery available.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Al Qulayaa, Sharjah, UAE
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+97165220089" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      06 522 0089
                    </a>
                    <a href="tel:+971568880263" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      0568880263
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                  <a href="mailto:info@alegaby.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@alegaby.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p>Mon–Sat: 8:00 AM – 6:00 PM</p>
                    <p>Sun: Closed (orders via email)</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">Areas We Serve from Sharjah</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['Al Qulayaa', 'Industrial Area', 'Al Nahda', 'Al Khan', 'Muwaileh', 'Al Majaz'].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/locations/sharjah-hvac-supply"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                View Sharjah location details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors">
              <h2 className="text-2xl font-bold text-foreground">
                Delivery Across the UAE
              </h2>
              <p className="mt-1 text-sm font-medium text-accent">Dubai & All Emirates</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We deliver HVAC spare parts and building materials across Dubai and all UAE
                Emirates from our Sharjah warehouse. Same-day and scheduled delivery available
                for contractors, MEP companies, and project buyers.
              </p>

              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">Delivery Areas</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {deliveryAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                  <a href="tel:+971568880263" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    0568880263
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                  <a href="mailto:info@alegaby.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@alegaby.com
                  </a>
                </div>
              </div>

              <Link
                href="/locations/dubai-hvac-supply"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                View Dubai delivery details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <section className="mt-16 p-8 rounded-lg bg-secondary/50">
            <h2 className="text-xl font-bold text-foreground">
              Delivering HVAC Equipment & Building Materials Across the UAE
            </h2>
            <p className="mt-2 text-muted-foreground">
              From our Sharjah warehouse, we deliver to Dubai, Abu Dhabi, Ajman, Ras Al
              Khaimah, Fujairah, Umm Al Quwain, and Al Ain. Contact us for delivery schedules
              and bulk order logistics.
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us for Delivery
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
