export type WhatsAppPlacement =
  | 'hero'
  | 'header'
  | 'header_mobile'
  | 'float'
  | 'footer'
  | 'contact'
  | 'services'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
    __analyticsInitialized?: boolean
  }
}

const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined
const ADS_CONVERSION_LABEL = import.meta.env
  .VITE_GOOGLE_ADS_CONVERSION_LABEL as string | undefined

function pushDataLayer(payload: Record<string, unknown>) {
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(payload)
}

function loadGtagScript(primaryId: string) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer ?? []
  // gtag oficial usa Arguments (não array) no dataLayer
  window.gtag = function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments as unknown as Record<string, unknown>)
  }
  window.gtag('js', new Date())
}

function loadGtm(containerId: string) {
  pushDataLayer({ 'gtm.start': Date.now(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`
  document.head.appendChild(script)
}

/** Inicializa GTM (preferencial) ou gtag (GA4 / Google Ads). Sem IDs, não faz nada. */
export function initAnalytics() {
  if (typeof window === 'undefined' || window.__analyticsInitialized) return
  window.__analyticsInitialized = true

  if (GTM_ID) {
    loadGtm(GTM_ID)
    return
  }

  const primaryId = GA_ID || ADS_ID
  if (!primaryId) return

  loadGtagScript(primaryId)

  if (GA_ID) {
    window.gtag?.('config', GA_ID)
  }
  if (ADS_ID) {
    window.gtag?.('config', ADS_ID)
  }
}

/** Dispara lead/conversão em cliques WhatsApp (dataLayer + gtag). */
export function trackWhatsAppClick(
  placement: WhatsAppPlacement,
  extras?: { serviceId?: string },
) {
  if (typeof window === 'undefined') return

  pushDataLayer({
    event: 'whatsapp_click',
    whatsapp_placement: placement,
    ...(extras?.serviceId ? { service_id: extras.serviceId } : {}),
  })

  window.gtag?.('event', 'generate_lead', {
    method: 'whatsapp',
    placement,
    ...(extras?.serviceId ? { service_id: extras.serviceId } : {}),
  })

  if (ADS_ID && ADS_CONVERSION_LABEL) {
    window.gtag?.('event', 'conversion', {
      send_to: `${ADS_ID}/${ADS_CONVERSION_LABEL}`,
    })
  }
}
