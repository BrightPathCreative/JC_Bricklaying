import {
  GHL_FORM_HEIGHT,
  GHL_FORM_ID,
  GHL_FORM_IFRAME_ID,
  GHL_FORM_SRC,
} from '@/lib/ghl-form'

/**
 * GoHighLevel enquiry form embed (server-rendered iframe).
 * Kept as a server component so the iframe starts loading on first paint,
 * not after client hydration.
 */
export function QuoteForm() {
  return (
    <div
      className="w-full overflow-hidden rounded-lg bg-white"
      style={{ height: GHL_FORM_HEIGHT }}
    >
      <iframe
        src={GHL_FORM_SRC}
        style={{ width: '100%', height: GHL_FORM_HEIGHT, border: 'none', borderRadius: '8px' }}
        id={GHL_FORM_IFRAME_ID}
        data-layout={"{'id':'INLINE'}"}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Enquiry Form"
        data-height={String(GHL_FORM_HEIGHT)}
        data-layout-iframe-id={GHL_FORM_IFRAME_ID}
        data-form-id={GHL_FORM_ID}
        title="Enquiry Form"
        loading="eager"
      />
    </div>
  )
}
