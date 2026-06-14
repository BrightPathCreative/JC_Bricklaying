import Image from 'next/image'

type Tone = 'dark' | 'orange'

/**
 * Full-bleed hero background image with a light gradient scrim so white text stays
 * readable while the brickwork photo remains visible. Drop in as the first child
 * of a `relative isolate overflow-hidden` hero section.
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
      {/* Left scrim — darken only where headline text sits, fade to clear on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/65 via-brand-dark/25 to-transparent" />
      {/* Soft bottom edge — keeps text readable without washing the whole image */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/35 via-transparent to-transparent" />
      {tone === 'orange' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/15 via-transparent to-transparent" />
      )}
    </div>
  )
}
