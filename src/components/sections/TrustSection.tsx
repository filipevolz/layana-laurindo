import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/site-config'
import { trustIcons } from '@/lib/trust-icons'

export function TrustSection() {
  return (
    <section
      id="diferenciais"
      className="section-padding bg-services text-foreground"
      aria-labelledby="trust-heading"
    >
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-center space-y-4 text-center">
          <Badge className="rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
            Diferenciais
          </Badge>
          <h2
            id="trust-heading"
            className="font-display mx-auto max-w-2xl text-3xl text-brand sm:text-4xl"
          >
            Confiança construída com técnica e proximidade
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
            Cada atendimento combina conhecimento jurídico, comunicação
            transparente e respeito ao momento vivido por você e sua família.
          </p>
        </div>

        <div className="grid items-center gap-6 lg:gap-0 lg:grid-cols-[1fr_1.1fr]">
          <img
            src={siteConfig.images.portrait}
            alt="Layana Laurindo em ambiente de escritório sofisticado, postura confiante"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-xl object-cover lg:mx-0"
            width={480}
            height={600}
            loading="lazy"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.trustPoints.map((point) => {
              const Icon = trustIcons[point.id]

              return (
                <Card
                  key={point.id}
                  className="border-brand/15 shadow-sm transition-shadow hover:shadow-md"
                >
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
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
