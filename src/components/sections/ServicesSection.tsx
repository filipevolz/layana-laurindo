import { ArrowRight } from 'lucide-react'

import { OpensInNewTabHint } from '@/components/a11y/OpensInNewTabHint'
import { GoldBorderCard } from '@/components/GoldBorderCard'
import { Reveal } from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import {
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { serviceIcons } from '@/lib/service-icons'
import {
  buildWhatsAppUrl,
  siteConfig,
  type ServiceCategory,
  type ServiceSubcategory,
} from '@/lib/site-config'
import { cn } from '@/lib/utils'

function ServiceItemsList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-outside list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ServiceItemsGrid({ items }: { items: readonly string[] }) {
  const midpoint = Math.ceil(items.length / 2)
  const columns = [items.slice(0, midpoint), items.slice(midpoint)]

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {columns.map((column, index) => (
        <ServiceItemsList key={index} items={column} />
      ))}
    </div>
  )
}
function ServiceSubcategoriesGrid({
  subcategories,
}: {
  subcategories: readonly ServiceSubcategory[]
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {subcategories.map((subcategory) => (
        <div key={subcategory.title}>
          <p className="mb-1.5 text-sm font-semibold text-foreground">
            {subcategory.title}
          </p>
          <ServiceItemsList items={subcategory.items} />
        </div>
      ))}
    </div>
  )
}

function ServiceCardContent({ category }: { category: ServiceCategory }) {
  if (category.subcategories) {
    return <ServiceSubcategoriesGrid subcategories={category.subcategories} />
  }

  if (category.featured && category.items) {
    return <ServiceItemsGrid items={category.items} />
  }

  if (category.items) {
    return <ServiceItemsList items={category.items} />
  }

  return null
}

function ServiceCardLink({ category }: { category: ServiceCategory }) {
  return (
    <a
      href={buildWhatsAppUrl(category.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Saiba mais sobre ${category.title}`}
      className="mt-5 -my-2 inline-flex items-center gap-1 py-2 text-sm font-semibold text-brand transition-colors hover:text-brand-accent"
    >
      Saiba mais
      <ArrowRight
        className="size-3.5 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
      <OpensInNewTabHint />
    </a>
  )
}

function ServiceCard({
  category,
  index,
}: {
  category: ServiceCategory
  index: number
}) {
  const Icon = serviceIcons[category.id]

  return (
    <Reveal
      variant="up"
      staggerIndex={index}
      className={cn('h-full', category.featured && 'sm:col-span-2')}
    >
      <GoldBorderCard
        animationIndex={index}
        featured={category.featured}
        className="flex h-full flex-col"
      >
          <CardHeader
        className={cn(
          'flex items-start justify-between gap-3',
          category.featured
            ? 'flex-col sm:flex-row sm:items-start'
            : 'flex-row',
        )}
      >
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon
              className="size-6 shrink-0 text-brand"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          )}
          <CardTitle className="font-sans text-lg text-foreground">
            {category.title}
          </CardTitle>
        </div>
        {category.featured && category.featuredLabel && (
          <Badge className="shrink-0 rounded-full bg-brand/10 text-brand hover:bg-brand/15">
            {category.featuredLabel}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>

        <div className="mt-4 flex-1">
          <ServiceCardContent category={category} />
        </div>

        <ServiceCardLink category={category} />
      </CardContent>
      </GoldBorderCard>
    </Reveal>
  )
}

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="section-padding bg-background"
      aria-labelledby="services-heading"
    >
      <div className="container-narrow mb-10 sm:mb-12">
        <Reveal variant="up">
          <div className="mb-6 flex flex-col items-center space-y-4 text-center">
          <Badge className="rounded-full bg-brand/10 font-bold text-brand hover:bg-brand/15">
            Serviços
          </Badge>
          <h2
            id="services-heading"
            className="text-section-title font-display mx-auto max-w-2xl text-brand"
          >
            {siteConfig.servicesSection.title}
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-foreground">
            {siteConfig.servicesSection.description}
          </p>
        </div>
        </Reveal>
      </div>

      <div className="container-narrow">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {siteConfig.serviceCategories.map((category, index) => (
            <ServiceCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
