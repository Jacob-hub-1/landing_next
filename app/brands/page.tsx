import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { hvacBrands, buildingMaterialsBrands } from '@/lib/data/brands'

export const metadata: Metadata = {
  title: 'HVAC & Building Materials Brands',
  description:
    'Explore our portfolio of trusted HVAC and building materials brands including Honeywell, Daikin, Copeland, Jotun, Makita, Schneider Electric, and more. Authorized supplier in Dubai, Sharjah, and UAE.',
  alternates: { canonical: '/brands' },
  openGraph: {
    title: 'HVAC & Building Materials Brands',
    description:
      'Explore our portfolio of trusted HVAC and building materials brands including Honeywell, Daikin, Copeland, Jotun, Makita, Schneider Electric, and more.',
    url: '/brands',
    images: [{ url: '/hero-image.avif', alt: 'Alegaby trusted HVAC and building materials brands in UAE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC & Building Materials Brands',
    description:
      'Explore our portfolio of trusted HVAC and building materials brands including Honeywell, Daikin, Copeland, Jotun, Makita, Schneider Electric, and more.',
    images: ['/hero-image.avif'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Brands', url: '/brands' },
])

export default function BrandsPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Trusted HVAC & Building Materials Brands in UAE
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Al Egaby Gen. Tr. (L.L.C) is an authorized supplier and distributor for over 40 leading
              HVAC equipment and building materials brands. We provide wholesale pricing, in-stock
              availability, and fast delivery across Dubai, Sharjah, Abu Dhabi, and all UAE
              Emirates.
            </p>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">HVAC Equipment Brands</h2>
            <p className="mt-2 text-muted-foreground">
              Compressors, refrigerants, thermostats, valves, copper fittings, insulation, and AC
              spare parts from world-class manufacturers.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {hvacBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="group flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="h-16 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.altText}
                      width={100}
                      height={100}
                      className="max-w-full max-h-full object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {brand.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">Building Materials Brands</h2>
            <p className="mt-2 text-muted-foreground">
              Tools, paint, electrical products, plumbing, cables, lighting, and construction
              hardware from trusted manufacturers.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {buildingMaterialsBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`/brands/${brand.slug}`}
                  className="group flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="h-16 flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={brand.altText}
                      width={100}
                      height={100}
                      className="max-w-full max-h-full object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {brand.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 p-8 rounded-lg bg-secondary/50">
            <h2 className="text-xl font-bold text-foreground">
              Looking for a specific brand or product?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Contact our team for wholesale pricing, product availability, and technical support.
              We deliver across Dubai, Sharjah, Abu Dhabi, Ajman, and all UAE Emirates.
            </p>
            <Link
              href="/#contact"
              className="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
