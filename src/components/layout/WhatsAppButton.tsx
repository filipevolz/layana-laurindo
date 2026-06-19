import { MessageCircle } from 'lucide-react'

import { buildWhatsAppUrl, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(siteConfig.defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com Layana Laurindo"
      className={cn(
        'fab-enter btn-press fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_6px_rgba(0,0,0,0.24),0_8px_12px_rgba(0,0,0,0.14)] transition-transform sm:right-6',
        'hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
      )}
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}
