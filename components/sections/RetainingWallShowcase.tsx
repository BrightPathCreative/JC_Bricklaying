'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BrickWall, Truck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FramedImage } from '@/components/ui/FramedImage'

const TABS = [
  {
    id: 'structural',
    label: 'Structural Walls',
    title: 'Structural Retaining Walls',
    body: 'Full-height structural block retaining walls with concrete core fill and steel reinforcement. Built to last and compliant with Australian standards.',
    image: '/images/services/block-retaining-walls/01.jpg',
    alt: 'core-filled block retaining wall on a sloping site — jc brick and blocklaying melbourne',
  },
  {
    id: 'dividing',
    label: 'Dividing Walls',
    title: 'Dividing Walls',
    body: 'Block dividing walls for residential and commercial properties. Clean finish, solid construction, full supply and install.',
    image: '/images/services/block-retaining-walls/06.jpg',
    alt: 'besser block dividing wall under construction — jc brick and blocklaying melbourne',
  },
  {
    id: 'fire-rated',
    label: 'Fire-Rated',
    title: 'Fire-Rated Walls',
    body: 'Fire-rated block wall construction for properties where required by council or building regulations. Jamie builds to spec and ensures compliance.',
    image: '/images/services/block-retaining-walls/03.jpg',
    alt: 'rendered block wall construction melbourne — jc brick and blocklaying melbourne',
  },
] as const

type TabId = (typeof TABS)[number]['id']

interface RetainingWallShowcaseProps {
  title: string
  description: string
  href: string
}

export function RetainingWallShowcase({
  title,
  description,
  href,
}: RetainingWallShowcaseProps) {
  const [active, setActive] = useState<TabId>('structural')
  const current = TABS.find((t) => t.id === active) ?? TABS[0]

  return (
    <article className="surface-brick relative overflow-hidden rounded-3xl ring-1 ring-brand-grey/10">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 grid items-center gap-10 p-6 md:p-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:p-12">
        <div>
          <p className="eyebrow">Structural Masonry</p>
          <div className="mt-4 flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
              <BrickWall className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-3xl font-bold leading-tight tracking-tight text-brand-dark md:text-4xl">
              {title}
            </h3>
          </div>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-grey">{description}</p>

          <div className="mt-8">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Retaining wall service types"
            >
              {TABS.map((tab) => {
                const selected = tab.id === active
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`retaining-tab-${tab.id}`}
                    aria-selected={selected}
                    aria-controls="retaining-tabpanel"
                    onClick={() => setActive(tab.id)}
                    className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      selected
                        ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20'
                        : 'bg-white text-brand-dark ring-1 ring-brand-grey/20 hover:ring-brand-orange/35'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
            <div
              id="retaining-tabpanel"
              role="tabpanel"
              aria-labelledby={`retaining-tab-${active}`}
              className="mt-6"
            >
              <h4 className="text-xl font-semibold text-brand-dark">{current.title}</h4>
              <p className="mt-3 leading-relaxed text-brand-grey">{current.body}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href={href} size="md">
              View Retaining Walls
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
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
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6]">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  tab.id === active ? 'z-10 opacity-100' : 'z-0 opacity-0'
                }`}
                aria-hidden={tab.id !== active}
              >
                <FramedImage
                  src={tab.image}
                  alt={tab.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  frameClassName="relative h-full w-full rounded-2xl"
                  border={tab.id === active ? 'orange' : 'dark'}
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl bg-gradient-to-t from-brand-dark/25 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
            <Truck className="h-5 w-5 text-brand-orange" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-grey">
                Included
              </p>
              <p className="text-sm font-semibold text-brand-dark">Full Supply &amp; Install</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
