import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium text-center transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-dark text-white hover:bg-brand-orange-dark',
  secondary:
    'bg-transparent text-white ring-2 ring-white/70 hover:bg-brand-dark hover:ring-brand-dark',
  ghost:
    'bg-white text-brand-dark ring-1 ring-brand-grey/30 hover:ring-brand-orange hover:text-brand-orange',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type AnchorProps = CommonProps & { href: string } & Omit<
    ComponentProps<'a'>,
    'href' | 'className' | 'children'
  >

type ButtonProps = CommonProps &
  Omit<ComponentProps<'button'>, 'className' | 'children'>

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ')
}

/**
 * Renders an internal next/link, an external/tel anchor, or a native button
 * depending on the `href` prop and its protocol.
 */
export function Button(props: AnchorProps | ButtonProps) {
  const { variant = 'primary', size = 'lg', className, children, ...rest } = props
  const classes = cx(base, variants[variant], sizes[size], className)

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as { href: string } & ComponentProps<'a'>

    if (href.startsWith('/')) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ComponentProps<'button'>)}>
      {children}
    </button>
  )
}
