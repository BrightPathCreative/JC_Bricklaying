import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Camera, MapPin, Phone } from 'lucide-react'
import { SERVICES, SERVICE_BY_SLUG, SITE, type ServiceSlug } from '@/lib/constants'
import { SERVICE_CONTENT } from '@/lib/services-content'
import { SERVICE_GALLERY } from '@/lib/service-gallery'
import { pageMetadata, PAGE_META } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { ServiceGallery } from '@/components/sections/ServiceGallery'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

function getService(slug: string) {
  if (!(slug in SERVICE_CONTENT)) return null
  return {
    meta: SERVICE_BY_SLUG[slug as ServiceSlug],
    content: SERVICE_CONTENT[slug as ServiceSlug],
  }
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug)
  if (!service) return {}
  const meta = PAGE_META[params.slug as keyof typeof PAGE_META]
  return pageMetadata({ ...meta, path: `/services/${params.slug}` })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  const { meta, content } = service
  const gallery = SERVICE_GALLERY[meta.slug]
  const crumbs = [
    { name: 'Services', path: '/services' },
    { name: meta.breadcrumb, path: `/services/${meta.slug}` },
  ]

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqPageSchema(content.faqs)]} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src={`/images/hero/service-${meta.slug}.jpg`} priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-16 pt-8 md:pb-24 md:pt-12">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{meta.breadcrumb}</p>
            <h1 className="mt-3 text-4xl font-bold leading-[0.98] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
              {content.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">{content.intro}</p>
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

      {/* DETAIL BLOCKS */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              {content.sectionHeading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {content.blocks.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-grey/15 bg-brand-light p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-brand-dark">{b.title}</h3>
                  <p className="mt-3 text-brand-grey">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="section-pad bg-brand-light">
        <div className="container-bpc">
          <Reveal className="max-w-3xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              <Camera className="h-7 w-7 text-brand-orange" aria-hidden="true" />
              {meta.breadcrumb}: Recent Projects
            </h2>
            <p className="mt-4 text-brand-grey">
              A selection of real {meta.breadcrumb.toLowerCase()} projects completed by Jamie across
              Melbourne&apos;s eastern suburbs. Tap any photo to view it larger.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <ServiceGallery images={gallery} />
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal className="max-w-3xl">
            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              <MapPin className="h-7 w-7 text-brand-orange" aria-hidden="true" />
              Service Areas
            </h2>
            <p className="mt-4 text-brand-grey">{content.serviceAreas}</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-bpc max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <FAQAccordion items={content.faqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Get Started? Request a Free Quote Today."
        body="Tell Jamie about your project and he'll give you a straight quote and a straight answer. No obligation."
      />
    </>
  )
}
