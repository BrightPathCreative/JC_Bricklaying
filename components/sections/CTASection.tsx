import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/Reveal'

interface CTASectionProps {
  heading: string
  body: string
}

export function CTASection({ heading, body }: CTASectionProps) {
  return (
    <section className="grain-overlay relative overflow-hidden bg-brand-dark">
      <div className="container-bpc section-pad relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{heading}</h2>
          <p className="mt-4 text-white/80">{body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact">Get My Free Quote</Button>
            <Button href={`tel:${SITE.phoneTel}`} variant="secondary">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Jamie: {SITE.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
