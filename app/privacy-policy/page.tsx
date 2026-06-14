import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { Breadcrumbs } from '@/components/sections/Breadcrumbs'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy | JC Brick & Blocklaying | Bricklayer Melbourne',
  description:
    'How JC Brick & Blocklaying collects, uses and protects your personal information when you request a quote or use our website.',
  path: '/privacy-policy',
})

const crumbs = [{ name: 'Privacy Policy', path: '/privacy-policy' }]

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="grain-overlay relative overflow-hidden bg-brand-dark">
        <Breadcrumbs crumbs={crumbs} />
        <div className="container-bpc relative pb-12 pt-8 md:pb-16 md:pt-10">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-bpc max-w-3xl">
          <div className="space-y-8 text-brand-grey [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-dark [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            <p>
              {SITE.name} (ABN {SITE.abn}) (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
              committed to protecting your privacy. This policy explains how we collect, use, and
              safeguard your personal information in accordance with the Australian Privacy
              Principles under the Privacy Act 1988 (Cth).
            </p>

            <div>
              <h2>Information we collect</h2>
              <p>
                We collect personal information you provide directly to us when you request a quote
                or contact us, including your name, phone number, email address, suburb, and the
                project details you choose to share. We may also collect limited technical
                information automatically through our website, such as your IP address and pages
                visited, to help us improve the site.
              </p>
            </div>

            <div>
              <h2>How we use your information</h2>
              <p>We use your personal information to:</p>
              <ul>
                <li>Respond to your enquiry and prepare a quote;</li>
                <li>Communicate with you about your project;</li>
                <li>Provide and improve our services; and</li>
                <li>Meet our legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2>Disclosure of your information</h2>
              <p>
                We do not sell your personal information. We will not share it with third parties
                except where necessary to deliver our services (for example, our customer enquiry
                management provider), where you have consented, or where required by law.
              </p>
            </div>

            <div>
              <h2>Cookies and analytics</h2>
              <p>
                Our website may use cookies and analytics tools to understand how visitors use the
                site. You can disable cookies through your browser settings. Declining analytics
                cookies will not affect your ability to request a quote.
              </p>
            </div>

            <div>
              <h2>Data security</h2>
              <p>
                We take reasonable steps to protect your personal information from misuse,
                interference, loss, and unauthorised access, modification, or disclosure.
              </p>
            </div>

            <div>
              <h2>Access and correction</h2>
              <p>
                You may request access to the personal information we hold about you, or ask us to
                correct it, at any time. To do so, contact us using the details below.
              </p>
            </div>

            <div>
              <h2>Contact us</h2>
              <p>
                If you have any questions about this policy or how we handle your personal
                information, contact us at{' '}
                <a href={`mailto:${SITE.email}`} className="font-medium text-brand-orange underline">
                  {SITE.email}
                </a>{' '}
                or call{' '}
                <a href={`tel:${SITE.phoneTel}`} className="font-medium text-brand-orange underline">
                  {SITE.phone}
                </a>
                .
              </p>
            </div>

            <p className="text-sm">
              Looking for something else?{' '}
              <Link href="/contact" className="font-medium text-brand-orange underline">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
