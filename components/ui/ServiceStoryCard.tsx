import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceStoryCardProps {
  title: string
  description: string
  href: string
  Icon: LucideIcon
  image: string
  imageAlt?: string
}

/** Tall editorial card — full-height photo with title and excerpt over the lower third. */
export function ServiceStoryCard({
  title,
  description,
  href,
  Icon,
  image,
  imageAlt,
}: ServiceStoryCardProps) {
  return (
    <Link
      href={href}
      className="group img-frame relative block aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/5]"
    >
      <Image
        src={image}
        alt={imageAlt ?? title}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark from-0% via-brand-dark/75 via-[32%] to-transparent to-[62%]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-6 md:p-7">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white shadow-lg shadow-brand-orange/30 transition-transform duration-300 group-hover:-translate-y-0.5">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-bold leading-snug text-white md:text-2xl">{title}</h3>
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/85 md:text-[0.9375rem]">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange transition-colors group-hover:text-white">
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
