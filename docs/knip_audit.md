# Knip Audit

Date: 2026-05-16

## Purpose

This document records a deeper verification pass on the remaining `npm run knip` findings after the initial safe cleanup work.

The goal was to separate:

- genuinely unused code and packages
- currently unwired but structured content
- items that should only be removed with extra build verification

## Verification Method

Each remaining `knip` item was cross-checked against:

- direct imports in `src/`
- live route wiring in `src/app/**/page.tsx`
- shared template contracts in `src/components/templates/ServiceDetail.tsx` and `src/components/templates/ServiceHub.tsx`
- the installed package tree via `npm ls`
- a second package audit via `npm run depcheck`

## Current Status

These checks pass:

- `npm run lint`
- `npm run lint:styles`
- `npm run format:check`
- `npm run typecheck`

`npm run knip` still reports remaining findings. The sections below classify them by confidence and risk.

## Definitely Genuine

### Unused Files

- `scripts/generate-doc-pages.mjs`
  Reason: no `package.json` script, import, or other live reference found.
- `src/components/sections/MediaShowreel.tsx`
  Reason: only found in its own file and planning docs, not in live route or template imports.
- `src/components/sections/ServicesGrid.tsx`
  Reason: no live imports; service hubs currently use `src/components/sections/OurServices.tsx`.
- `src/components/ui/InfiniteSlider.tsx`
  Reason: no live imports.
- `src/components/ui/LogoCloud.tsx`
  Reason: no live imports; logo rendering is currently handled by `src/components/sections/ClientLogos.tsx`.

### Unused Export

- `buttonVariants` in `src/components/ui/Button.tsx`
  Reason: no current imports found.

### Unused Direct Dependencies

High-confidence genuine unused direct dependencies:

- `@gsap/react`
- `next-intl`
- `next-themes`
- `react-scan`
- `swiper`

Reason: no code or config references found, and `depcheck` also flags them.

Important distinction:

- `@gsap/react` is unused.
- `gsap` is still live and must stay. It is imported in `src/components/ui/WhisperText.tsx`.

### Unused Dev Dependencies

- `eslint-config-prettier`
- `eslint-plugin-perfectionist`

Reason: no current references found in `eslint.config.mjs` or elsewhere in the active codebase.

## Genuine, But Likely Unwired Structured Content

These are genuine unused exports in the current codebase, but they look more like content blocks that are not currently connected to page templates than random dead code.

Architectural note:

- `docs/CONTENT_ARCHITECTURE_STRATEGY.md` explicitly states that content stays in `src/content/` until a real CMS replaces it.
- Because of that, these exports should be treated as "currently unwired content source" rather than automatic deletion candidates.

- `HOME_HERO_CONTENT` in `src/content/home.tsx`
  Reason: `src/app/page.tsx` renders `<Hero />` without passing this object, and `src/components/sections/Hero.tsx` has its own default props.
- `ABOUT_CASE_STUDIES` in `src/content/about.tsx`
  Reason: `src/app/about/page.tsx` does not import or render it.
- `CORPORATE_VIDEO_STRATEGY` in `src/content/services/detail/corporate-video-production.tsx`
  Reason: the page imports hero, why, deliverables, proof bar, case studies, and FAQ, but not this block.
- `CUSTOM_EVENTS_WHY` in `src/content/services/detail/custom-events.tsx`
  Reason: the page imports hero, deliverables, proof bar, formats, case studies, and FAQ, but not `why`.
- `BOOTH_RENTAL_DELIVERABLES` in `src/content/services/detail/event-booth-rental.tsx`
  Reason: the page uses `why`, `pricing`, and `process`, not `deliverables`.
- `ELG_DEFINITION` in `src/content/services/detail/event-lead-generation.tsx`
  Reason: standalone definition string with no live consumer.
- `LIVE_STREAMING_EVENTS` in `src/content/services/detail/live-streaming-services.tsx`
  Reason: the page does not pass it into `ServiceDetail`.
- `MODULAR_BOOTHS_DELIVERABLES` in `src/content/services/detail/modular-portable-booths.tsx`
  Reason: the page uses `why`, `pricing`, case studies, and FAQ, not `deliverables`.
- `MODULAR_BOOTHS_FEATURES` in `src/content/services/detail/modular-portable-booths.tsx`
  Reason: no live consumer found.
- `SEO_DEFINITION` in `src/content/services/detail/seo-services.tsx`
  Reason: standalone definition string with no live consumer.
- `VIDEO_EDITING_WHY` in `src/content/services/detail/video-editing-services.tsx`
  Reason: the page does not pass `why`.
- `VIDEO_EDITING_TURNAROUND` in `src/content/services/detail/video-editing-services.tsx`
  Reason: the page uses the alias `VIDEO_EDITING_TIMELINE`, so the underlying named export is unused by that name.

## Special Caution Item

### `three`

`three` looks like a genuinely unused direct dependency at the app level, but it sits close to live globe features.

What was verified:

- live code imports `react-globe.gl` in `src/components/sections/GlobalPresence.tsx`
- live code also imports `react-globe.gl` in `src/components/ui/Globe.tsx`
- `npm ls` shows:
  - `react-globe.gl -> globe.gl -> three`
  - `react-globe.gl -> globe.gl -> three-globe`

Assessment:

- the app does not import `three` directly
- `three` is present transitively through the globe stack
- removal is probably safe as a direct dependency cleanup
- removal should still be paired with an immediate `npm run build` check

## Supporting Cross-Checks

### Home Hero Content

- `src/app/page.tsx` renders `<Hero />` directly.
- `src/components/sections/Hero.tsx` defines built-in default `title`, `subtitle`, `image`, CTA labels, and `stat`.
- Therefore `HOME_HERO_CONTENT` is genuinely unused in the current homepage implementation.

### About Case Studies

- `src/app/about/page.tsx` imports:
  - `ABOUT_HERO`
  - `ABOUT_ORIGIN_TIMELINE`
  - `ABOUT_STATS`
  - `ABOUT_TEAM`
  - `ABOUT_VALUES`
  - `ABOUT_PRESENCE`
  - `ABOUT_TESTIMONIALS`
  - `ABOUT_CONTACT`
- It does not import `ABOUT_CASE_STUDIES`.

### Service Detail Content Blocks

For several service detail pages, the page component imports only a subset of the available content exports and passes only those into `ServiceDetail`.

Examples:

- `src/app/services/media-production/corporate-video-production/page.tsx`
  does not import `CORPORATE_VIDEO_STRATEGY`
- `src/app/services/global-event-solutions/custom-events/page.tsx`
  does not import `CUSTOM_EVENTS_WHY`
- `src/app/services/media-production/live-streaming-services/page.tsx`
  does not import `LIVE_STREAMING_EVENTS`

This is why these items are classified as genuine unused exports in the current codebase.

## Removal Order Recommendation

Safest first:

1. Delete the definitely unused files.
2. Remove `buttonVariants` export if no consumer is introduced in parallel work.
3. Remove unused dev dependencies:
   - `eslint-config-prettier`
   - `eslint-plugin-perfectionist`
4. Remove direct dependencies with high confidence:
   - `@gsap/react`
   - `next-intl`
   - `next-themes`
   - `react-scan`
   - `swiper`
5. Handle `react-use-measure` together with deletion of `InfiniteSlider.tsx`.
6. Remove `three` only with immediate build verification.
7. Remove unwired structured content exports only as a deliberate content cleanup pass, not as a blind lint fix.

## Notes

- These findings were verified against the current codebase state, not just `knip` output alone.
- Some files in the repo were being edited concurrently by parallel agents during this audit, so content cleanup should still be done carefully and incrementally.
- Other packages near this cleanup area were also spot-checked and are in active use, including `gsap`, `@builder.io/partytown`, `schema-dts`, `@studio-freight/lenis`, and `lucide-react`.
