import { useEffect } from 'react'

import { initAnalytics } from '@/lib/analytics'

/** Carrega GTM/gtag uma vez no cliente (somente se houver env configurada). */
export function AnalyticsBootstrap() {
  useEffect(() => {
    initAnalytics()
  }, [])

  return null
}
