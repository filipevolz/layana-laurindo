import { useEffect } from 'react'

import { getAbsoluteUrl, getOgImageUrl } from '@/lib/seo-utils'
import { siteConfig } from '@/lib/site-config'

export interface PageHeadProps {
  title?: string
  description?: string
  path?: string
  ogImage?: string
  ogImageAlt?: string
  noIndex?: boolean
}

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.querySelector(selector) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let element = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function PageHead({
  title = siteConfig.seo.defaultTitle,
  description = siteConfig.seo.defaultDescription,
  path = '/',
  ogImage,
  ogImageAlt = siteConfig.seo.ogImageAlt,
  noIndex = false,
}: PageHeadProps) {
  const canonical = getAbsoluteUrl(path)
  const image = ogImage ?? getOgImageUrl()
  const ogDescription = siteConfig.seo.ogDescription ?? description

  useEffect(() => {
    document.title = title

    upsertMeta('name', 'description', description)
    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', siteConfig.seo.siteName)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', ogDescription)
    upsertMeta('property', 'og:locale', siteConfig.seo.locale)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', ogImageAlt)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', ogDescription)
    upsertMeta('name', 'twitter:image', image)

    upsertMeta('name', 'theme-color', siteConfig.seo.themeColor)
    upsertLink('manifest', '/site.webmanifest')

    if (noIndex) {
      upsertMeta('name', 'robots', 'noindex, nofollow')
    } else {
      const robots = document.querySelector('meta[name="robots"]')
      robots?.remove()
    }
  }, [title, description, canonical, image, ogImageAlt, ogDescription, noIndex])

  return null
}
