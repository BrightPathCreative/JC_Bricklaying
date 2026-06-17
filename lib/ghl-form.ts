/** GoHighLevel enquiry form (Bright Path Creative). */
export const GHL_FORM_ID = 'zMwDnlewmlpapZLz0aN4'
export const GHL_FORM_IFRAME_ID = `inline-${GHL_FORM_ID}`
export const GHL_FORM_HEIGHT = 605
export const GHL_FORM_SRC = `https://links.brightpathcreative.com.au/widget/form/${GHL_FORM_ID}`
export const GHL_FORM_EMBED_SCRIPT = 'https://links.brightpathcreative.com.au/js/form_embed.js'

/** Preconnect only the two origins that serve the embed shell (Lighthouse caps useful hints at ~4). */
export const GHL_PRECONNECT_ORIGINS = [
  'https://links.brightpathcreative.com.au',
  'https://stcdn.leadconnectorhq.com',
] as const

/** Lower-priority third-party origins used inside the GHL iframe. */
export const GHL_DNS_PREFETCH_ORIGINS = [
  'https://backend.leadconnectorhq.com',
  'https://images.leadconnectorhq.com',
] as const
