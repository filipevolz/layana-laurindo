import { MessageCircle } from 'lucide-react'

import { OpensInNewTabHint } from '@/components/a11y/OpensInNewTabHint'
import { Button } from '@/components/ui/button'
import {
  trackWhatsAppClick,
  type WhatsAppPlacement,
} from '@/lib/analytics'
import { buildWhatsAppUrl } from '@/lib/site-config'
import { cn } from '@/lib/utils'

interface WhatsAppLinkProps {
  message: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
  size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon'
  showIcon?: boolean
  placement?: WhatsAppPlacement
}

export function WhatsAppLink({
  message,
  children,
  className,
  variant = 'default',
  size = 'default',
  showIcon = true,
  placement = 'contact',
}: WhatsAppLinkProps) {
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn('btn-pill btn-press gap-2', className)}
    >
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(placement)}
      >
        {showIcon && <MessageCircle aria-hidden="true" />}
        {children}
        <OpensInNewTabHint />
      </a>
    </Button>
  )
}
