import type { Metadata } from 'next'
import { SITE } from './constants'

interface PageMetaInput {
  title: string
  description: string
  /** Path beginning with '/'. Home is '/'. */
  path: string
  /** OG image path under /public, defaults to the homepage OG. */
  ogImage?: string
}

/**
 * Build a complete Metadata object for a page, with canonical + Open Graph.
 * Title/description strings must be passed verbatim from the SEO spec.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogImage = '/images/og/homepage.jpg',
}: PageMetaInput): Metadata {
  const canonical = path === '/' ? SITE.url : `${SITE.url}${path}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.shortName,
      locale: 'en_AU',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/** Exact, approved per-page title + description strings (do not alter). */
export const PAGE_META = {
  home: {
    title: 'Bricklayer Melbourne | JC Brick & Blocklaying',
    description:
      "Award-winning bricklayer across Melbourne's east. Fireplaces, retaining walls & heritage restoration. 21 yrs exp. 5★ rated. Free quotes.",
    ogImage: '/images/og/home.jpg',
  },
  about: {
    title: 'About JC Brick & Blocklaying | Bricklayer Melbourne',
    description:
      "21 years of bricklaying across Melbourne's east. Jamie Craig — award-winning, fully insured, no subcontracting. Learn more about JC Brick.",
    ogImage: '/images/og/about.jpg',
  },
  services: {
    title: 'Bricklaying Services Melbourne | JC Brick & Blocklaying',
    description:
      "Full range of masonry services across Melbourne's east — fireplaces, retaining walls, remedial work & mortar matching. Fully insured. Free quotes.",
    ogImage: '/images/og/services.jpg',
  },
  'outdoor-fireplaces-pizza-ovens': {
    title: 'Outdoor Fireplaces Melbourne | JC Brick & Blocklaying',
    description:
      "Custom outdoor fireplaces & pizza ovens across Melbourne's eastern suburbs. Full supply & install. 21 yrs exp. Fully insured. Free quotes.",
    ogImage: '/images/og/outdoor-fireplaces-pizza-ovens.jpg',
  },
  'block-retaining-walls': {
    title: 'Block Retaining Walls Melbourne | JC Brick & Blocklaying',
    description:
      "Structural block retaining & dividing walls across Melbourne's east. Concrete core fill, steel reinforcement. Fully insured. Free quotes.",
    ogImage: '/images/og/block-retaining-walls.jpg',
  },
  'remedial-brickwork': {
    title: 'Remedial Brickwork Melbourne | JC Brick & Blocklaying',
    description:
      "Specialist crack stitching & masonry repairs across Melbourne's eastern suburbs. 21 yrs exp. Fully insured. No subcontracting. Free quotes.",
    ogImage: '/images/og/remedial-brickwork.jpg',
  },
  'custom-mortar-matching': {
    title: 'Custom Mortar Matching Melbourne | JC Brick & Blocklaying',
    description:
      "80 custom mortar colours. Exact heritage & restoration matching across Melbourne's eastern suburbs. Fully insured. Request a free quote today.",
    ogImage: '/images/og/custom-mortar-matching.jpg',
  },
  'heritage-brickwork-restoration': {
    title: 'Heritage Brickwork Restoration Melbourne | JC Brick & Blocklaying',
    description:
      'Facade restoration, crack stitching and dampcourse rectification on period homes. 80 custom mortar colours for an exact match. Fully insured.',
    ogImage: '/images/og/heritage-brickwork-restoration.jpg',
  },
  'feature-walls-front-fences': {
    title: 'Feature Walls & Front Fences Melbourne | JC Brick & Blocklaying',
    description:
      "Custom brick feature walls and front fences, from simple to architectural. Full supply and install across Melbourne's eastern suburbs.",
    ogImage: '/images/og/feature-walls-front-fences.jpg',
  },
  'new-builds-architectural-brickwork': {
    title: 'New Builds & Architectural Brickwork Melbourne | JC Brick & Blocklaying',
    description:
      "New residential builds & architectural brickwork across Melbourne's east. Boutique builders & architects welcome. 21 yrs exp. Fully insured. Free quotes.",
    ogImage: '/images/og/new-builds-architectural-brickwork.jpg',
  },
  gallery: {
    title: 'Our Work | JC Brick & Blocklaying | Bricklayer Melbourne',
    description:
      "Gallery of bricklaying projects across Melbourne's east — fireplaces, retaining walls, heritage restoration & more. JC Brick & Blocklaying.",
    ogImage: '/images/og/gallery.jpg',
  },
  contact: {
    title: 'Get a Free Quote | JC Brick & Blocklaying | Melbourne',
    description:
      "Request a free, no-obligation bricklaying quote across Melbourne's eastern suburbs. Jamie responds within 1 business day. Click to call today.",
    ogImage: '/images/og/contact.jpg',
  },
  faq: {
    title: 'FAQs | JC Brick & Blocklaying | Bricklayer Melbourne',
    description:
      'Frequently asked questions about JC Brick & Blocklaying — services, areas, pricing, insurance & more. Bricklayer Melbourne eastern suburbs.',
    ogImage: '/images/og/faq.jpg',
  },
} as const
