import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Star } from 'lucide-react'
import { LOCATIONS, LOCATION_BY_SLUG } from '@/lib/locations'
import { SITE } from '@/lib/constants'
import { SERVICE_CARDS } from '@/lib/service-cards'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema, type FaqItem } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Button } from '@/components/ui/Button'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { CTASection } from '@/components/sections/CTASection'

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }))
}

function getLocation(slug: string) {
  return LOCATION_BY_SLUG[slug] ?? null
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const loc = getLocation(params.slug)
  if (!loc) return {}
  return pageMetadata({
    title: `Bricklayer ${loc.name} | JC Brick & Blocklaying`,
    description: loc.metaDescription,
    path: `/areas/${loc.slug}`,
    ogImage: '/images/og/areas.jpg',
  })
}

function locationFaqs(name: string): FaqItem[] {
  return [
    {
      question: `Does JC Brick & Blocklaying service ${name}?`,
      answer: `Yes. JC Brick & Blocklaying regularly works in ${name} and the surrounding eastern suburbs of Melbourne. Jamie Craig handles outdoor fireplaces, retaining walls, remedial brickwork, custom mortar matching, heritage restoration, feature walls, and architectural brickwork, all with full supply and install.`,
    },
    {
      question: `How do I get a bricklaying quote in ${name}?`,
      answer: `Fill in the enquiry form on the contact page or use the Click-to-Call button to reach Jamie directly. He responds to all ${name} enquiries within one business day and provides a clear, itemised, no-obligation quote.`,
    },
    {
      question: `Is JC Brick & Blocklaying insured for work in ${name}?`,
      answer: `Yes. JC Brick & Blocklaying is fully insured on every job in ${name}, residential or commercial. Insurance details are available on request before any work begins.`,
    },
  ]
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = getLocation(params.slug)
  if (!loc) notFound()

  const crumbs = [
    { name: 'Areas We Service', path: '/areas' },
    { name: loc.name, path: `/areas/${loc.slug}` },
  ]
  const faqs = locationFaqs(loc.name)

  const areaServedSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bricklaying and masonry',
    provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: '+61-4-0272-3175' },
    areaServed: { '@type': 'Place', name: `${loc.name}, Victoria, Australia` },
    url: `${SITE.url}/areas/${loc.slug}`,
  }

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqPageSchema(faqs), areaServedSchema]} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/hero/areas.jpg" priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-16 pt-8 md:pb-24 md:pt-12">
          <Reveal className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90">
              <Star className="h-4 w-4 fill-brand-orange text-brand-orange" aria-hidden="true" />
              5.0 ★ Google rated · Fully insured · 21 years experience
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
              Bricklayer {loc.name}: Quality Brick &amp; Block Work
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">{loc.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Get My Free Quote</Button>
              <Button href={`tel:${SITE.phoneTel}`} variant="secondary">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE.callLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES IN THIS AREA */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              Bricklaying Services in {loc.name}
            </h2>
            <p className="mt-4 text-brand-grey">{loc.servicesIntro}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.map((service, i) => (
              <Reveal key={service.href} delay={(i % 3) * 80}>
                <ServiceCard
                  {...service}
                  imageAlt={
                    service.imageAlt ??
                    `${service.title} — bricklayer in ${loc.name}, Melbourne`
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JC + NEARBY */}
      <section className="section-pad bg-brand-light">
        <div className="container-bpc grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              Why {loc.name} Chooses JC Brick &amp; Blocklaying
            </h2>
            <ul className="mt-5 space-y-3 text-brand-grey">
              <li>• 21 years of bricklaying experience across Melbourne&apos;s east.</li>
              <li>• Full supply and install — one tradie, one quote, one finish.</li>
              <li>• 80 custom mortar colours for exact heritage and repair matching.</li>
              <li>• No subcontracting. When Jamie quotes the job, Jamie builds it.</li>
              <li>• Fully insured, 5.0-star Google rated, Top 1% Quality Business Awards 2026.</li>
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-brand-grey/15 bg-white p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
                <MapPin className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                Nearby Areas
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {loc.nearby.map((n) => {
                  const slug = n.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                  return (
                    <li key={slug}>
                      <Link
                        href={`/areas/${slug}`}
                        className="text-brand-orange transition-colors duration-150 hover:text-brand-orange-dark"
                      >
                        Bricklayer {n}
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <Link
                    href="/areas"
                    className="font-medium text-brand-dark transition-colors duration-150 hover:text-brand-orange"
                  >
                    View all areas →
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-bpc max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              {loc.name} Bricklaying FAQs
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-8 space-y-4">
            {faqs.map((f) => (
              <div
                key={f.question}
                className="rounded-2xl border border-brand-grey/15 bg-brand-light p-6"
              >
                <h3 className="font-semibold text-brand-dark">{f.question}</h3>
                <p className="mt-2 text-brand-grey">{f.answer}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        heading={`Ready for a Bricklayer in ${loc.name}?`}
        body="Tell Jamie about your project and he'll give you a straight quote and a straight answer. No obligation."
      />
    </>
  )
}
