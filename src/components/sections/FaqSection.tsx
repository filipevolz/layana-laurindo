import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { GoldBorderShell } from '@/components/GoldBorderCard'
import { Reveal } from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/lib/site-config'

export function FaqSection() {
  const midpoint = Math.ceil(siteConfig.faq.length / 2)
  const faqColumns = [
    siteConfig.faq.slice(0, midpoint),
    siteConfig.faq.slice(midpoint),
  ]

  return (
    <section
      id="faq"
      className="section-padding bg-services text-foreground"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow">
        <Reveal variant="up">
          <div className="mb-8 flex flex-col items-center space-y-4 text-center sm:mb-10">
          <Badge className="rounded-full bg-brand/10 text-brand hover:bg-brand/15">
            FAQ
          </Badge>
          <h2
            id="faq-heading"
            className="text-section-title font-display font-bold mx-auto max-w-2xl text-brand"
          >
            Perguntas frequentes
          </h2>
        </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {faqColumns.map((column, columnIndex) => (
            <Reveal key={columnIndex} variant="up" staggerIndex={columnIndex}>
              <GoldBorderShell animationIndex={columnIndex} className="h-full">
                <div className="gold-border-inner h-full bg-card p-4 shadow-sm sm:p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {column.map((item, index) => (
                      <AccordionItem
                        key={item.question}
                        value={`faq-${columnIndex}-${index}`}
                        className="border-brand/15"
                      >
                        <AccordionTrigger className="min-h-11 font-sans text-left text-sm text-foreground hover:text-foreground/90 hover:no-underline sm:text-base">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </GoldBorderShell>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
