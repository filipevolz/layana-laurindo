import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Etiqueta, Filete, Moldura } from '@/components/layout/LayoutPrimitives'
import { responsiveImages } from '@/lib/responsive-images'
import { siteConfig } from '@/lib/site-config'

const ABOUT_EMPHASIS = 'respeito à sua história'

function AboutTitle({ headline }: { headline: string }) {
  const index = headline.indexOf(ABOUT_EMPHASIS)

  if (index === -1) {
    return headline
  }

  return (
    <>
      {headline.slice(0, index)}
      <em className="text-dourado">{headline.slice(index)}</em>
    </>
  )
}

export function AboutSection() {
  return (
    <section id="sobre" className="bg-areia" aria-labelledby="about-heading">
      <div className="container-narrow flex flex-wrap items-center gap-10 px-5 py-[72px] sm:gap-[72px] sm:px-8 sm:py-[104px]">
        <div className="min-w-0 flex-[1_1_400px]">
          <Moldura
            direita
            className="max-w-[520px]"
            recorteClassName="aspect-[4/5]"
          >
            <ResponsiveImage
              {...responsiveImages.office}
              alt="Layana Laurindo no escritório"
              loading="lazy"
            />
          </Moldura>
        </div>

        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-[22px]">
          <Etiqueta>Sobre</Etiqueta>
          <h2
            id="about-heading"
            className="font-display text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium text-marrom"
          >
            <AboutTitle headline={siteConfig.about.headline} />
          </h2>
          <Filete />
          <div className="flex flex-col gap-[22px]">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-[1.8] text-texto"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="mt-2 grid grid-cols-1 gap-6 border-t border-[#D8CBB4] pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.22em] text-dourado-escuro uppercase">
                Registro
              </dt>
              <dd className="mt-1.5 font-display text-[22px] font-medium text-marrom">
                {siteConfig.oab}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.22em] text-dourado-escuro uppercase">
                Atuação
              </dt>
              <dd className="mt-1.5 font-display text-[22px] font-medium text-marrom">
                {siteConfig.city}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
