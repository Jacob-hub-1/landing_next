import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { hvacCategories, buildingMaterialsCategories } from '@/lib/data/categories'

export const metadata: Metadata = {
  title: 'HVAC & Building Materials Products',
  description:
    'Browse HVAC equipment and building materials categories — compressors, thermostats, refrigerants, valves, insulation, tools, paint, electrical, plumbing, and more. Wholesale supplier in Dubai and Sharjah, UAE.',
  alternates: { canonical: '/categories' },
  openGraph: {
    title: 'HVAC & Building Materials Products',
    description:
      'Browse HVAC equipment and building materials categories — compressors, thermostats, refrigerants, valves, insulation, tools, paint, electrical, plumbing, and more.',
    url: '/categories',
    images: [{ url: '/hero-image.avif', alt: 'Alegaby HVAC and building materials product categories' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HVAC & Building Materials Products',
    description:
      'Browse HVAC equipment and building materials categories — compressors, thermostats, refrigerants, valves, insulation, tools, paint, electrical, plumbing, and more.',
    images: ['/hero-image.avif'],
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Categories', url: '/categories' },
])

export default function CategoriesPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              HVAC Equipment & Building Materials Categories
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Al Egaby Gen. Tr. (L.L.C) supplies a comprehensive range of HVAC spare parts and building
              materials at wholesale prices. Browse our product categories below or{' '}
              <Link href="/#contact" className="text-accent hover:underline">
                contact us
              </Link>{' '}
              for custom requirements.
            </p>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">HVAC Equipment</h2>
            <p className="mt-2 text-muted-foreground">
              Air conditioning and refrigeration components for installation, maintenance, and
              repair.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hvacCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 bg-secondary">
                    <Image
                      src={category.image}
                      alt={`${category.name} - HVAC spare parts supplier UAE`}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">Building Materials</h2>
            <p className="mt-2 text-muted-foreground">
              Construction tools, hardware, paint, electrical, plumbing, and safety products for
              every project.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {buildingMaterialsCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 bg-secondary">
                    <Image
                      src={category.image}
                      alt={`${category.name} - building materials supplier UAE`}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 p-8 rounded-lg bg-secondary/50">
            <h2 className="text-xl font-bold text-foreground">
              Need wholesale pricing or bulk supply?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Contact Al Egaby Gen. Tr. (L.L.C) for competitive trade pricing on HVAC equipment and
              building materials. We serve contractors, MEP companies, and developers across the
              UAE.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/brands"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground border border-border rounded-md hover:bg-secondary transition-colors"
              >
                View All Brands
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
