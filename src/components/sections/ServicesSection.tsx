import { OpensInNewTabHint } from '@/components/a11y/OpensInNewTabHint'
import { Etiqueta, Filete, layoutLinkClass } from '@/components/layout/LayoutPrimitives'
import { trackWhatsAppClick } from '@/lib/analytics'
import {
  buildWhatsAppUrl,
  siteConfig,
  type ServiceCategory,
} from '@/lib/site-config'
import { cn } from '@/lib/utils'

const ROMAN = ['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.'] as const
const SERVICES_EMPHASIS = 'atuação'

function ServicesTitle({ title }: { title: string }) {
  const index = title.indexOf(SERVICES_EMPHASIS)

  if (index === -1) {
    return title
  }

  return (
    <>
      {title.slice(0, index)}
      <em className="text-dourado">{title.slice(index)}</em>
    </>
  )
}

function AreaList({ items }: { items: readonly string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-[15px] leading-[1.5] text-texto before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2 before:bg-dourado"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function AreaBody({ category }: { category: ServiceCategory }) {
  if (category.subcategories) {
    return category.subcategories.map((subcategory) => (
      <div key={subcategory.title}>
        <h4 className="mb-3 font-sans text-xs font-semibold tracking-[0.2em] text-marrom uppercase">
          {subcategory.title}
        </h4>
        <AreaList items={subcategory.items} />
      </div>
    ))
  }

  if (!category.items) {
    return null
  }

  const midpoint = Math.ceil(category.items.length / 2)
  const columns = [category.items.slice(0, midpoint), category.items.slice(midpoint)].filter(
    (column) => column.length > 0,
  )

  return columns.map((column) => (
    <AreaList key={column[0]} items={column} />
  ))
}

function ServiceArea({
  category,
  index,
}: {
  category: ServiceCategory
  index: number
}) {
  const numeral = ROMAN[index] ?? `${index + 1}.`

  return (
    <article className="grid grid-cols-1 gap-7 border-t border-linha py-12 last:border-b min-[900px]:grid-cols-[minmax(220px,320px)_1fr] min-[900px]:gap-12">
      <div className="flex flex-col gap-3">
        <span className="font-display text-xl text-dourado italic">{numeral}</span>
        <h3 className="font-display text-[34px] leading-[1.1] font-medium text-marrom">
          {category.title}
        </h3>
        {category.featuredLabel === 'Principal área' && (
          <span className="self-start border border-dourado-claro px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-dourado-escuro uppercase">
            {category.featuredLabel}
          </span>
        )}
        <p className="text-[15px] leading-[1.7] text-texto">{category.description}</p>
      </div>

      <div className="grid content-start gap-7 min-[520px]:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] min-[520px]:gap-x-10">
        <AreaBody category={category} />
        <a
          href={buildWhatsAppUrl(category.message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Saiba mais sobre ${category.title}`}
          onClick={() => trackWhatsAppClick('services', { serviceId: category.id })}
          className={cn(layoutLinkClass, 'col-span-full justify-self-start')}
        >
          Saiba mais
          <OpensInNewTabHint />
        </a>
      </div>
    </article>
  )
}

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-creme" aria-labelledby="services-heading">
      <div className="container-narrow px-5 py-[72px] sm:px-8 sm:py-[104px]">
        <div className="mb-14 flex flex-col items-center gap-[18px] text-center">
          <Etiqueta>Serviços</Etiqueta>
          <h2
            id="services-heading"
            className="font-display text-[clamp(34px,4vw,48px)] leading-[1.1] font-medium text-marrom"
          >
            <ServicesTitle title={siteConfig.servicesSection.title} />
          </h2>
          <Filete />
          <p className="max-w-[640px] text-[17px] leading-[1.7] text-texto">
            {siteConfig.servicesSection.description}
          </p>
        </div>

        {siteConfig.serviceCategories.map((category, index) => (
          <ServiceArea key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}
