import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { siteConfig } from '../src/lib/site-config'

const indexPath = resolve(process.cwd(), 'index.html')
const html = readFileSync(indexPath, 'utf-8')

const { seo, name } = siteConfig
const ogImageAbs = `${seo.siteUrl}${seo.ogImage}`
const canonical = `${seo.siteUrl}/`

const seoBlock = `    <!-- seo:start -->
    <meta name="theme-color" content="${seo.themeColor}" />
    <title>
      ${seo.defaultTitle}
    </title>
    <meta
      name="description"
      content="${seo.defaultDescription}"
    />
    <link rel="canonical" href="${canonical}" />
    <meta name="author" content="${name}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${seo.siteName}" />
    <meta property="og:url" content="${canonical}" />
    <meta
      property="og:title"
      content="${seo.defaultTitle}"
    />
    <meta
      property="og:description"
      content="${seo.ogDescription}"
    />
    <meta property="og:locale" content="${seo.locale}" />
    <meta
      property="og:image"
      content="${ogImageAbs}"
    />
    <meta
      property="og:image:alt"
      content="${seo.ogImageAlt}"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="${seo.defaultTitle}"
    />
    <meta
      name="twitter:description"
      content="${seo.ogDescription}"
    />
    <meta
      name="twitter:image"
      content="${ogImageAbs}"
    />
    <!-- seo:end -->`

const markerStart = '<!-- seo:start -->'
const markerEnd = '<!-- seo:end -->'

let nextHtml: string

if (html.includes(markerStart) && html.includes(markerEnd)) {
  const before = html.slice(0, html.indexOf(markerStart))
  const after = html.slice(html.indexOf(markerEnd) + markerEnd.length)
  nextHtml = `${before}${seoBlock.trimStart()}${after}`
} else {
  // Primeira execução: substitui o bloco legado entre theme-color e </head>
  const themeColorRe =
    /\s*<meta\s+name="theme-color"[\s\S]*?<meta\s+name="twitter:image"[\s\S]*?\/>/
  if (!themeColorRe.test(html)) {
    throw new Error(
      'Não foi possível localizar o bloco SEO em index.html. Adicione marcadores seo:start/seo:end.',
    )
  }
  nextHtml = html.replace(themeColorRe, `\n${seoBlock}`)
}

writeFileSync(indexPath, nextHtml, 'utf-8')
console.log(`SEO sync: index.html alinhado a siteConfig.seo (${seo.updatedAt})`)
