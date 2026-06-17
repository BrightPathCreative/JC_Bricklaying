import { Phone } from 'lucide-react'
import { SITE } from '@/lib/constants'

/** Floating click-to-call button — mobile only, present on every page. */
export function StickyCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-brand-orange-dark px-5 py-3 font-medium text-white shadow-lg shadow-black/20 transition-colors duration-150 hover:bg-brand-dark md:hidden"
      aria-label="Click to call Jamie"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      {SITE.callLabel}
    </a>
  )
}
