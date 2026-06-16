import {
  BrickWall,
  Fence,
  Flame,
  Home as HomeIcon,
  Landmark,
  Palette,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export interface ServiceCardData {
  title: string
  href: string
  Icon: LucideIcon
  image: string
  imageAlt?: string
  description: string
}

/** Shared service cards — images, excerpts, and links used on the homepage and area pages. */
export const SERVICE_CARDS: ServiceCardData[] = [
  {
    title: 'Outdoor Fireplaces & Pizza Ovens',
    href: '/services/outdoor-fireplaces-pizza-ovens',
    Icon: Flame,
    image: '/images/hero/service-outdoor-fireplaces-pizza-ovens.jpg',
    description:
      'A properly built outdoor fireplace or pizza oven is one of the best investments you can make in your backyard. JC Brick & Blocklaying builds both to last, with full supply and install, matched to your space.',
  },
  {
    title: 'Block Retaining & Dividing Walls',
    href: '/services/block-retaining-walls',
    Icon: BrickWall,
    image: '/images/hero/service-block-retaining-walls.jpg',
    description:
      'Big or small, every retaining and dividing wall is built to hold. Concrete core fill, steel reinforcement, and the kind of attention to detail that prevents problems down the track.',
  },
  {
    title: 'Remedial Work & Crack Stitching',
    href: '/services/remedial-brickwork',
    Icon: Wrench,
    image: '/images/hero/service-remedial-brickwork.jpg',
    description:
      "Cracked brickwork doesn't fix itself. Jamie's remedial work, including specialist crack stitching, addresses the cause, not just the symptom.",
  },
  {
    title: 'Custom Mortar Matching',
    href: '/services/custom-mortar-matching',
    Icon: Palette,
    image: '/images/services/custom-mortar-matching/12.jpg',
    imageAlt: 'custom matched mortar on clean brickwork — jc brick and blocklaying melbourne',
    description:
      "80 custom mortar colours. If you're restoring heritage brickwork or extending an existing structure, getting the mortar right matters. Jamie has the tools, and the eye, to match it.",
  },
  {
    title: 'Heritage Brickwork Restoration',
    href: '/services/heritage-brickwork-restoration',
    Icon: Landmark,
    image: '/images/hero/service-heritage-brickwork-restoration.jpg',
    description:
      "Restoring a period home takes an eye for the original work. With 21 years on heritage homes and 80 custom mortar colours, old brickwork is matched so well you can't see the join.",
  },
  {
    title: 'Feature Walls & Front Fences',
    href: '/services/feature-walls-front-fences',
    Icon: Fence,
    image: '/images/services/feature-walls-front-fences/04.jpg',
    imageAlt: 'architectural brick feature columns on a modern facade — jc brick and blocklaying melbourne',
    description:
      'From internal feature walls to architectural front fences, statement brickwork that sets the tone for the whole property. Full supply and install, matched to your home.',
  },
  {
    title: 'New Builds & Architectural Brickwork',
    href: '/services/new-builds-architectural-brickwork',
    Icon: HomeIcon,
    image: '/images/services/new-builds-architectural-brickwork/04.jpg',
    imageAlt: 'architectural brick feature column on a new home — jc brick and blocklaying melbourne',
    description:
      "Jamie takes on new residential builds and architectural brickwork across Melbourne's east. Every enquiry is assessed on its own merits, so get in touch to discuss your project.",
  },
]
