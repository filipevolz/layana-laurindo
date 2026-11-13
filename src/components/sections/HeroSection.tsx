import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ResponsiveImage } from '@/components/ResponsiveImage'
import { WhatsAppLink } from '@/components/WhatsAppLink'
import {
  Etiqueta,
  Filete,
  layoutBtnClass,
  layoutLinkClass,
  Moldura,
} from '@/components/layout/LayoutPrimitives'
import { responsiveImages } from '@/lib/responsive-images'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const EMPHASIS = 'proteger os seus direitos.'

function HeroTitle({ headline }: { headline: string }) {
  const index = headline.indexOf(EMPHASIS)

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

export function HeroSection() {
  return (
    <section id="inicio" className="bg-creme" aria-labelledby="hero-heading">
      <div className="container-narrow flex flex-wrap items-center gap-10 px-5 pt-10 pb-12 sm:gap-16 sm:px-8 sm:pt-16 sm:pb-[72px]">
        <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-7">
          <Etiqueta>{siteConfig.hero.label}</Etiqueta>
          <h1
            id="hero-heading"
            className="font-display text-[clamp(40px,5.2vw,64px)] leading-[1.05] font-medium text-balance text-marrom"
          >
            <HeroTitle headline={siteConfig.hero.headline} />
          </h1>
          <Filete />
          <p className="max-w-[520px] text-lg leading-[1.7] text-texto">
            {siteConfig.hero.subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-7">
            <WhatsAppLink
              message={siteConfig.defaultWhatsAppMessage}
              placement="hero"
              showIcon={false}
              className={cn(layoutBtnClass.cheio, 'h-auto rounded-none!')}
            >
              Entre em contato
              <ArrowRight className="size-4 text-dourado-claro" aria-hidden="true" />
            </WhatsAppLink>
            <Link
              to={{ pathname: '/', hash: '#servicos' }}
              className={layoutLinkClass}
            >
              Áreas de atuação
            </Link>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_380px] justify-center">
          <Moldura recorteClassName="aspect-[416/625]">
            <ResponsiveImage
              {...responsiveImages.hero}
              alt="Layana Laurindo, advogada em Florianópolis"
              fetchPriority="high"
            />
          </Moldura>
        </div>
      </div>
    </section>
  )
}
