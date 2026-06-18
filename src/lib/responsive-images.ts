export interface ResponsiveImageConfig {
  src: string
  width: number
  height: number
  sizes: string
  widths?: readonly number[]
}

export function buildSrcSet(src: string, widths: readonly number[]): string {
  const base = src.replace(/\.[^.]+$/, '')
  return widths
    .map((w) => `${base}-${w}w.webp ${w}w`)
    .join(', ')
}

export const responsiveImages = {
  hero: {
    src: '/images/layana-hero.png',
    width: 408,
    height: 612,
    sizes: '(min-width: 1024px) 420px, 88vw',
    widths: [400, 683],
  },
  office: {
    src: '/images/layana-office.png',
    width: 600,
    height: 750,
    sizes: '(min-width: 1024px) 50vw, 100vw',
    widths: [400, 678],
  },
  portrait: {
    src: '/images/layana-portrait.png',
    width: 480,
    height: 600,
    sizes: '(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw',
    widths: [400, 682],
  },
} as const satisfies Record<string, ResponsiveImageConfig>
