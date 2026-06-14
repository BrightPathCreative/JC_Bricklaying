import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/Button'
import { FramedImage } from '@/components/ui/FramedImage'
import { ServiceStoryCard } from '@/components/ui/ServiceStoryCard'
import { RetainingWallShowcase } from '@/components/sections/RetainingWallShowcase'

export interface HomeService {
  title: string
  href: string
  Icon: LucideIcon
  image: string
  imageAlt?: string
  description: string
}

interface ServicesShowcaseProps {
  services: HomeService[]
}

const FIREPLACE_STATS = [
  { label: 'Full Supply & Install', sub: 'One quote, one tradie' },
  { label: '80 Mortar Colours', sub: 'Matched to your brickwork' },
  { label: 'Pizza Ovens Too', sub: 'Standalone or combined' },
] as const

const REMEDIAL_FEATURES = [
  {
    Icon: Wrench,
    title: 'Crack Stitching',
    body: 'Stainless steel helical bar reinforcement that stabilises cracked masonry and prevents further movement.',
  },
  {
    Icon: ShieldCheck,
    title: 'Structural Assessment',
    body: "Jamie assesses what's actually happening before quoting — no more work than the job requires.",
  },
] as const

function LearnMoreLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
    >
      Learn more
      <ArrowRight
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  )
}

function FireplaceShowcase({ service }: { service: HomeService }) {
  const { Icon, title, description, href } = service

  return (
    <article>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal direction="left" className="relative">
          {/* decorative dot grid */}
          <div
            className="absolute -left-2 top-0 grid grid-cols-5 gap-2 opacity-40 md:-left-4"
            aria-hidden="true"
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-grey/30" />
            ))}
          </div>

          <div className="relative">
            <FramedImage
              src="/images/services/outdoor-fireplaces-pizza-ovens/10.jpg"
              alt="custom outdoor brick fireplace — jc brick and blocklaying melbourne"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              frameClassName="relative aspect-[4/5] rounded-2xl md:aspect-[5/6]"
            />
            <div className="absolute -bottom-6 -right-4 z-10 w-[42%] md:-bottom-8 md:-right-8">
              <FramedImage
                src="/images/services/outdoor-fireplaces-pizza-ovens/08.jpg"
                alt="wood-fired brick pizza oven — jc brick and blocklaying melbourne"
                fill
                sizes="200px"
                frameClassName="relative aspect-square rounded-xl"
              />
            </div>
          </div>

          {/* zigzag accent */}
          <svg
            viewBox="0 0 120 12"
            className="mt-6 h-3 w-28 text-brand-orange"
            aria-hidden="true"
          >
            <path
              d="M0 6 L10 0 L20 6 L30 0 L40 6 L50 0 L60 6 L70 0 L80 6 L90 0 L100 6 L110 0 L120 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Reveal>

        <Reveal direction="right" delay={80}>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/25">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-grey">
              Signature Service
            </span>
          </div>
          <h3 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-brand-dark md:text-4xl">
            {title}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-brand-grey">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={href} size="md">
              Explore Fireplaces
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="#quote" variant="ghost" size="md">
              Get a Free Quote
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid border-t border-brand-grey/15 pt-8 sm:grid-cols-3 md:pt-10">
        {FIREPLACE_STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 60} className="px-6 py-6 md:px-10 md:py-7">
            <div className="flex items-start gap-4">
              <span className="mt-1 font-display text-2xl font-bold text-brand-orange/30">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-semibold text-brand-dark">{stat.label}</p>
                <p className="mt-0.5 text-sm text-brand-grey">{stat.sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </article>
  )
}

function RetainingWallShowcaseBlock({ service }: { service: HomeService }) {
  const { title, description, href } = service
  return <RetainingWallShowcase title={title} description={description} href={href} />
}

const REMEDIAL_IMAGES = [
  {
    src: '/images/services/remedial-brickwork/04.jpg',
    alt: 'helical bar crack stitching on a brick wall — jc brick and blocklaying melbourne',
  },
  {
    src: '/images/services/remedial-brickwork/02.jpg',
    alt: 'stainless steel helical bar installed in mortar joint — jc brick and blocklaying melbourne',
  },
  {
    src: '/images/services/remedial-brickwork/05.jpg',
    alt: 'crack stitch repair on dark grey brickwork — jc brick and blocklaying melbourne',
  },
  {
    src: '/images/services/remedial-brickwork/06.jpg',
    alt: 'remedial mortar reinstatement on cracked brickwork — jc brick and blocklaying melbourne',
  },
] as const

function RemedialShowcase({ service }: { service: HomeService }) {
  const { Icon, title, description, href } = service

  return (
    <article>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <Reveal direction="left" className="relative w-full">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {REMEDIAL_IMAGES.map((img) => (
                <FramedImage
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  frameClassName="relative aspect-[4/5] rounded-2xl"
                />
              ))}
            </div>

            <div className="flex w-fit items-center gap-3 rounded-2xl bg-brand-orange px-5 py-4 text-white shadow-lg shadow-brand-orange/25">
              <Icon className="h-7 w-7 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-display text-2xl font-bold leading-none">21+</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-white/90">
                  Years on the Tools
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={80}>
          <p className="eyebrow">Specialist Repair</p>
          <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-brand-dark md:text-4xl">
            {title}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-brand-grey">{description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {REMEDIAL_FEATURES.map(({ Icon: FeatureIcon, title: featureTitle, body }) => (
              <div
                key={featureTitle}
                className="group rounded-2xl border border-brand-grey/15 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <FeatureIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-semibold text-brand-dark">{featureTitle}</h4>
                <p className="mt-2 text-sm leading-relaxed text-brand-grey">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href={href} size="md">
              Remedial Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <LearnMoreLink href={href} />
          </div>
        </Reveal>
      </div>
    </article>
  )
}

export function ServicesShowcase({ services }: ServicesShowcaseProps) {
  const [first, second, third, ...remaining] = services

  return (
    <section className="brick-texture section-pad bg-brand-light">
      <div className="container-bpc">
        <Reveal repeat className="max-w-3xl">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            What JC Brick &amp; Blocklaying Does Best
          </h2>
          <p className="mt-4 text-brand-grey">
            From a custom outdoor fireplace in the Yarra Valley to a structural block retaining wall
            in Bayswater, Jamie handles it properly, start to finish.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 md:space-y-20 lg:space-y-24">
          {first && (
            <Reveal direction="up" repeat>
              <FireplaceShowcase service={first} />
            </Reveal>
          )}
          {second && (
            <Reveal direction="up" repeat delay={40}>
              <RetainingWallShowcaseBlock service={second} />
            </Reveal>
          )}
          {third && (
            <Reveal direction="up" repeat delay={80}>
              <RemedialShowcase service={third} />
            </Reveal>
          )}
        </div>

        {remaining.length > 0 && (
          <>
            <Reveal repeat delay={60} className="mt-20 md:mt-24">
              <div className="flex flex-col gap-3 border-t border-brand-grey/15 pt-12 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow">Also Available</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">
                    More Masonry Services
                  </h3>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
                >
                  View all services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {remaining.map((s, i) => (
                <Reveal key={s.href} direction="zoom" delay={(i % 2) * 100}>
                  <ServiceStoryCard {...s} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
