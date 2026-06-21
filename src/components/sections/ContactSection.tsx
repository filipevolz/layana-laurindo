import { Reveal } from '@/components/Reveal'
import { WhatsAppLink } from '@/components/WhatsAppLink'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/lib/site-config'

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-padding bg-primary text-primary-foreground"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow text-center">
        <Reveal variant="up">
          <div className="mb-4 flex flex-col items-center space-y-4">
            <Badge className="rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
              Contato
            </Badge>
            <h2
              id="contact-heading"
              className="text-section-title font-display font-bold text-brand"
            >
              Precisa de orientação jurídica?
            </h2>
          </div>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/85">
            Entre em contato pelo WhatsApp. Retorno em até 24 horas para
            analisar sua situação e indicar os próximos passos.
          </p>
          <WhatsAppLink
            message={siteConfig.defaultWhatsAppMessage}
            variant="secondary"
            className="font-semibold"
          >
            Agendar consulta
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  )
}
