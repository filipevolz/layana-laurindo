import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = 'https://layanalaurindo.com.br'
const updatedAt = '2026-06-01'

const urls = [{ path: '/', priority: 1.0, changefreq: 'weekly' as const }]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${siteUrl}${url.path === '/' ? '/' : url.path}</loc>
    <lastmod>${updatedAt}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const outputPath = resolve(process.cwd(), 'public/sitemap.xml')
writeFileSync(outputPath, xml, 'utf-8')
console.log(`Sitemap gerado em ${outputPath} (${urls.length} URLs)`)
