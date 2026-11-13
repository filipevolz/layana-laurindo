import { siteConfig } from '@/lib/site-config'

export function HighlightsSection() {
  return (
    <section
      className="border-y border-linha bg-creme-claro"
      aria-label="Destaques"
    >
      <div className="container-narrow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.hero.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2.5 border-b border-linha px-7 py-10 last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <strong className="font-display text-[44px] leading-none font-medium text-dourado">
              {stat.value}
            </strong>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-texto uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
