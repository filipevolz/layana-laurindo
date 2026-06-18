import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
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
      <AboutSection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
