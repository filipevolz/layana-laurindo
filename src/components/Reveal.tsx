import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useEffect, useState } from 'react'

import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

type RevealVariant = 'up' | 'left' | 'right' | 'scale'

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

interface RevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  staggerIndex?: number
  as?: ElementType
  className?: string
  once?: boolean
  immediate?: boolean
}

export function Reveal({
  children,
  variant = 'up',
  delay,
  staggerIndex,
  as: Component = 'div',
  className,
  once = true,
  immediate = false,
}: RevealProps) {
  const { ref, visible: inView } = useReveal({ once })
  const [immediateVisible, setImmediateVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      setImmediateVisible(true)
    }
  }, [immediate])

  const visible = immediate ? immediateVisible : inView

  const style = {
    ...(delay !== undefined && { transitionDelay: `${delay}ms` }),
    ...(staggerIndex !== undefined && { '--i': staggerIndex }),
  } as CSSProperties

  return (
    <Component
      ref={ref}
      className={cn(
        'reveal',
        variantClass[variant],
        staggerIndex !== undefined && 'reveal-stagger',
        visible && 'reveal-visible',
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  )
}
