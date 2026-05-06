# Revised Master Plan: Structure, Semantics, SEO, Performance, And Cleanup

## 1. Guiding Priorities
- Preserve current design exactly: layout, spacing, type rhythm, colors, animations, and interactions must not visually change.
- Prioritize design, SEO, and performance together.
- Use `docs/url-structure.md` as the canonical route source.
- Use `docs/B2B-SA-Other Pages.md` and `docs/B2B Sales Arrow — Master SEO Landing Page Structure.md` as dummy content/SEO sources until the real CMS is connected.
- Keep package versions unchanged.
- Target zero lint errors and zero warnings.

## 2. Immediate Stabilization
Before any refactor:
- Restore build-critical deleted components exactly:
  - `HomeHero`
  - `GlobalPresence`
  - `zoom-parallax`
  - `logo-cloud-3`
- Do not replace `HomeHero` with the newer simpler `Hero.tsx`; that would change design.
- Run typecheck/build after restore.
- Capture screenshots of key pages for visual baseline.

## 3. Phase 1: Heading Semantics Only
Scope is intentionally narrow.

### Rules
- Exactly one `h1` per page.
- Each major section title gets one `h2`.
- Nothing else in that section uses `h2`.
- `h3` is for cards, subsections, FAQ questions, timeline entries.
- `h4` is only for meaningful grouped metadata labels.
- Eyebrows, badges, stats, nav group labels, names, dates, and decorative display text are not headings.

### Canonical Type Scale
| Tag | Use | Tailwind Classes |
|---|---|---|
| `h1` | Page title / hero title | `font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-charcoal` |
| `h2` | Section title | `font-heading text-4xl lg:text-5xl font-bold leading-tight text-brand-charcoal` |
| `h3` | Card/subsection title | `font-heading text-2xl lg:text-3xl font-bold leading-tight text-brand-charcoal` |
| `h4` | Small semantic metadata label | `text-xs font-bold uppercase tracking-wider` |

### Components For Phase 1 Only
- `Heading`
- `Text`
- `Eyebrow`
- `GradientText`

Do not include `Button`, `Card`, `ImageFrame`, `SectionShell`, `SectionHeader`, or CMS renderers in Phase 1.

### Specific Violations To Fix
- `CinematicFooter.tsx`: demote `h3` nav labels like “Company”, “Services”, “Resources”, “Contact” to `span` or `p`.
- `Testimonials.tsx`: demote reviewer-name `h4` to `p` or `span`.
- `ComparisonTable.tsx`, `ServicesGrid.tsx`, `ProcessTimeline.tsx`: align `h2` sizing to the canonical `h2` scale if screenshots confirm no visual drift.
- `CinematicSequence.tsx`: allow explicit exception because animation-driven overlay headings use `titleClassName`. Keep semantics valid, but do not force it through the shared `Heading` component if it breaks animation.

## 4. Phase 2: Structure And Component System
After heading cleanup is verified:
- Create reusable layout/design components:
  - `SectionShell`
  - `SectionHeader`
  - `Button`
  - `ButtonLink`
  - `Card`
  - `ImageFrame`
  - `StatCard`
  - `FAQCard`
  - `ContactForm`
- Extract repeated patterns by copying current classes first.
- No visual simplification during extraction.
- Keep animation-heavy components isolated.

## 5. Phase 3: CMS-Ready Mock Content Layer
Do not build a `CmsHeadingRenderer` yet. It is premature until the real CMS contract exists.

Instead:
- Create a lightweight mock content registry:
  - page IDs
  - canonical URLs
  - SEO fields
  - section data
  - internal link IDs
- Keep content serializable where practical.
- Internal links should use `pageId` so future CMS linking is efficient.
- Route files stay explicit for SEO and import page data from the registry.

## 6. Canonical URL And SEO Plan
Canonical routes come from `docs/url-structure.md`.

Redirect non-canonical extras:
- `/services/global-event-solutions/modular-portable-booths` → `/services/booth-design-production/modular-portable-booths`
- `/services/media-production/youtube-ads-b2b` → `/services/media-production`
- `/services/media-production/video-testimonials` → `/services/media-production`

Keep system pages:
- `/privacy-policy`
- `/terms-and-conditions`
- `/thank-you`

Add:
- `metadataBase: https://b2bsalesarrow.com`
- canonical metadata
- sitemap
- robots
- FAQ JSON-LD where FAQ content exists
- breadcrumb JSON-LD for service pages

## 7. Dead Code Cleanup
After import graph verification:
- Delete obsolete one-off content/page components.
- Delete old unused service content components not mapped to canonical URLs.
- Delete junk outputs:
  - `scratch/cleanup.js`
  - `lint_output.txt`
  - `.DS_Store`
- Remove unused default public assets only if unreferenced.
- Keep core primitives like Button/Icon even if lightly used.

## 8. Performance Plan
- Make `SmoothScrollProvider` the only Lenis owner.
- Remove duplicate page-level RAF/smooth-scroll setup.
- Keep WebGL/globe components dynamically loaded.
- Make globe random data deterministic.
- Use `next/image` where it does not change layout or visuals.
- Add accurate `sizes`.
- Keep `"use client"` only where interaction requires it.

## 9. Lint And Quality
Add scripts:
```json
{
  "typecheck": "tsc --noEmit --incremental false",
  "check": "npm run lint && npm run typecheck && npm run build"
}
```

Fix:
- unused imports
- stale eslint disables
- unsafe `any`
- invalid Tailwind classes
- `<img>` warnings where safe
- placeholder links where safe

## 10. Verification
Run:
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run check`

Visual regression pages:
- `/`
- `/services/global-event-solutions`
- `/services/global-event-solutions/trade-show-booth-design`
- `/services/media-production`
- `/services/performance-marketing/seo-services`
- `/about-us`
- `/blog`
- `/case-studies`
- `/contact-us`
- `/privacy-policy`
- `/terms-and-conditions`

DOM checks:
- one `h1` per page
- one section-title `h2` per major section
- no heading tags for decorative labels
- `h3` used for subsections/cards
- `h4` only for metadata groups

## 11. Final Scope Discipline
Phase 1 is heading semantics and typography only.

The full project cleanup still includes CMS-ready structure, SEO, performance, dead-code removal, and component extraction, but those happen after the heading pass proves design-safe.
