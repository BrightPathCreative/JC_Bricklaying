import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  Icon: LucideIcon
  /** Representative photo shown as the card banner. */
  image?: string
  imageAlt?: string
}

export function ServiceCard({ title, description, href, Icon, image, imageAlt }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-grey/15 bg-white shadow-sm ring-0 ring-brand-orange/0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand-orange/40 hover:shadow-xl hover:ring-1 hover:ring-brand-orange/20"
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent transition-opacity duration-300 group-hover:from-brand-dark/40" />
          <span className="absolute bottom-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {!image && (
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors duration-200 group-hover:bg-brand-orange group-hover:text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
        )}
        <h3 className={`text-xl font-semibold text-brand-dark ${image ? '' : 'mt-5'}`}>{title}</h3>
        <p className="mt-2 flex-1 text-brand-grey">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange">
          Learn more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
