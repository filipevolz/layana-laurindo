export interface ResponsiveImageConfig {
  src: string
  width: number
  height: number
}

export const responsiveImages = {
  hero: {
    src: '/images/layana-hero.jpg',
    width: 683,
    height: 1024,
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
