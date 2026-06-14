import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  Icon: LucideIcon
}

export function ServiceCard({ title, description, href, Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-brand-grey/15 bg-white p-6 shadow-sm transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-lg md:p-8"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors duration-200 group-hover:bg-brand-orange group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-brand-dark">{title}</h3>
      <p className="mt-2 flex-1 text-brand-grey">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
