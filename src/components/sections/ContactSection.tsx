import { WhatsAppLink } from '@/components/WhatsAppLink'
import { Badge } from '@/components/ui/badge'
import { siteConfig } from '@/lib/site-config'

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-padding bg-hero"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center card-elevated sm:p-12">
          <div className="flex flex-col items-center space-y-4">
            <Badge className="rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
              Contato
            </Badge>
            <h2
              id="contact-heading"
              className="font-display font-bold text-3xl sm:text-4xl"
            >
              Pronto para dar o primeiro passo?
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Envie uma mensagem pelo WhatsApp e conte brevemente sua situação.
            Retorno com orientação sobre documentos, prazos e próximos passos.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <WhatsAppLink
              message={siteConfig.defaultWhatsAppMessage}
              size="lg"
              className="w-full max-w-sm font-semibold sm:w-auto"
            >
              Falar com Layana no WhatsApp
            </WhatsAppLink>
            <p className="text-sm text-muted-foreground">{siteConfig.city}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
