import { ArrowRight } from 'lucide-react'

import {
  featuredServiceIds,
  serviceIcons,
} from '@/lib/service-icons'
import { buildWhatsAppUrl, siteConfig } from '@/lib/site-config'

export function ServicesSection() {
  const featuredServices = featuredServiceIds
    .map((id) => siteConfig.services.find((s) => s.id === id))
    .filter((s): s is (typeof siteConfig.services)[number] => Boolean(s))

  return (
    <section
      id="servicos"
      className="bg-services py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="container-narrow mb-10 space-y-3 px-4 sm:mb-12 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl"
        >
          {siteConfig.servicesSection.title}
        </h2>
        <p className="max-w-2xl text-[#64748b] leading-relaxed">
          {siteConfig.servicesSection.description}
        </p>
      </div>

      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 border-t border-l border-[#e2e8f0] sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const Icon = serviceIcons[service.id]

            return (
              <article
                key={service.id}
                className="group flex min-h-[220px] flex-col border-r border-b border-[#e2e8f0] bg-[#f9fafb] p-8 transition-colors hover:bg-white"
              >
                {Icon && (
                  <Icon
                    className="mb-5 size-6 text-brand"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                )}
                <h3 className="text-lg font-bold text-[#0f172a]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748b]">
                  {service.description}
                </p>
                <a
                  href={buildWhatsAppUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-accent"
                >
                  Saiba mais
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
