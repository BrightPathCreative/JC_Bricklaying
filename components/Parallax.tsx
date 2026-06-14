'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface ParallaxProps {
  children: ReactNode
  /** Positive = moves up as you scroll down. Subtle values (0.05–0.2) read best. */
  speed?: number
  className?: string
}

/**
 * Continuous scroll parallax — translates its child vertically based on its
 * position in the viewport. Transform-only (GPU friendly) and disabled for
 * users who prefer reduced motion.
 */
export function Parallax({ children, speed = 0.12, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return

    let raf = 0
    let active = false

    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      // distance of element center from viewport center, normalised
      const fromCenter = rect.top + rect.height / 2 - vh / 2
      const shift = -(fromCenter * speed)
      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`
    }

    const onScroll = () => {
      if (!active || raf) return
      raf = requestAnimationFrame(update)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting
        if (active) onScroll()
      },
      { threshold: 0 },
    )
    io.observe(el)
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
