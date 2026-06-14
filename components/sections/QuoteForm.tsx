'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { CheckCircle2 } from 'lucide-react'
import { submitQuote, type QuoteFormState } from '@/app/actions'
import { ENQUIRY_OPTIONS } from '@/lib/constants'

const initialState: QuoteFormState = { status: 'idle' }

const inputBase =
  'mt-1.5 block w-full rounded-lg border border-brand-grey/30 bg-white px-3.5 py-2.5 text-brand-dark outline-none transition-colors duration-150 placeholder:text-brand-grey/60 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20'

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-1 text-sm text-red-600" role="alert">
      {message}
    </p>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 font-medium text-white transition-colors duration-150 hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:opacity-70"
    >
      {pending ? 'Sending…' : 'Get My Free Quote'}
    </button>
  )
}

interface QuoteFormProps {
  /** Use 'light' on dark backgrounds (hero), 'default' on white sections. */
  tone?: 'default' | 'light'
}

export function QuoteForm({ tone = 'default' }: QuoteFormProps) {
  const [state, formAction] = useFormState(submitQuote, initialState)

  const labelClass =
    tone === 'light' ? 'text-sm font-medium text-brand-dark' : 'text-sm font-medium text-brand-dark'

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg">
        <CheckCircle2 className="h-12 w-12 text-brand-orange" aria-hidden="true" />
        <p className="mt-4 text-lg font-medium text-brand-dark">{state.message}</p>
        <p className="mt-2 text-sm text-brand-grey">
          Prefer to talk now?{' '}
          <a href="tel:+61402723175" className="font-medium text-brand-orange">
            Click to Call Jamie
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="space-y-4" aria-label="Request a free quote">
      {state.status === 'error' && state.message && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {state.message}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-brand-orange">*</span>
          </label>
          <input id="firstName" name="firstName" type="text" autoComplete="given-name" className={inputBase} />
          <FieldError message={state.errors?.firstName} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-brand-orange">*</span>
          </label>
          <input id="lastName" name="lastName" type="text" autoComplete="family-name" className={inputBase} />
          <FieldError message={state.errors?.lastName} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputBase} />
          <FieldError message={state.errors?.phone} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputBase} />
          <FieldError message={state.errors?.email} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClass}>
            What do you need?
          </label>
          <select id="service" name="service" defaultValue="" className={inputBase}>
            <option value="" disabled>
              Select a service…
            </option>
            {ENQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <FieldError message={state.errors?.service} />
        </div>
        <div>
          <label htmlFor="suburb" className={labelClass}>
            Your Suburb <span className="text-brand-orange">*</span>
          </label>
          <input id="suburb" name="suburb" type="text" autoComplete="address-level2" className={inputBase} />
          <FieldError message={state.errors?.suburb} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project
        </label>
        <textarea id="message" name="message" rows={4} className={inputBase} />
      </div>

      <SubmitButton />

      <p className="text-center text-xs text-brand-grey">
        No obligation. We typically respond within 1 business day. Your details are kept private and
        will never be shared.
      </p>
    </form>
  )
}
