import { SUBURBS } from './constants'
import type { FaqItem } from './schema'

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
  /** Location-specific FAQs (answers vary by suburb for SEO). */
  faqs: FaqItem[]
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

/** Per-suburb FAQ answers — same questions, locally distinct copy. */
const FAQ_ANSWERS: Record<string, { coverage: string; quote: string; insured: string }> = {
  Croydon: {
    coverage:
      'Yes — Croydon is home base for JC Brick & Blocklaying. Jamie is on local jobs here most weeks, from outdoor fireplaces and pizza ovens to structural retaining walls and remedial brickwork. Full supply and install, with no subcontracting.',
    quote:
      'Use the enquiry form on the contact page or call Jamie directly. Because he’s based in Croydon, site visits for local jobs are often arranged within the same week. You’ll get a clear, itemised, no-obligation quote within one business day.',
    insured:
      'Yes. Every Croydon job — whether a backyard fireplace, a retaining wall on a sloping block, or heritage repointing — is covered by JC’s full insurance. Details are available on request before work starts.',
  },
  'Croydon North': {
    coverage:
      'Yes. JC Brick & Blocklaying works regularly in Croydon North, across both established streets and newer estates. Jamie handles feature fences, remedial crack stitching, retaining walls, and outdoor entertaining builds with full supply and install.',
    quote:
      'Send an enquiry via the contact page or use Click-to-Call. Jamie responds to Croydon North jobs within one business day and can usually visit within the week to measure up fences, fireplaces, or remedial work.',
    insured:
      'Yes — fully insured on every residential and light-commercial job in Croydon North. Whether it’s a dividing wall between neighbours or a full feature brick wall, coverage applies from quote to completion.',
  },
  'Croydon Hills': {
    coverage:
      'Yes. Croydon Hills’ larger family blocks are a regular patch for Jamie — outdoor fireplaces, pizza ovens, feature walls, and block retaining walls are common requests here. JC handles the full job personally, supply and install included.',
    quote:
      'Fill in the contact form or call Jamie to describe your project. For Croydon Hills entertaining builds, he often schedules a site visit to check access, fall, and footing requirements before quoting.',
    insured:
      'Yes. JC Brick & Blocklaying carries full insurance on all Croydon Hills work, including structural retaining walls and standalone outdoor structures. Ask for certificates before your job begins.',
  },
  Mooroolbark: {
    coverage:
      'Yes. Mooroolbark is a regular area for JC — especially retaining walls and brick extensions on sloping blocks. Jamie also does remedial work, custom mortar matching, and architectural feature walls across the suburb.',
    quote:
      'Contact Jamie via the enquiry form or phone. Mooroolbark retaining-wall and extension quotes usually include a site visit to assess slope, drainage, and block requirements — you’ll hear back within one business day.',
    insured:
      'Yes. All Mooroolbark jobs are fully insured, including structural retaining walls with concrete core fill. Insurance documentation is available on request.',
  },
  'Mount Evelyn': {
    coverage:
      'Yes. Mount Evelyn’s leafy, semi-rural blocks suit the outdoor work Jamie specialises in — fireplaces, bluestone feature walls, and pizza ovens are popular here. He services the suburb regularly from his Croydon base.',
    quote:
      'Use the contact page form or call directly. For Mount Evelyn outdoor builds, Jamie typically visits to confirm pad locations, services, and access before sending an itemised quote — usually within one business day.',
    insured:
      'Yes. JC is fully insured for residential work across Mount Evelyn, including standalone outdoor structures and feature walls on larger blocks. Details provided on request.',
  },
  Ringwood: {
    coverage:
      'Yes. Ringwood sees steady JC work — retaining walls, remedial brickwork, and new-build packages for boutique builders. Jamie handles outdoor fireplaces, heritage matching, and architectural brickwork across the suburb.',
    quote:
      'Submit an enquiry online or call Jamie. Ringwood projects — from remedial repointing to full retaining walls — get a response within one business day, with site visits arranged for anything structural.',
    insured:
      'Yes. Every Ringwood job, residential or commercial, is covered by JC’s insurance. That includes fire-rated dividing walls and structural retaining work.',
  },
  'Ringwood North': {
    coverage:
      'Yes. Ringwood North’s established homes often need exactly what Jamie does best — heritage-style mortar matching, remedial brickwork, and careful restoration. He also builds retaining walls, feature fences, and outdoor fireplaces here.',
    quote:
      'Reach out via the contact form or phone. For Ringwood North heritage and remedial jobs, Jamie may ask for photos of the existing brick and mortar first, then arrange a site visit for colour matching.',
    insured:
      'Yes. JC Brick & Blocklaying is fully insured on all Ringwood North work, including sensitive heritage repairs where matching existing brickwork is critical.',
  },
  Bayswater: {
    coverage:
      'Yes. Bayswater’s mix of residential streets and light-commercial pockets keeps Jamie busy with dividing walls, feature brickwork, retaining walls, and remedial jobs. Full supply and install on every project.',
    quote:
      'Use the enquiry form or Click-to-Call. Bayswater quotes for dividing walls or commercial feature work are itemised and turnaround is within one business day — site visits arranged for structural jobs.',
    insured:
      'Yes. JC carries full insurance for Bayswater residential and light-commercial brickwork, including fire-rated and boundary walls.',
  },
  Blackburn: {
    coverage:
      'Yes. Blackburn’s period homes are ideal for Jamie’s 80-colour custom mortar matching and heritage restoration. He also does remedial crack stitching, feature walls, and retaining work across the suburb.',
    quote:
      'Contact Jamie via the form or phone. Blackburn heritage quotes often involve a mortar sample or colour match visit — he responds within one business day and explains the matching process clearly.',
    insured:
      'Yes. All Blackburn heritage and remedial work is fully insured. Jamie’s restoration jobs are covered from scaffold to final clean-up.',
  },
  'Chirnside Park': {
    coverage:
      'Yes. Chirnside Park and the Yarra Valley edge are prime JC territory — custom outdoor fireplaces, pizza ovens, and entertaining walls are common here. Jamie also handles retaining walls and remedial brickwork locally.',
    quote:
      'Fill in the contact form or call. For Chirnside Park fireplace and oven builds, Jamie visits to discuss design, flue routing, and footing before quoting — response within one business day.',
    insured:
      'Yes. JC is fully insured for all Chirnside Park outdoor and structural brickwork, including standalone pizza ovens and combustion-appliance surrounds.',
  },
  Doncaster: {
    coverage:
      'Yes. Doncaster keeps Jamie busy with architectural new builds, feature walls, and remedial crack stitching on established homes. Retaining walls, custom mortar matching, and outdoor fireplaces are all in scope.',
    quote:
      'Send an enquiry or call Jamie directly. Doncaster architectural and new-build quotes are coordinated with builders or architects where needed — you’ll get a clear response within one business day.',
    insured:
      'Yes. Every Doncaster job — from boutique builder packages to one-off feature walls — is covered by JC’s full insurance.',
  },
  Balwyn: {
    coverage:
      'Yes. Balwyn’s grand period homes are where Jamie’s heritage restoration and exact mortar matching stand out. He also does remedial work, feature brickwork, and retaining walls across the suburb.',
    quote:
      'Use the contact page or phone. Balwyn heritage quotes typically include a site visit to assess existing brick, mortar condition, and colour — Jamie replies within one business day.',
    insured:
      'Yes. JC Brick & Blocklaying is fully insured for Balwyn heritage and high-end residential work, including sensitive facade restoration.',
  },
  Kilsyth: {
    coverage:
      'Yes. Kilsyth family homes regularly call for retaining walls, dividing walls, and outdoor living brickwork — all core JC services. Jamie also does fireplaces, remedial work, and custom mortar matching here.',
    quote:
      'Contact via the enquiry form or call. Kilsyth retaining-wall and fence quotes usually need a quick site measure for height and length — Jamie responds within one business day.',
    insured:
      'Yes. All Kilsyth residential brickwork is fully insured, including structural retaining walls and boundary dividing walls.',
  },
  Lilydale: {
    coverage:
      'Yes. Lilydale and the lower Yarra Valley are popular for JC’s outdoor fireplaces, pizza ovens, and feature walls. Jamie also handles retaining work and remedial brickwork across the area.',
    quote:
      'Reach out on the contact page or by phone. Lilydale outdoor-entertaining quotes often include a site visit to plan pad, flue, and access — reply within one business day.',
    insured:
      'Yes. JC is fully insured for Lilydale residential work, including standalone outdoor structures on larger valley blocks.',
  },
  Mitcham: {
    coverage:
      'Yes. Mitcham’s older brick homes often need remedial work, repointing, and careful mortar matching — Jamie’s specialty. He also builds retaining walls, feature fences, and outdoor fireplaces in the suburb.',
    quote:
      'Use the form or call Jamie. Mitcham remedial quotes may start with photos of cracking or spalling, followed by a site visit for mortar sampling — response within one business day.',
    insured:
      'Yes. All Mitcham remedial and restoration work is fully insured, including repointing and structural crack stitching.',
  },
  Vermont: {
    coverage:
      'Yes. Vermont homeowners frequently hire Jamie for feature walls, front fences, and retaining walls. He also does outdoor fireplaces, remedial brickwork, and custom mortar matching across the suburb.',
    quote:
      'Submit an enquiry or call directly. Vermont front-fence and feature-wall quotes are itemised by lineal metre and height — Jamie gets back to you within one business day.',
    insured:
      'Yes. JC carries full insurance on all Vermont residential brickwork, from decorative feature walls to structural retaining.',
  },
  Wantirna: {
    coverage:
      'Yes. Wantirna and the wider Knox area suit JC’s structural retaining walls and architectural brickwork. Jamie works with homeowners and boutique builders on new builds, feature walls, and remedial jobs.',
    quote:
      'Contact via the form or phone. Wantirna retaining-wall quotes include a site assessment for slope, drainage, and engineering where required — reply within one business day.',
    insured:
      'Yes. Every Wantirna job is fully insured, including engineered retaining walls with concrete core fill and steel reinforcement.',
  },
  Healesville: {
    coverage:
      'Yes. Healesville and the upper Yarra Valley are favourites for standalone pizza ovens and outdoor fireplaces — Jamie travels here regularly from Croydon. Retaining walls and feature brickwork are also available.',
    quote:
      'Use the contact form or call. Healesville outdoor builds often need a planning visit for access, pad location, and appliance specs — Jamie responds within one business day and schedules visits around his eastern-suburbs run.',
    insured:
      'Yes. JC is fully insured for Healesville residential work, including combustion-appliance surrounds and standalone outdoor structures.',
  },
  Warranwood: {
    coverage:
      'Yes. Warranwood’s larger garden blocks suit bluestone feature walls, outdoor entertaining builds, and retaining walls. Jamie handles fireplaces, pizza ovens, and remedial brickwork across the suburb.',
    quote:
      'Send an enquiry or call Jamie. Warranwood entertaining and feature-wall quotes usually involve a site visit to check garden access and wall run — response within one business day.',
    insured:
      'Yes. All Warranwood residential brickwork is fully insured, including bluestone feature walls and structural retaining.',
  },
  Boronia: {
    coverage:
      'Yes. Boronia sees plenty of JC work — retaining walls, dividing walls, and remedial brickwork are common. Jamie also builds outdoor fireplaces, feature fences, and does custom mortar matching locally.',
    quote:
      'Contact via the enquiry form or phone. Boronia retaining and dividing-wall quotes are measured on site where needed — you’ll hear back within one business day.',
    insured:
      'Yes. JC Brick & Blocklaying is fully insured on every Boronia job, residential or commercial.',
  },
  'Ferntree Gully': {
    coverage:
      'Yes. Ferntree Gully’s sloping sites are ideal for the structural retaining walls Jamie builds with concrete core fill and steel. He also does remedial work, fireplaces, and feature brickwork across the suburb.',
    quote:
      'Use the contact page or call. Ferntree Gully retaining-wall quotes always include a slope and drainage check on site — Jamie replies within one business day.',
    insured:
      'Yes. All Ferntree Gully structural retaining and residential brickwork is fully insured, including engineered block walls.',
  },
  Knox: {
    coverage:
      'Yes. Across the Knox area Jamie handles retaining walls, feature brickwork, and new-build packages for boutique builders. Outdoor fireplaces, remedial work, and custom mortar matching are all in scope.',
    quote:
      'Reach out via the form or phone. Knox builder and homeowner quotes are coordinated to suit project stage — clear, itemised response within one business day.',
    insured:
      'Yes. JC is fully insured for residential and light-commercial work across Knox, including new-build brick packages.',
  },
  Scoresby: {
    coverage:
      'Yes. Scoresby’s residential and commercial mix suits dividing walls, fire-rated walls, and architectural brickwork. Jamie also does retaining walls, remedial work, and outdoor fireplaces in the area.',
    quote:
      'Submit an enquiry or call Jamie. Scoresby commercial and fire-rated wall quotes are itemised by scope — response within one business day, with site visits for structural work.',
    insured:
      'Yes. All Scoresby jobs — including fire-rated dividing walls and commercial feature brickwork — are covered by JC’s full insurance.',
  },
}

function buildLocationFaqs(name: string): FaqItem[] {
  const answers = FAQ_ANSWERS[name] ?? {
    coverage: `Yes. JC Brick & Blocklaying regularly works in ${name} and the surrounding eastern suburbs of Melbourne. Jamie handles outdoor fireplaces, retaining walls, remedial brickwork, custom mortar matching, heritage restoration, feature walls, and architectural brickwork, all with full supply and install.`,
    quote: `Fill in the enquiry form on the contact page or use the Click-to-Call button to reach Jamie directly. He responds to all ${name} enquiries within one business day and provides a clear, itemised, no-obligation quote.`,
    insured: `Yes. JC Brick & Blocklaying is fully insured on every job in ${name}, residential or commercial. Insurance details are available on request before any work begins.`,
  }
  return [
    {
      question: `Does JC Brick & Blocklaying service ${name}?`,
      answer: answers.coverage,
    },
    {
      question: `How do I get a bricklaying quote in ${name}?`,
      answer: answers.quote,
    },
    {
      question: `Is JC Brick & Blocklaying insured for work in ${name}?`,
      answer: answers.insured,
    },
  ]
}

export const LOCATIONS: Location[] = SUBURBS.map((name, i) => {
  const slug = slugify(name)
  const nearby = [SUBURBS[(i + 1) % SUBURBS.length], SUBURBS[(i + 2) % SUBURBS.length], SUBURBS[(i + 3) % SUBURBS.length]]
  const note = NOTES[name] ?? `${name} is one of the eastern-suburbs areas JC Brick & Blocklaying services regularly.`
  return {
    slug,
    name,
    blurb: `Fully insured bricklayer in ${name} — fireplaces, retaining walls, remedial work, heritage restoration and custom mortar matching.`,
    intro: `Looking for a reliable, fully insured bricklayer in ${name}? JC Brick & Blocklaying has been laying brick and block across Melbourne's eastern suburbs for 21 years. ${note} Full supply and install, custom mortar matching, and a 5.0-star Google rating to back it up.`,
    servicesIntro: `From outdoor fireplaces and block retaining walls to remedial brickwork, custom mortar matching, and heritage restoration, Jamie at JC delivers the full range of brick and block services to ${name} homeowners, builders, and architects. Every job is completed personally — full supply and install, one tradie, one quote, one finish.`,
    metaDescription: `${name} bricklayer — JC Brick & Blocklaying. Outdoor fireplaces, retaining walls, remedial brickwork, custom mortar matching and heritage restoration. 21 years experience, fully insured, 5★ rated. Free quotes.`,
    nearby: nearby.filter((n) => n !== name),
    faqs: buildLocationFaqs(name),
  }
})

export const LOCATION_BY_SLUG: Record<string, Location> = LOCATIONS.reduce(
  (acc, l) => {
    acc[l.slug] = l
    return acc
  },
  {} as Record<string, Location>,
)

/** Suburb display name → `/areas/[slug]` path segment. */
export const LOCATION_SLUG_BY_NAME: Record<string, string> = Object.fromEntries(
  LOCATIONS.map((l) => [l.name, l.slug]),
)
