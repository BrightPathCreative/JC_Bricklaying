'use client'

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in ms (e.g. for grid items). */
  delay?: number
  className?: string
  as?: ElementType
  /** Direction the element travels from as it fades in. */
  direction?: Direction
  /** Travel distance in px (defaults vary by direction). */
  distance?: number
  /** Re-animate (fade out + back in) every time it enters/leaves the viewport. */
  repeat?: boolean
}

function offsets(direction: Direction, distance?: number) {
  switch (direction) {
    case 'down':
      return { x: 0, y: -(distance ?? 28), scale: 1 }
    case 'left':
      return { x: -(distance ?? 40), y: 0, scale: 1 }
    case 'right':
      return { x: distance ?? 40, y: 0, scale: 1 }
    case 'zoom':
      return { x: 0, y: distance ?? 16, scale: 0.92 }
    case 'fade':
      return { x: 0, y: 0, scale: 1 }
    case 'up':
    default:
      return { x: 0, y: distance ?? 28, scale: 1 }
  }
}

/**
 * Scroll-reveal wrapper. Fades + translates the element in from a chosen
 * direction when it enters the viewport (and back out, if `repeat`).
 * Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
  direction = 'up',
  distance,
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (!repeat) observer.unobserve(entry.target)
          } else if (repeat) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [repeat])

  const { x, y, scale } = offsets(direction, distance)
  const style: CSSProperties | undefined = reduced
    ? undefined
    : {
        ...(delay ? { transitionDelay: `${delay}ms` } : {}),
        ...({
          '--reveal-x': `${x}px`,
          '--reveal-y': `${y}px`,
          '--reveal-scale': `${scale}`,
        } as CSSProperties),
      }

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </Tag>
  )
}
