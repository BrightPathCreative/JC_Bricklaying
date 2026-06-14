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
    <section className="border-y border-white/10 bg-brand-dark">
      <div className="container-bpc py-10 md:py-12">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-white/50">
            Trusted on landmark projects across Melbourne
          </p>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-7 flex flex-col items-stretch divide-y divide-white/10 sm:flex-row sm:items-center sm:justify-center sm:divide-x sm:divide-y-0">
            {PROJECTS.map((p) => (
              <li key={p.name} className="px-6 py-3 text-center sm:py-0">
                <p className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                  {p.name}
                </p>
                <p className="mt-0.5 text-xs text-white/55">{p.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
