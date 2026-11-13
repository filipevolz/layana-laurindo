import { Link } from 'react-router-dom'

import { OpensInNewTabHint } from '@/components/a11y/OpensInNewTabHint'
import { trackWhatsAppClick } from '@/lib/analytics'
import { buildWhatsAppUrl, siteConfig } from '@/lib/site-config'

function FooterColumn({
  title,
  children,
  className,
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      {title ? (
        <h3 className="mb-[18px] font-sans text-[11px] font-semibold tracking-[0.22em] text-dourado-escuro uppercase">
          {title}
        </h3>
      ) : null}
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
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {items.map((item) => (
        <li key={`${item.label}-${item.href}`}>
          {item.external || item.href.startsWith('http') ? (
            <a
              href={item.href}
              className="text-sm text-texto no-underline transition-colors hover:text-dourado-escuro"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
              <OpensInNewTabHint />
            </a>
          ) : item.href.startsWith('#') ? (
            <Link
              to={{ pathname: '/', hash: item.href }}
              className="text-sm text-texto no-underline transition-colors hover:text-dourado-escuro"
            >
              {item.label}
            </Link>
          ) : (
            <Link
              to={item.href}
              className="text-sm text-texto no-underline transition-colors hover:text-dourado-escuro"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

const areaLinks = siteConfig.serviceCategories.map((category) => ({
  label: category.title,
  href: '#servicos',
}))

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-creme pt-20 pb-[max(40px,env(safe-area-inset-bottom))] text-sm text-texto">
      <div className="container-narrow px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 min-[900px]:grid-cols-[1.4fr_repeat(3,1fr)_1.3fr]">
          <FooterColumn className="sm:col-span-2 min-[900px]:col-span-1">
            <Link to="/" className="inline-flex items-center gap-4 text-marrom no-underline">
              <img
                src={siteConfig.images.logo}
                alt=""
                width={52}
                height={52}
                className="size-[52px] shrink-0 object-contain"
                aria-hidden="true"
              />
              <span className="leading-tight">
                <span className="block font-display text-[26px] leading-none font-medium">
                  {siteConfig.name}
                </span>
                <span className="mt-[5px] block text-[11px] tracking-[0.22em] text-texto-suave uppercase">
                  {siteConfig.title}
                </span>
              </span>
            </Link>
            <p className="mt-[18px] leading-[1.7]">{siteConfig.description}</p>
            <p className="mt-[18px]">{siteConfig.oab}</p>
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
            <dl className="m-0 flex flex-col gap-3.5">
              <div>
                <dt className="font-semibold text-marrom">WhatsApp</dt>
                <dd className="mt-[3px] leading-relaxed">
                  <a
                    href={buildWhatsAppUrl(siteConfig.defaultWhatsAppMessage)}
                    className="text-texto no-underline transition-colors hover:text-dourado-escuro"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('footer')}
                  >
                    Falar com Layana
                    <OpensInNewTabHint />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-marrom">Instagram</dt>
                <dd className="mt-[3px] leading-relaxed">
                  <a
                    href={siteConfig.social.instagram.href}
                    className="text-texto no-underline transition-colors hover:text-dourado-escuro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.social.instagram.label}
                    <OpensInNewTabHint />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-marrom">LinkedIn</dt>
                <dd className="mt-[3px] leading-relaxed">
                  <a
                    href={siteConfig.social.linkedin.href}
                    className="text-texto no-underline transition-colors hover:text-dourado-escuro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.social.linkedin.label}
                    <OpensInNewTabHint />
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-marrom">E-mail</dt>
                <dd className="mt-[3px] leading-relaxed">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-texto no-underline transition-colors hover:text-dourado-escuro"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-marrom">Localização</dt>
                <dd className="mt-[3px] leading-relaxed">
                  <address className="not-italic">
                    <a
                      href={siteConfig.address.mapsUrl}
                      className="text-texto no-underline transition-colors hover:text-dourado-escuro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.address.line1}
                      <br />
                      {siteConfig.address.line2}
                      <OpensInNewTabHint />
                    </a>
                  </address>
                </dd>
              </div>
            </dl>
          </FooterColumn>
        </div>

        <div className="mt-14 h-[280px] overflow-hidden border border-linha bg-creme-claro">
          <iframe
            src={siteConfig.address.mapsEmbedUrl}
            title="Localização do escritório no mapa"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-linha pt-6 text-xs leading-relaxed text-texto-suave">
          <span>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </span>
          <span>Atualizado em {siteConfig.seo.updatedAtLabel}.</span>
          <span>
            Este site tem caráter informativo e não substitui consulta jurídica personalizada. O
            conteúdo não configura promessa de resultado.
          </span>
        </div>
      </div>
    </footer>
  )
}
