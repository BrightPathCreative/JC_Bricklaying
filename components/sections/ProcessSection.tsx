import { ClipboardList, Truck, BrickWall, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const STEPS = [
  {
    Icon: ClipboardList,
    title: 'Free Quote',
    body: 'Tell Jamie about your project. He replies within one business day with a clear, itemised quote — no obligation, no pressure.',
  },
  {
    Icon: Truck,
    title: 'Plan & Supply',
    body: 'Jamie sources all the brick, block and mortar himself, including custom colour matching where the job calls for it.',
  },
  {
    Icon: BrickWall,
    title: 'Build',
    body: 'Jamie and his crew lay every course themselves. No subcontracting, clean work, and turning up when he says he will.',
  },
  {
    Icon: BadgeCheck,
    title: 'Walkthrough',
    body: "He walks the finished job with you and leaves the site tidy. Every build is fully insured and finished to a standard he'll stand behind.",
  },
]

export function ProcessSection() {
  return (
    <section className="brick-texture section-pad bg-white">
      <div className="container-bpc">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">How Jamie Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
            Four Steps, No Surprises
          </h2>
          <p className="mt-4 text-brand-grey">
            From the first call to the final clean-up, you deal with Jamie the whole way through.
            Here&apos;s exactly how a job runs.
          </p>
        </Reveal>

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line on desktop */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-orange/0 via-brand-orange/40 to-brand-orange/0 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="relative">
              <div className="flex items-center gap-4">
                <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/20">
                  <step.Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-display text-5xl font-bold leading-none text-brand-dark/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-brand-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-grey">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
