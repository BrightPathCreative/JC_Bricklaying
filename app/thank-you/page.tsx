import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Clock, Phone, Star } from 'lucide-react'
import { ThankYouConversion } from '@/components/ThankYouConversion'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { resolveFirstName, thankYouHeadline, thankYouIntro } from '@/lib/thank-you'

export const metadata: Metadata = {
  title: 'Enquiry Received | JC Brick & Blocklaying',
  description:
    'Your bricklaying quote enquiry has been received. Jamie will respond within one business day.',
  robots: { index: false, follow: false },
}

const NEXT_STEPS = [
  {
    title: 'Jamie reviews your project',
    body: 'He reads every enquiry personally — no call centre, no auto-reply.',
  },
  {
    title: 'You hear back within 1 business day',
    body: 'Expect a call or message with any follow-up questions and a clear quote path.',
  },
  {
    title: 'No obligation to proceed',
    body: 'Quotes are itemised and transparent. Take your time — there is no pressure.',
  },
] as const

interface ThankYouPageProps {
  searchParams?: Record<string, string | string[] | undefined>
}

export default function ThankYouPage({ searchParams = {} }: ThankYouPageProps) {
  const firstName = resolveFirstName(searchParams)

  return (
    <>
      <ThankYouConversion />

      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <div className="container-bpc relative pb-16 pt-20 md:pb-20 md:pt-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange/15 ring-1 ring-brand-orange/30">
              <CheckCircle2 className="h-11 w-11 text-brand-orange" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-8">Enquiry received</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {thankYouHeadline(firstName)}
            </h1>
            <p className="mt-5 text-lg text-white/80">{thankYouIntro(firstName)}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`tel:${SITE.phoneTel}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE.callLabel}
              </Button>
              <Button href="/" variant="secondary">
                Back to Home
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What happens next</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Three Simple Steps
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {NEXT_STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <li className="h-full rounded-2xl border border-brand-grey/15 bg-brand-light p-6 text-left">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-dark">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-grey">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="mt-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-brand-grey/15 bg-white p-6 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="font-medium text-brand-dark">Need a faster answer?</p>
                  <p className="mt-1 text-sm text-brand-grey">
                    Call during business hours and Jamie will get back to you as soon as he can.
                  </p>
                  <p className="mt-2 text-xs text-brand-grey">{SITE.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-brand-dark">
                <Star className="h-4 w-4 fill-brand-orange text-brand-orange" aria-hidden="true" />
                <span className="font-medium">{SITE.rating.value}★</span>
                <span className="text-brand-grey">· {SITE.rating.count} Google reviews</span>
              </div>
            </div>
          </Reveal>

          <p className="mt-8 text-center text-sm text-brand-grey">
            While you wait, browse{' '}
            <Link href="/services" className="font-medium text-brand-orange underline">
              our services
            </Link>{' '}
            or read answers on the{' '}
            <Link href="/faq" className="font-medium text-brand-orange underline">
              FAQ page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
