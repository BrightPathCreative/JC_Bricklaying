import type { ServiceSlug } from './constants'
import type { FaqItem } from './schema'

export interface ServiceBlock {
  title: string
  body: string
}

export interface ServiceHero {
  src: string
  alt: string
}

/** Hero photography per service page. Alt text follows the SEO alt-text formula. */
export const SERVICE_HERO: Record<ServiceSlug, ServiceHero> = {
  'outdoor-fireplaces-pizza-ovens': {
    src: '/images/services/outdoor-fireplaces-pizza-ovens.jpg',
    alt: 'outdoor brick fireplace melbourne — custom built freestanding fireplace eastern suburbs',
  },
  'block-retaining-walls': {
    src: '/images/services/block-retaining-walls.jpg',
    alt: 'block retaining wall melbourne — concrete core fill steel reinforced wall eastern suburbs',
  },
  'remedial-brickwork': {
    src: '/images/services/remedial-brickwork.jpg',
    alt: 'crack stitching melbourne — helical bar remedial brickwork eastern suburbs',
  },
  'custom-mortar-matching': {
    src: '/images/services/custom-mortar-matching.jpg',
    alt: 'custom mortar matching melbourne — colour matched brick mortar joints eastern suburbs',
  },
  'heritage-brickwork-restoration': {
    src: '/images/services/heritage-brickwork-restoration.jpg',
    alt: 'heritage brickwork restoration melbourne — period home facade jc brick and blocklaying',
  },
  'feature-walls-front-fences': {
    src: '/images/services/feature-walls-front-fences.jpg',
    alt: 'feature wall and front fence melbourne — sandstone garden wall jc brick and blocklaying',
  },
  'new-builds-architectural-brickwork': {
    src: '/images/services/new-builds-architectural-brickwork.jpg',
    alt: 'architectural brickwork melbourne — new build cream brick facade eastern suburbs',
  },
}

export interface ServiceContent {
  slug: ServiceSlug
  /** Page H1 — verbatim, do not alter. */
  h1: string
  /** Lead intro paragraph. */
  intro: string
  /** Heading for the detail section. */
  sectionHeading: string
  /** Sub-section blocks (title + body). */
  blocks: ServiceBlock[]
  /** Service areas paragraph. */
  serviceAreas: string
  /** FAQs (verbatim) — drive both the on-page accordion and FAQPage schema. */
  faqs: FaqItem[]
}

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContent> = {
  'outdoor-fireplaces-pizza-ovens': {
    slug: 'outdoor-fireplaces-pizza-ovens',
    h1: 'Outdoor Fireplaces & Pizza Ovens Melbourne: Custom Built, Full Supply & Install',
    intro:
      "Jamie at JC builds outdoor fireplaces and pizza ovens across Melbourne's eastern suburbs, and both are among his favourite jobs. When you get the design right and the build right, a fireplace or pizza oven is something a family uses for decades. That's what Jamie aims for on every one he builds.",
    sectionHeading:
      'Outdoor Fireplaces & Pizza Ovens Built to Last: Yarra Valley & Eastern Melbourne',
    blocks: [
      {
        title: 'Full Supply and Install',
        body: 'Jamie sources all materials for every fireplace or pizza oven project. Brick, block, mortar, and structural components. All of it. You get one quote, one tradie, one finished build.',
      },
      {
        title: 'Custom Design and Mortar Matching',
        body: "Every fireplace and pizza oven is built to suit the existing outdoor space. If there's existing brickwork to match, Jamie uses his custom mortar range of 80 colours to ensure the new work blends seamlessly.",
      },
      {
        title: 'Pizza Ovens',
        body: "A well-built pizza oven gets used year-round, not just for special occasions. Jamie builds custom pizza ovens as standalone features or as part of a larger outdoor fireplace and entertaining area. Each one is built to retain heat properly and finished to match the rest of your outdoor space. It's a popular addition across Melbourne's east, especially in the Yarra Valley.",
      },
      {
        title: 'Structural and Architectural Work',
        body: "Jamie's fireplaces and pizza ovens aren't just decorative. They're structurally sound and built to Australian standards, with fully insured work, a clean finish, and a proper foundation.",
      },
    ],
    serviceAreas:
      'Jamie builds outdoor fireplaces and pizza ovens throughout Chirnside Park, Mount Evelyn, Mooroolbark, Lilydale, Healesville, Warranwood, and across the Yarra Valley. He also works regularly in Croydon, Ringwood, Doncaster, and Balwyn.',
    faqs: [
      {
        question: 'Does JC Brick & Blocklaying build outdoor fireplaces in Melbourne?',
        answer:
          "Yes. Outdoor fireplaces are one of JC Brick & Blocklaying's most in-demand services across Melbourne's eastern suburbs. JC Brick & Blocklaying handles the full project, from design through to supply and build, so clients don't have to coordinate multiple trades. Every fireplace is built to a high standard, fully insured, and completed with Jamie on-site for the duration of the work.",
      },
      {
        question: 'Does JC Brick & Blocklaying build pizza ovens in Melbourne?',
        answer:
          "Yes. Pizza ovens are a popular standalone build or addition to an outdoor fireplace project across Melbourne's eastern suburbs. Jamie designs and builds each pizza oven to suit the space, with full supply and install included. Whether it's part of a larger entertaining area or a feature on its own, the result is built to last and finished to match the rest of your outdoor area.",
      },
      {
        question: 'How long does it take to build an outdoor fireplace or pizza oven?',
        answer:
          'Most residential outdoor fireplace and pizza oven projects are completed within one week. The exact timeframe depends on the complexity of the design, access to the site, and weather. JC Brick & Blocklaying provides a clear timeline as part of the initial quote. Jamie and his crew work efficiently to minimise disruption and complete the project on schedule.',
      },
      {
        question: 'Can JC Brick & Blocklaying match the existing brickwork and mortar?',
        answer:
          'Yes. JC Brick & Blocklaying carries a custom mortar range of 80 colours, allowing Jamie to match existing brickwork and mortar on most projects. This is particularly important when adding an outdoor fireplace or pizza oven to a period home or an established outdoor space where the new work needs to blend with existing brick or render. Jamie assesses the match on-site before the build begins.',
      },
      {
        question: 'Is JC Brick & Blocklaying insured for outdoor fireplace and pizza oven builds?',
        answer:
          "Yes, JC Brick & Blocklaying is fully insured on every project, including outdoor fireplace and pizza oven builds. This gives homeowners across Melbourne's eastern suburbs complete peace of mind. Insurance details are available on request, and Jamie is happy to confirm coverage before any work begins.",
      },
      {
        question:
          'What areas does JC Brick & Blocklaying service for outdoor fireplaces and pizza ovens?',
        answer:
          "JC Brick & Blocklaying builds outdoor fireplaces and pizza ovens across Melbourne's eastern suburbs and the Yarra Valley, including Chirnside Park, Mount Evelyn, Mooroolbark, Lilydale, Healesville, Croydon, Ringwood, Doncaster, Balwyn, and surrounding areas.",
      },
    ],
  },

  'block-retaining-walls': {
    slug: 'block-retaining-walls',
    h1: 'Block Retaining Walls Melbourne: Full Supply & Install',
    intro:
      "JC Brick & Blocklaying builds block retaining and dividing walls across Melbourne's eastern suburbs. These are structural builds. Jamie does them properly, with concrete core fill, steel reinforcement, and full supply and install. No cutting corners, no shortcuts on the structural work.",
    sectionHeading: 'Retaining Walls Built to Hold: Melbourne Eastern Suburbs',
    blocks: [
      {
        title: 'Structural Retaining Walls',
        body: 'Full-height structural block retaining walls with concrete core fill and steel reinforcement. Built to last and compliant with Australian standards.',
      },
      {
        title: 'Dividing Walls',
        body: 'Block dividing walls for residential and commercial properties. Clean finish, solid construction, full supply and install.',
      },
      {
        title: 'Fire-Rated Walls',
        body: 'Fire-rated block wall construction for properties where required by council or building regulations. Jamie builds to spec and ensures compliance.',
      },
      {
        title: 'Full Supply and Install',
        body: 'Jamie sources all block, steel, and concrete for every retaining wall job. You get one clear quote and one tradie managing everything from materials to completion.',
      },
    ],
    serviceAreas:
      'JC Brick & Blocklaying builds retaining and dividing walls in Croydon, Ringwood, Bayswater, Wantirna, Knox, Boronia, Ferntree Gully, Scoresby, Kilsyth, Warranwood, and surrounding eastern suburbs.',
    faqs: [
      {
        question: 'Does JC Brick & Blocklaying build structural retaining walls in Melbourne?',
        answer:
          "Yes. Structural block retaining walls are one of JC Brick & Blocklaying's core services across Melbourne's eastern suburbs. Every retaining wall is built with concrete core fill and steel reinforcement, ensuring long-term stability and compliance with Australian building standards.",
      },
      {
        question: 'What types of retaining walls does JC Brick & Blocklaying build?',
        answer:
          'JC Brick & Blocklaying builds a range of retaining and dividing wall types, including structural block retaining walls, dividing walls for residential and commercial properties, and fire-rated block walls. All work includes full supply and install.',
      },
      {
        question: 'How much does a block retaining wall cost in Melbourne?',
        answer:
          'Retaining wall costs vary depending on height, length, site access, and ground conditions. JC Brick & Blocklaying provides free, itemised quotes for every retaining wall project. Jamie can usually assess and quote within one to two business days of an enquiry.',
      },
      {
        question: 'Does JC Brick & Blocklaying work with builders on retaining wall projects?',
        answer:
          "Yes. JC Brick & Blocklaying works with residential builders and developers on block retaining wall and dividing wall projects across Melbourne's eastern suburbs. Jamie is reliable, communicates well, and delivers structural work to the standard that builders need.",
      },
      {
        question: 'Is JC Brick & Blocklaying insured for retaining wall work?',
        answer:
          'Yes. JC Brick & Blocklaying is fully insured on all retaining wall and dividing wall projects.',
      },
    ],
  },

  'remedial-brickwork': {
    slug: 'remedial-brickwork',
    h1: 'Remedial Brickwork Melbourne: Crack Stitching & Masonry Repairs',
    intro:
      "Cracked or deteriorating brickwork doesn't improve on its own. JC Brick & Blocklaying provides specialist remedial brickwork and crack stitching across Melbourne's eastern suburbs. Jamie at JC diagnoses the issue, fixes it properly, and leaves you with a result that holds.",
    sectionHeading: 'Crack Stitching and Masonry Repairs',
    blocks: [
      {
        title: 'Crack Stitching',
        body: 'Specialist crack stitching to stabilise and repair cracked masonry walls. Jamie uses the correct stainless steel helical bar system to reinforce the crack zone and prevent further movement. The repair is solid, structural, and nearly invisible once complete.',
      },
      {
        title: 'Dampcourse Rectification',
        body: 'Rising damp in brickwork is a mortar problem as much as a moisture problem. Jamie removes the deteriorated mortar, applies a waterproof additive, and reinstates new mortar that properly manages water ingress.',
      },
      {
        title: 'Mortar Removal and Reinstatement',
        body: "Old or failed mortar removed and replaced with fresh mortar, colour-matched where needed using Jamie's 80-colour custom mortar range.",
      },
      {
        title: 'Structural Masonry Assessment',
        body: "Before any remedial work begins, Jamie assesses the brickwork to understand what's actually happening. Not every crack needs the same solution, and Jamie won't quote you more work than the job requires.",
      },
    ],
    serviceAreas:
      "JC Brick & Blocklaying handles remedial brickwork and crack stitching in Croydon, Ringwood, Doncaster, Blackburn, Balwyn, Vermont, Mitcham, Boronia, Kilsyth, Wantirna, and throughout Melbourne's eastern suburbs.",
    faqs: [
      {
        question: 'Does JC Brick & Blocklaying specialise in crack stitching?',
        answer:
          "Yes. Crack stitching and remedial brickwork are among JC Brick & Blocklaying's most requested services across Melbourne's eastern suburbs. Jamie uses the correct stainless steel helical bar method to stabilise cracked masonry and prevent further movement.",
      },
      {
        question: 'What causes cracks in brick walls?',
        answer:
          'Cracks in brick walls are commonly caused by foundation movement, thermal expansion and contraction, failing mortar joints, tree root pressure, or inadequate structural support. JC Brick & Blocklaying assesses each crack individually before recommending a repair method.',
      },
      {
        question: 'What is dampcourse rectification?',
        answer:
          'Dampcourse rectification involves removing deteriorated mortar from affected brick joints, treating the area with a waterproof additive, and reinstating new mortar to properly manage moisture ingress.',
      },
      {
        question: 'How long does crack stitching take?',
        answer:
          'Most residential crack stitching jobs are completed within one day. Larger projects involving multiple walls or significant structural movement may take longer. JC Brick & Blocklaying provides a clear timeframe with every quote.',
      },
      {
        question: "Is remedial brickwork covered by JC Brick & Blocklaying's insurance?",
        answer:
          "Yes. All remedial brickwork services, including crack stitching and dampcourse rectification, are covered by JC Brick & Blocklaying's full insurance.",
      },
    ],
  },

  'custom-mortar-matching': {
    slug: 'custom-mortar-matching',
    h1: 'Custom Mortar Matching Melbourne: 80 Colours, Exact Results',
    intro:
      'Most bricklayers in Melbourne will use whatever mortar is closest to the original. Jamie Craig carries a chart with 80 custom mortar colours, and he uses it on every restoration, extension, or repair job where the match matters. The difference is visible. And it lasts.',
    sectionHeading: 'How Custom Mortar Matching Works',
    blocks: [
      {
        title: 'On-Site Assessment',
        body: 'Before any work begins, Jamie assesses the existing mortar at the job site. He looks at colour, texture, and composition. He uses his 80-colour mortar chart to identify the closest match, often within millimetres of the original, even on century-old brickwork.',
      },
      {
        title: '80 Custom Mortar Colours',
        body: "JC Brick & Blocklaying's mortar colour range covers the full spectrum of brickwork colours found across Melbourne, from the light buff tones common in Balwyn and Kew through to the dark grey and charcoal mortars found in more contemporary builds.",
      },
      {
        title: 'Sampling Before Committing',
        body: "On restoration and heritage work, Jamie will sample the matched mortar on a small section of the wall before the main job begins. You get to see the result before anything is locked in. If it's not right, he adjusts.",
      },
      {
        title: 'Applied Across All Services',
        body: "Custom mortar matching isn't just for heritage work. Jamie applies it on fireplace builds, retaining wall extensions, crack stitching repairs, and any job where new brickwork needs to sit alongside existing work.",
      },
    ],
    serviceAreas:
      "JC Brick & Blocklaying provides custom mortar matching on jobs throughout Croydon, Balwyn, Doncaster, Mitcham, Vermont, Ringwood, Mooroolbark, Lilydale, Blackburn, and across Melbourne's eastern suburbs.",
    faqs: [
      {
        question: 'Does JC Brick & Blocklaying offer custom mortar matching in Melbourne?',
        answer:
          "Yes. Custom mortar matching is one of JC Brick & Blocklaying's premium services and a key differentiator from other bricklayers in Melbourne's eastern suburbs. Jamie at JC carries a chart of 80 custom mortar colours and uses on-site sampling to ensure an accurate match before work begins.",
      },
      {
        question: 'How does Jamie match mortar on heritage or period brickwork?',
        answer:
          'Jamie assesses the existing mortar at the job site, analysing colour, texture, and composition. He then references his 80-colour mortar chart to identify the closest match. For heritage and restoration projects, he applies a sample to a small section of the wall for client review before the main work begins.',
      },
      {
        question: 'Can mortar be matched on very old brickwork?',
        answer:
          "In most cases, yes. JC Brick & Blocklaying has successfully matched mortar on brickwork dating back to the early 1900s across Melbourne's eastern suburbs. The 80-colour range covers the heritage reds, creams, buffs, and grey tones common in Melbourne period homes.",
      },
      {
        question: 'Is custom mortar matching available on crack stitching and repair jobs?',
        answer:
          'Yes. JC Brick & Blocklaying applies custom mortar matching on all remedial and repair work. This means repairs blend with the surrounding brickwork rather than standing out as obvious patches.',
      },
      {
        question: 'Does mortar matching work on rendered brickwork?',
        answer:
          'Custom mortar matching is primarily used on exposed brick surfaces. For rendered brickwork where the mortar is not visible, JC Brick & Blocklaying will discuss the best approach depending on the scope of the repair.',
      },
    ],
  },

  'heritage-brickwork-restoration': {
    slug: 'heritage-brickwork-restoration',
    h1: 'Heritage Brickwork Restoration Melbourne: 80 Mortar Colours, Exact Matches',
    intro:
      "Restoring a period home takes more than bricklaying skill. It takes an eye for the original work and the patience to get the match right. Jamie Craig has 21 years of experience on period homes across Melbourne's eastern and inner suburbs, and he carries 80 custom mortar colours to back it up.",
    sectionHeading: "Heritage Restoration Done Properly: Melbourne's Eastern & Inner Suburbs",
    blocks: [
      {
        title: 'Facade Restoration',
        body: 'Jamie restores brick facades on period homes, replacing damaged or deteriorated brick and rebuilding sections to match the original design. The goal is always the same: a result that looks like it was never touched.',
      },
      {
        title: '80 Custom Mortar Colours',
        body: "Getting the mortar right is what separates a restoration from a patch job. Jamie's 80-colour mortar range covers the heritage reds, creams, and buffs common across Melbourne's period homes, matched on-site before any work begins.",
      },
      {
        title: 'Crack Stitching on Heritage Homes',
        body: 'Older brickwork moves and cracks over time. Jamie uses the correct stainless steel helical bar system to stabilise cracked masonry on period homes without disturbing more of the original brickwork than necessary.',
      },
      {
        title: 'Dampcourse Rectification',
        body: "Rising damp is common in older homes and it's a mortar problem as much as a moisture one. Jamie removes the deteriorated mortar, treats the area, and reinstates new mortar that's matched to the existing brickwork.",
      },
    ],
    serviceAreas:
      "Jamie carries out heritage brickwork restoration across Melbourne's eastern and inner-eastern suburbs, including Balwyn, Kew, Camberwell, Doncaster, Mitcham, Vermont, Blackburn, Box Hill, and Ringwood.",
    faqs: [
      {
        question: 'Does JC Brick & Blocklaying do heritage brickwork restoration?',
        answer:
          "Yes. Heritage brickwork restoration is one of JC Brick & Blocklaying's specialist services. Jamie Craig has 21 years of experience working on period homes across Melbourne's eastern and inner suburbs, and every restoration job is approached with the same goal: a result that blends seamlessly with the original brickwork.",
      },
      {
        question: 'What suburbs does JC Brick & Blocklaying cover for heritage restoration?',
        answer:
          "JC Brick & Blocklaying carries out heritage restoration work across Melbourne's eastern and inner-eastern suburbs, including Balwyn, Kew, Camberwell, Doncaster, Mitcham, Vermont, Blackburn, Box Hill, and Ringwood. Period homes are common across these areas, and Jamie is familiar with the brick and mortar styles typical of each.",
      },
      {
        question: 'Can JC Brick & Blocklaying match mortar on old brickwork?',
        answer:
          "Yes. Jamie carries a chart of 80 custom mortar colours and assesses the existing mortar on-site before any restoration work begins. This covers colour, texture, and composition, and means new and old work sit side by side without an obvious seam, even on brickwork that's a century old.",
      },
      {
        question: 'Does JC Brick & Blocklaying do crack stitching on heritage homes?',
        answer:
          'Yes. Crack stitching is a regular part of heritage restoration work. Jamie uses the correct stainless steel helical bar system to stabilise cracked masonry on period homes, addressing the underlying movement rather than just patching the surface.',
      },
      {
        question: 'Is JC Brick & Blocklaying insured for heritage restoration work?',
        answer:
          'Yes. JC Brick & Blocklaying is fully insured on all heritage restoration projects, including facade restoration, crack stitching, and dampcourse rectification on period homes.',
      },
    ],
  },

  'feature-walls-front-fences': {
    slug: 'feature-walls-front-fences',
    h1: 'Feature Walls & Front Fences Melbourne: Custom Brickwork, Full Supply & Install',
    intro:
      "A good feature wall or front fence sets the tone for the whole property. JC Brick & Blocklaying builds both, from internal feature walls to architectural front fences, across Melbourne's eastern suburbs, with full supply and install on every job.",
    sectionHeading: 'Feature Walls & Front Fences Built to Suit Your Property',
    blocks: [
      {
        title: 'Custom Brick Feature Walls',
        body: 'Jamie builds feature walls for inside the home and out. Entertaining areas, garden walls, and architectural statement pieces. Each one is designed to suit the space and built to the same standard as his structural work.',
      },
      {
        title: 'Front Fences: Brick and Block',
        body: 'From a simple rendered block fence to a full architectural brick frontage, Jamie builds front fences that match the style of the home. He works directly with homeowners and architects to get the design right before any brick is laid.',
      },
      {
        title: 'Architectural Detailing and Mortar Matching',
        body: "Feature walls and front fences often need to blend with an existing home, and that's where Jamie's mortar matching comes in. He can also incorporate bluestone elements and architectural detailing for a more custom finish.",
      },
      {
        title: 'Full Supply and Install',
        body: 'Jamie sources all materials for every feature wall and front fence project: brick, block, mortar, and any bluestone or architectural elements. One quote, one tradie, one finished result.',
      },
    ],
    serviceAreas:
      'Jamie builds feature walls and front fences across Croydon, Ringwood, Doncaster, Blackburn, Balwyn, Mooroolbark, and surrounding eastern suburbs.',
    faqs: [
      {
        question: 'Does JC Brick & Blocklaying build front fences in Melbourne?',
        answer:
          "Yes. Front fences are a regular part of JC Brick & Blocklaying's work across Melbourne's eastern suburbs. Jamie builds everything from simple rendered block fences to full architectural brick frontages, with full supply and install included.",
      },
      {
        question: 'What types of feature walls does JC Brick & Blocklaying build?',
        answer:
          "JC Brick & Blocklaying builds custom brick feature walls for both inside and outside the home, including entertaining area walls, garden walls, and architectural statement pieces. Each wall is designed to suit the property and built to the same structural standard as Jamie's other work.",
      },
      {
        question: 'Can JC Brick & Blocklaying match existing brickwork on a feature wall or fence?',
        answer:
          'Yes. Where a new feature wall or front fence needs to sit alongside existing brickwork, Jamie uses his 80-colour custom mortar range to match the existing work. This is assessed on-site before the build begins.',
      },
      {
        question: 'Does JC Brick & Blocklaying work with architects on feature walls and fences?',
        answer:
          'Yes. Jamie works directly with homeowners and architects on feature wall and front fence projects, particularly where architectural detailing or bluestone elements are involved.',
      },
      {
        question: 'Is JC Brick & Blocklaying insured for feature wall and front fence work?',
        answer:
          'Yes. JC Brick & Blocklaying is fully insured on all feature wall and front fence projects, whether residential or working alongside an architect.',
      },
    ],
  },

  'new-builds-architectural-brickwork': {
    slug: 'new-builds-architectural-brickwork',
    h1: 'New Builds & Architectural Brickwork Melbourne: Quality Masonry, Done Right',
    intro:
      "JC Brick & Blocklaying takes on new residential builds and architectural brickwork projects across Melbourne's eastern suburbs, selectively. Jamie at JC isn't chasing volume. He's after jobs where the brickwork matters, where the client cares about the finish, and where there's room to do the work properly.",
    sectionHeading: "What's Included",
    blocks: [
      {
        title: 'New Residential Home Builds',
        body: 'Full brickwork package for new home builds: external cladding, internal structural walls, veneer, and cavity construction. Full supply and install.',
      },
      {
        title: 'Architectural Feature Brickwork',
        body: "Custom bond patterns, feature facades, exposed brick interiors, and architectural detailing for residential projects across Melbourne's east. Designed to spec, built to last.",
      },
      {
        title: 'Boutique Builder Packages',
        body: "Reliable bricklaying for boutique builders who need consistent quality and communication on residential projects in Melbourne's eastern suburbs.",
      },
      {
        title: 'Custom Mortar Matching on New Builds',
        body: 'Even on new builds, mortar colour matters. Jamie carries 80 custom mortar colours to ensure new brickwork complements the overall design.',
      },
      {
        title: 'Full Supply and Install',
        body: 'Jamie sources all materials for every new build project: brick, block, mortar, ties, and structural components.',
      },
    ],
    serviceAreas:
      "JC Brick & Blocklaying takes on new build and architectural brickwork projects in Croydon, Mooroolbark, Ringwood, Doncaster, Balwyn, Blackburn, Chirnside Park, Lilydale, Mount Evelyn, Warranwood, and throughout Melbourne's eastern suburbs.",
    faqs: [
      {
        question: 'Does JC Brick & Blocklaying take on new residential home builds in Melbourne?',
        answer:
          "Yes. JC Brick & Blocklaying takes on new residential home builds across Melbourne's eastern suburbs on a selective basis. Jamie works with homeowners, architects, and boutique builders who value quality workmanship and clear communication.",
      },
      {
        question: 'Does JC Brick & Blocklaying work with architects on new build projects?',
        answer:
          "Yes. JC Brick & Blocklaying has experience working alongside architects and designers on residential new build and renovation projects across Melbourne's eastern suburbs.",
      },
      {
        question: 'What types of new build brickwork does JC Brick & Blocklaying offer?',
        answer:
          'JC Brick & Blocklaying offers full brickwork packages for new residential homes, architectural feature brickwork, boutique builder packages, and custom mortar matching for new builds. All services include full supply and install.',
      },
      {
        question: 'How do I get a quote for new build brickwork in Melbourne?',
        answer:
          'Fill in the enquiry form on the contact page or use the Click-to-Call button to ring Jamie directly. Jamie responds to all new enquiries within one business day.',
      },
      {
        question: 'Is JC Brick & Blocklaying insured for new residential builds?',
        answer:
          'Yes. JC Brick & Blocklaying is fully insured on all projects, including new residential home builds and architectural brickwork.',
      },
    ],
  },
}
