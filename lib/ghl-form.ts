/** GoHighLevel enquiry form (Bright Path Creative). */
export const GHL_FORM_ID = 'zMwDnlewmlpapZLz0aN4'
export const GHL_FORM_IFRAME_ID = `inline-${GHL_FORM_ID}`
export const GHL_FORM_HEIGHT = 605
export const GHL_FORM_SRC = `https://links.brightpathcreative.com.au/widget/form/${GHL_FORM_ID}`
export const GHL_FORM_EMBED_SCRIPT = 'https://links.brightpathcreative.com.au/js/form_embed.js'

/** Origins to preconnect before the embed loads (iframe + GHL assets). */
export const GHL_PRECONNECT_ORIGINS = [
  'https://links.brightpathcreative.com.au',
  'https://stcdn.leadconnectorhq.com',
  'https://backend.leadconnectorhq.com',
  'https://fonts.bunny.net',
  'https://storage.googleapis.com',
] as const

/** Lower-priority third-party origins used inside the GHL iframe. */
export const GHL_DNS_PREFETCH_ORIGINS = [
  'https://images.leadconnectorhq.com',
  'https://cdn.filesafe.space',
  'https://fonts.gstatic.com',
] as const
