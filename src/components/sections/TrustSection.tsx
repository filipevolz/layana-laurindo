import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/site-config'

export function TrustSection() {
  return (
    <section
      id="diferenciais"
      className="section-padding bg-brand-dark text-white"
      aria-labelledby="trust-heading"
    >
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <div className="space-y-6">
            <Badge className="rounded-full bg-white/10 text-white hover:bg-white/15">
              Diferenciais
            </Badge>
            <h2
              id="trust-heading"
              className="font-display text-3xl text-white sm:text-4xl"
            >
              Confiança construída com técnica e proximidade
            </h2>
            <p className="text-white/70 leading-relaxed">
              Cada atendimento combina conhecimento jurídico, comunicação
              transparente e respeito ao momento vivido por você e sua família.
            </p>

            <div className="hidden lg:block">
              <img
                src={siteConfig.images.portrait}
                alt="Layana Laurindo em ambiente de escritório sofisticado, postura confiante"
                className="aspect-[4/5] w-full max-w-sm rounded-xl object-cover"
                width={480}
                height={600}
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.trustPoints.map((point) => (
                <Card
                  key={point.title}
                  className="border-white/10 bg-white/5 text-white backdrop-blur-sm"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="font-display text-lg text-white">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-white/70">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:hidden">
              <img
                src={siteConfig.images.portrait}
                alt="Layana Laurindo em ambiente de escritório sofisticado, postura confiante"
                className="aspect-[4/5] w-full rounded-xl object-cover"
                width={480}
                height={600}
                loading="lazy"
              />
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display mb-4 text-xl text-white">
                Perguntas frequentes
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {siteConfig.faq.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${index}`}
                    className="border-white/15"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-white/90 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
