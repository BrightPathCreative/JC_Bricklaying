import Image, { type ImageProps } from 'next/image'

type BorderTone = 'dark' | 'orange'

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export type FramedImageProps = ImageProps & {
  /** Classes on the frame wrapper (aspect ratio, rounding, sizing). */
  frameClassName?: string
  border?: BorderTone
}

/** Content image with a soft orange glow and thin brand border. */
export function FramedImage({
  frameClassName,
  border = 'dark',
  className,
  alt,
  ...props
}: FramedImageProps) {
  return (
    <div
      className={cx(
        'img-frame',
        border === 'orange' && 'img-frame-orange',
        frameClassName,
      )}
    >
      <Image
        alt={alt}
        className={cx(props.fill ? 'h-full w-full object-cover' : 'object-cover', className)}
        {...props}
      />
    </div>
  )
}
