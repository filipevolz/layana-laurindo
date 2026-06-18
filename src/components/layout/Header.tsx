import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

import { WhatsAppLink } from '@/components/WhatsAppLink'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onHero = !scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        onHero
          ? 'border-b border-brand/15 bg-[#dfd3ce]/90 backdrop-blur-md'
          : 'border-b border-border/60 bg-background/95 backdrop-blur-sm',
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <span
            className={cn(
              'flex size-9 items-center justify-center rounded-full border text-xs font-bold',
              onHero
                ? 'border-brand/25 text-brand'
                : 'border-brand/30 text-brand',
            )}
            aria-hidden="true"
          >
            LL
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                'block text-lg font-bold tracking-tight uppercase',
                onHero ? 'text-brand' : 'text-foreground',
              )}
            >
              Layana
            </span>
            <span
              className={cn(
                'block text-[0.65rem] font-semibold tracking-[0.2em] uppercase',
                onHero ? 'text-brand/60' : 'text-muted-foreground',
              )}
            >
              Laurindo
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors',
                onHero
                  ? 'text-brand/80 hover:text-brand'
                  : 'text-foreground/80 hover:text-brand',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppLink
            message={siteConfig.defaultWhatsAppMessage}
            size="sm"
            className={cn(
              'font-semibold',
              onHero && 'font-semibold',
            )}
          >
            Agendar consulta
          </WhatsAppLink>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              aria-label="Abrir menu"
              className={cn(
                onHero &&
                  'border-brand/30 bg-transparent text-brand hover:bg-brand/5 hover:text-brand',
              )}
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)]">
            <SheetHeader>
              <SheetTitle className="text-left font-bold">
                {siteConfig.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4" aria-label="Menu mobile">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground/80 transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
              <WhatsAppLink
                message={siteConfig.defaultWhatsAppMessage}
                className="mt-4 w-full font-semibold"
              >
                Agendar consulta
              </WhatsAppLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
