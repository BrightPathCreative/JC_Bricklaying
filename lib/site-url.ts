/** Canonical public site URL — used for metadata, schema, and sitemaps. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.jcbricklaying.com.au'
).replace(/\/$/, '')
