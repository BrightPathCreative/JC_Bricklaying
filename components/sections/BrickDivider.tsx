/**
 * A slim running-bond course of bricks used as a brand divider between
 * sections. Decorative only — hidden from assistive tech.
 */
const BRICK_TILE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='28'%3E%3Crect width='88' height='28' fill='%231a1a1a'/%3E%3Cg fill='%23e07b20'%3E%3Crect x='1' y='1' width='42' height='12'/%3E%3Crect x='45' y='1' width='42' height='12'/%3E%3Crect x='-21' y='15' width='42' height='12'/%3E%3Crect x='23' y='15' width='42' height='12'/%3E%3Crect x='67' y='15' width='42' height='12'/%3E%3C/g%3E%3C/svg%3E\")"

export function BrickDivider({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3.5 w-full ${className}`}
      style={{
        backgroundImage: BRICK_TILE,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
      }}
    />
  )
}
