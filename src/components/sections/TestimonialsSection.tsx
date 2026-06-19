import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

import { GoldBorderCard } from '@/components/GoldBorderCard'
import { Reveal } from '@/components/Reveal'
import { Badge } from '@/components/ui/badge'
import { CardContent } from '@/components/ui/card'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { siteConfig, type Testimonial } from '@/lib/site-config'
import { cn } from '@/lib/utils'

function TestimonialAvatar({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.avatar) {
    return (
      <img
        src={testimonial.avatar}
        alt=""
        className="size-11 shrink-0 rounded-full border border-brand/20 object-cover"
        loading="lazy"
      />
    )
  }

  return (
    <span
      className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-sm font-semibold text-brand"
      aria-hidden="true"
    >
      {testimonial.initials}
    </span>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      aria-label={`${rating} de 5 estrelas`}
      role="img"
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={cn(
            'size-4',
            index < rating ? 'fill-brand text-brand' : 'text-border',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  return (
    <GoldBorderCard animationIndex={index} className="h-full">
      <CardContent className="flex h-full flex-col gap-4 pt-6">
        <StarRating rating={testimonial.rating} />
        <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
          “{testimonial.quote}”
        </blockquote>
        <footer className="flex items-center gap-3 border-t border-brand/10 pt-4">
          <TestimonialAvatar testimonial={testimonial} />
          <cite className="not-italic">
            <p className="text-sm font-semibold text-foreground">
              {testimonial.name}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {testimonial.context}
            </p>
          </cite>
        </footer>
      </CardContent>
    </GoldBorderCard>
  )
}

function TestimonialsCarousel() {
  const testimonials = siteConfig.testimonials
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    onSelect()
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full px-12 sm:px-14"
        aria-label="Depoimentos de clientes"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          size="icon"
          className="left-0 size-10 border-brand/20 bg-card shadow-sm sm:left-1 sm:size-11"
          aria-label="Depoimento anterior"
        />
        <CarouselNext
          size="icon"
          className="right-0 size-10 border-brand/20 bg-card shadow-sm sm:right-1 sm:size-11"
          aria-label="Próximo depoimento"
        />
      </Carousel>

      {testimonials.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-1">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              className="flex min-h-11 min-w-11 touch-manipulation items-center justify-center"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
              aria-pressed={index === current}
            >
              <span
                className={cn(
                  'size-2.5 rounded-full transition-colors',
                  index === current ? 'bg-brand' : 'bg-brand/25 hover-fine:bg-brand/40',
                )}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="section-padding bg-hero"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-narrow">
        <Reveal variant="up">
          <div className="mb-8 flex flex-col items-center space-y-4 text-center sm:mb-10">
          <Badge className="rounded-full bg-brand/10 font-bold text-brand hover:bg-brand/15">
            Depoimentos
          </Badge>
          <h2
            id="testimonials-heading"
            className="text-section-title font-display mx-auto max-w-2xl text-brand"
          >
            {siteConfig.testimonialsSection.title}
          </h2>
          <p className="mx-auto leading-relaxed text-foreground">
            {siteConfig.testimonialsSection.description}
          </p>
        </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <TestimonialsCarousel />
        </Reveal>
      </div>
    </section>
  )
}
