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

/** Binding HTML filled copy (not read from siteConfig, so drift fails). */
const HTML_COPY = {
  heroLabel: 'Direito Civil · Família · Sucessões',
  heroHeadline:
    'Acolhimento e orientação jurídica para proteger os seus direitos.',
  heroSubheadline:
    'Advogada com atuação em Direito Civil, Direito de Família e Sucessões, oferecendo atendimento personalizado, presencial em Florianópolis e online para todo o Brasil.',
  aboutHeadline: 'Advocacia com proximidade, técnica e respeito à sua história',
  aboutParagraphs: [
    'Sou advogada com atuação nas áreas de Direito Civil, Direito de Família e Direito das Sucessões, oferecendo assessoria jurídica em situações sensíveis e decisões importantes do cotidiano, como rescisões contratuais, cobranças, conflitos civis, divórcios, definição de guarda, pensão alimentícia, inventários e curatela, com linguagem acessível e estratégia jurídica.',
    'Acredito em um atendimento próximo, que escuta antes de orientar. Cada caso é único e merece análise cuidadosa, com transparência sobre caminhos, prazos e expectativas realistas.',
    'Meu compromisso é oferecer segurança jurídica em momentos de incerteza, buscando soluções que preservem direitos e, quando possível, reduzam desgastes desnecessários.',
  ],
  trust: [
    {
      title: 'Atendimento humanizado',
      description:
        'Conversa clara, sem juridiquês desnecessário. Você entende o que está acontecendo em cada etapa.',
    },
    {
      title: 'Estratégia personalizada',
      description:
        'Cada caso recebe análise individualizada, com foco na melhor solução para o seu contexto.',
    },
    {
      title: 'Agilidade no contato',
      description:
        'Primeiro contato rápido pelo WhatsApp para entender sua demanda e orientar os próximos passos.',
    },
    {
      title: 'Ética e confidencialidade',
      description:
        'Sigilo profissional e conduta alinhada às normas da OAB em todas as interações.',
    },
    {
      title: 'Experiência consolidada',
      description:
        'Mais de 10 anos de experiência jurídica e centenas de casos em Direito Civil, Família e Sucessões, com análise técnica e histórico de resultados.',
    },
    {
      title: 'Presencial e online',
      description:
        'Atendimento presencial em Florianópolis ou por videoconferência para clientes em Santa Catarina e em todo o Brasil.',
    },
  ],
  faqFirst: {
    question: 'Como funciona o primeiro atendimento?',
    answer:
      'Você entra em contato pelo WhatsApp, descreve brevemente sua situação e recebe as informações sobre como funciona o atendimento e como agendar a consulta.',
  },
  faqLast: {
    question: 'Atende ações de indenização por danos morais e materiais?',
    answer:
      'Sim. Atuo em casos de responsabilidade civil, como acidentes de trânsito, erro na prestação de serviços, produtos com defeito e outras situações que causem prejuízo físico, moral ou patrimonial. Cada caso é analisado para definir a melhor estratégia de reparação.',
  },
} as const

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
  await expect(logo).toHaveAttribute('src', /\/assets\/logo-[\w-]+\.png/)
  await expect(logo).toHaveAttribute('alt', 'Layana Laurindo')
  await expect(page.locator('header')).not.toContainText(/\bLL\b/)
  await expect(page.locator('header .marca__monograma')).toHaveCount(0)

  const sobre = page
    .getByRole('navigation', { name: 'Navegação principal' })
    .getByRole('link', { name: 'Sobre', exact: true })
  await expect(sobre).toHaveAttribute('aria-current', 'page')
})

test('photos use existing site assets', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('#inicio img')).toHaveAttribute('src', /layana-hero\.jpg/)
  await expect(page.locator('#sobre img')).toHaveAttribute('src', /layana-office\.png/)
  await expect(page.locator('#diferenciais img')).toHaveAttribute(
    'src',
    /layana-portrait\.png/,
  )
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
    expect(buildWhatsAppUrl(category.message)).toContain(
      encodeURIComponent(category.message),
    )
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

  await expect(page.getByText(HTML_COPY.heroLabel, { exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(HTML_COPY.heroHeadline)
  await expect(
    page.getByText(HTML_COPY.heroSubheadline, { exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('link', { name: 'Áreas de atuação', exact: true }),
  ).toHaveAttribute('href', '/#servicos')

  const destaques = page.getByLabel('Destaques')
  for (const stat of [
    { value: '+10', label: 'Anos de experiência' },
    { value: '+500', label: 'Casos atendidos' },
    { value: '3', label: 'Áreas de atuação' },
    { value: '24h', label: 'Retorno via WhatsApp' },
  ]) {
    await expect(destaques.getByText(stat.value, { exact: true })).toBeVisible()
    await expect(destaques.getByText(stat.label, { exact: true })).toBeVisible()
  }

  await expect(page.locator('#sobre h2')).toHaveText(HTML_COPY.aboutHeadline)
  for (const paragraph of HTML_COPY.aboutParagraphs) {
    await expect(page.locator('#sobre').getByText(paragraph, { exact: true })).toBeVisible()
  }
  await expect(page.locator('#sobre')).toContainText('Florianópolis/SC')

  await expect(page.locator('#servicos')).toContainText('Principal área')
  await expect(page.locator('#servicos')).toContainText('I.')
  await expect(page.locator('#servicos')).toContainText('II.')
  await expect(page.locator('#servicos')).toContainText('III.')

  await expect(page.locator('#diferenciais h2')).toHaveText(
    'Confiança construída com técnica e proximidade',
  )
  await expect(
    page.locator('#diferenciais').getByText(
      'Cada atendimento une conhecimento jurídico, comunicação clara e respeito ao momento vivido.',
      { exact: true },
    ),
  ).toBeVisible()
  expect(HTML_COPY.trust).toHaveLength(6)
  const numerals = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.'] as const
  for (const [index, point] of HTML_COPY.trust.entries()) {
    await expect(
      page.locator('#diferenciais').getByRole('heading', { name: point.title }),
    ).toBeVisible()
    await expect(
      page.locator('#diferenciais').getByText(point.description, { exact: true }),
    ).toBeVisible()
    await expect(page.locator('#diferenciais')).toContainText(numerals[index])
  }

  await expect(page.locator('#contato h2')).toHaveText('Precisa de orientação jurídica?')
  await expect(
    page.locator('#contato').getByText(
      'Entre em contato pelo WhatsApp. Retorno em até 24 horas para analisar sua situação e indicar os próximos passos.',
      { exact: true },
    ),
  ).toBeVisible()

  expect(siteConfig.faq).toHaveLength(14)
  await expect(
    page.getByRole('button', { name: HTML_COPY.faqFirst.question, exact: true }),
  ).toBeVisible()
  await page
    .getByRole('button', { name: HTML_COPY.faqFirst.question, exact: true })
    .click()
  await expect(page.getByText(HTML_COPY.faqFirst.answer, { exact: true })).toBeVisible()
  await page
    .getByRole('button', { name: HTML_COPY.faqLast.question, exact: true })
    .click()
  await expect(page.getByText(HTML_COPY.faqLast.answer, { exact: true })).toBeVisible()
})

test('footer keeps current address and map', async ({ page }) => {
  await page.goto('/')

  const footer = page.locator('footer')
  await expect(footer).toContainText(siteConfig.address.line1)
  await expect(footer).toContainText(siteConfig.address.line2)
  await expect(footer.locator('iframe')).toHaveAttribute(
    'src',
    siteConfig.address.mapsEmbedUrl,
  )
  await expect(footer.getByRole('link', { name: /depoimento/i })).toHaveCount(0)
})

test('nav anchors without depoimentos', async ({ page }) => {
  await page.goto('/')

  const nav = page.getByRole('navigation', { name: 'Navegação principal' })
  for (const [label, href] of NAV_ANCHORS) {
    await expect(nav.getByRole('link', { name: label, exact: true })).toHaveAttribute(
      'href',
      href,
    )
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
  await expect(
    page.getByRole('dialog').getByRole('link', { name: /depoimento/i }),
  ).toHaveCount(0)
})

test('depoimentos hash and nav breakpoint hold', async ({ page }) => {
  page.on('pageerror', (error) => {
    throw error
  })
  await page.goto('/#depoimentos')
  await expect(page.locator('#depoimentos')).toHaveCount(0)
  await expect(page.locator('#inicio')).toBeVisible()

  await page.setViewportSize({ width: 1023, height: 800 })
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeVisible()
  await expect(
    page.getByRole('navigation', { name: 'Navegação principal' }),
  ).toBeHidden()

  await page.setViewportSize({ width: 1024, height: 800 })
  await expect(
    page.getByRole('navigation', { name: 'Navegação principal' }),
  ).toBeVisible()
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeHidden()
})
