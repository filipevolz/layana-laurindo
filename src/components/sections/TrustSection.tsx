import { GoldBorderCard } from '@/components/GoldBorderCard'
import { Reveal } from '@/components/Reveal'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Badge } from '@/components/ui/badge'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { responsiveImages } from '@/lib/responsive-images'
import { siteConfig } from '@/lib/site-config'
import { trustIcons } from '@/lib/trust-icons'

export function TrustSection() {
  return (
    <section
      id="diferenciais"
      className="section-padding bg-services text-foreground"
      aria-labelledby="trust-heading"
    >
      <div className="container-narrow">
        <Reveal variant="up">
          <div className="mb-6 flex flex-col items-center space-y-4 text-center">
          <Badge className="rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
            Diferenciais
          </Badge>
          <h2
            id="trust-heading"
            className="text-section-title font-display mx-auto text-brand"
          >
            Confiança construída com técnica e proximidade
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            Cada atendimento combina conhecimento jurídico, comunicação
            transparente e respeito ao momento vivido por você e sua família.
          </p>
        </div>
        </Reveal>

        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          <Reveal variant="left">
            <ResponsiveImage
              {...responsiveImages.portrait}
              alt="Layana Laurindo em ambiente de escritório sofisticado, postura confiante"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-xl object-cover md:max-w-none lg:mx-0"
              loading="lazy"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.trustPoints.map((point, index) => {
              const Icon = trustIcons[point.id]

              return (
                <Reveal key={point.id} variant="up" staggerIndex={index}>
                  <GoldBorderCard animationIndex={index}>
                    <CardHeader className="flex flex-row items-center gap-2">
                      {Icon && (
                        <Icon
                          className="size-6 text-brand"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      )}
                      <CardTitle className="font-sans text-lg text-foreground">
                        {point.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </CardContent>
                  </GoldBorderCard>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
