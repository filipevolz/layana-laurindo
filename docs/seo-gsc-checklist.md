# Checklist pós-deploy — Google Search Console

Use este guia após publicar alterações de SEO em produção.

## 1. Submeter sitemap

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Selecione a propriedade `layanalaurindo.com.br`
3. Vá em **Sitemaps** → adicione `https://layanalaurindo.com.br/sitemap.xml`
4. Aguarde o status "Êxito" (pode levar algumas horas)

## 2. Solicitar indexação da homepage

No GSC, use **Inspeção de URL** para a homepage e clique em **Solicitar indexação**:

| Prioridade | URL |
|------------|-----|
| P0 | `https://layanalaurindo.com.br/` |

As URLs legadas abaixo redirecionam (301) para a homepage e continuam úteis para capturar buscas locais:

- `/advogada-direito-de-familia-florianopolis`
- `/advogada-direito-civil-florianopolis`
- `/advogada-curatela-florianopolis`
- `/advogada-inventario-florianopolis`
- `/servicos/divorcio-florianopolis`
- `/servicos/inventario-extrajudicial`
- `/servicos/pensao-alimenticia`
- `/servicos/curatela-incapaz`

## 3. Monitoramento semanal (primeiras 4 semanas)

| Métrica | Onde verificar | Ação se houver problema |
|---------|----------------|-------------------------|
| Páginas indexadas | GSC → Páginas | Se "Descoberta, mas não indexada": reforçar conteúdo answer-first e solicitar reindexação |
| Impressões por query | GSC → Desempenho → Consultas | Acompanhar queries locais P0 |
| Rich results | GSC → Melhorias → FAQ | Validar FAQPage schema |
| Erros de rastreamento | GSC → Páginas → Não indexadas | Corrigir URLs quebradas ou redirects |

## 4. Queries P0 para acompanhar

Monitore impressões e posição média para:

- `advogada direito de família florianópolis`
- `advogada divórcio florianópolis`
- `inventário extrajudicial florianópolis`
- `advogada curatela florianópolis`
- `advogada direito civil florianópolis`

## 5. Validação técnica

Antes e depois do deploy, verifique:

- [ ] `https://layanalaurindo.com.br/robots.txt` acessível
- [ ] `https://layanalaurindo.com.br/sitemap.xml` lista a homepage com `lastmod` atualizado
- [ ] Preview OG correto (compartilhar URL no WhatsApp/Telegram)
- [ ] JSON-LD válido ([Rich Results Test](https://search.google.com/test/rich-results)) — FAQPage + LegalService + catálogo de serviços

## 6. Cadência de iteração (mensal)

1. Exportar top 20 queries do GSC
2. Homepage com queda de impressões: atualizar `updatedAt` em `site-config.ts` e reforçar conteúdo answer-first
3. Queries novas com intenção comercial: avaliar nova seção na homepage ou landing page dedicada
4. Queries de curatela: garantir menção em Direito de Família, FAQ e `knowsAbout`

## 7. Prerender (se necessário)

Se após 2 semanas a homepage permanecer como "Descoberta, mas não indexada", considerar prerender estático no build (`vite-plugin-prerender` ou similar) para servir HTML completo no primeiro byte.

A rota 404 já publica `noindex, nofollow` via `PageHead` para evitar soft-404 indexável.

## 8. Google Ads / conversões (pós-deploy)

1. Criar container GTM **ou** IDs GA4 + Google Ads
2. Copiar `.env.example` → `.env` / vars da Vercel e preencher:
   - `VITE_GTM_ID` (preferencial), **ou**
   - `VITE_GA_MEASUREMENT_ID` + `VITE_GOOGLE_ADS_ID` + `VITE_GOOGLE_ADS_CONVERSION_LABEL`
3. No GTM: trigger no evento `whatsapp_click` (dataLayer) → tag de conversão Ads + evento GA4 `generate_lead`
4. Testar cliques (hero, header, float, footer, contato, serviços) no [Tag Assistant](https://tagassistant.google.com/)
5. Conferir conversões no Google Ads após 24–48h
