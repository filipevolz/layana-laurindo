import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center space-y-4 text-center sm:mb-10">
          <Badge className="rounded-full bg-brand/10 text-brand hover:bg-brand/15">
            FAQ
          </Badge>
          <h2
            id="faq-heading"
            className="font-display font-bold mx-auto max-w-2xl text-3xl text-brand sm:text-4xl"
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {faqColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="rounded-xl border border-brand/15 bg-card p-6 shadow-sm"
            >
              <Accordion type="single" collapsible className="w-full">
                {column.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${columnIndex}-${index}`}
                    className="border-brand/15"
                  >
                    <AccordionTrigger className="font-sans text-left text-foreground hover:text-foreground/90 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
