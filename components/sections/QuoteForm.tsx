'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { Check, ChevronDown } from 'lucide-react'
import {
  GHL_FORM_EMBED_SCRIPT,
  GHL_FORM_HEIGHT,
  GHL_FORM_ID,
  GHL_FORM_IFRAME_ID,
  GHL_FORM_SRC,
} from '@/lib/ghl-form'
import { injectGhlHints } from '@/lib/inject-ghl-hints'
import { QuoteFormSkeleton } from '@/components/sections/QuoteFormSkeleton'

type Props = {
  /**
   * Homepage hero — accordion stays compact until opened; GHL loads on expand
   * so PageSpeed stays fast and the hero doesn’t show a blank white box.
   */
  priority?: boolean
}

const HERO_BULLETS = [
  'Free, no-obligation quote',
  'Jamie responds within 1 business day',
  'Fully insured · 21 years experience',
] as const

export function QuoteForm({ priority = false }: Props) {
  const [expanded, setExpanded] = useState(false)
  const [src, setSrc] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const open = useCallback(() => {
    setExpanded(true)
    injectGhlHints()
    setSrc(GHL_FORM_SRC)
  }, [])

  const toggle = useCallback(() => {
    if (expanded) setExpanded(false)
    else open()
  }, [expanded, open])

  useEffect(() => {
    if (!priority || src) return

    const openFromHash = () => {
      if (window.location.hash === '#quote') open()
    }

    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [priority, src, open])

  useEffect(() => {
    if (priority || src) return

    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          open()
          observer.disconnect()
        }
      },
      { rootMargin: '120px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [priority, src, open])

  if (priority) {
    return (
      <>
        {src && <Script src={GHL_FORM_EMBED_SCRIPT} strategy="lazyOnload" />}
        <div ref={containerRef} className="mt-4">
          {!expanded ? (
            <div>
              <ul className="space-y-2.5">
                {HERO_BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-dark">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={open}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand-dark px-5 py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-brand-orange-dark"
              >
                Start my free quote
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                onClick={toggle}
                aria-expanded={expanded}
                aria-controls="quote-form-panel"
                className="mb-3 flex w-full items-center justify-between gap-3 rounded-lg border border-brand-grey/15 bg-brand-light px-4 py-3 text-left text-sm font-medium text-brand-dark transition-colors hover:border-brand-orange/30"
              >
                <span>Enquiry form</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-brand-orange transition-transform duration-200 rotate-180"
                  aria-hidden="true"
                />
              </button>
              <div
                id="quote-form-panel"
                className="relative overflow-hidden rounded-lg bg-white"
                style={{ height: GHL_FORM_HEIGHT }}
              >
                <QuoteFormSkeleton iframeId={GHL_FORM_IFRAME_ID} />
                {src && (
                  <iframe
                    src={src}
                    style={{
                      width: '100%',
                      height: GHL_FORM_HEIGHT,
                      border: 'none',
                      borderRadius: '8px',
                    }}
                    id={GHL_FORM_IFRAME_ID}
                    data-layout={"{'id':'INLINE'}"}
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Enquiry Form"
                    data-height={String(GHL_FORM_HEIGHT)}
                    data-layout-iframe-id={GHL_FORM_IFRAME_ID}
                    data-form-id={GHL_FORM_ID}
                    title="Enquiry Form"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      {src && <Script src={GHL_FORM_EMBED_SCRIPT} strategy="lazyOnload" />}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg bg-white"
        style={{ height: GHL_FORM_HEIGHT }}
      >
        <QuoteFormSkeleton iframeId={GHL_FORM_IFRAME_ID} />
        {src && (
          <iframe
            src={src}
            style={{ width: '100%', height: GHL_FORM_HEIGHT, border: 'none', borderRadius: '8px' }}
            id={GHL_FORM_IFRAME_ID}
            data-layout={"{'id':'INLINE'}"}
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Enquiry Form"
            data-height={String(GHL_FORM_HEIGHT)}
            data-layout-iframe-id={GHL_FORM_IFRAME_ID}
            data-form-id={GHL_FORM_ID}
            title="Enquiry Form"
            loading="lazy"
          />
        )}
      </div>
    </>
  )
}
