'use client'

import { useFormState, useFormStatus } from 'react-dom'
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

function SubmitButton({ compact = false }: { compact?: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange font-medium text-white transition-colors duration-150 hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 disabled:opacity-70 ${
        compact ? 'px-5 py-2.5 text-sm' : 'px-7 py-3.5'
      }`}
    >
      {pending ? 'Sending…' : 'Get My Free Quote'}
    </button>
  )
}

interface QuoteFormProps {
  /** Use 'light' on dark backgrounds (hero), 'default' on white sections. */
  tone?: 'default' | 'light'
  /** Tighter spacing for the hero sidebar. */
  compact?: boolean
}

export function QuoteForm({ tone = 'default', compact = false }: QuoteFormProps) {
  const [state, formAction] = useFormState(submitQuote, initialState)

  const labelClass = compact
    ? 'text-xs font-medium text-brand-dark'
    : 'text-sm font-medium text-brand-dark'

  const inputClass = compact
    ? 'mt-1 block w-full rounded-lg border border-brand-grey/25 bg-white/90 px-3 py-2 text-sm text-brand-dark outline-none transition-colors duration-150 placeholder:text-brand-grey/60 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20'
    : inputBase

  const formSpacing = compact ? 'space-y-3' : 'space-y-4'
  const gridGap = compact ? 'gap-3' : 'gap-4'

  return (
    <form action={formAction} noValidate className={formSpacing} aria-label="Request a free quote">
      {state.status === 'error' && state.message && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {state.message}
        </div>
      )}

      <div className={`grid ${gridGap} sm:grid-cols-2`}>
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-brand-orange">*</span>
          </label>
          <input id="firstName" name="firstName" type="text" autoComplete="given-name" className={inputClass} />
          <FieldError message={state.errors?.firstName} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-brand-orange">*</span>
          </label>
          <input id="lastName" name="lastName" type="text" autoComplete="family-name" className={inputClass} />
          <FieldError message={state.errors?.lastName} />
        </div>
      </div>

      <div className={`grid ${gridGap} sm:grid-cols-2`}>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-brand-orange">*</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
          <FieldError message={state.errors?.phone} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
          <FieldError message={state.errors?.email} />
        </div>
      </div>

      <div className={`grid ${gridGap} sm:grid-cols-2`}>
        <div>
          <label htmlFor="service" className={labelClass}>
            What do you need?
          </label>
          <select id="service" name="service" defaultValue="" className={inputClass}>
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
          <input id="suburb" name="suburb" type="text" autoComplete="address-level2" className={inputClass} />
          <FieldError message={state.errors?.suburb} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          className={inputClass}
        />
      </div>

      <SubmitButton compact={compact} />

      <p className="text-center text-xs text-brand-grey">
        No obligation. We typically respond within 1 business day. Your details are kept private and
        will never be shared.
      </p>
    </form>
  )
}
