import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { Phone } from 'lucide-react'
import { HeroBg } from '@/components/sections/HeroBg'

export default function NotFound() {
  return (
    <section className="grain-overlay relative isolate overflow-hidden bg-brand-dark">
      <HeroBg src="/images/hero/home.jpg" priority />
      <div className="container-bpc relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-7xl font-bold text-brand-orange md:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-white/80">
          The page you&apos;re looking for has moved or no longer exists. Let&apos;s get you back on
          solid ground.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href={`tel:${SITE.phoneTel}`} variant="secondary">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {SITE.callLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
