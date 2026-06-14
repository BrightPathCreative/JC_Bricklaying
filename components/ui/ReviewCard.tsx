import { Star } from 'lucide-react'

interface ReviewCardProps {
  author: string
  dateLabel: string
  body: string
  rating?: number
}

export function ReviewCard({ author, dateLabel, body, rating = 5 }: ReviewCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-brand-grey/15 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg md:p-8">
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-brand-dark">
        <p>“{body}”</p>
      </blockquote>
      <figcaption className="mt-5 border-t border-brand-grey/15 pt-4 text-sm">
        <span className="font-semibold text-brand-dark">{author}</span>
        <span className="text-brand-grey"> · {dateLabel}</span>
      </figcaption>
    </figure>
  )
}
