import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildBreadcrumbSchema, buildProductSchema } from '@/lib/schema'
import { allCategories, getCategoryBySlug } from '@/lib/data/categories'

export function generateStaticParams() {
  return allCategories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return {}

  const title = `${category.name} Wholesale Dubai | HVAC Spare Parts & Building Materials UAE`
  const description = `Buy ${category.name} at wholesale prices in Dubai and Sharjah. Top brands, reliable stock, and contractor pricing from Al Egaby Gen. Tr. (L.L.C) Fast delivery across UAE.`

  return {
    title,
    description,
    alternates: { canonical: `/categories/${slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: category.image, alt: `${category.name} supplier UAE` }],
    },
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const breadcrumb = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Categories', url: '/categories' },
    { name: category.name, url: `/categories/${category.slug}` },
  ])

  const productSchemas = category.products.map((product) =>
    buildProductSchema({
      name: product,
      description: `${product} available at wholesale prices in UAE from Al Egaby Gen. Tr. (L.L.C)`,
      brand: category.brands[0] || 'Al Egaby Gen. Tr.',
      category: category.name,
      image: category.image,
      url: `/categories/${category.slug}`,
    })
  )

  const divisionLabel = category.division === 'hvac' ? 'HVAC Equipment' : 'Building Materials'

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
            <Link href="/categories" className="hover:text-foreground transition-colors">
              Categories
            </Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src={category.image}
                  alt={`${category.name} wholesale supplier UAE - Al Egaby Gen. Tr. (L.L.C)`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <p className="text-sm font-medium text-accent uppercase tracking-wider">
                {divisionLabel}
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {category.name} Supplier in UAE
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {category.description}
              </p>

              <div className="mt-8">
                <p className="text-muted-foreground leading-relaxed">{category.longDescription}</p>
              </div>

              <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground">Products in This Category</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.products.map((product) => (
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

              {category.brands.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-foreground">Brands We Carry</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {category.brands.map((brand) => (
                      <span
                        key={brand}
                        className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-card text-foreground"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-bold text-foreground">Get Wholesale Pricing</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Contact our team for competitive trade pricing on {category.name.toLowerCase()}.
                    Fast delivery across Dubai, Sharjah, and all UAE Emirates.
                  </p>
                  <Link
                    href="/#contact"
                    className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>

                <div className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="font-bold text-foreground">Related Pages</h3>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/brands"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View all brands →
                    </Link>
                    <Link
                      href="/categories"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      All product categories →
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
