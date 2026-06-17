import { SUBURBS } from './constants'

export function suburbSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const SUBURB_LINKS = SUBURBS.map((name) => ({
  name,
  slug: suburbSlug(name),
}))
