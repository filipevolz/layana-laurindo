import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { GoldBorderShell } from '@/components/GoldBorderCard'
import { Reveal } from '@/components/Reveal'
import { WhatsAppLink } from '@/components/WhatsAppLink'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageHead } from '@/components/seo/PageHead'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import {
  getRelatedPages,
  type LandingPage,
} from '@/lib/landing-pages'
import { siteConfig } from '@/lib/site-config'

const FIRST_CONTACT_STEPS = [
  'Entre em contato pelo WhatsApp e descreva brevemente sua situação.',
  'Receba orientação sobre documentos necessários e possíveis caminhos jurídicos.',
  'Agende atendimento presencial no escritório no Canto, Florianópolis, ou por videoconferência.',
  'Acompanhe seu caso com comunicação clara em cada etapa do processo.',
] as const

interface LandingPageViewProps {
  page: LandingPage
}

export function LandingPageView({ page }: LandingPageViewProps) {
  const faqItems = page.faqIndices.map((index) => siteConfig.faq[index])
  const relatedPages = getRelatedPages(page)

  const breadcrumbs = [
    { name: 'Início', path: '/' },
    {
      name: page.type === 'area' ? 'Áreas de atuação' : 'Serviços',
      path: '/#servicos',
    },
    { name: page.breadcrumbLabel, path: page.path },
  ]

  return (
    <>
      <PageHead
        title={page.title}
        description={page.metaDescription}
        path={page.path}
      />
      <JsonLd faq={faqItems} breadcrumbs={breadcrumbs} />

      <article className="section-padding bg-services pt-28 sm:pt-32">
        <div className="container-narrow">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.path} className="flex items-center gap-1.5">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-foreground">{crumb.name}</span>
                  ) : (
                    <Link
                      to={
                        crumb.path.includes('#')
                          ? { pathname: '/', hash: crumb.path.replace('/', '') }
                          : crumb.path
                      }
                      className="transition-colors hover:text-brand"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <Reveal variant="up">
            <Badge className="mb-4 rounded-full bg-brand/10 text-brand hover:bg-brand/15">
              {siteConfig.oab} · Florianópolis
            </Badge>
            <h1 className="text-section-title font-display max-w-3xl font-bold text-brand">
              {page.h1}
            </h1>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
              {page.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <WhatsAppLink
              message={page.whatsAppMessage}
              className="mt-8 font-semibold"
            >
              Falar pelo WhatsApp
            </WhatsAppLink>
          </Reveal>
        </div>
      </article>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal variant="up">
            <h2 className="text-section-title font-display mb-6 font-bold text-brand">
              {page.servicesHeading}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {page.services.map((service) => (
                <div
                  key={service}
                  className="rounded-lg border border-brand/15 bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  {service}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {page.comparisonTable && (
        <section className="section-padding bg-services">
          <div className="container-narrow">
            <Reveal variant="up">
              <h2 className="text-section-title font-display mb-6 font-bold text-brand">
                {page.comparisonTable.heading}
              </h2>
              <div className="overflow-x-auto rounded-xl border border-brand/15">
                <table className="w-full min-w-[32rem] text-left text-sm">
                  <thead>
                    <tr className="border-b border-brand/15 bg-card">
                      {page.comparisonTable.columns.map((col) => (
                        <th
                          key={col}
                          className="px-4 py-3 font-semibold text-foreground"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonTable.rows.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-b border-brand/10 last:border-0"
                      >
                        {row.map((cell) => (
                          <td
                            key={cell}
                            className="px-4 py-3 text-muted-foreground"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal variant="up">
            <h2 className="text-section-title font-display mb-6 font-bold text-brand">
              Como funciona o primeiro atendimento?
            </h2>
            <ol className="space-y-4">
              {FIRST_CONTACT_STEPS.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-lg border border-brand/15 bg-card p-4"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-services">
        <div className="container-narrow">
          <Reveal variant="up">
            <h2 className="text-section-title font-display mb-6 font-bold text-brand">
              {page.whyHeading}
            </h2>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
              {page.whyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteConfig.hero.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-lg border border-brand/15 bg-card p-4 text-center"
                >
                  <span className="block text-2xl font-bold text-brand">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        className="section-padding bg-background"
        aria-labelledby={`faq-${page.slug}`}
      >
        <div className="container-narrow">
          <Reveal variant="up">
            <h2
              id={`faq-${page.slug}`}
              className="text-section-title font-display mb-8 font-bold text-brand"
            >
              Perguntas frequentes sobre {page.breadcrumbLabel.toLowerCase()}
            </h2>
            <GoldBorderShell animationIndex={0}>
              <div className="gold-border-inner bg-card p-4 shadow-sm sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem
                      key={item.question}
                      value={`faq-${index}`}
                      className="border-brand/15"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-brand">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </GoldBorderShell>
          </Reveal>
        </div>
      </section>

      {relatedPages.length > 0 && (
        <section className="section-padding bg-services">
          <div className="container-narrow">
            <Reveal variant="up">
              <h2 className="text-section-title font-display mb-6 font-bold text-brand">
                Páginas relacionadas
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {relatedPages.map((related) => (
                  <li key={related.path}>
                    <Link
                      to={related.path}
                      className="group flex items-center justify-between rounded-lg border border-brand/15 bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/30 hover:text-brand"
                    >
                      {related.h1}
                      <ArrowRight
                        className="size-4 shrink-0 text-brand opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section-padding bg-brand text-brand-foreground">
        <div className="container-narrow text-center">
          <Reveal variant="up">
            <h2 className="text-section-title font-display mb-4 font-bold">
              Precisa de orientação jurídica?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-brand-foreground/85">
              Entre em contato pelo WhatsApp. Retorno em até 24 horas para
              analisar sua situação e indicar os próximos passos.
            </p>
            <WhatsAppLink
              message={page.whatsAppMessage}
              variant="secondary"
              className="font-semibold"
            >
              Agendar consulta
            </WhatsAppLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
