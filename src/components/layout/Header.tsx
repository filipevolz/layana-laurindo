import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, MessageCircle } from 'lucide-react'

import { trackWhatsAppClick } from '@/lib/analytics'
import { buildWhatsAppUrl, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

import logo from '../../../public/images/logo.png'
import { layoutBtnClass } from './LayoutPrimitives'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

const NAV_ITEMS = [
  { label: 'Sobre', hash: '#sobre' },
  { label: 'Serviços', hash: '#servicos' },
  { label: 'Diferenciais', hash: '#diferenciais' },
  { label: 'Perguntas frequentes', hash: '#faq' },
  { label: 'Contato', hash: '#contato' },
] as const

export function Header() {
  const { hash } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const whatsappHref = buildWhatsAppUrl(siteConfig.defaultWhatsAppMessage)

  return (
    <header className="sticky top-0 z-50 border-b border-linha bg-creme">
      <div className="container-narrow flex flex-wrap items-center justify-between gap-6 px-5 py-[22px] sm:px-8">
        <Link to="/" className="relative z-10 flex items-center">
          <img src={logo} alt="Layana Laurindo" width={70} height={60} />
        </Link>

        <nav
          className="relative z-10 hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {NAV_ITEMS.map((item) => {
            // Binding HTML marks Sobre as current on first paint (empty hash).
            const active =
              hash === item.hash || (!hash && item.hash === '#sobre')

            return (
              <Link
                key={item.hash}
                to={{ pathname: '/', hash: item.hash }}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'border-b border-transparent pb-1 text-sm font-medium whitespace-nowrap text-menu',
                  active
                    ? 'border-dourado text-marrom'
                    : 'hover:border-dourado hover:text-marrom',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('header')}
          className={cn(
            layoutBtnClass.contorno,
            'relative z-10 hidden shrink-0 lg:inline-flex [&_svg]:text-dourado hover:[&_svg]:text-creme',
          )}
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Agendar consulta
        </a>

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
            <SheetHeader className="border-b border-linha px-6 py-5">
              <SheetTitle className="font-heading text-lg text-marrom">
                Menu
              </SheetTitle>
            </SheetHeader>

            <nav
              className="flex flex-1 flex-col gap-1 px-4 py-6"
              aria-label="Navegação mobile"
            >
              {NAV_ITEMS.map((item) => {
                const active = hash === item.hash

                return (
                  <Link
                    key={item.hash}
                    to={{ pathname: '/', hash: item.hash }}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-marrom text-creme'
                        : 'text-menu hover:bg-areia hover:text-marrom',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-auto border-t border-linha p-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick('header_mobile')
                  setMobileOpen(false)
                }}
                className={cn(layoutBtnClass.contorno, 'w-full justify-center')}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Agendar consulta
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
