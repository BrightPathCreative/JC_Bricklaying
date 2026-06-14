export const SITE = {
  name: 'JC Brick & Blocklaying Pty Ltd',
  shortName: 'JC Brick & Blocklaying',
  owner: 'Jamie Craig',
  abn: '95 667 976 963',
  phone: '0402 723 175', // Personal mobile — never displayed; used only for the tel: link
  phoneTel: '+61402723175', // tel: link format
  /** Visible label used everywhere in place of the raw number. */
  callLabel: 'Click to Call',
  email: 'jcbrickblocklaying@gmail.com',
  url: 'https://jcbricklaying.com.au',
  /** Service-area business — based in Croydon, no public street address. */
  address: {
    suburb: 'Croydon',
    city: 'Melbourne',
    state: 'Victoria',
    stateCode: 'VIC',
    country: 'AU',
    /** Human-readable, privacy-safe location string. */
    display: 'Croydon, Melbourne, Victoria',
  },
  geo: {
    lat: -37.7942,
    lng: 145.2835,
  },
  hours: 'Mon–Fri 7:00am–5:30pm | Sat 9:00am–3:00pm | Sun Closed',
  openingHoursSchema: ['Mo-Fr 07:00-17:30', 'Sa 09:00-15:00'],
  rating: {
    value: 5.0,
    count: 15,
    best: 5,
  },
  social: {
    gbp: 'https://maps.app.goo.gl/AbcimzzXD9JkFuMT7',
    facebook: 'https://facebook.com/jcbrickblocklaying',
    instagram: 'https://instagram.com/jcbrick_block',
  },
  award: 'Top 1% — Quality Business Awards 2026 (Maroondah Region)',
  experience: 21,
  priceRange: '$$',
  trade: 'Bricklayer',
  primaryKeyword: 'Bricklayer Melbourne',
} as const

export const SUBURBS = [
  'Croydon',
  'Croydon North',
  'Croydon Hills',
  'Mooroolbark',
  'Mount Evelyn',
  'Ringwood',
  'Ringwood North',
  'Bayswater',
  'Blackburn',
  'Chirnside Park',
  'Doncaster',
  'Balwyn',
  'Kilsyth',
  'Lilydale',
  'Mitcham',
  'Vermont',
  'Wantirna',
  'Healesville',
  'Warranwood',
  'Boronia',
  'Ferntree Gully',
  'Knox',
  'Scoresby',
] as const

export type ServiceSlug =
  | 'outdoor-fireplaces-pizza-ovens'
  | 'block-retaining-walls'
  | 'remedial-brickwork'
  | 'custom-mortar-matching'
  | 'heritage-brickwork-restoration'
  | 'feature-walls-front-fences'
  | 'new-builds-architectural-brickwork'

export interface ServiceMeta {
  slug: ServiceSlug
  /** Full service page name */
  name: string
  /** Short label used in the nav dropdown */
  navLabel: string
  /** Breadcrumb label */
  breadcrumb: string
  /** Image folder (source) used to source photography */
  imageFolder: string
}

/** Ordered list of all 7 service pages (Master Handover slug convention). */
export const SERVICES: ServiceMeta[] = [
  {
    slug: 'outdoor-fireplaces-pizza-ovens',
    name: 'Outdoor Fireplaces & Pizza Ovens',
    navLabel: 'Outdoor Fireplaces',
    breadcrumb: 'Outdoor Fireplaces',
    imageFolder: 'p04-fireplaces_pizza-ovens',
  },
  {
    slug: 'block-retaining-walls',
    name: 'Block Retaining & Dividing Walls',
    navLabel: 'Block Retaining & Dividing Walls',
    breadcrumb: 'Block Retaining Walls',
    imageFolder: 'p05-retaining-walls_retaining',
  },
  {
    slug: 'remedial-brickwork',
    name: 'Remedial Brickwork & Crack Stitching',
    navLabel: 'Remedial Brickwork & Crack Stitching',
    breadcrumb: 'Remedial Brickwork',
    imageFolder: 'p06-remedial_crack-stitching',
  },
  {
    slug: 'custom-mortar-matching',
    name: 'Custom Mortar Matching',
    navLabel: 'Custom Mortar Matching',
    breadcrumb: 'Custom Mortar Matching',
    imageFolder: 'p07-mortar-matching',
  },
  {
    slug: 'heritage-brickwork-restoration',
    name: 'Heritage Brickwork Restoration',
    navLabel: 'Heritage Brickwork Restoration',
    breadcrumb: 'Heritage Brickwork Restoration',
    imageFolder: 'p08-heritage-restoration',
  },
  {
    slug: 'feature-walls-front-fences',
    name: 'Feature Walls & Front Fences',
    navLabel: 'Feature Walls & Front Fences',
    breadcrumb: 'Feature Walls & Front Fences',
    imageFolder: 'p08b-feature-walls_feature-brickwork',
  },
  {
    slug: 'new-builds-architectural-brickwork',
    name: 'New Builds & Architectural Brickwork',
    navLabel: 'New Builds & Architectural Brickwork',
    breadcrumb: 'New Builds & Architectural Brickwork',
    imageFolder: 'p07b-new-builds_architectural',
  },
]

export const SERVICE_BY_SLUG: Record<ServiceSlug, ServiceMeta> = SERVICES.reduce(
  (acc, s) => {
    acc[s.slug] = s
    return acc
  },
  {} as Record<ServiceSlug, ServiceMeta>,
)

/** Verbatim Google reviews — never edit this text. */
export const REVIEWS = [
  {
    author: 'Martyn Sangster',
    date: '2025-04',
    dateLabel: 'April 2025',
    rating: 5,
    body: 'Jamie did an awesome job, great guy to deal with and did exactly as he said he was going to do. Went above & beyond to keep us happy, really happy with the fireplace it looks awesome and works great. I would highly recommend him for any brick and block work especially fire places.',
  },
  {
    author: 'Adam B',
    date: '2025-05',
    dateLabel: 'May 2025',
    rating: 5,
    body: 'Jamie did an amazing job on our very large retaining wall. He turned up on time and the wall looks amazing. Great workmanship and work ethic. Very happy customers thanks Jamie.',
  },
  {
    author: 'Roger Milborn',
    date: '2024-12',
    dateLabel: 'December 2024',
    rating: 5,
    body: 'Good trustworthy bricklaying. I find with Jamie at the helm of this team, his awesome leadership helps to produce the best with his coworkers and the overall finish of the job is excellent. As a builder, I recommend Jamie (JC Brick and blocklaying) as your go to bricklayers with excellent service, an honest approach and spot on workmanship.',
  },
] as const

/** Lead capture form dropdown options (exact order from Developer Brief). */
export const ENQUIRY_OPTIONS = [
  'Outdoor Fireplace',
  'Retaining or Dividing Wall',
  'Remedial Work & Crack Stitching',
  'Custom Mortar Matching',
  'Heritage Restoration',
  'Feature Wall or Front Fence',
  'Extension or Architectural Brickwork',
  'New Build & Architectural Brickwork',
  'Other',
] as const

/** Main navigation. Contact omitted — the "Get My Free Quote" CTA covers it. */
export const MAIN_NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/areas' },
  { label: 'Gallery', href: '/gallery' },
] as const
