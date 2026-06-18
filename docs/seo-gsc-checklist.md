# Checklist pós-deploy — Google Search Console

Use este guia após publicar as alterações de SEO em produção.

## 1. Submeter sitemap

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Selecione a propriedade `layanalaurindo.com.br`
3. Vá em **Sitemaps** → adicione `https://layanalaurindo.com.br/sitemap.xml`
4. Aguarde o status "Êxito" (pode levar algumas horas)

## 2. Solicitar indexação das páginas P0

No GSC, use **Inspeção de URL** para cada página abaixo e clique em **Solicitar indexação**:

| Prioridade | URL |
|------------|-----|
| P0 | `https://layanalaurindo.com.br/` |
| P0 | `https://layanalaurindo.com.br/advogada-direito-de-familia-florianopolis` |
| P0 | `https://layanalaurindo.com.br/advogada-direito-civil-florianopolis` |
| P0 | `https://layanalaurindo.com.br/advogada-curatela-florianopolis` |
| P0 | `https://layanalaurindo.com.br/advogada-inventario-florianopolis` |

Depois, solicite indexação das páginas de tópico:

- `/servicos/divorcio-florianopolis`
- `/servicos/inventario-extrajudicial`
- `/servicos/pensao-alimenticia`
- `/servicos/curatela-incapaz`

## 3. Monitoramento semanal (primeiras 4 semanas)

| Métrica | Onde verificar | Ação se houver problema |
|---------|----------------|-------------------------|
| Páginas indexadas | GSC → Páginas | Se "Descoberta, mas não indexada": verificar conteúdo único e solicitar reindexação |
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
- [ ] `https://layanalaurindo.com.br/sitemap.xml` lista 9 URLs
- [ ] Preview OG correto (compartilhar URL no WhatsApp/Telegram)
- [ ] JSON-LD válido ([Rich Results Test](https://search.google.com/test/rich-results))

## 6. Cadência de iteração (mensal)

1. Exportar top 20 queries do GSC
2. Páginas com queda de impressões: atualizar `updatedAt` e reforçar conteúdo answer-first
3. Páginas com crescimento: adicionar links internos de/para páginas relacionadas
4. Queries novas com intenção comercial: avaliar nova landing page em `landing-pages.ts`

## 7. Prerender (se necessário)

Se após 2 semanas páginas programáticas permanecerem como "Descoberta, mas não indexada", considerar prerender estático no build (`vite-plugin-prerender` ou similar) para servir HTML completo no primeiro byte.
