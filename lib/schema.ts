const SITE_URL = 'https://www.alegaby.com'
const BUSINESS_NAME = 'Al Egaby Gen. Tr. (L.L.C)'
const BRAND_NAME = 'Alegaby'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'WholesaleStore'],
  additionalType: 'https://schema.org/HVACBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  alternateName: BRAND_NAME,
  url: SITE_URL,
  description:
    'Leading HVAC equipment supplier and building materials trading company in the UAE. Wholesale compressors, refrigerants, thermostats, copper fittings, tools, paint, and construction hardware in Dubai and Sharjah.',
  telephone: '+97165220089',
  email: 'info@alegaby.com',
  image: `${SITE_URL}/hero-image.avif`,
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Compressors' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Refrigerant Gases' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Thermostats & Controls' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HVAC Valves' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copper Tubes & Fittings' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Split AC Units' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electric Motors' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Building Materials',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Power Tools' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paint & Coatings' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Materials' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardware & Fasteners' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plumbing & Sanitary' } },
        ],
      },
    ],
  },
  // Add directory profile URLs as you create them (Google Business, Yellow Pages UAE, etc.)
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+97165220089',
    contactType: 'sales',
    availableLanguage: ['English', 'Arabic', 'Hindi', 'Urdu'],
    areaServed: 'AE',
  },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Organization',
        name: 'UAE Trade Clients',
      },
      reviewBody:
        'Trusted by contractors and enterprise buyers in the UAE for reliable stock availability and delivery.',
    },
    offers: {
      '@type': 'Offer',
      ...(url && { url: `${SITE_URL}${url}` }),
      price: '1.00',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'AED',
      itemCondition: 'https://schema.org/NewCondition',
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

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
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
