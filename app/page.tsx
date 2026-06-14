import type { Metadata } from 'next'
import { FramedImage } from '@/components/ui/FramedImage'
import {
  Award,
  BrickWall,
  Fence,
  Flame,
  Landmark,
  Palette,
  Phone,
  Star,
  Wrench,
  ExternalLink,
  Home as HomeIcon,
} from 'lucide-react'
import { SITE } from '@/lib/constants'
import { pageMetadata, PAGE_META } from '@/lib/metadata'
import {
  aggregateRatingSchema,
  reviewSchemas,
  faqPageSchema,
  type FaqItem,
} from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Button } from '@/components/ui/Button'
import { ServicesShowcase } from '@/components/sections/ServicesShowcase'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { Reveal } from '@/components/Reveal'
import { QuoteForm } from '@/components/sections/QuoteForm'
import { HeroBg } from '@/components/sections/HeroBg'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TrustedOn } from '@/components/sections/TrustedOn'
import { REVIEWS } from '@/lib/constants'

export const metadata: Metadata = pageMetadata({ ...PAGE_META.home, path: '/' })

const STATS = [
  { value: '21+', label: 'Years Experience' },
  { value: '5.0★', label: 'Google Rating', href: SITE.social.gbp },
  { value: '15', label: 'Google Reviews', href: SITE.social.gbp },
  { value: 'Fully', label: 'Insured' },
]

const HOME_SERVICES = [
  {
    title: 'Outdoor Fireplaces & Pizza Ovens',
    href: '/services/outdoor-fireplaces-pizza-ovens',
    Icon: Flame,
    image: '/images/hero/service-outdoor-fireplaces-pizza-ovens.jpg',
    description:
      'A properly built outdoor fireplace or pizza oven is one of the best investments you can make in your backyard. Jamie builds both to last, with full supply and install, matched to your space.',
  },
  {
    title: 'Block Retaining & Dividing Walls',
    href: '/services/block-retaining-walls',
    Icon: BrickWall,
    image: '/images/hero/service-block-retaining-walls.jpg',
    description:
      'Big or small, Jamie builds retaining and dividing walls that hold. Concrete core fill, steel reinforcement, and the kind of attention to detail that prevents problems down the track.',
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
      "Restoring a period home takes an eye for the original work. With 21 years on heritage homes and 80 custom mortar colours, Jamie matches old brickwork so well you can't see the join.",
  },
  {
    title: 'Feature Walls & Front Fences',
    href: '/services/feature-walls-front-fences',
    Icon: Fence,
    image: '/images/services/feature-walls-front-fences/04.jpg',
    imageAlt: 'architectural brick feature columns on a modern facade — jc brick and blocklaying melbourne',
    description:
      'From internal feature walls to architectural front fences, Jamie builds statement brickwork that sets the tone for the whole property. Full supply and install, matched to your home.',
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

const HOME_FAQS: FaqItem[] = [
  {
    question: 'Does JC Brick & Blocklaying do outdoor fireplaces?',
    answer:
      "Yes. Outdoor fireplaces are one of JC Brick & Blocklaying's most popular services. Jamie Craig builds fully custom outdoor fireplaces and pizza ovens across Melbourne's eastern suburbs, with full supply and install included. Every fireplace is built to last, designed to suit the space, and finished to a high standard. Whether it's a simple freestanding fireplace or a full outdoor entertaining setup, Jamie handles it from start to finish.",
  },
  {
    question: 'What areas does JC Brick & Blocklaying service?',
    answer:
      "JC Brick & Blocklaying primarily services Melbourne's eastern and outer-eastern suburbs, including Croydon, Ringwood, Mooroolbark, Doncaster, Blackburn, Chirnside Park, Balwyn, Bayswater, Lilydale, Mount Evelyn, and the Yarra Valley. For a full list of service areas, see the Service Areas section of this website or get in touch to confirm availability for your location.",
  },
  {
    question: 'Is JC Brick & Blocklaying fully insured?',
    answer:
      'Yes, JC Brick & Blocklaying is fully insured. Jamie Craig carries comprehensive insurance on every job, giving clients peace of mind whether the project is a residential backyard fireplace or a structural block retaining wall. This is confirmed upfront, along with a clear, itemised quote before any work begins.',
  },
  {
    question: 'How do I get a quote from JC Brick & Blocklaying?',
    answer:
      "Getting a quote is straightforward. Fill in the enquiry form on the website or use the Click-to-Call button to ring Jamie directly. Jamie responds to all new enquiries within one business day. Once he has the details of your project, he'll provide a clear quote with no hidden costs and no obligation to proceed.",
  },
  {
    question: 'What makes JC Brick & Blocklaying different from other bricklayers in Melbourne?',
    answer:
      'A few things stand out. Jamie Craig has 21 years of experience and does all his own work. No subcontracting, no surprises. He offers full supply and install on every job and carries 80 custom mortar colours for exact heritage and restoration matching. He\'s also the only bricklayer in the Maroondah region to be recognised in the top 1% of businesses by the Quality Business Awards 2026.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={[aggregateRatingSchema, ...reviewSchemas, faqPageSchema(HOME_FAQS)]} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/services/outdoor-fireplaces-pizza-ovens/02.jpg" priority flip />
        <div className="container-bpc relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p
              className="inline-flex animate-[fade-up_800ms_var(--ease-out)_both] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90"
              style={{ animationDelay: '550ms' }}
            >
              <Star className="h-4 w-4 fill-brand-orange text-brand-orange" aria-hidden="true" />
              5.0 ★ (15 Google Reviews) · 🏆 Top 1% Quality Business Awards 2026 · Fully Insured
            </p>
            <h1
              className="mt-5 animate-[fade-up_800ms_var(--ease-out)_both] text-5xl font-bold leading-[0.95] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl"
              style={{ animationDelay: '200ms' }}
            >
              Melbourne&apos;s Trusted Bricklayer.{' '}
              <span className="text-brand-orange">Quality You Can See</span>, Service You&apos;ll
              Remember.
            </h1>
            <p
              className="mt-5 max-w-xl animate-[fade-up_600ms_var(--ease-out)_both] text-lg text-white/80"
              style={{ animationDelay: '400ms' }}
            >
              21 years of bricklaying across Melbourne&apos;s east. Outdoor fireplaces, retaining
              walls, heritage restoration, and more. Full supply and install. Free quotes.
            </p>
            <div
              className="mt-8 flex animate-[fade-up_500ms_var(--ease-out)_both] flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '700ms' }}
            >
              <Button href="#quote">Get My Free Quote</Button>
              <Button href={`tel:${SITE.phoneTel}`} variant="secondary">
                <Phone className="h-5 w-5" aria-hidden="true" />
                {SITE.callLabel}
              </Button>
            </div>
          </div>

          <div
            id="quote"
            className="animate-[fade-up_800ms_var(--ease-out)_both] scroll-mt-24 rounded-2xl bg-white p-6 shadow-2xl md:p-8"
            style={{ animationDelay: '450ms' }}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark">
              Get My Free Quote
            </h2>
            <p className="mt-1 text-sm text-brand-grey">
              Tell Jamie about your project. No obligation.
            </p>
            <div className="mt-5">
              <QuoteForm tone="light" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="container-bpc relative z-10 py-5 md:py-6">
          <div className="grid grid-cols-2 divide-x divide-y divide-brand-grey/10 md:grid-cols-4 md:divide-y-0">
            {STATS.map((stat) => {
              const inner = (
                <div className="px-3 py-3 text-center md:px-4 md:py-2">
                  <p className="trust-glow-orange font-display text-base font-bold leading-none text-brand-orange md:text-lg">
                    {stat.value}
                  </p>
                  <p className="trust-glow-dark mt-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-brand-dark md:text-[0.6875rem]">
                    {stat.label}
                  </p>
                </div>
              )
              return stat.href ? (
                <a
                  key={stat.label}
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-150 hover:opacity-75"
                >
                  {inner}
                </a>
              ) : (
                <div key={stat.label}>{inner}</div>
              )
            })}
          </div>
          <p className="trust-glow-dark mt-4 flex items-center justify-center gap-2 border-t border-brand-grey/15 pt-4 text-center text-[0.6875rem] font-medium leading-snug text-brand-dark md:text-xs">
            <Award
              className="trust-glow-orange h-3.5 w-3.5 shrink-0 text-brand-orange"
              aria-hidden="true"
            />
            <span>
              <span className="trust-glow-orange font-semibold text-brand-orange">Top 1%</span>
              {' — '}
              Quality Business Awards 2026 (Maroondah)
            </span>
          </p>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="section-pad bg-white">
        <div className="container-bpc grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left" repeat className="order-2 lg:order-1">
            <p className="eyebrow">Melbourne&apos;s East · Since 2004</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
              Bricklaying Done Right Across Melbourne&apos;s Eastern Suburbs
            </h2>
            <div className="mt-5 space-y-4 text-brand-grey">
              <p>
                Jamie Craig has been laying brick and block since he was 15. That&apos;s 21 years on
                the tools across Melbourne&apos;s east, from outdoor fireplaces in Chirnside Park to
                retaining walls in Ringwood, and crack stitching in Doncaster to heritage
                restoration in Balwyn.
              </p>
              <p>
                Jamie runs a tight crew of qualified tradesmen and apprentices. Full supply and
                install on every job, plus custom mortar matching that most bricklayers in Melbourne
                can&apos;t offer. When you call JC Brick &amp; Blocklaying, you get Jamie. Not a
                quote from a tradie you&apos;ve never met.
              </p>
              <p>
                He&apos;s approachable, straight-talking, and genuinely easy to deal with.
                That&apos;s what his clients keep saying. And with a 5-star Google rating and a Top
                1% business award to back it up, it&apos;s not just talk.
              </p>
            </div>
            <div className="mt-7">
              <Button href="/about" variant="ghost" size="md">
                More About Jamie
              </Button>
            </div>
          </Reveal>
          <Reveal delay={80} className="order-1 lg:order-2">
            <FramedImage
              src="/images/gallery/heritage-36.jpg"
              alt="jamie craig laying heritage brickwork on site — jc brick and blocklaying melbourne"
              width={1050}
              height={1400}
              frameClassName="rounded-2xl"
              className="h-full w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* TRUSTED ON — credibility strip */}
      <TrustedOn />

      {/* SERVICES OVERVIEW */}
      <ServicesShowcase services={HOME_SERVICES} />

      {/* HOW JAMIE WORKS */}
      <ProcessSection />

      {/* AWARD SECTION */}
      <section className="border-y border-white/10 bg-brand-grey">
        <div className="container-bpc relative grid items-center gap-8 py-10 md:grid-cols-[auto_1fr] md:gap-12 md:py-12 lg:gap-14">
          <Reveal direction="zoom" repeat className="flex justify-center md:justify-start">
            <FramedImage
              src="/images/brand/award-badge.jpg"
              alt="quality business awards 2026 top 1 percent — jc brick blocklaying maroondah"
              width={320}
              height={320}
              frameClassName="rounded-full"
              border="orange"
              className="h-auto w-40 object-contain md:w-48"
            />
          </Reveal>
          <Reveal direction="right" repeat delay={80}>
            <p className="eyebrow text-brand-orange">Quality Business Awards 2026</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Recognised as One of Melbourne&apos;s Best
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">
              In 2026, JC Brick &amp; Blocklaying was recognised in the top 1% of businesses in the
              Maroondah region by the Quality Business Awards. It&apos;s not something Jamie went
              looking for. It&apos;s recognition of what his clients already knew.
            </p>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-brand-orange md:text-lg">
              Hard work. Clean finishes. Someone who turns up on time and does the job properly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal repeat className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">5.0 ★ on Google</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
                What Clients Are Saying
              </h2>
            </div>
            <a
              href={SITE.social.gbp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-grey/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:text-brand-orange hover:shadow-md"
            >
              <Star className="h-4 w-4 fill-brand-orange text-brand-orange" aria-hidden="true" />
              Read all {SITE.rating.count} reviews on Google
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={(i % 3) * 80}>
                <ReviewCard
                  author={r.author}
                  dateLabel={r.dateLabel}
                  body={r.body}
                  rating={r.rating}
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-8 text-center">
            <a
              href={SITE.social.gbp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-orange transition-colors duration-150 hover:text-brand-orange-dark"
            >
              See more verified Google reviews →
            </a>
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <ServiceAreas
        heading="Bricklaying Across Melbourne's Eastern Suburbs"
        intro="JC Brick & Blocklaying services homeowners, builders, and architects across Melbourne's eastern and outer-eastern suburbs. Below is our primary coverage area. If you're outside this list, get in touch and Jamie will let you know if he can help."
      />

      {/* HOME FAQ */}
      <section className="section-pad bg-white">
        <div className="container-bpc max-w-4xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              Common Questions About JC Brick &amp; Blocklaying
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-8">
            <FAQAccordion items={HOME_FAQS} />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        heading="Ready to Get Started? Request a Free Quote Today."
        body="Whether it's a backyard fireplace in Chirnside Park, a retaining wall in Ringwood, or restoration work on a heritage home in Balwyn, Jamie will give you a straight quote and a straight answer."
      />
    </>
  )
}
