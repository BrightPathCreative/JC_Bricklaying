'use client'

import { useCallback, useState } from 'react'
import { FramedImage } from '@/components/ui/FramedImage'
import { ImageLightbox } from '@/components/ui/ImageLightbox'
import type { GalleryItem } from '@/lib/service-gallery'

/** Masonry photo grid with an accessible lightbox, used on each service page. */
export function ServiceGallery({ images }: { images: GalleryItem[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null)

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
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
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
              width={1000}
              height={1000}
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
        width={1400}
        height={1400}
        index={lightbox ?? 0}
        total={images.length}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  )
}
