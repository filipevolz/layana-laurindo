import { siteConfig } from '@/lib/site-config'

export function getAbsoluteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return `${siteConfig.seo.siteUrl}/`
  return `${siteConfig.seo.siteUrl}${normalized}`
}

export function getOgImageUrl(): string {
  return getAbsoluteUrl(siteConfig.seo.ogImage)
}
