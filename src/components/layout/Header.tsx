import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

import logo from '../../../public/images/logo.png'
import { Button } from '../ui/button'
import { MessageCircle } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Sobre', hash: '' },
  { label: 'Serviços', hash: '#servicos' },
  { label: 'Contato', hash: '#contato' },
  { label: 'Diferenciais', hash: '#diferenciais' },
  { label: 'Perguntas frequentes', hash: '#faq' }
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed z-50 top-0 h-[70px] w-full flex items-center justify-between pr-30 pl-26 transition-[background-color,backdrop-filter,box-shadow] duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-background/85 shadow-[0_1px_0_0] shadow-border/30'
          : 'bg-background',
      )}
    >
      <Link to="/" className="relative z-10 flex items-center">
        <img src={logo} alt="Layana Laurindo" width={70} height={60} />
      </Link>
      <nav className="relative z-10 flex items-center gap-1 rounded-full border border-border/70 bg-background/95 px-1.5 py-1 shadow-sm backdrop-blur-sm supports-backdrop-filter:bg-background/90">
        {NAV_ITEMS.map((item) => {
          const active = isNavItemActive(hash, item.hash)

          return (
            <Link
              key={item.hash || 'sobre'}
              to={{ pathname: '/', hash: item.hash }}
              className={cn(
                'text-sm font-medium whitespace-nowrap rounded-full px-3 py-1.5 transition-colors',
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
      <Button className="relative z-10 shrink-0">
        <MessageCircle className="size-4" aria-hidden="true" />
        Agendar consulta</Button>
    </header>
  )
}