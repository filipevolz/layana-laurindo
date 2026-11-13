# STATE

## Decisions

### AD-001
- **Decision**: Header and footer brand use the current `logo.png` asset, not the HTML “LL” monogram lockup.
- **Reason**: User required keeping the current header logo; footer stays consistent with the same brand mark.
- **Trade-off**: Product departs from the binding HTML brand treatment.
- **Scope**: layout-realign; Header, Footer
- **Date**: 2026-11-11
- **Status**: active AD-001

### AD-002
- **Decision**: Hero, Sobre, and Diferenciais keep the existing site photo assets (`layana-hero.jpg`, `layana-office.png`, `layana-portrait.png`).
- **Reason**: User required keeping current images; HTML placeholders were draft crops.
- **Trade-off**: Framing/crop CSS may differ from the HTML sample files.
- **Scope**: layout-realign; ResponsiveImage usages
- **Date**: 2026-11-11
- **Status**: active AD-002

### AD-003
- **Decision**: Keep the live address and Google Maps embed from `site-config.ts` (Liberato Bittencourt), not the Miguel Daux address drawn in the HTML footer.
- **Reason**: Operational contact data on the live site is authoritative until explicitly changed.
- **Trade-off**: Footer address/map text differs from the binding HTML.
- **Scope**: layout-realign; Footer, site-config address
- **Date**: 2026-11-11
- **Status**: active AD-003

### AD-004
- **Decision**: Keep a mobile Sheet/hamburger menu for section navigation and WhatsApp CTA.
- **Reason**: Binding HTML has no mobile nav pattern; current site already ships accessible mobile navigation.
- **Trade-off**: Mobile chrome is an addition relative to the desktop-oriented HTML mock.
- **Scope**: layout-realign; Header
- **Date**: 2026-11-11
- **Status**: active AD-004

### AD-005
- **Decision**: Each área “Saiba mais” opens WhatsApp with that category’s existing message template.
- **Reason**: User chose WhatsApp for the HTML `[LINK SAIBA MAIS]` placeholders.
- **Trade-off**: Not a static “more info” page or in-page expand.
- **Scope**: layout-realign; ServicesSection
- **Date**: 2026-11-11
- **Status**: active AD-005

### AD-006
- **Decision**: Keep the floating WhatsApp FAB (`WhatsAppButton`) even though the binding HTML has no floating control.
- **Reason**: Existing conversion path required by the product (header/hero/contact CTAs alone are not enough on long pages); screens finding treated as approved departure.
- **Trade-off**: Desktop capture shows an extra control overlapping the hero corner.
- **Scope**: layout-realign; App layout WhatsAppButton
- **Date**: 2026-11-13
- **Status**: active AD-006

## Handoff

- **Feature**: layout-realign / `.specs/features/layout-realign`
- **Phase / Task**: Tasks draft — awaiting approval
- **Completed**: none
- **In-progress**: none
- **Next step**: Approve spec.md and tasks.md, then Execute
- **Blockers**: none
- **Uncommitted files**: `.specs/**`
- **Branch**: unknown
