import { SITE, SUBURBS, REVIEWS } from './constants'

/**
 * LocalBusiness (MasonryContractor) — injected in the root layout on every page.
 * Values match the Developer Brief exactly. Do not recalculate.
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MasonryContractor',
  name: SITE.name,
  description:
    "Award-winning bricklayer and masonry specialist serving Melbourne's eastern suburbs. Outdoor fireplaces, retaining walls, remedial work, and custom mortar matching. 21 years experience. Fully insured.",
  url: SITE.url,
  telephone: '+61-4-0272-3175',
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.suburb,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postcode,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  areaServed: [...SUBURBS],
  priceRange: SITE.priceRange,
  sameAs: [SITE.social.gbp, SITE.social.facebook, SITE.social.instagram],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '15',
    bestRating: '5',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  logo: `${SITE.url}/images/brand/logo.png`,
  sameAs: [SITE.social.gbp, SITE.social.facebook, SITE.social.instagram],
}

/** AggregateRating — Home page. */
export const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: SITE.name,
  },
  ratingValue: '5.0',
  reviewCount: '15',
  bestRating: '5',
}

/** Review schema (×3) — Home page. Verbatim review text. */
export const reviewSchemas = REVIEWS.map((r) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: SITE.name,
  },
  author: { '@type': 'Person', name: r.author },
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  datePublished: r.date,
  reviewBody: r.body,
}))

export interface Crumb {
  name: string
  path: string
}

/** BreadcrumbList — all pages except Home. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.url,
      },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${SITE.url}${c.path}`,
      })),
    ],
  }
}

export interface FaqItem {
  question: string
  answer: string
}

/** FAQPage — service pages and standalone FAQ page. */
export function faqPageSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}
