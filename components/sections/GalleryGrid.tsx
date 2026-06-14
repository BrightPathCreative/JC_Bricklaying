'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from '@/lib/gallery'

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const images = useMemo(
    () => (active === 'All' ? GALLERY : GALLERY.filter((g) => g.category === active)),
    [active],
  )

  // Reset lightbox when the filter changes
  useEffect(() => {
    setLightbox(null)
  }, [active])

  const close = useCallback(() => setLightbox(null), [])
  const next = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  )
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  )

  useEffect(() => {
    if (lightbox === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox, close, next, prev])

  const current = lightbox !== null ? images[lightbox] : null

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter gallery by category">
        {GALLERY_CATEGORIES.map((cat) => {
          const isActive = cat === active
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                isActive
                  ? 'bg-brand-orange text-white'
                  : 'border border-brand-grey/25 bg-white text-brand-dark hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Masonry grid */}
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightbox(i)}
            className="group block w-full overflow-hidden rounded-xl bg-brand-light shadow-sm transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            aria-label={`View larger: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors duration-150 hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 rounded-full bg-white/10 p-2.5 text-white transition-colors duration-150 hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 rounded-full bg-white/10 p-2.5 text-white transition-colors duration-150 hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>

          <figure
            className="relative max-h-[85vh] w-auto max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              priority
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {current.category} · {(lightbox ?? 0) + 1} / {images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
