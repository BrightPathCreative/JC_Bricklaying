import type { Metadata } from 'next'
import {
  BrickWall,
  Building2,
  Fence,
  Flame,
  Landmark,
  Home as HomeIcon,
  Palette,
  Wrench,
} from 'lucide-react'
import { pageMetadata, PAGE_META } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = pageMetadata({ ...PAGE_META.services, path: '/services' })

const crumbs = [{ name: 'Services', path: '/services' }]

// Tiles render verbatim from the approved Services Hub copy.
const TILES = [
  {
    title: 'Outdoor Fireplaces & Pizza Ovens',
    href: '/services/outdoor-fireplaces-pizza-ovens',
    Icon: Flame,
    image: '/images/hero/service-outdoor-fireplaces-pizza-ovens.jpg',
    description:
      "Custom outdoor fireplaces and pizza ovens built to suit your backyard. Full supply and install. Popular across the Yarra Valley and Melbourne's east.",
  },
  {
    title: 'Block Retaining & Dividing Walls',
    href: '/services/block-retaining-walls',
    Icon: BrickWall,
    image: '/images/hero/service-block-retaining-walls.jpg',
    description:
      "Structural retaining and dividing walls built with concrete core fill and steel reinforcement. Residential and builder projects across Melbourne's eastern suburbs.",
  },
  {
    title: 'Remedial Brickwork & Crack Stitching',
    href: '/services/remedial-brickwork',
    Icon: Wrench,
    image: '/images/hero/service-remedial-brickwork.jpg',
    description:
      'Cracked, damaged, or failing brickwork repaired properly. Specialist crack stitching, dampcourse rectification, and mortar reinstatement.',
  },
  {
    // NOTE: New tile copy — pending sign-off from Sara (not in the original approved hub copy).
    title: 'Custom Mortar Matching',
    href: '/services/custom-mortar-matching',
    Icon: Palette,
    image: '/images/hero/service-custom-mortar-matching.jpg',
    description:
      '80 custom mortar colours for an exact match on heritage, restoration, and repair work. On-site sampling before any job, so new brickwork blends seamlessly with old.',
  },
  {
    title: 'Heritage Brickwork Restoration',
    href: '/services/heritage-brickwork-restoration',
    Icon: Landmark,
    image: '/images/hero/service-heritage-brickwork-restoration.jpg',
    description:
      "Facade restoration, crack stitching, and dampcourse rectification on period homes across Melbourne's eastern and inner suburbs. 80 custom mortar colours for an exact match, every time.",
  },
  {
    title: 'Feature Walls & Front Fences',
    href: '/services/feature-walls-front-fences',
    Icon: Fence,
    image: '/images/hero/service-feature-walls-front-fences.jpg',
    description:
      'Custom brick feature walls inside and out, plus front fences from simple rendered block to full architectural brick frontages. Mortar matched to your existing home where needed.',
  },
  {
    title: 'Extensions & Architectural Brickwork',
    href: '/services/new-builds-architectural-brickwork',
    Icon: Building2,
    image: '/images/hero/service-new-builds-architectural-brickwork.jpg',
    description:
      "Brick extensions and architectural masonry for residential properties. Jamie works directly with homeowners and architects across Melbourne's eastern suburbs.",
  },
  {
    title: 'New House Brickwork',
    href: '/services/new-builds-architectural-brickwork',
    Icon: HomeIcon,
    image: '/images/services/new-builds-architectural-brickwork/05.jpg',
    description:
      "New house brickwork is also available, assessed project by project. If you're building and want a bricklayer who treats it like his own job, get in touch to discuss the details.",
  },
]

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/hero/services.jpg" priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-16 pt-8 md:pb-24 md:pt-10">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Bricklaying Services Melbourne: Eastern Suburbs
            </h1>
            <p className="mt-5 text-lg text-white/80">
              JC Brick &amp; Blocklaying offers a focused range of masonry and bricklaying services
              across Melbourne&apos;s eastern suburbs. Jamie Craig handles every job personally, from
              the first quote through to the final clean-up. Full supply and install. 21 years
              experience. Fully insured.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE TILES */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              Our Bricklaying Services
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TILES.map((tile, i) => (
              <Reveal key={tile.title} delay={(i % 3) * 80}>
                <ServiceCard {...tile} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Not Sure Which Service You Need?"
        body="Get in touch and Jamie will talk through your project. No obligation, no pressure. Just a straight answer from someone who knows the trade."
      />
    </>
  )
}
