# Layout Realign Specification

**Approved**: 2026-11-11 - user: "run tasks with subagents"

## Problem Statement

The live single-page site still uses the previous card-heavy composition. A binding full-page HTML mock defines the target structure, hierarchy, and visual language. The product must match that layout while preserving the current logo, photos, FAQ answers, WhatsApp conversion paths, and live address.

## Goals

- [ ] Home page section order and composition match the binding desktop capture
- [ ] Conversion CTAs (header, hero, Saiba mais, contact) open WhatsApp with existing messages
- [ ] Logo asset and three site photos remain the current files
- [ ] Testimonials section is removed from the page and navigation

## Out of Scope

| Feature | Reason |
| ------- | ------ |
| Changing logo or photo binary files | User keeps current assets |
| Blog, forms, backend | Unchanged product boundary |
| Replacing live address/map without explicit ask | AD-003 |
| Pixel-perfect LL monogram brand lockup | AD-001 |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --------------------- | -------------- | --------- | ---------- |
| Address/map vs HTML Miguel Daux | Keep Liberato Bittencourt + current embed | Live operational data; AD-003 | y |
| Mobile navigation | Keep Sheet/hamburger | HTML has no mobile pattern; AD-004 | y |
| Filled HTML copy | Adopt for hero/about/diferenciais/contact labels | User: “sim” | y |
| Placeholder FAQ answers / useful links | Keep current `site-config` values | User: “sim”; HTML uses `[…]` | y |
| Test strategy | Playwright e2e + `npm run build` + `npm run lint` | User: “playwright build lint” | y |

**Open questions:** none - all resolved or logged above

---

## User Stories

### P1: Page composition matches the binding layout ⭐ MVP

**User Story**: As a visitor, I want the home page to follow the new layout so that the brand presentation matches the approved design.

**Why P1**: Visual realignment is the feature.

**Acceptance Criteria**:

1. WHEN a visitor loads `/` at desktop width THEN the system SHALL show the home composition in `.specs/features/layout-realign/captures/layout-desktop.png` (header, hero with framed photo, destaques strip, sobre, serviços areas, diferenciais, faq, contato, footer) without a depoimentos section
2. The system SHALL NOT render a testimonials or depoimentos section or a `#depoimentos` landmark on the home page
3. WHEN a visitor views the header brand THEN the system SHALL display the current `/images/logo.png` asset and SHALL NOT render the HTML “LL” monogram lockup
4. WHEN a visitor views the hero, sobre, and diferenciais photos THEN the system SHALL use the existing assets from `responsive-images` (`layana-hero.jpg`, `layana-office.png`, `layana-portrait.png`)

**Independent Test**: Open `/` at ~1200px; confirm section order and absent depoimentos; inspect logo `src` and image `src`s.

---

### P2: Content and WhatsApp conversion

**User Story**: As a prospective client, I want clear copy and WhatsApp CTAs so that I can contact Layana from every primary action.

**Why P2**: Lead conversion must survive the restyle.

**Acceptance Criteria**:

1. WHEN a visitor activates “Saiba mais” on a service area THEN the system SHALL open a `https://wa.me/554896364634` URL whose query text matches that category’s configured WhatsApp message
2. WHEN a visitor activates “Agendar consulta” or “Entre em contato” THEN the system SHALL open WhatsApp with the default consultation message from `site-config`
3. The system SHALL present the filled HTML copy for hero etiqueta/headline/subcopy, sobre headings/paragraphs, diferenciais headings/items, and contato band, and SHALL keep current FAQ answers for the HTML question list
4. The system SHALL keep the current address lines and Google Maps embed from `site-config` in the footer

**Independent Test**: Click each CTA and assert `wa.me` targets; spot-check copy strings; confirm map iframe URL unchanged.

---

### P3: Navigation

**User Story**: As a visitor on desktop or mobile, I want nav links to the main sections so that I can jump without scrolling blindly.

**Why P2**: Anchors replace the old nav that included Depoimentos.

**Acceptance Criteria**:

1. WHEN a visitor uses the primary nav THEN the system SHALL expose links to `#sobre`, `#servicos`, `#diferenciais`, `#faq`, and `#contato` and SHALL NOT expose Depoimentos
2. WHEN the viewport is below the desktop nav breakpoint THEN the system SHALL provide a mobile menu that reaches the same section anchors and the WhatsApp CTA

**Independent Test**: Click each nav item; open mobile menu under 1024px and reach Contato.

---

## Edge Cases

- IF a WhatsApp link is opened THEN the system SHALL use `target="_blank"` with `rel` including `noopener`
- IF the visitor lands with a hash to a removed `#depoimentos` THEN the system SHALL not crash; scroll falls back to top or nearest content without a testimonials block

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| LAY-01 | P1: composition + capture | Tasks | Pending |
| LAY-02 | P1: no testimonials | Tasks | Pending |
| LAY-03 | P1: current logo | Tasks | Pending |
| LAY-04 | P1: current photos | Tasks | Pending |
| LAY-05 | P2: Saiba mais WhatsApp | Tasks | Pending |
| LAY-06 | P2: primary WhatsApp CTAs | Tasks | Pending |
| LAY-07 | P2: copy + FAQ answers | Tasks | Pending |
| LAY-08 | P2: address/map | Tasks | Pending |
| LAY-09 | P3: nav anchors | Tasks | Pending |
| LAY-10 | P3: mobile menu | Tasks | Pending |

**Coverage:** 10 total — mapped in tasks.md T1–T16 (LAY-01…LAY-10)

---

## Differences from the source

| Source shows | Product shows | Confirmed |
| ------------ | ------------- | --------- |
| Header/footer “LL” monogram + text lockup | Current `logo.png` image | y - AD-001 |
| Draft photo filenames in the HTML | Existing `layana-hero.jpg` / `layana-office.png` / `layana-portrait.png` | y - AD-002 |
| Rua Miguel Daux, 128, Coqueiros in footer | Liberato Bittencourt address + current Maps embed | y - AD-003 |
| Desktop-only header nav (no hamburger) | Sheet/hamburger mobile menu retained | y - AD-004 |
| `[LINK SAIBA MAIS – …]` placeholders | WhatsApp URLs with category messages | y - AD-005 |
| No floating contact control | Floating WhatsApp FAB retained | y - AD-006 |

## Sources

- User decisions (2026-11-11): remove testimonials; adopt filled HTML copy; keep placeholder content/links from site; Saiba mais → WhatsApp; tests = Playwright + build + lint
- ![layout-desktop](captures/layout-desktop.png) - binding - full-page desktop composition of the novo layout (header through footer)
- `captures/layout-source.html` - binding HTML source used to produce the capture

---

## Success Criteria

- [ ] Home matches `layout-desktop.png` composition at ~1200px width
- [ ] No depoimentos UI or nav item
- [ ] Logo and three photos unchanged
- [ ] All primary CTAs open WhatsApp
- [ ] `npm run build` and `npm run lint` pass; Playwright layout suite green
