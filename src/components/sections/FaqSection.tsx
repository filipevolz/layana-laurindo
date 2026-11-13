import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Etiqueta, Filete } from '@/components/layout/LayoutPrimitives'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const FAQ_EMPHASIS = 'frequentes'

function FaqTitle() {
  const title = 'Perguntas frequentes'
  const index = title.indexOf(FAQ_EMPHASIS)

  return (
    <>
      {title.slice(0, index)}
      <em className="text-dourado">{title.slice(index)}</em>
    </>
  )
}

export function FaqSection() {
  const midpoint = Math.ceil(siteConfig.faq.length / 2)
  const faqColumns = [siteConfig.faq.slice(0, midpoint), siteConfig.faq.slice(midpoint)]

  return (
    <section id="faq" className="bg-creme" aria-labelledby="faq-heading">
      <div className="container-narrow px-5 py-[72px] sm:px-8 sm:py-[104px]">
        <div className="mb-14 flex flex-col items-center gap-[18px] text-center">
          <Etiqueta>FAQ</Etiqueta>
          <h2
            id="faq-heading"
            className="font-display text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium text-marrom"
          >
            <FaqTitle />
          </h2>
          <Filete />
        </div>

        <div className="grid grid-cols-1 min-[760px]:grid-cols-2 min-[760px]:gap-x-14">
          {faqColumns.map((column, columnIndex) => (
            <Accordion key={column[0]?.question ?? columnIndex} type="single" collapsible>
              {column.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${columnIndex}-${index}`}
                  className={cn(
                    'border-t border-linha not-last:border-b-0 last:border-b',
                    columnIndex === 0 && 'max-[760px]:last:border-b-0',
                    columnIndex === 1 && 'max-[760px]:first:border-t-0',
                  )}
                >
                  <AccordionTrigger className="items-center rounded-none py-[22px] text-base font-medium text-marrom hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="font-display text-[26px] leading-none text-dourado group-aria-expanded/accordion-trigger:hidden"
                    >
                      +
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden font-display text-[26px] leading-none text-dourado group-aria-expanded/accordion-trigger:inline"
                    >
                      −
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-0 pb-[22px] text-[15px] leading-[1.7] text-texto">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
