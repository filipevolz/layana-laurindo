import { PageHead } from '@/components/seo/PageHead'

export function NotFoundPage() {
  return (
    <>
      <PageHead
        title="Página não encontrada | Layana Laurindo"
        description="A página solicitada não existe. Volte à homepage da Layana Laurindo."
        path="/404"
        noIndex
      />
      <div className="section-padding container-narrow pt-32 text-center">
        <h1 className="text-section-title font-display mb-4 font-bold text-brand">
          Página não encontrada
        </h1>
        <p className="text-muted-foreground">
          <a href="/" className="text-brand hover:underline">
            Voltar ao início
          </a>
        </p>
      </div>
    </>
  )
}
