import Image from 'next/image'

type Tone = 'dark' | 'orange'

/**
 * Full-bleed hero background image with a light gradient scrim so white text stays
 * readable while the brickwork photo remains visible. Drop in as the first child
 * of a `relative isolate overflow-hidden` hero section.
 */
export function HeroBg({
  src,
  alt,
  tone = 'dark',
  priority = false,
  flip = false,
}: {
  src: string
  /** SEO alt when the hero photo should be indexed; omit for decorative-only backgrounds. */
  alt?: string
  tone?: Tone
  priority?: boolean
  /** Mirror the image horizontally. */
  flip?: boolean
}) {
  const decorative = !alt

  return (
    <div className="absolute inset-0 -z-10" aria-hidden={decorative || undefined}>
      <Image
        src={src}
        alt={alt ?? ''}
        fill
        priority={priority}
        sizes="100vw"
        className={`h-full w-full object-cover${flip ? ' scale-x-[-1]' : ''}`}
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
