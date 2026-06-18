import { getAbsoluteUrl } from '@/lib/seo-utils'
import { siteConfig } from '@/lib/site-config'

interface FaqItem {
  question: string
  answer: string
}

interface JsonLdProps {
  faq?: readonly FaqItem[]
  breadcrumbs?: readonly { name: string; path: string }[]
}

export function JsonLd({ faq, breadcrumbs }: JsonLdProps) {
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.seo.siteUrl}/#website`,
      url: siteConfig.seo.siteUrl,
      name: siteConfig.seo.siteName,
      description: siteConfig.seo.defaultDescription,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${siteConfig.seo.siteUrl}/#organization` },
    },
    {
      '@type': ['LegalService', 'LocalBusiness', 'Attorney'],
      '@id': `${siteConfig.seo.siteUrl}/#organization`,
      name: siteConfig.name,
      description: siteConfig.seo.defaultDescription,
      url: siteConfig.seo.siteUrl,
      image: getAbsoluteUrl(siteConfig.seo.ogImage),
      telephone: `+${siteConfig.whatsapp}`,
      email: siteConfig.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.line1,
        addressLocality: 'Florianópolis',
        addressRegion: 'SC',
        postalCode: '88075-000',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -27.5838617,
        longitude: -48.5838573,
      },
      areaServed: [
        { '@type': 'City', name: 'Florianópolis' },
        { '@type': 'State', name: 'Santa Catarina' },
        { '@type': 'Country', name: 'Brasil' },
      ],
      knowsAbout: siteConfig.specialties,
      identifier: {
        '@type': 'PropertyValue',
        name: 'OAB',
        value: siteConfig.oab,
      },
      sameAs: [
        siteConfig.social.instagram.href,
        siteConfig.social.linkedin.href,
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  ]

  if (faq && faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: getAbsoluteUrl(crumb.path),
      })),
    })
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
