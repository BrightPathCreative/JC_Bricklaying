'use client'

import { useEffect } from 'react'

const STORAGE_KEY = 'jcbb-cookie-consent'
const CONVERSION_KEY = 'jcbb-lead-conversion-fired'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const GOOGLE_ADS_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_SEND_TO

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function hasAnalyticsConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'granted'
  } catch {
    return false
  }
}

function waitForGtag(maxAttempts = 20, intervalMs = 250): Promise<boolean> {
  return new Promise((resolve) => {
    let attempts = 0

    const check = () => {
      if (typeof window.gtag === 'function') {
        resolve(true)
        return
      }

      attempts += 1
      if (attempts >= maxAttempts) {
        resolve(false)
        return
      }

      window.setTimeout(check, intervalMs)
    }

    check()
  })
}

/**
 * Fires lead conversion events once per browser session when analytics consent
 * is granted. Used on /thank-you for Google Ads and GA4 goal tracking.
 */
export function ThankYouConversion() {
  useEffect(() => {
    if (!GA_ID && !GOOGLE_ADS_SEND_TO) return
    if (!hasAnalyticsConsent()) return

    try {
      if (sessionStorage.getItem(CONVERSION_KEY) === '1') return
    } catch {
      // sessionStorage unavailable — still attempt a single fire this load
    }

    let cancelled = false

    void waitForGtag().then((ready) => {
      if (cancelled || !ready || typeof window.gtag !== 'function') return

      if (GOOGLE_ADS_SEND_TO) {
        window.gtag('event', 'conversion', { send_to: GOOGLE_ADS_SEND_TO })
      }

      if (GA_ID) {
        window.gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'quote_request',
        })
      }

      try {
        sessionStorage.setItem(CONVERSION_KEY, '1')
      } catch {
        // ignore
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
