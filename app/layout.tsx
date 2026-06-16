import type { Metadata } from 'next'
import Script from 'next/script'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/constants'
import { GHL_FORM_EMBED_SCRIPT, GHL_PRECONNECT_ORIGINS } from '@/lib/ghl-form'
import { localBusinessSchema, organizationSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCallButton } from '@/components/layout/StickyCallButton'
import { BackToTop } from '@/components/layout/BackToTop'
import { CookieConsent } from '@/components/CookieConsent'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Bricklayer Melbourne | JC Brick & Blocklaying',
    template: '%s',
  },
  description:
    "Award-winning bricklayer across Melbourne's east. Fireplaces, retaining walls & heritage restoration. 21 yrs exp. 5★ rated. Free quotes.",
  applicationName: SITE.shortName,
  authors: [{ name: SITE.shortName }],
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <head>
        {GHL_PRECONNECT_ORIGINS.map((origin) => (
          <link key={origin} rel="preconnect" href={origin} crossOrigin="anonymous" />
        ))}
        <JsonLd data={[localBusinessSchema, organizationSchema]} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCallButton />
        <BackToTop />
        <CookieConsent />
        <Script src={GHL_FORM_EMBED_SCRIPT} strategy="afterInteractive" />
      </body>
    </html>
  )
}
