'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Loader2, X } from 'lucide-react'

type ImageLightboxProps = {
  open: boolean
  src: string
  alt: string
  width: number
  height: number
  index: number
  total: number
  caption?: ReactNode
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

/** Full-screen image viewer portaled to document.body (avoids broken fixed positioning inside transformed ancestors). */
export function ImageLightbox({
  open,
  src,
  alt,
  width,
  height,
  index,
  total,
  caption,
  onClose,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    setLoaded(false)
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, onNext, onPrev])

  if (!open || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors duration-150 hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
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
          onNext()
        }}
        className="absolute right-2 rounded-full bg-white/10 p-2.5 text-white transition-colors duration-150 hover:bg-white/20 sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" aria-hidden="true" />
      </button>

      <figure
        className="relative flex max-h-[85vh] w-auto max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <Loader2
            className="absolute h-10 w-10 animate-spin text-white/50"
            aria-hidden="true"
          />
        )}
        <div
          className={`img-frame img-frame-orange rounded-lg transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="90vw"
            unoptimized
            priority
            onLoad={() => setLoaded(true)}
            className="max-h-[85vh] w-auto object-contain"
          />
        </div>
        <figcaption className="mt-3 text-center text-sm text-white/70">
          {caption ?? `${index + 1} / ${total}`}
        </figcaption>
      </figure>
    </div>,
    document.body,
  )
}
