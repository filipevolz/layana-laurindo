import { MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { buildWhatsAppUrl } from '@/lib/site-config'
import { cn } from '@/lib/utils'

interface WhatsAppLinkProps {
  message: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
  size?: 'default' | 'xs' | 'sm' | 'lg' | 'icon'
  showIcon?: boolean
}

export function WhatsAppLink({
  message,
  children,
  className,
  variant = 'default',
  size = 'default',
  showIcon = true,
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
      >
        {showIcon && <MessageCircle aria-hidden="true" />}
        {children}
      </a>
    </Button>
  )
}
