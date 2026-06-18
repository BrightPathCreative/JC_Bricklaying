/** Preload the homepage hero JPEG so LCP starts before Next/Image hydration. */
export function HeroPreload({ src }: { src: string }) {
  return (
    <link rel="preload" as="image" href={src} fetchPriority="high" />
  )
}
