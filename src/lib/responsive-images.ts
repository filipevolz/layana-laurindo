export interface ResponsiveImageConfig {
  src: string
  width: number
  height: number
}

export const responsiveImages = {
  hero: {
    src: '/images/layana-hero.png',
    width: 408,
    height: 612,
  },
  office: {
    src: '/images/layana-office.png',
    width: 600,
    height: 750,
  },
  portrait: {
    src: '/images/layana-portrait.png',
    width: 480,
    height: 600,
  },
} as const satisfies Record<string, ResponsiveImageConfig>
