import { GHL_DNS_PREFETCH_ORIGINS, GHL_PRECONNECT_ORIGINS } from '@/lib/ghl-form'

/** Inject GHL connection hints only when the form is about to load. */
export function injectGhlHints() {
  for (const origin of GHL_PRECONNECT_ORIGINS) {
    if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) continue
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = origin
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  }
  for (const origin of GHL_DNS_PREFETCH_ORIGINS) {
    if (document.querySelector(`link[rel="dns-prefetch"][href="${origin}"]`)) continue
    const link = document.createElement('link')
    link.rel = 'dns-prefetch'
    link.href = origin
    document.head.appendChild(link)
  }
}
