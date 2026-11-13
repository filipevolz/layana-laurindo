import { expect, test } from '@playwright/test'

import { buildWhatsAppUrl, siteConfig } from '../../src/lib/site-config'

const DEFAULT_WHATSAPP = buildWhatsAppUrl(siteConfig.defaultWhatsAppMessage)

const NAV_ANCHORS = [
  ['Sobre', '/#sobre'],
  ['Serviços', '/#servicos'],
  ['Diferenciais', '/#diferenciais'],
  ['Perguntas frequentes', '/#faq'],
  ['Contato', '/#contato'],
] as const

test('home has no depoimentos section', async ({ page }) => {
  await page.goto('/')

  const order = await page.locator('#main-content > section').evaluateAll((nodes) =>
    nodes.map((node) => node.id || node.getAttribute('aria-label')),
  )

  expect(order).toEqual([
    'inicio',
    'Destaques',
    'sobre',
    'servicos',
    'diferenciais',
    'faq',
    'contato',
  ])
  await expect(page.locator('#depoimentos')).toHaveCount(0)
  await expect(page.getByRole('heading', { name: /depoimento/i })).toHaveCount(0)
  await expect(page.getByRole('region', { name: /depoimento/i })).toHaveCount(0)
})

test('header uses current logo asset', async ({ page }) => {
  await page.goto('/')

  const logo = page.locator('header a[href="/"] img')
  await expect(logo).toHaveCount(1)
  await expect(logo).toHaveAttribute('src', /logo/)
  await expect(page.locator('header')).not.toContainText(/\bLL\b/)
})

test('photos use existing site assets', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('#inicio img')).toHaveAttribute('src', /layana-hero\.jpg/)
  await expect(page.locator('#sobre img')).toHaveAttribute('src', /layana-office\.png/)
  await expect(page.locator('#diferenciais img')).toHaveAttribute('src', /layana-portrait\.png/)
})

test('saiba mais opens category whatsapp', async ({ page }) => {
  await page.goto('/')

  expect(siteConfig.serviceCategories.length).toBeGreaterThan(0)

  for (const category of siteConfig.serviceCategories) {
    const link = page.getByRole('link', {
      name: `Saiba mais sobre ${category.title}`,
    })
    await expect(link).toHaveAttribute('href', buildWhatsAppUrl(category.message))
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener/)
    expect(category.message.length).toBeGreaterThan(0)
    expect(buildWhatsAppUrl(category.message)).toContain('https://wa.me/554896364634')
    expect(buildWhatsAppUrl(category.message)).toContain(encodeURIComponent(category.message))
  }
})

test('primary ctas open default whatsapp', async ({ page }) => {
  await page.goto('/')

  const entre = page.getByRole('link', { name: 'Entre em contato' })
  await expect(entre).toHaveAttribute('href', DEFAULT_WHATSAPP)
  await expect(entre).toHaveAttribute('target', '_blank')
  await expect(entre).toHaveAttribute('rel', /noopener/)

  const agendar = page.getByRole('link', { name: 'Agendar consulta' })
  expect(await agendar.count()).toBeGreaterThanOrEqual(2)
  for (const link of await agendar.all()) {
    await expect(link).toHaveAttribute('href', DEFAULT_WHATSAPP)
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener/)
  }
})

test('html copy and faq answers render', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText(siteConfig.hero.label, { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(siteConfig.hero.headline)
  await expect(page.getByText(siteConfig.hero.subheadline, { exact: true })).toBeVisible()

  await expect(page.locator('#sobre h2')).toHaveText(siteConfig.about.headline)
  for (const paragraph of siteConfig.about.paragraphs) {
    await expect(page.locator('#sobre').getByText(paragraph, { exact: true })).toBeVisible()
  }

  await expect(page.locator('#diferenciais h2')).toHaveText(
    'Confiança construída com técnica e proximidade',
  )
  await expect(
    page.locator('#diferenciais').getByText(
      'Cada atendimento une conhecimento jurídico, comunicação clara e respeito ao momento vivido.',
      { exact: true },
    ),
  ).toBeVisible()
  expect(siteConfig.trustPoints).toHaveLength(6)
  for (const point of siteConfig.trustPoints) {
    await expect(page.locator('#diferenciais').getByRole('heading', { name: point.title })).toBeVisible()
    await expect(page.locator('#diferenciais').getByText(point.description, { exact: true })).toBeVisible()
  }

  await expect(page.locator('#contato h2')).toHaveText('Precisa de orientação jurídica?')
  await expect(
    page.locator('#contato').getByText(
      'Entre em contato pelo WhatsApp. Retorno em até 24 horas para analisar sua situação e indicar os próximos passos.',
      { exact: true },
    ),
  ).toBeVisible()

  expect(siteConfig.faq.length).toBeGreaterThan(0)
  for (const item of siteConfig.faq) {
    const trigger = page.getByRole('button', { name: item.question, exact: true })
    await trigger.click()
    await expect(page.getByText(item.answer, { exact: true })).toBeVisible()
  }
})

test('footer keeps current address and map', async ({ page }) => {
  await page.goto('/')

  const footer = page.locator('footer')
  await expect(footer).toContainText(siteConfig.address.line1)
  await expect(footer).toContainText(siteConfig.address.line2)
  await expect(footer.locator('iframe')).toHaveAttribute('src', siteConfig.address.mapsEmbedUrl)
  await expect(footer.getByRole('link', { name: /depoimento/i })).toHaveCount(0)
})

test('nav anchors without depoimentos', async ({ page }) => {
  await page.goto('/')

  const nav = page.getByRole('navigation', { name: 'Navegação principal' })
  for (const [label, href] of NAV_ANCHORS) {
    await expect(nav.getByRole('link', { name: label, exact: true })).toHaveAttribute('href', href)
  }
  await expect(nav.getByRole('link', { name: /depoimento/i })).toHaveCount(0)
})

test('mobile menu reaches anchors and whatsapp', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  for (const [label, href] of NAV_ANCHORS) {
    await page.getByRole('button', { name: 'Abrir menu' }).click()
    const dialog = page.getByRole('dialog')
    const link = dialog.getByRole('link', { name: label, exact: true })
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', href)
    await link.click()
    await expect(page).toHaveURL(new RegExp(`${href.replace('/#', '#')}$`))
    await expect(page.locator(href.slice(1))).toBeVisible()
  }

  await page.getByRole('button', { name: 'Abrir menu' }).click()
  const whatsapp = page.getByRole('dialog').getByRole('link', { name: 'Agendar consulta' })
  await expect(whatsapp).toBeVisible()
  await expect(whatsapp).toHaveAttribute('href', DEFAULT_WHATSAPP)
  await expect(whatsapp).toHaveAttribute('target', '_blank')
  await expect(page.getByRole('dialog').getByRole('link', { name: /depoimento/i })).toHaveCount(0)
})
