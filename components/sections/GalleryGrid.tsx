'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { FramedImage } from '@/components/ui/FramedImage'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
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
            className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            aria-label={`View larger: ${img.alt}`}
          >
            <FramedImage
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              frameClassName="rounded-xl"
              className="h-auto w-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <ImageLightbox
        open={current !== null}
        src={current?.src ?? ''}
        alt={current?.alt ?? ''}
        width={current?.width ?? 1400}
        height={current?.height ?? 1400}
        index={lightbox ?? 0}
        total={images.length}
        caption={current ? `${current.category} · ${(lightbox ?? 0) + 1} / ${images.length}` : undefined}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
