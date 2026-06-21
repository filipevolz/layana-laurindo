import { ArrowRight, MessageCircle } from 'lucide-react'

import { GoldBorderCard } from '@/components/GoldBorderCard'
import { Reveal } from '@/components/Reveal'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { WhatsAppLink } from '@/components/WhatsAppLink'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { responsiveImages } from '@/lib/responsive-images'
import { siteConfig } from '@/lib/site-config'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-viewport relative flex flex-col gap-8 overflow-hidden bg-hero text-foreground"
      aria-labelledby="hero-heading"
    >
      <div className="flex flex-1 items-center justify-between container-narrow pt-6 flex-col md:flex-row px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="z-10 flex flex-col justify-center space-y-6 py-4 md:py-0">
          <Badge className="fade-in-up w-fit rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
            {siteConfig.hero.label}
          </Badge>

          <div className="fade-in-up-delay-1 space-y-4">
            <h1
              id="hero-heading"
              className="text-hero-title max-w-xl font-display leading-[1.1] font-bold tracking-tight text-brand text-balance"
            >
              {siteConfig.hero.headline}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-foreground sm:text-lg">
              {siteConfig.hero.subheadline}
            </p>
          </div>

          <div className="fade-in-up-delay-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink
              message={siteConfig.defaultWhatsAppMessage}
              showIcon={false}
              size="lg"
              className="h-12 w-full px-6 text-sm font-bold tracking-wide uppercase sm:w-auto"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar com a Layana
            </WhatsAppLink>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-press h-12 w-full border-primary/30 bg-transparent px-6 text-sm font-semibold text-primary uppercase hover:bg-primary/5 hover:text-primary sm:w-auto"
            >
              <a href="#servicos" className="inline-flex items-center justify-center gap-2">
                Ver áreas de atuação
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 items-center justify-center py-2 md:items-stretch md:py-0">
          <Reveal variant="right" delay={200} immediate className="flex h-full w-full justify-end">
            <ResponsiveImage
              {...responsiveImages.hero}
              alt="Layana Laurindo, advogada, retrato profissional com fundo de madeira"
              className="hero-portrait rounded-lg"
              fetchPriority="high"
            />
          </Reveal>
        </div>
      </div>

      <div className="shrink-0 px-4 pb-5 sm:px-6 sm:pb-6 lg:px-8">
        <div className="container-narrow">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
            {siteConfig.hero.stats.map((stat, index) => (
              <Reveal key={stat.label} variant="up" staggerIndex={index} immediate className="h-full">
                <GoldBorderCard
                  animationIndex={index}
                  className="bg-card/95 backdrop-blur-sm"
                >
                  <CardContent className="flex flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:py-6">
                    <dl>
                      <dt className="hero-stat-value text-brand">{stat.value}</dt>
                      <dd className="hero-stat-label mt-1.5 text-xs text-muted-foreground sm:mt-2 sm:text-[inherit]">
                        {stat.label}
                      </dd>
                    </dl>
                  </CardContent>
                </GoldBorderCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
