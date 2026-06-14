export const GALLERY_CATEGORIES = [
  'All',
  'Fireplaces & Pizza Ovens',
  'Retaining & Block Walls',
  'Feature Walls & Fences',
  'Heritage Restoration',
  'Architectural & New Builds',
  'Remedial & Crack Stitching',
] as const

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

export interface GalleryImage {
  src: string
  alt: string
  category: Exclude<GalleryCategory, 'All'>
  width: number
  height: number
}

/** Curated project gallery. Alt text follows the SEO alt-text formula. */
export const GALLERY: GalleryImage[] = [
  // Fireplaces & Pizza Ovens
  {
    src: '/images/gallery/fireplaces-06.jpg',
    alt: 'finished red brick outdoor fireplace melbourne — custom built backyard fireplace eastern suburbs',
    category: 'Fireplaces & Pizza Ovens',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/fireplaces-10.jpg',
    alt: 'outdoor brick fireplace with chimney melbourne — custom fireplace build eastern suburbs',
    category: 'Fireplaces & Pizza Ovens',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/fireplaces-22.jpg',
    alt: 'bricklayer laying brick fireplace melbourne — jc brick and blocklaying craftsmanship',
    category: 'Fireplaces & Pizza Ovens',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/outdoor-living-06.jpg',
    alt: 'curved block outdoor bench seat melbourne — built in seating blockwork eastern suburbs',
    category: 'Fireplaces & Pizza Ovens',
    width: 1050,
    height: 1400,
  },

  // Retaining & Block Walls
  {
    src: '/images/gallery/retaining-10.jpg',
    alt: 'long block retaining wall melbourne — structural concrete core filled wall eastern suburbs',
    category: 'Retaining & Block Walls',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/retaining-25.jpg',
    alt: 'rendered retaining wall street frontage melbourne — block retaining wall eastern suburbs',
    category: 'Retaining & Block Walls',
    width: 1050,
    height: 1400,
  },

  // Feature Walls & Fences
  {
    src: '/images/gallery/feature-entrance-07.jpg',
    alt: 'brick entrance pier and garden wall melbourne — front fence brickwork eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 653,
    height: 1400,
  },
  {
    src: '/images/gallery/feature-entrance-14.jpg',
    alt: 'custom brick front fence pier melbourne — feature wall brickwork eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 653,
    height: 1400,
  },
  {
    src: '/images/gallery/feature-entrance-24.jpg',
    alt: 'red brick feature wall with capping melbourne — garden wall brickwork eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 653,
    height: 1400,
  },
  {
    src: '/images/gallery/bluestone-09.jpg',
    alt: 'sandstone garden feature wall melbourne — landscaped stone wall eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/bluestone-15.jpg',
    alt: 'finished sandstone garden wall melbourne — feature stone wall eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 1400,
    height: 1050,
  },
  {
    src: '/images/gallery/internal-feature-21.jpg',
    alt: 'internal exposed brick feature wall melbourne — recycled brick interior eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/internal-feature-22.jpg',
    alt: 'interior brick feature wall with recess melbourne — exposed brickwork eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/internal-feature-26.jpg',
    alt: 'recycled brick interior feature wall melbourne — hallway exposed brickwork eastern suburbs',
    category: 'Feature Walls & Fences',
    width: 1050,
    height: 1400,
  },

  // Heritage Restoration
  {
    src: '/images/gallery/heritage-11.jpg',
    alt: 'decorative heritage brick corner melbourne — period home brickwork restoration eastern suburbs',
    category: 'Heritage Restoration',
    width: 653,
    height: 1400,
  },
  {
    src: '/images/gallery/heritage-13.jpg',
    alt: 'heritage brick corbel detail melbourne — period brickwork restoration eastern suburbs',
    category: 'Heritage Restoration',
    width: 653,
    height: 1400,
  },
  {
    src: '/images/gallery/heritage-21.jpg',
    alt: 'jc brick crew at heritage home arches melbourne — brickwork restoration eastern suburbs',
    category: 'Heritage Restoration',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/heritage-36.jpg',
    alt: 'repointing heritage brickwork melbourne — mortar restoration period home eastern suburbs',
    category: 'Heritage Restoration',
    width: 1050,
    height: 1400,
  },

  // Architectural & New Builds
  {
    src: '/images/gallery/architectural-23.jpg',
    alt: 'custom stamped krause bricks melbourne — architectural brickwork jc brick and blocklaying',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/architectural-33.jpg',
    alt: 'two storey new build brick home melbourne — architectural brickwork eastern suburbs',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/architectural-34.jpg',
    alt: 'modern new build brick facade melbourne — architectural brickwork eastern suburbs',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/architectural-36.jpg',
    alt: 'grey brick facade black framed windows melbourne — architectural brickwork eastern suburbs',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/architectural-42.jpg',
    alt: 'contemporary brick facade melbourne — architectural new build brickwork eastern suburbs',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/multi-unit-16.jpg',
    alt: 'multi unit brick townhouse development melbourne — new build brickwork eastern suburbs',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/multi-unit-22.jpg',
    alt: 'modern multi unit brick development melbourne — architectural new build brickwork',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/multi-unit-30.jpg',
    alt: 'brick townhouse facade melbourne — multi unit new build brickwork eastern suburbs',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/outdoor-living-16.jpg',
    alt: 'brick church facade melbourne — commercial heritage brickwork jc brick and blocklaying',
    category: 'Architectural & New Builds',
    width: 1050,
    height: 1400,
  },

  // Remedial & Crack Stitching
  {
    src: '/images/gallery/remedial-01.jpg',
    alt: 'crack stitched brick wall melbourne — helical bar remedial brickwork repair eastern suburbs',
    category: 'Remedial & Crack Stitching',
    width: 1050,
    height: 1400,
  },
  {
    src: '/images/gallery/remedial-07.jpg',
    alt: 'repointing cracked brickwork melbourne — remedial masonry repair eastern suburbs',
    category: 'Remedial & Crack Stitching',
    width: 1050,
    height: 1400,
  },
]
