import { Link } from 'react-router-dom'

import { buildWhatsAppUrl, siteConfig } from '@/lib/site-config'
import { landingPages } from '@/lib/landing-pages'

function FooterColumn({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-bold tracking-[0.15em] text-brand uppercase font-sans">
        {title}
      </h3>
      {children}
    </div>
  )
}

function FooterLinkList({
  items,
}: {
  items: readonly { label: string; href: string; external?: boolean }[]
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          {item.external || item.href.startsWith('http') ? (
            <a
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : item.href.startsWith('#') ? (
            <Link
              to={{ pathname: '/', hash: item.href }}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ) : (
            <Link
              to={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

const areaLinks = landingPages
  .filter((page) => page.type === 'area')
  .map((page) => ({
    label: page.breadcrumbLabel,
    href: page.path,
  }))

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="safe-bottom border-t border-brand/15 bg-services text-foreground">
      <div className="container-narrow section-padding">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <FooterColumn>
            <Link to="/" className="group inline-flex items-center gap-3">
              <span
                className="flex size-9 items-center justify-center rounded-full border border-brand/25 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                LL
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold tracking-tight text-brand uppercase">
                  Layana
                </span>
                <span className="block text-[0.6rem] font-semibold tracking-[0.2em] text-brand/60 uppercase">
                  Laurindo
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description} Atendimento em {siteConfig.city} e em
              todo o Brasil — presencial ou online.
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {siteConfig.oab}
            </p>
          </FooterColumn>

          <FooterColumn title="Menu">
            <FooterLinkList items={siteConfig.nav} />
          </FooterColumn>

          <FooterColumn title="Áreas de atuação">
            <FooterLinkList items={areaLinks} />
          </FooterColumn>

          <FooterColumn title="Links úteis">
            <FooterLinkList
              items={siteConfig.usefulLinks.map((link) => ({
                ...link,
                external: true,
              }))}
            />
          </FooterColumn>

          <FooterColumn title="Contato">
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <span className="mb-1 block font-semibold text-foreground">
                  WhatsApp
                </span>
                <a
                  href={buildWhatsAppUrl(siteConfig.defaultWhatsAppMessage)}
                  className="transition-colors hover:text-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com Layana
                </a>
              </li>
              <li>
                <span className="mb-1 block font-semibold text-foreground">
                  Instagram
                </span>
                <a
                  href={siteConfig.social.instagram.href}
                  className="transition-colors hover:text-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.social.instagram.label}
                </a>
              </li>
              <li>
                <span className="mb-1 block font-semibold text-foreground">
                  LinkedIn
                </span>
                <a
                  href={siteConfig.social.linkedin.href}
                  className="transition-colors hover:text-brand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.social.linkedin.label}
                </a>
              </li>
              <li>
                <span className="mb-1 block font-semibold text-foreground">
                  E-mail
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-brand"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="mb-1 block font-semibold text-foreground">
                  Localização
                </span>
                <address className="not-italic leading-relaxed">
                  <a
                    href={siteConfig.address.mapsUrl}
                    className="transition-colors hover:text-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </a>
                </address>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-brand/15 shadow-sm">
          <iframe
            src={siteConfig.address.mapsEmbedUrl}
            title="Localização do escritório no mapa"
            className="h-48 w-full sm:h-56 md:h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-10 border-t border-brand/15 pt-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Atualizado em {siteConfig.seo.updatedAtLabel}.
          </p>
          <p className="mt-2">
            Este site tem caráter informativo e não substitui consulta jurídica
            personalizada. O conteúdo não configura promessa de resultado.
          </p>
        </div>
      </div>
    </footer>
  )
}
