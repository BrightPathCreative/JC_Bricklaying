'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { SITE, SERVICES } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

const NAV: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Areas', href: '/areas' },
  { label: 'Gallery', href: '/gallery' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-40 border-b border-brand-grey/15 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-bpc flex h-20 items-center justify-between gap-4 md:h-28">
        <Link href="/" className="flex shrink-0 items-center" aria-label="JC Brick & Blocklaying home">
          <Image
            src="/images/brand/logo.png"
            alt="jc brick and blocklaying logo — bricklayer melbourne eastern suburbs"
            width={600}
            height={400}
            priority
            className="h-16 w-auto md:h-24"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive(item.href)
                      ? 'text-brand-orange'
                      : 'text-brand-dark hover:text-brand-orange'
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-150 ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </Link>

                {servicesOpen && (
                  <div className="absolute left-0 top-full w-80 pt-2">
                    <ul className="overflow-hidden rounded-xl border border-brand-grey/15 bg-white py-2 shadow-xl">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block px-4 py-2.5 text-sm text-brand-dark transition-colors duration-150 hover:bg-brand-light hover:text-brand-orange"
                          >
                            {s.navLabel}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-1 border-t border-brand-grey/15 pt-1">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-sm font-medium text-brand-orange transition-colors duration-150 hover:bg-brand-light"
                        >
                          View All Services →
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'text-brand-orange'
                    : 'text-brand-dark hover:text-brand-orange'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-brand-dark transition-colors duration-150 hover:text-brand-orange md:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.callLabel}
          </a>
          <Button href="/contact" size="md" className="hidden sm:inline-flex">
            Get My Free Quote
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-dark lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-dark/60"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-brand-grey/15 px-4">
              <span className="font-display text-lg font-semibold text-brand-dark">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-brand-dark"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center justify-center gap-2 bg-brand-orange px-4 py-3.5 font-medium text-white"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {SITE.callLabel}
            </a>

            <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="Mobile">
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="block rounded-md px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block rounded-md px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-light">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="block rounded-md px-3 py-3 text-base font-semibold text-brand-dark hover:bg-brand-light">
                    Services
                  </Link>
                  <ul className="ml-3 border-l border-brand-grey/15 pl-2">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="block rounded-md px-3 py-2.5 text-sm text-brand-grey hover:bg-brand-light hover:text-brand-orange"
                        >
                          {s.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link href="/areas" className="block rounded-md px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-light">
                    Areas We Service
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="block rounded-md px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-light">
                    Gallery
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="border-t border-brand-grey/15 p-4">
              <Button href="/contact" className="w-full">
                Get My Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
