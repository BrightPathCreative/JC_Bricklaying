'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Script from 'next/script'
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
   * Homepage hero — load only after the visitor opens the form (click / #quote).
   * Keeps third-party scripts out of the Lighthouse trace.
   */
  priority?: boolean
}

export function QuoteForm({ priority = false }: Props) {
  const [src, setSrc] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const activate = useCallback(() => {
    injectGhlHints()
    setSrc(GHL_FORM_SRC)
  }, [])

  useEffect(() => {
    if (src) return

    if (priority) {
      const openFromHash = () => {
        if (window.location.hash === '#quote') activate()
      }

      openFromHash()
      window.addEventListener('hashchange', openFromHash)

      const container = containerRef.current
      const onActivate = () => activate()

      container?.addEventListener('click', onActivate, { once: true })

      return () => {
        window.removeEventListener('hashchange', openFromHash)
      }
    }

    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          activate()
          observer.disconnect()
        }
      },
      { rootMargin: '120px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [priority, src, activate])

  return (
    <>
      {src && <Script src={GHL_FORM_EMBED_SCRIPT} strategy="lazyOnload" />}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg bg-white"
        style={{ height: GHL_FORM_HEIGHT }}
      >
        <QuoteFormSkeleton iframeId={GHL_FORM_IFRAME_ID} />
        {!src && priority && (
          <button
            type="button"
            onClick={activate}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-white/95 px-6 text-center transition-colors hover:bg-white"
          >
            <span className="font-display text-lg font-semibold text-brand-dark">
              Open quote form
            </span>
            <span className="max-w-xs text-sm text-brand-grey">
              Tap to load the secure enquiry form. Jamie responds within one business day.
            </span>
          </button>
        )}
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
