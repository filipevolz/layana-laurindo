import { siteConfig } from '@/lib/site-config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-narrow section-padding">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <p className="font-display text-2xl font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="text-sm text-white/70">
              {siteConfig.title} · {siteConfig.specialties.join(' · ')}
            </p>
            <p className="text-sm text-white/70">{siteConfig.oab}</p>
            <p className="text-sm text-white/70">{siteConfig.city}</p>
          </div>

          <div className="space-y-2 text-sm text-white/70">
            <p>
              WhatsApp:{' '}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="text-white underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </p>
            <p>{siteConfig.email}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs leading-relaxed text-white/60">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
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
