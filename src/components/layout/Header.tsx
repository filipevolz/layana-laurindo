import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, MessageCircle } from 'lucide-react'

import { trackWhatsAppClick } from '@/lib/analytics'
import { buildWhatsAppUrl, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

import logo from '../../../public/images/logo.png'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

const NAV_ITEMS = [
  { label: 'Sobre', hash: '' },
  { label: 'Serviços', hash: '#servicos' },
  { label: 'Contato', hash: '#contato' },
  { label: 'Diferenciais', hash: '#diferenciais' },
  { label: 'Perguntas frequentes', hash: '#faq' },
] as const

function isNavItemActive(currentHash: string, itemHash: string) {
  if (!itemHash) {
    return !currentHash
  }

  return currentHash === itemHash
}

export function Header() {
  const { hash } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const whatsappHref = buildWhatsAppUrl(siteConfig.defaultWhatsAppMessage)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-[70px] w-full transition-[background-color,backdrop-filter,box-shadow] duration-300',
        scrolled
          ? 'bg-background/90 shadow-[0_1px_0_0] shadow-border/30 backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-background/85'
          : 'bg-background',
      )}
    >
      <div className="container-narrow flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="relative z-10 flex items-center">
          <img src={logo} alt="Layana Laurindo" width={70} height={60} />
        </Link>

        <nav
          className="relative z-10 hidden items-center gap-1 rounded-full border border-border/70 bg-background/95 px-1.5 py-1 shadow-sm backdrop-blur-sm supports-backdrop-filter:bg-background/90 lg:flex"
          aria-label="Navegação principal"
        >
          {NAV_ITEMS.map((item) => {
            const active = isNavItemActive(hash, item.hash)

            return (
              <Link
                key={item.hash || 'sobre'}
                to={{ pathname: '/', hash: item.hash }}
                className={cn(
                  'rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                  active
                    ? 'bg-primary text-brand-foreground'
                    : 'text-brand-dark hover:bg-primary/10 hover:text-brand',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Button asChild className="relative z-10 hidden shrink-0 lg:inline-flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('header')}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Agendar consulta
          </a>
        </Button>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative z-10 lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="gap-0 p-0">
            <SheetHeader className="border-b border-border/60 px-6 py-5">
              <SheetTitle className="font-heading text-lg text-brand-dark">
                Menu
              </SheetTitle>
            </SheetHeader>

            <nav
              className="flex flex-1 flex-col gap-1 px-4 py-6"
              aria-label="Navegação mobile"
            >
              {NAV_ITEMS.map((item) => {
                const active = isNavItemActive(hash, item.hash)

                return (
                  <Link
                    key={item.hash || 'sobre'}
                    to={{ pathname: '/', hash: item.hash }}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-primary text-brand-foreground'
                        : 'text-brand-dark hover:bg-primary/10 hover:text-brand',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-auto border-t border-border/60 p-4">
              <Button asChild className="w-full">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick('header_mobile')
                    setMobileOpen(false)
                  }}
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Agendar consulta
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
