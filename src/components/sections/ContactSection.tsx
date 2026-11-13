import { WhatsAppLink } from '@/components/WhatsAppLink'
import { Etiqueta, Filete, layoutBtnClass } from '@/components/layout/LayoutPrimitives'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const CONTACT_COPY =
  'Entre em contato pelo WhatsApp. Retorno em até 24 horas para analisar sua situação e indicar os próximos passos.'

export function ContactSection() {
  return (
    <section id="contato" className="bg-marrom text-center text-creme" aria-labelledby="contact-heading">
      <div className="container-narrow flex flex-col items-center gap-[22px] px-5 py-[72px] sm:px-8 sm:py-[104px]">
        <Etiqueta className="text-dourado-claro">Contato</Etiqueta>
        <h2
          id="contact-heading"
          className="font-display text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium text-creme"
        >
          Precisa de <em className="text-dourado-luz">orientação jurídica?</em>
        </h2>
        <Filete className="bg-dourado-claro" />
        <p className="max-w-[560px] text-[17px] leading-[1.7] text-texto-claro">{CONTACT_COPY}</p>
        <WhatsAppLink
          message={siteConfig.defaultWhatsAppMessage}
          placement="contact"
          showIcon={false}
          className={cn(layoutBtnClass.claro, 'h-auto rounded-none!')}
        >
          Agendar consulta
        </WhatsAppLink>
      </div>
    </section>
  )
}
