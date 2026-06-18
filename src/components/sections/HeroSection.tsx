import { ArrowRight, MessageCircle } from 'lucide-react'

import { WhatsAppLink } from '@/components/WhatsAppLink'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-viewport relative flex flex-col overflow-hidden bg-hero text-foreground"
      aria-labelledby="hero-heading"
    >
      <div className="container-narrow flex min-h-0 flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-0 flex-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="z-10 flex flex-col justify-center space-y-6 py-4 lg:py-0">
            <Badge className="fade-in-up w-fit rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
              {siteConfig.hero.label}
            </Badge>

            <div className="fade-in-up-delay-1 space-y-4">
              <h1
                id="hero-heading"
                className="max-w-xl font-display text-4xl leading-[1.1] font-bold tracking-tight text-brand text-balance sm:text-5xl lg:text-[3.25rem]"
              >
                {siteConfig.hero.headline}
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-foreground/75 sm:text-lg">
                {siteConfig.hero.subheadline}
              </p>
            </div>

            <div className="fade-in-up-delay-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppLink
                message={siteConfig.defaultWhatsAppMessage}
                showIcon={false}
                className="h-12 border-0 bg-primary px-6 text-sm font-bold tracking-wide text-primary-foreground uppercase hover:bg-primary/90"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar com uma advogada
              </WhatsAppLink>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-press h-12 border-brand/35 bg-transparent px-6 text-sm font-semibold text-brand uppercase hover:bg-brand/5 hover:text-brand"
              >
                <a href="#servicos" className="inline-flex items-center gap-2">
                  Ver áreas de atuação
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex min-h-0 items-center justify-center py-2 lg:py-0">
            <img
              src={siteConfig.images.hero}
              alt="Layana Laurindo, advogada, retrato profissional com fundo de madeira"
              className="hero-portrait rounded-lg"
              width={408}
              height={612}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="shrink-0 px-4 pb-5 sm:px-6 sm:pb-6 lg:px-8">
        <div className="container-narrow">
          <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {siteConfig.hero.stats.map((stat) => (
              <Card
                key={stat.label}
                className="border-brand/15 bg-card/95 shadow-sm ring-brand/10 backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center justify-center py-5 text-center sm:py-6">
                  <dt className="hero-stat-value text-brand">{stat.value}</dt>
                  <dd className="hero-stat-label mt-2 text-muted-foreground">
                    {stat.label}
                  </dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
