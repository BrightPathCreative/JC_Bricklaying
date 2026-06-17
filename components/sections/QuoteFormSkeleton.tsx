'use client'

import { useEffect, useState } from 'react'

import { GHL_FORM_HEIGHT } from '@/lib/ghl-form'

type Props = {
  iframeId: string
}

/**
 * Placeholder shown until the GHL iframe finishes loading.
 * The iframe itself stays server-rendered so fetching starts on first paint.
 */
export function QuoteFormSkeleton({ iframeId }: Props) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const iframe = document.getElementById(iframeId)
    if (!(iframe instanceof HTMLIFrameElement)) return

    const markLoaded = () => setLoaded(true)

    if (iframe.contentDocument?.readyState === 'complete') {
      markLoaded()
      return
    }

    iframe.addEventListener('load', markLoaded)
    return () => iframe.removeEventListener('load', markLoaded)
  }, [iframeId])

  if (loaded) return null

  return (
    <div
      className="absolute inset-0 z-10 flex flex-col gap-3 bg-white p-1"
      style={{ height: GHL_FORM_HEIGHT }}
      aria-hidden="true"
    >
      <div className="h-4 w-28 animate-pulse rounded bg-brand-grey/15" />
      <div className="h-10 animate-pulse rounded-md bg-brand-grey/10" />
      <div className="h-10 animate-pulse rounded-md bg-brand-grey/10" />
      <div className="h-10 animate-pulse rounded-md bg-brand-grey/10" />
      <div className="h-24 animate-pulse rounded-md bg-brand-grey/10" />
      <div className="mt-1 h-11 animate-pulse rounded-md bg-brand-orange/20" />
    </div>
  )
}
