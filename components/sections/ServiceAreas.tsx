import { MapPin } from 'lucide-react'
import { SUBURBS } from '@/lib/constants'
import { Reveal } from '@/components/Reveal'

interface ServiceAreasProps {
  heading: string
  intro?: string
  /** Optional custom suburb list (defaults to full coverage area). */
  suburbs?: readonly string[]
}

export function ServiceAreas({ heading, intro, suburbs = SUBURBS }: ServiceAreasProps) {
  return (
    <section className="section-pad bg-brand-light">
      <div className="container-bpc">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-dark md:text-3xl">
            {heading}
          </h2>
          {intro && <p className="mt-4 max-w-3xl text-brand-grey">{intro}</p>}
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {suburbs.map((suburb) => (
              <li
                key={suburb}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-grey/20 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-dark"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                {suburb}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
