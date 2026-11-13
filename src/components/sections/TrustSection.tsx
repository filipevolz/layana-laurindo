import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Etiqueta, Filete, Moldura } from '@/components/layout/LayoutPrimitives'
import { responsiveImages } from '@/lib/responsive-images'
import { siteConfig } from '@/lib/site-config'

const ROMAN = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.'] as const
const TRUST_EMPHASIS = 'proximidade'
const TRUST_HEADLINE = 'Confiança construída com técnica e proximidade'
const TRUST_INTRO =
  'Cada atendimento une conhecimento jurídico, comunicação clara e respeito ao momento vivido.'

function TrustTitle({ headline }: { headline: string }) {
  const index = headline.indexOf(TRUST_EMPHASIS)

  if (index === -1) {
    return headline
  }

  return (
    <>
      {headline.slice(0, index)}
      <em className="text-dourado-luz">{headline.slice(index)}</em>
    </>
  )
}

export function TrustSection() {
  return (
    <section id="diferenciais" className="bg-marrom text-creme" aria-labelledby="trust-heading">
      <div className="container-narrow px-5 py-[72px] sm:px-8 sm:py-[104px]">
        <div className="flex flex-col gap-[18px]">
          <Etiqueta className="text-dourado-claro">Diferenciais</Etiqueta>
          <h2
            id="trust-heading"
            className="font-display text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium text-creme"
          >
            <TrustTitle headline={TRUST_HEADLINE} />
          </h2>
          <Filete className="bg-dourado-claro" />
          <p className="max-w-[640px] text-[17px] leading-[1.7] text-texto-claro">{TRUST_INTRO}</p>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-10 sm:gap-16">
          <div className="min-w-0 flex-[1_1_360px]">
            <Moldura
              className="[&>span]:border-dourado!"
              recorteClassName="aspect-[4/5] shadow-none"
            >
              <ResponsiveImage
                {...responsiveImages.portrait}
                alt="Layana Laurindo sentada em poltrona no escritório"
                loading="lazy"
              />
            </Moldura>
          </div>

          <div className="grid min-w-0 flex-[1.4_1_520px] grid-cols-1 gap-9 min-[760px]:grid-cols-2 min-[760px]:gap-x-10">
            {siteConfig.trustPoints.map((point, index) => (
              <div
                key={point.id}
                className="flex flex-col gap-2.5 border-t border-linha-escura pt-5"
              >
                <span className="font-display text-lg text-dourado-claro italic">
                  {ROMAN[index] ?? `${index + 1}.`}
                </span>
                <h3 className="font-display text-[26px] font-medium text-creme">{point.title}</h3>
                <p className="text-[15px] leading-[1.7] font-light text-texto-claro">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
