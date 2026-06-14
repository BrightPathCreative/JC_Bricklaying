import type { ServiceSlug } from './constants'

export interface GalleryItem {
  src: string
  alt: string
}

/**
 * Per-service project galleries. Images are sourced from Jamie's own job
 * photos, watermark-cropped and optimised into /public/images/services/<slug>/.
 * Alt text rotates through descriptive, SEO-friendly phrases (subject +
 * descriptor) and is suffixed with the brand + service area for relevance.
 */
const GALLERY_META: Record<ServiceSlug, { count: number; phrases: string[] }> = {
  'outdoor-fireplaces-pizza-ovens': {
    count: 20,
    phrases: [
      'custom outdoor brick fireplace built in a backyard',
      'wood-fired brick pizza oven with chimney',
      'outdoor entertaining area with built-in fireplace',
      'rendered outdoor fireplace with timber mantel',
      'freestanding brick pizza oven feature',
      'outdoor fireplace and chimney detail',
      'brick fireplace surround and hearth finish',
    ],
  },
  'block-retaining-walls': {
    count: 20,
    phrases: [
      'core-filled block retaining wall on a sloping site',
      'steel-reinforced concrete block dividing wall',
      'rendered block retaining wall along a driveway',
      'structural block wall with capping',
      'terraced block retaining wall in a garden',
      'besser block boundary wall under construction',
      'finished block retaining wall and drainage',
    ],
  },
  'remedial-brickwork': {
    count: 19,
    phrases: [
      'crack stitching repair to cracked brickwork',
      'remedial brickwork repair on a brick wall',
      'helical bar crack stitching installation',
      'repointed and reinstated mortar joints',
      'rebuilt section of damaged brickwork',
      'dampcourse rectification on a brick wall',
      'structural brick crack repair detail',
    ],
  },
  'custom-mortar-matching': {
    count: 18,
    phrases: [
      'custom matched mortar blended into existing brickwork',
      'mortar colour sample card against a brick wall',
      'tuck-pointed brickwork with matched mortar',
      'mortar colour chart used for an exact match',
      'restored brick joint with colour-matched mortar',
      'new brickwork blended seamlessly with old',
      'mortar matching test on heritage brick',
    ],
  },
  'heritage-brickwork-restoration': {
    count: 20,
    phrases: [
      'heritage brickwork restoration on a period home',
      'restored Victorian-era brick facade',
      'tuck-pointing and repointing on heritage brick',
      'matched brick repair on an old chimney',
      'period home brick wall restoration',
      'heritage facade brick and mortar reinstatement',
      'restored decorative heritage brick detail',
    ],
  },
  'feature-walls-front-fences': {
    count: 20,
    phrases: [
      'architectural brick feature wall on a modern home',
      'brick front fence with rendered piers',
      'face brick feature entry columns',
      'internal brick feature wall detail',
      'brick and block front boundary fence',
      'statement brick frontage on a new build',
      'feature brick pillar and letterbox',
    ],
  },
  'new-builds-architectural-brickwork': {
    count: 20,
    phrases: [
      'architectural brickwork on a new residential build',
      'face brick walls on a new house under construction',
      'precision bricklaying on a modern home facade',
      'new build brick wall with clean mortar joints',
      'architectural masonry detail on a contemporary home',
      'bricklaying in progress on a new residential project',
      'finished face brickwork on a new build',
    ],
  },
}

const SUFFIX = 'JC Brick & Blocklaying — bricklayer Melbourne eastern suburbs'

function build(slug: ServiceSlug): GalleryItem[] {
  const { count, phrases } = GALLERY_META[slug]
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    const phrase = phrases[i % phrases.length]
    return {
      src: `/images/services/${slug}/${num}.jpg`,
      alt: `${phrase} — ${SUFFIX}`,
    }
  })
}

export const SERVICE_GALLERY: Record<ServiceSlug, GalleryItem[]> = {
  'outdoor-fireplaces-pizza-ovens': build('outdoor-fireplaces-pizza-ovens'),
  'block-retaining-walls': build('block-retaining-walls'),
  'remedial-brickwork': build('remedial-brickwork'),
  'custom-mortar-matching': build('custom-mortar-matching'),
  'heritage-brickwork-restoration': build('heritage-brickwork-restoration'),
  'feature-walls-front-fences': build('feature-walls-front-fences'),
  'new-builds-architectural-brickwork': build('new-builds-architectural-brickwork'),
}
