import { GoldBorderShell } from '@/components/GoldBorderCard'
import { Reveal } from '@/components/Reveal'
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
        <Reveal variant="scale">
          <GoldBorderShell animationIndex={0} className="mx-auto max-w-2xl">
            <div className="gold-border-inner bg-card p-6 text-center card-elevated sm:p-8 lg:p-12">
              <div className="flex flex-col items-center space-y-4">
                <Badge className="rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
                  Contato
                </Badge>
                <h2
                  id="contact-heading"
                  className="text-section-title font-display font-bold"
                >
                  Pronto para dar o primeiro passo?
                </h2>
              </div>
              <p className="mt-4 leading-relaxed text-foreground">
                Envie uma mensagem pelo WhatsApp e conte brevemente sua situação.
                Retorno com orientação sobre documentos, prazos e próximos passos.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3">
                <WhatsAppLink
                  message={siteConfig.defaultWhatsAppMessage}
                  size="lg"
                  className="w-full max-w-sm font-semibold sm:w-auto"
                >
                  Falar com Layana
                </WhatsAppLink>
                <p className="text-sm text-muted-foreground">{siteConfig.city}</p>
              </div>
            </div>
          </GoldBorderShell>
        </Reveal>
      </div>
    </section>
  )
}
