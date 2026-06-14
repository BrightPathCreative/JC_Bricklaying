import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { SITE, SERVICES } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container-bpc py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <p className="font-display text-xl font-bold tracking-tight">
              JC Brick <span className="text-brand-orange">&amp;</span> Blocklaying
            </p>
            <p className="mt-1 text-sm text-white/60">ABN: {SITE.abn}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-brand-orange"
                >
                  <Phone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                  {SITE.callLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-brand-orange"
                >
                  <Mail className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden="true" />
                <span>{SITE.address.display}</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Explore
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                    { label: 'Services', href: '/services' },
                    { label: 'Areas We Service', href: '/areas' },
                    { label: 'Gallery', href: '/gallery' },
                    { label: 'FAQ', href: '/faq' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 transition-colors duration-150 hover:text-brand-orange"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/80 transition-colors duration-150 hover:text-brand-orange"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + social */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
              Opening Hours
            </h2>
            <ul className="mt-5 space-y-1.5 text-sm text-white/80">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span>7:00am – 5:30pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>9:00am – 3:00pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JC Brick & Blocklaying on Facebook"
                className="rounded-full bg-white/10 p-2.5 text-white/80 transition-all duration-150 hover:scale-110 hover:bg-brand-orange hover:text-white"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JC Brick & Blocklaying on Instagram"
                className="rounded-full bg-white/10 p-2.5 text-white/80 transition-all duration-150 hover:scale-110 hover:bg-brand-orange hover:text-white"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm font-medium text-white/70">
            Fully Insured&nbsp;&nbsp;|&nbsp;&nbsp;21 Years Experience&nbsp;&nbsp;|&nbsp;&nbsp;5.0★
            Google Rating&nbsp;&nbsp;|&nbsp;&nbsp;🏆 Top 1% Quality Business Awards 2026
          </p>
          <p className="mt-4 text-center text-xs text-white/50">
            © {year} JC Brick &amp; Blocklaying Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
