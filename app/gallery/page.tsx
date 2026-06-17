import type { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata, PAGE_META } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { CTASection } from '@/components/sections/CTASection'
import { GalleryGrid } from '@/components/sections/GalleryGrid'

export const metadata: Metadata = pageMetadata({ ...PAGE_META.gallery, path: '/gallery' })

const crumbs = [{ name: 'Our Work', path: '/gallery' }]

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/hero/gallery.jpg" priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-16 pt-8 md:pb-24 md:pt-10">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Our Work: Bricklaying Across Melbourne&apos;s East
            </h1>
            <p className="mt-5 text-lg text-white/80">
              A selection of recent projects from JC Brick &amp; Blocklaying — outdoor fireplaces,
              retaining walls, heritage restoration, feature walls, and architectural new builds.
              Every job is Jamie&apos;s own work, finished to the standard you can see here. Browse{' '}
              <Link href="/services" className="font-medium text-brand-orange underline">
                our services
              </Link>{' '}
              or{' '}
              <Link href="/areas" className="font-medium text-brand-orange underline">
                service areas
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Like What You See? Let's Talk About Your Project."
        body="Whether it's a backyard fireplace, a retaining wall, or restoration work on a period home, Jamie will give you a straight quote and a straight answer."
      />
    </>
  )
}
