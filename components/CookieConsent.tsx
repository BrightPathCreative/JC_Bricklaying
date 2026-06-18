'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Script from 'next/script'

const STORAGE_KEY = 'jcbb-cookie-consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

type Consent = 'granted' | 'denied' | null

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Consent) ?? null
    if (stored) {
      setConsent(stored)
    } else {
      setShowBanner(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'granted')
    setConsent('granted')
    setShowBanner(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setConsent('denied')
    setShowBanner(false)
  }

  return (
    <>
      {/* GA4 — only loads after explicit consent and when an ID is configured */}
      {consent === 'granted' && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:left-auto sm:right-4 sm:max-w-sm">
          <div className="rounded-2xl border border-brand-grey/15 bg-white p-5 shadow-2xl">
            <p className="text-sm text-brand-dark">
              We use cookies to understand how visitors use our site and to improve your experience.
              You can accept or decline analytics cookies. See our{' '}
              <Link href="/privacy-policy" className="font-medium text-brand-dark underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={accept}
                className="flex-1 rounded-full bg-brand-dark px-4 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-brand-orange-dark"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={decline}
                className="flex-1 rounded-full border border-brand-grey/30 px-4 py-2.5 text-sm font-medium text-brand-dark transition-colors duration-150 hover:border-brand-grey"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
