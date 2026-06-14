import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { LOCATIONS } from '@/lib/locations'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = pageMetadata({
  title: 'Areas We Service | Bricklayer Melbourne Eastern Suburbs | JC Brick & Blocklaying',
  description:
    "JC Brick & Blocklaying services Croydon, Ringwood, Doncaster, Balwyn & the wider eastern suburbs of Melbourne. Find your local bricklaying area.",
  path: '/areas',
  ogImage: '/images/og/areas.jpg',
})

const crumbs = [{ name: 'Areas We Service', path: '/areas' }]

export default function AreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/hero/areas.jpg" priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-16 pt-8 md:pb-24 md:pt-10">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Service Areas</p>
            <h1 className="mt-3 text-5xl font-bold leading-[0.95] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
              Areas We Service: Bricklayer Across Melbourne&apos;s East
            </h1>
            <p className="mt-5 text-lg text-white/85">
              Based in Croydon, Melbourne, JC Brick &amp; Blocklaying works across the eastern and
              outer-eastern suburbs and the Yarra Valley. Find your suburb below for local
              bricklaying, retaining walls, fireplaces, remedial work, and heritage restoration.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LOCATION GRID */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              Suburbs We Cover
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/areas/${loc.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-grey/15 bg-white p-6 shadow-sm transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-lg"
                >
                  <span className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
                    <MapPin className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                    {loc.name}
                  </span>
                  <p className="mt-2 flex-1 text-sm text-brand-grey">{loc.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange">
                    Bricklayer in {loc.name}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Don't See Your Suburb?"
        body="Jamie services the wider eastern suburbs and Yarra Valley. Send through a quick enquiry and he'll confirm availability for your location."
      />
    </>
  )
}
