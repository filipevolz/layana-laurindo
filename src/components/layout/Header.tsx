import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

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

function NavLink({
  href,
  children,
  className,
  onClick,
  isActive,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}) {
  const isHash = href.startsWith('#')
  const to = isHash ? { pathname: '/', hash: href } : href
  const ariaCurrent = isActive ? 'location' : undefined

  if (isHash || href.startsWith('/')) {
    return (
      <Link
        to={to}
        className={className}
        onClick={onClick}
        aria-current={ariaCurrent}
      >
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} onClick={onClick} aria-current={ariaCurrent}>
      {children}
    </a>
  )
}

function isNavItemActive(pathname: string, hash: string, href: string) {
  if (pathname !== '/') {
    return false
  }

  if (href === '#inicio') {
    return hash === '' || hash === '#inicio'
  }

  return hash === href
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onHero = isHome && !scrolled

  return (
    <header
      className={cn(
        'safe-top fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        onHero
          ? 'border-b border-brand/15 bg-services '
          : 'border-b border-border/60 bg-background/95 backdrop-blur-sm',
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 xl:px-0">
        <Link to="/" className="group flex items-center">
          <img
            src={siteConfig.images.logo}
            alt=""
            width={42}
            height={42}
            className="size-16 shrink-0 object-contain"
            aria-hidden="true"
          />
          <span className="-ml-2 leading-tight">
            <span
              className={cn(
                'block text-lg font-bold tracking-tight uppercase text-brand',
              )}
            >
              Layana
            </span>
            <span
              className={cn(
                'block text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-1.5',
                'text-brand/80',
              )}
            >
              Laurindo
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              isActive={isNavItemActive(pathname, hash, item.href)}
              className={cn(
                'nav-link py-1 text-sm font-medium transition-colors duration-300',
                onHero
                  ? 'text-brand/85 hover-fine:text-brand-dark'
                  : 'text-foreground/85 hover-fine:text-brand',
              )}
            >
              {item.label}
            </NavLink>
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
              size="icon-lg"
              aria-label="Abrir menu"
              aria-expanded={open}
              className={cn(
                'min-h-11 min-w-11 touch-manipulation',
                onHero &&
                  'border-brand/30 bg-transparent text-brand hover:bg-brand/5 hover:text-brand',
              )}
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)]">
            <SheetHeader>
              <SheetTitle className="text-left font-bold">
                {siteConfig.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Menu mobile">
              {siteConfig.nav.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isActive={isNavItemActive(pathname, hash, item.href)}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 -mx-2 text-lg font-medium text-foreground/80 transition-colors hover-fine:bg-brand/5 hover-fine:text-brand"
                >
                  {item.label}
                </NavLink>
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
