'use server'

import { ENQUIRY_OPTIONS } from '@/lib/constants'

export interface QuoteFormState {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
  firstName?: string
}

const REQUIRED_FIELDS: Array<{ name: string; label: string }> = [
  { name: 'firstName', label: 'First name' },
  { name: 'lastName', label: 'Last name' },
  { name: 'phone', label: 'Phone number' },
  { name: 'suburb', label: 'Your suburb' },
]

/**
 * Lead capture submission.
 * Posts to the GoHighLevel CRM endpoint when GHL_FORM_ENDPOINT is configured,
 * otherwise validates and returns success so the UI can be tested end-to-end.
 */
export async function submitQuote(
  _prev: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const get = (k: string) => (formData.get(k) as string | null)?.trim() ?? ''

  const data = {
    firstName: get('firstName'),
    lastName: get('lastName'),
    phone: get('phone'),
    email: get('email'),
    service: get('service'),
    suburb: get('suburb'),
    message: get('message'),
  }

  // Validation
  const errors: Record<string, string> = {}
  for (const field of REQUIRED_FIELDS) {
    if (!data[field.name as keyof typeof data]) {
      errors[field.name] = `${field.label} is required.`
    }
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (data.service && !ENQUIRY_OPTIONS.includes(data.service as (typeof ENQUIRY_OPTIONS)[number])) {
    errors.service = 'Please select a valid option.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Please check the highlighted fields and try again.',
      errors,
    }
  }

  const endpoint = process.env.GHL_FORM_ENDPOINT

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`CRM responded ${res.status}`)
    } catch (err) {
      console.error('Quote submission failed:', err)
      return {
        status: 'error',
        message:
          'Sorry, something went wrong sending your enquiry. Please use the Click-to-Call button to reach Jamie directly.',
      }
    }
  } else {
    // CRM endpoint not yet provisioned — log for now.
    console.info('[Quote enquiry — CRM endpoint pending]', data)
  }

  return {
    status: 'success',
    firstName: data.firstName,
    message: `Thanks ${data.firstName}! We've received your enquiry and Jamie will be in touch within 1 business day.`,
  }
}
