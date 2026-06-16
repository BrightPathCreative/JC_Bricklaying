import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock, MapPin, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { pageMetadata, PAGE_META } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { QuoteForm } from '@/components/sections/QuoteForm'

export const metadata: Metadata = pageMetadata({ ...PAGE_META.contact, path: '/contact' })

const crumbs = [{ name: 'Contact', path: '/contact' }]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/hero/contact.jpg" priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-14 pt-8 md:pb-16 md:pt-10">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Get a Free Bricklaying Quote: Melbourne Eastern Suburbs
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Whether it&apos;s a fireplace, a retaining wall, or remedial work on a heritage home,
              Jamie will give you a clear, no-obligation quote. Fill in the form below or call
              directly. He responds to all enquiries within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="section-pad bg-white">
        <div className="container-bpc grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="rounded-2xl border border-brand-grey/15 bg-white p-6 shadow-lg md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-dark">
                Request a Free Quote
              </h2>
              <p className="mt-2 text-sm text-brand-grey">
                Your details are kept private and will never be shared. Read our{' '}
                <Link href="/privacy-policy" className="font-medium text-brand-orange underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>

          <Reveal delay={80} className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-dark">
                Prefer to Call?
              </h2>
              <p className="mt-3 text-brand-grey">
                Tap the button below to call Jamie directly. He&apos;s on-site most days but always
                calls back.
              </p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 font-medium text-white transition-colors duration-150 hover:bg-brand-orange-dark"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE.callLabel}
              </a>
            </div>

            <div className="rounded-2xl border border-brand-grey/15 bg-brand-light p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
                <Clock className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                Opening Hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-dark">
                <li className="flex justify-between gap-4">
                  <span>Monday to Friday</span>
                  <span className="font-medium">7:00am – 5:30pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="font-medium">9:00am – 3:00pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-grey/15 bg-brand-light p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-brand-dark">
                <MapPin className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                Where We Work
              </h3>
              <p className="mt-4 text-sm text-brand-grey">
                JC Brick &amp; Blocklaying is based in Croydon, Melbourne, and services Melbourne&apos;s
                eastern suburbs, from Blackburn and Doncaster in the north-west through to Healesville
                and Mount Evelyn in the Yarra Valley.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
