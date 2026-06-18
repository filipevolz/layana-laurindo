import type { ComponentProps, CSSProperties, ReactNode } from 'react'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface GoldBorderShellProps {
  children: ReactNode
  animationIndex?: number
  featured?: boolean
  lift?: boolean
  className?: string
  style?: CSSProperties
}

export function GoldBorderShell({
  children,
  animationIndex = 0,
  featured = false,
  lift = true,
  className,
  style,
}: GoldBorderShellProps) {
  return (
    <div
      className={cn(
        'gold-border-shell group h-full',
        lift && 'card-lift hover-fine:-translate-y-0.5',
        featured && 'gold-border-shell--featured',
        className,
      )}
      style={{ animationDelay: `${animationIndex * 0.45}s`, ...style }}
    >
      {children}
    </div>
  )
}

interface GoldBorderCardProps extends ComponentProps<typeof Card> {
  animationIndex?: number
  featured?: boolean
  lift?: boolean
}

export function GoldBorderCard({
  animationIndex = 0,
  featured = false,
  lift = true,
  className,
  children,
  ...cardProps
}: GoldBorderCardProps) {
  return (
    <GoldBorderShell
      animationIndex={animationIndex}
      featured={featured}
      lift={lift}
    >
      <Card
        className={cn(
          'gold-border-inner h-full border-0 shadow-sm ring-0 hover-fine:shadow-md',
          className,
        )}
        {...cardProps}
      >
        {children}
      </Card>
    </GoldBorderShell>
  )
}
