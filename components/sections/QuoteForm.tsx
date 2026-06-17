'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import {
  GHL_FORM_EMBED_SCRIPT,
  GHL_FORM_HEIGHT,
  GHL_FORM_ID,
  GHL_FORM_IFRAME_ID,
  GHL_FORM_SRC,
} from '@/lib/ghl-form'
import { QuoteFormSkeleton } from '@/components/sections/QuoteFormSkeleton'

type Props = {
  /** Homepage hero — defer fetch until after LCP so the hero image wins bandwidth. */
  priority?: boolean
}

/**
 * GoHighLevel enquiry form. The iframe src is deferred so hero/LCP assets load first;
 * a skeleton keeps layout stable until the embed is ready.
 */
export function QuoteForm({ priority = false }: Props) {
  const [src, setSrc] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (src) return

    const activate = () => setSrc(GHL_FORM_SRC)

    if (priority) {
      const schedule = () => {
        if (typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(activate, { timeout: 2500 })
        } else {
          setTimeout(activate, 2000)
        }
      }

      if (document.readyState === 'complete') schedule()
      else window.addEventListener('load', schedule, { once: true })
      return
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
  }, [priority, src])

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
