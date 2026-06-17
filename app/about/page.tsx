import type { Metadata } from 'next'
import Link from 'next/link'
import { FramedImage } from '@/components/ui/FramedImage'
import { HardHat, Handshake, Layers, Palette } from 'lucide-react'
import { pageMetadata, PAGE_META } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Reveal } from '@/components/Reveal'
import { Parallax } from '@/components/Parallax'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'
import { HeroBg } from '@/components/sections/HeroBg'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = pageMetadata({ ...PAGE_META.about, path: '/about' })

const crumbs = [{ name: 'About', path: '/about' }]

const DIFFERENTIATORS = [
  {
    title: 'Full Supply and Install',
    Icon: Layers,
    body: "Jamie handles everything. He sources the materials, organises delivery, and manages the whole job. You don't have to coordinate suppliers or chase anyone down. One call, one tradie, one invoice.",
  },
  {
    title: 'Custom Mortar Matching: 80 Colours',
    Icon: Palette,
    body: "Jamie carries a chart with 80 custom mortar colours. If you're extending a period home in Balwyn or restoring heritage brickwork anywhere across Melbourne's east, he can match the existing mortar so well you'll have trouble telling old from new. It's a specialist skill that most bricklayers in Melbourne simply don't offer.",
  },
  {
    title: 'No Subcontracting',
    Icon: HardHat,
    body: "When Jamie quotes the job, Jamie builds it. His team of qualified tradesmen and apprentices work alongside him on every project. You know exactly who's on your property, and exactly who's responsible for the finish.",
  },
  {
    title: 'Easy to Deal With',
    Icon: Handshake,
    body: "This one comes up in almost every Google review. Jamie's approachable, communicates well, and doesn't make you feel like you're bothering him when you have a question. It sounds simple. In the trades, it's not that common.",
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* HERO */}
      <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
        <HeroBg src="/images/hero/about.jpg" priority />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-16 pt-8 md:pb-24 md:pt-10">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Owner · Jamie Craig</p>
            <h1 className="mt-3 text-5xl font-bold leading-[0.95] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
              About JC Brick &amp; Blocklaying: Bricklayer Melbourne, Eastern Suburbs
            </h1>
          </Reveal>
        </div>
      </section>

      {/* MAIN STORY */}
      <section className="section-pad bg-white">
        <div className="container-bpc grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left" repeat>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              21 Years on the Tools. Every Job Done by Hand.
            </h2>
            <div className="mt-5 space-y-4 text-brand-grey">
              <p>
                Jamie started laying brick when he was 15. He&apos;s now 37, and in that time
                he&apos;s worked on everything from landmark Melbourne institutions to family
                backyards in the outer east. He started JC Brick &amp; Blocklaying because he wanted
                to run his own jobs his own way, and deliver the kind of finish that actually makes
                him proud.
              </p>
              <p>
                He&apos;s based in Croydon, Melbourne, and works across Melbourne&apos;s eastern
                suburbs every day. You&apos;ll find him on-site in Ringwood one morning and Doncaster the
                next. He brings a small team of qualified tradesmen and apprentices with him. The
                work is hands-on, personal, and delivered to a standard that shows.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" repeat delay={80}>
            <Parallax speed={0.08}>
              <FramedImage
                src="/images/hero/jamie-laying-brick.jpg"
                alt="jamie craig bricklayer — on site mooroolbark jc brick and blocklaying"
                width={1200}
                height={1600}
                frameClassName="overflow-hidden rounded-2xl"
                className="h-full w-full scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* AWARD SECTION */}
      <section className="grain-overlay relative overflow-hidden bg-brand-dark">
        <div className="container-bpc section-pad relative grid items-center gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <Reveal direction="zoom" repeat className="flex justify-center">
            <Parallax speed={0.1}>
              <FramedImage
                src="/images/brand/award-badge.jpg"
                alt="quality business awards 2026 top 1 percent — jc brick blocklaying maroondah"
                width={320}
                height={320}
                frameClassName="rounded-full"
                border="orange"
                className="h-auto w-56 object-contain md:w-64"
              />
            </Parallax>
          </Reveal>
          <Reveal direction="right" repeat delay={80}>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Award-Winning Bricklaying in Melbourne&apos;s East
            </h2>
            <div className="mt-5 space-y-4 text-white/80">
              <p>
                In 2026, JC Brick &amp; Blocklaying was recognised as a Top 1% business in the
                Maroondah region by the Quality Business Awards. It&apos;s the kind of recognition
                that comes from years of turning up, doing the work properly, and leaving clients
                happy enough to tell their neighbours.
              </p>
              <p>
                Jamie&apos;s also worked on some notable projects over the years, including the
                Margaret Court Arena players&apos; facility revamp, dividing wall work at Swinburne
                University, and the elevator block lift shaft at Siena College in Camberwell. These
                days he focuses on residential and boutique commercial projects across
                Melbourne&apos;s east, where his custom mortar matching and remedial skills are in
                highest demand.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT SETS JC APART */}
      <section className="section-pad bg-white">
        <div className="container-bpc">
          <Reveal className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              What Sets JC Brick &amp; Blocklaying Apart
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-grey/15 bg-brand-light p-6 md:p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <d.Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-brand-dark">{d.title}</h3>
                  <p className="mt-2 text-brand-grey">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section-pad bg-brand-light">
        <div className="container-bpc max-w-3xl text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
              Fully Insured: 21 Years Melbourne Bricklaying Experience
            </h2>
            <p className="mt-5 text-brand-grey">
              JC Brick &amp; Blocklaying is fully insured on every job. Jamie has been laying brick
              across Melbourne&apos;s eastern suburbs for 21 years. He&apos;s worked in residential,
              commercial, and heritage settings, and he brings that full range of experience to
              every project he takes on. Explore{' '}
              <Link href="/services" className="font-medium text-brand-orange underline">
                our services
              </Link>{' '}
              and{' '}
              <Link href="/areas" className="font-medium text-brand-orange underline">
                service areas
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Work Together?"
        body="If you've got a project in mind, whether it's a backyard fireplace, a retaining wall, or restoration work on an older home, Jamie will give you a straight quote with no runaround."
      />
    </>
  )
}
