import Link from 'next/link'
import { SUBURB_LINKS } from '@/lib/suburb-slugs'

/** Linked grid of service-area suburb pages for internal SEO. */
export function SuburbLinks() {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {SUBURB_LINKS.map(({ name, slug }) => (
        <li key={slug}>
          <Link
            href={`/areas/${slug}`}
            className="inline-block rounded-full border border-brand-grey/20 bg-brand-light px-3 py-1.5 text-sm font-medium text-brand-dark transition-colors duration-150 hover:border-brand-orange hover:text-brand-orange"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
