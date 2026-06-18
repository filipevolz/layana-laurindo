# Layana Laurindo — Site Portfólio

## Problem Statement

Potenciais clientes em direito civil e familiar precisam conhecer a advogada Layana Laurindo, entender os serviços e entrar em contato com baixo atrito via WhatsApp.

## Goals

- [x] Site single-page responsivo com portfólio profissional
- [x] Geração de leads via WhatsApp (+55 48 9636-4634)
- [x] Integração das 3 fotos profissionais
- [x] Componentes shadcn/ui instalados via CLI

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog | Não solicitado |
| Formulário com backend | Leads via WhatsApp |
| Painel admin | Conteúdo estático em `site-config.ts` |

## User Stories

### P1: Landing e conversão (MVP)

**Acceptance Criteria**:

1. WHEN a página carrega THEN o sistema SHALL exibir hero com nome, especialidade e foto principal.
2. WHEN o visitante clica em CTA de contato THEN o sistema SHALL abrir `https://wa.me/554896364634` com mensagem contextual.
3. WHEN viewport < 768px THEN o sistema SHALL exibir menu mobile e layout em coluna única.
4. WHEN a página carrega THEN as 3 fotos SHALL estar visíveis.

### P2: Credibilidade e SEO

1. WHEN visitante acessa serviços THEN o sistema SHALL exibir cards por área com CTA WhatsApp.
2. WHEN página é indexada THEN meta tags SHALL descrever a advogada e especialidades.

## Requirement Traceability

| ID | Status |
|----|--------|
| LL-01 Hero + CTA | Verified |
| LL-02 Botão flutuante WhatsApp | Verified |
| LL-03 Responsividade | Verified |
| LL-04 3 imagens | Verified |
| LL-05 Cards de serviços | Verified |
| LL-06 Meta SEO | Verified |
| LL-07 Motion + reduced-motion | Verified |
