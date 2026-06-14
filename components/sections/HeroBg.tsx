import Image from 'next/image'

type Tone = 'dark' | 'orange'

/**
 * Full-bleed hero background image with a gradient scrim so white text stays
 * accessible (WCAG AA) over any photo. Drop in as the first child of a
 * `relative isolate overflow-hidden` hero section.
 */
export function HeroBg({
  src,
  tone = 'dark',
  priority = false,
}: {
  src: string
  tone?: Tone
  priority?: boolean
}) {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="h-full w-full object-cover"
      />
      {/* Left-to-right scrim keeps headline text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/45" />
      {/* Vertical scrim for depth + bottom edge */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-brand-dark/60" />
      {tone === 'orange' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/30 via-transparent to-transparent" />
      )}
    </div>
  )
}
