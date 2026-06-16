/** Resolve a first name from common GHL / form redirect query params. */
export function resolveFirstName(
  params: Record<string, string | string[] | undefined>,
): string | undefined {
  const keys = ['firstName', 'first_name', 'name', 'contact.first_name'] as const

  for (const key of keys) {
    const value = params[key]
    const raw = Array.isArray(value) ? value[0] : value
    const trimmed = raw?.trim()
    if (trimmed) return trimmed
  }

  return undefined
}

export function thankYouHeadline(firstName?: string): string {
  if (firstName) {
    return `Thanks, ${firstName}! Your enquiry is on its way to Jamie.`
  }

  return "Thanks — we've received your enquiry."
}

export function thankYouIntro(firstName?: string): string {
  if (firstName) {
    return `${firstName}, Jamie personally reviews every new enquiry. He'll be in touch within one business day with a clear, no-obligation quote.`
  }

  return 'Jamie personally reviews every new enquiry. He responds within one business day with a clear, no-obligation quote.'
}
