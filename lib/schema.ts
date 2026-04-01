const SITE_URL = 'https://www.alegaby.com'
const BUSINESS_NAME = 'Al Egaby Gen. Tr. (L.L.C)'
const BRAND_NAME = 'Alegaby'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/HVACBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  alternateName: BRAND_NAME,
  url: SITE_URL,
  description:
    'Leading HVAC equipment supplier and building materials trading company in the UAE. Wholesale compressors, refrigerants, thermostats, copper fittings, tools, paint, and construction hardware in Dubai and Sharjah.',
  telephone: '+97165220089',
  email: 'info@alegaby.com',
  image: `${SITE_URL}/hero-imgage.avif`,
  logo: `${SITE_URL}/icon.svg`,
  priceRange: '$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Qulayaa',
    addressLocality: 'Sharjah',
    addressRegion: 'Sharjah',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.3573,
    longitude: 55.3887,
  },
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'City', name: 'Sharjah' },
    { '@type': 'City', name: 'Abu Dhabi' },
    { '@type': 'City', name: 'Ajman' },
    { '@type': 'City', name: 'Ras Al Khaimah' },
    { '@type': 'City', name: 'Fujairah' },
    { '@type': 'City', name: 'Umm Al Quwain' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Equipment & Building Materials',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'HVAC Equipment',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'AC Compressors' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Refrigerant Gases' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Thermostats & Controls' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'HVAC Valves' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Copper Tubes & Fittings' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Split AC Units' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Electric Motors' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Building Materials',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Power Tools' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Paint & Coatings' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Construction Materials' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hardware & Fasteners' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Plumbing & Sanitary' } },
        ],
      },
    ],
  },
  sameAs: [],
}

export function buildProductSchema({
  name,
  description,
  brand,
  category,
  image,
  url,
}: {
  name: string
  description: string
  brand: string
  category: string
  image?: string
  url?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: { '@type': 'Brand', name: brand },
    category,
    ...(image && { image: `${SITE_URL}${image}` }),
    ...(url && { url: `${SITE_URL}${url}` }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'AED',
      seller: {
        '@type': 'Organization',
        name: BUSINESS_NAME,
      },
    },
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function buildLocationSchema({
  city,
  district,
  latitude,
  longitude,
  description,
  telephone,
}: {
  city: string
  district: string
  latitude: number
  longitude: number
  description: string
  telephone: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/HVACBusiness',
    name: `${BUSINESS_NAME} - ${city}`,
    description,
    telephone,
    email: 'info@alegaby.com',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: district,
      addressLocality: city,
      addressRegion: city,
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  }
}
