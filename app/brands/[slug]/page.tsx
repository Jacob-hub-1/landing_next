import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildBreadcrumbSchema, buildProductSchema } from '@/lib/schema'
import { allBrands, getBrandBySlug } from '@/lib/data/brands'

export function generateStaticParams() {
  return allBrands.map((brand) => ({ slug: brand.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) return {}

  const division = brand.division === 'hvac' ? 'HVAC Spare Parts' : 'Building Materials'
  const title = `${brand.name} ${division} UAE | Original ${brand.name} Products Sharjah & Dubai`
  const description = `Original ${brand.name} ${brand.products.slice(0, 3).join(', ')} in Sharjah and Dubai. Wholesale pricing, in-stock inventory, and same-day dispatch from Al Egaby Gen. Tr. (L.L.C)`

  return {
    title,
    description,
    alternates: { canonical: `/brands/${slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: brand.logo, alt: brand.altText }],
    },
  }
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) notFound()

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Brands', url: '/brands' },
    { name: brand.name, url: `/brands/${brand.slug}` },
  ])

  const productSchemas = brand.products.map((product) =>
    buildProductSchema({
      name: `${brand.name} ${product}`,
      description: `Original ${brand.name} ${product} available at wholesale prices in UAE from Al Egaby Gen. Tr. (L.L.C)`,
      brand: brand.name,
      category: brand.division === 'hvac' ? 'HVAC Equipment' : 'Building Materials',
      image: brand.logo,
      url: `/brands/${brand.slug}`,
    })
  )

  const divisionLabel = brand.division === 'hvac' ? 'HVAC Equipment' : 'Building Materials'

  return (
    <>
      <JsonLd data={[breadcrumb, ...productSchemas]} />
      <main className="min-h-screen pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/brands" className="hover:text-foreground transition-colors">
              Brands
            </Link>
            <span>/</span>
            <span className="text-foreground">{brand.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 flex items-center justify-center rounded-lg border border-border bg-white p-4">
                  <Image
                    src={brand.logo}
                    alt={brand.altText}
                    width={80}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-accent uppercase tracking-wider">
                    {divisionLabel}
                  </p>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                    {brand.name}
                  </h1>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{brand.description}</p>

              <div className="mt-8 prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">{brand.longDescription}</p>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground">
                  {brand.name} Products Available
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {brand.products.map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-sm font-medium text-foreground">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-bold text-foreground">Need {brand.name} products?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Get wholesale pricing and check availability for {brand.name} products. Fast
                    delivery across Dubai, Sharjah, and UAE.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>

                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-bold text-foreground">Explore Categories</h3>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/categories"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View all product categories →
                    </Link>
                    <Link
                      href="/locations"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Our locations in UAE →
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
