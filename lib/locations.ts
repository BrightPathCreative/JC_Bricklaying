import { SUBURBS } from './constants'

export interface Location {
  slug: string
  name: string
  /** Short tagline used on cards + meta descriptions. */
  blurb: string
  /** Lead intro paragraph for the location page. */
  intro: string
  /** SEO intro for the services section on the location page. */
  servicesIntro: string
  /** Meta description for the location page. */
  metaDescription: string
  /** Nearby suburbs JC also services (internal-link cluster). */
  nearby: string[]
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

/** Distinguishing note per suburb so each page reads uniquely (good for SEO). */
const NOTES: Record<string, string> = {
  Croydon:
    'Croydon is home base for JC Brick & Blocklaying, so Jamie is on local jobs here most weeks — from outdoor fireplaces to structural retaining walls.',
  'Croydon North':
    'Croydon North’s mix of established and newer homes keeps Jamie busy with everything from feature fences to remedial crack stitching.',
  'Croydon Hills':
    'Croydon Hills’ larger family blocks are ideal for outdoor entertaining builds — fireplaces, pizza ovens and feature walls.',
  Mooroolbark:
    'Mooroolbark is a regular patch for Jamie, with plenty of retaining wall and brick extension work across its sloping blocks.',
  'Mount Evelyn':
    'Mount Evelyn’s leafy, semi-rural blocks suit outdoor fireplaces and bluestone feature walls, a JC speciality.',
  Ringwood:
    'Ringwood sees a steady stream of retaining wall, remedial and new-build brickwork from JC Brick & Blocklaying.',
  'Ringwood North':
    'Ringwood North’s established homes often call for heritage-style matching and remedial brickwork — exactly Jamie’s wheelhouse.',
  Bayswater:
    'Bayswater’s residential and light-commercial mix means everything from dividing walls to feature brickwork.',
  Blackburn:
    'Blackburn’s period homes are perfect for Jamie’s 80-colour custom mortar matching and heritage restoration work.',
  'Chirnside Park':
    'Chirnside Park and the Yarra Valley edge are prime territory for custom outdoor fireplaces and pizza ovens.',
  Doncaster:
    'Doncaster keeps Jamie busy with architectural new builds, feature walls and remedial crack stitching.',
  Balwyn:
    'Balwyn’s grand period homes are where Jamie’s heritage restoration and exact mortar matching really shine.',
  Kilsyth:
    'Kilsyth’s family homes regularly call for retaining walls, dividing walls and outdoor living brickwork.',
  Lilydale:
    'Lilydale and the lower Yarra Valley are popular for outdoor fireplaces, pizza ovens and feature walls.',
  Mitcham:
    'Mitcham’s older brick homes often need remedial work, repointing and careful mortar matching.',
  Vermont:
    'Vermont homeowners frequently turn to Jamie for feature walls, front fences and retaining walls.',
  Wantirna:
    'Wantirna and Knox-area blocks suit structural retaining walls and architectural brickwork.',
  Healesville:
    'Healesville and the upper Yarra Valley are favourites for standalone pizza ovens and outdoor fireplaces.',
  Warranwood:
    'Warranwood’s larger garden blocks lend themselves to bluestone feature walls and outdoor entertaining builds.',
  Boronia:
    'Boronia sees plenty of retaining wall, dividing wall and remedial brickwork from JC Brick & Blocklaying.',
  'Ferntree Gully':
    'Ferntree Gully’s sloping sites are ideal for the structural retaining walls Jamie builds with concrete core fill and steel.',
  Knox:
    'Across the Knox area Jamie handles retaining walls, feature brickwork and new-build packages for boutique builders.',
  Scoresby:
    'Scoresby’s residential and commercial projects suit dividing walls, fire-rated walls and architectural brickwork.',
}

export const LOCATIONS: Location[] = SUBURBS.map((name, i) => {
  const slug = slugify(name)
  const nearby = [SUBURBS[(i + 1) % SUBURBS.length], SUBURBS[(i + 2) % SUBURBS.length], SUBURBS[(i + 3) % SUBURBS.length]]
  const note = NOTES[name] ?? `${name} is one of the eastern-suburbs areas JC Brick & Blocklaying services regularly.`
  return {
    slug,
    name,
    blurb: `Fully insured bricklayer in ${name} — fireplaces, retaining walls, remedial work, heritage restoration and custom mortar matching.`,
    intro: `Looking for a reliable, fully insured bricklayer in ${name}? Jamie Craig and JC Brick & Blocklaying have been laying brick and block across Melbourne's eastern suburbs for 21 years. ${note} Full supply and install, custom mortar matching, and a 5.0-star Google rating to back it up.`,
    servicesIntro: `From outdoor fireplaces and block retaining walls to remedial brickwork, custom mortar matching, and heritage restoration, Jamie delivers the full range of brick and block services to ${name} homeowners, builders, and architects. Every job is completed personally — full supply and install, one tradie, one quote, one finish.`,
    metaDescription: `${name} bricklayer Jamie Craig — outdoor fireplaces, retaining walls, remedial brickwork, custom mortar matching and heritage restoration. 21 years experience, fully insured, 5★ rated. Free quotes.`,
    nearby: nearby.filter((n) => n !== name),
  }
})

export const LOCATION_BY_SLUG: Record<string, Location> = LOCATIONS.reduce(
  (acc, l) => {
    acc[l.slug] = l
    return acc
  },
  {} as Record<string, Location>,
)
