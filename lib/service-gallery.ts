import type { ServiceSlug } from './constants'

export interface GalleryItem {
  src: string
  alt: string
}

/**
 * Per-service project galleries. Images are sourced from Jamie's own job
 * photos, watermark-cropped and optimised into /public/images/services/<slug>/.
 * Alt text follows the SEO alt-text formula (subject — descriptor — location).
 */
const GALLERY_META: Record<ServiceSlug, { count: number; altBase: string }> = {
  'outdoor-fireplaces-pizza-ovens': {
    count: 20,
    altBase: 'outdoor brick fireplace and pizza oven melbourne eastern suburbs',
  },
  'block-retaining-walls': {
    count: 20,
    altBase: 'block retaining and dividing wall melbourne eastern suburbs',
  },
  'remedial-brickwork': {
    count: 19,
    altBase: 'remedial brickwork and crack stitching melbourne eastern suburbs',
  },
  'custom-mortar-matching': {
    count: 18,
    altBase: 'custom mortar matched brickwork melbourne eastern suburbs',
  },
  'heritage-brickwork-restoration': {
    count: 20,
    altBase: 'heritage brickwork restoration period home melbourne eastern suburbs',
  },
  'feature-walls-front-fences': {
    count: 20,
    altBase: 'brick feature wall and front fence melbourne eastern suburbs',
  },
  'new-builds-architectural-brickwork': {
    count: 20,
    altBase: 'new build architectural brickwork melbourne eastern suburbs',
  },
}

function build(slug: ServiceSlug): GalleryItem[] {
  const { count, altBase } = GALLERY_META[slug]
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    return {
      src: `/images/services/${slug}/${num}.jpg`,
      alt: `${altBase} — jc brick and blocklaying project ${i + 1}`,
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
