import { ArrowRight } from 'lucide-react'

import { GoldBorderCard } from '@/components/GoldBorderCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Reveal } from '@/components/Reveal'
import { WhatsAppLink } from '@/components/WhatsAppLink'
import { CardContent } from '@/components/ui/card'
import { responsiveImages } from '@/lib/responsive-images'
import { siteConfig } from '@/lib/site-config'

import { Badge } from '../ui/badge'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-viewport relative flex min-h-0 flex-col gap-8 overflow-hidden px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="container-narrow grid min-h-0 flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative z-10 flex flex-col items-start justify-center gap-6">
          <Badge>{siteConfig.hero.label}</Badge>
          <h1 id="hero-heading" className="text-7xl text-primary text-balance">
            Acolhimento e orientação jurídica para{' '}
            <span className="text-brand">proteger</span> os seus direitos.
          </h1>
          <p className="max-w-lg text-xl">{siteConfig.hero.subheadline}</p>
          <WhatsAppLink
            message={siteConfig.defaultWhatsAppMessage}
            placement="hero"
            showIcon={false}
            className="rounded-full px-16 py-6"
          >
            Entre em contato
            <ArrowRight className="size-4" aria-hidden="true" />
          </WhatsAppLink>
        </div>

        <div className="relative z-10 flex items-center justify-center lg:justify-end">
          <ResponsiveImage
            {...responsiveImages.hero}
            alt="Layana Laurindo, advogada, retrato profissional"
            className="hero-portrait rounded-lg"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="container-narrow shrink-0 pb-5 sm:pb-6">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
          {siteConfig.hero.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              variant="up"
              staggerIndex={index}
              immediate
              className="h-full"
            >
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
    </section>
  )
}
