import { Reveal } from '@/components/Reveal'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { responsiveImages } from '@/lib/responsive-images'
import { siteConfig } from '@/lib/site-config'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="section-padding bg-ceramic"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <ResponsiveImage
              {...responsiveImages.office}
              alt="Layana Laurindo no escritório, camisa branca, ambiente profissional"
              className="aspect-[4/5] w-full rounded-xl object-cover card-elevated"
              loading="lazy"
            />
          </Reveal>

          <Reveal variant="up" delay={100} className="space-y-6">
            <Badge className="rounded-full font-bold bg-brand/10 text-brand hover:bg-brand/15">
              Sobre
            </Badge>
            <h2
              id="about-heading"
              className="text-section-title font-display leading-tight"
            >
              {siteConfig.about.headline}
            </h2>

            <div className="space-y-4 text-foreground">
              {siteConfig.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Separator className="bg-border" />

            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-brand uppercase">
                  Registro
                </dt>
                <dd className="mt-1 text-sm font-medium">{siteConfig.oab}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-brand uppercase">
                  Atuação
                </dt>
                <dd className="mt-1 text-sm font-medium">{siteConfig.city}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
