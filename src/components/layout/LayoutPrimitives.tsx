import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type LayoutBtnVariant = 'cheio' | 'contorno' | 'claro'

const layoutBtnBase =
  'inline-flex items-center gap-3 border border-marrom text-xs font-semibold tracking-[0.2em] uppercase no-underline'

// Variants helper co-located with the primitives (shadcn pattern)
// eslint-disable-next-line react-refresh/only-export-components
export const layoutBtnClass: Record<LayoutBtnVariant, string> = {
  cheio: cn(
    layoutBtnBase,
    'bg-marrom px-[30px] py-[18px] text-creme hover:bg-[#3d3227] hover:text-creme',
  ),
  contorno: cn(
    layoutBtnBase,
    'bg-transparent px-[22px] py-[13px] text-marrom hover:bg-marrom hover:text-creme',
  ),
  claro: cn(
    layoutBtnBase,
    'border-creme bg-creme px-[30px] py-[18px] text-marrom hover:bg-transparent hover:text-creme',
  ),
}

export const layoutLinkClass =
  'inline-block border-b border-dourado-claro pb-1.5 text-xs font-semibold tracking-[0.2em] text-dourado-escuro uppercase no-underline'

export function Etiqueta({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        'block text-xs font-semibold tracking-[0.26em] text-dourado-escuro uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Filete({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('block h-px w-16 bg-dourado', className)}
    />
  )
}

export function Moldura({
  direita = false,
  className,
  recorteClassName,
  children,
}: {
  direita?: boolean
  className?: string
  recorteClassName?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'relative w-full max-w-[420px] pb-[22px]',
        direita ? 'pr-[22px]' : 'pl-[22px]',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute bottom-0 h-[calc(100%-22px)] w-[calc(100%-22px)] border border-dourado-claro',
          direita ? 'right-0' : 'left-0',
        )}
      />
      <div
        className={cn(
          'relative overflow-hidden shadow-[0_24px_48px_rgba(45,36,27,0.16)] [&_img]:h-full [&_img]:w-full [&_img]:object-cover',
          recorteClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}
