import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { HighlightsSection } from '@/components/sections/HighlightsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TrustSection } from '@/components/sections/TrustSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { PageHead } from '@/components/seo/PageHead'
import { siteConfig } from '@/lib/site-config'

export function HomePage() {
  return (
    <>
      <PageHead />
      <JsonLd faq={siteConfig.faq} />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ServicesSection />
      <TrustSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
