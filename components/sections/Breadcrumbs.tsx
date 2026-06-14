import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Crumb } from '@/lib/schema'

/** Visual breadcrumb trail. Pair with breadcrumbSchema for JSON-LD. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-bpc pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-grey">
        <li>
          <Link href="/" className="transition-colors duration-150 hover:text-brand-orange">
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              <ChevronRight className="h-4 w-4 text-brand-grey/50" aria-hidden="true" />
              {isLast ? (
                <span className="font-medium text-brand-dark" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.path}
                  className="transition-colors duration-150 hover:text-brand-orange"
                >
                  {c.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
