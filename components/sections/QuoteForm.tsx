'use client'

import Script from 'next/script'

const FORM_ID = 'zMwDnlewmlpapZLz0aN4'
const IFRAME_ID = `inline-${FORM_ID}`
const FORM_HEIGHT = 605

/** GoHighLevel enquiry form embed (Bright Path Creative). */
export function QuoteForm() {
  return (
    <div
      className="w-full overflow-hidden rounded-lg bg-white"
      style={{ height: FORM_HEIGHT }}
    >
      <iframe
        src={`https://links.brightpathcreative.com.au/widget/form/${FORM_ID}`}
        style={{ width: '100%', height: FORM_HEIGHT, border: 'none', borderRadius: '8px' }}
        id={IFRAME_ID}
        data-layout={"{'id':'INLINE'}"}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Enquiry Form"
        data-height={String(FORM_HEIGHT)}
        data-layout-iframe-id={IFRAME_ID}
        data-form-id={FORM_ID}
        title="Enquiry Form"
      />
      <Script
        src="https://links.brightpathcreative.com.au/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
