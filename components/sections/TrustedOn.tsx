import { Reveal } from '@/components/Reveal'

const PROJECTS = [
  { name: 'Margaret Court Arena', note: "Players' facility revamp" },
  { name: 'Swinburne University', note: 'Dividing wall work' },
  { name: 'Siena College', note: 'Lift shaft block work, Camberwell' },
]

/**
 * Credibility strip surfacing notable projects Jamie has worked on.
 * Text wordmarks (no logos) styled as an editorial trust band.
 */
export function TrustedOn() {
  return (
    <section className="surface-brick border-y border-brand-grey/15">
      <div className="container-bpc relative z-10 py-10 md:py-12">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-grey">
            Trusted on landmark projects across Melbourne
          </p>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-7 flex flex-col items-stretch divide-y divide-brand-grey/15 sm:flex-row sm:items-center sm:justify-center sm:divide-x sm:divide-y-0">
            {PROJECTS.map((p) => (
              <li key={p.name} className="px-6 py-3 text-center sm:py-0">
                <p className="font-display text-xl font-bold tracking-tight text-brand-dark md:text-2xl">
                  {p.name}
                </p>
                <p className="mt-0.5 text-xs text-brand-grey">{p.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
