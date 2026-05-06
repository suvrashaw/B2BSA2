# Authoritative Master Plan: B2B Sales Arrow (B2BSA2)

This is the single canonical plan. It supersedes all previous PLAN N.md files. Every implementation decision below is grounded in the current file state as of 2026-05-07.

---

## 1. Project Identity & Non-Negotiable Constraints

**Stack:** Next.js 16.2.4, React 19, TypeScript (strict), Tailwind CSS v4 (CSS-variable config in `src/app/globals.css`), Framer Motion 12, GSAP 3 + ScrollTrigger, Three.js, react-globe.gl, Lenis smooth scroll, Swiper, CVA, clsx, tailwind-merge.

**Design tokens (from `globals.css`):**
- `--color-brand-blue: #1E6091`
- `--color-brand-cyan: #4BC0D9`
- `--color-brand-red: #B23A48`
- `--color-brand-charcoal: (dark near-black)`
- `--color-brand-gray: (light background)`
- `--font-heading` → Playfair Display (loaded in `layout.tsx`)
- `--font-sans` → Montserrat (loaded in `layout.tsx`)

**Absolute constraints:**
- Zero visual change to any page. Layout, spacing, type rhythm, colors, shadows, animations, and interactions must be pixel-identical before and after every phase.
- Never change package versions.
- Never commit secrets (`.env.mcp` is gitignored).
- Never use Vue/Vuetify patterns.
- Use existing components before creating new ones.
- Keep animation code isolated; do not refactor `CinematicSequence.tsx`, `CinematicFooter.tsx` GSAP logic, or `Hero.tsx` scroll parallax.
- `CinematicSequence.tsx` is an explicit heading exception — it uses animation-driven `titleClassName` from content data and must not be forced through the shared `Heading` component.

**Implementation order discipline:** Complete each phase fully and verify before starting the next. Design preservation overrides component abstraction if the two conflict.

---

## 2. Current State Audit

### 2.1 Route Inventory (35 routes)

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Build-broken: bad HomeHero import |
| `/about-us` | `src/app/about-us/page.tsx` | Build-broken: bad HomeHero import |
| `/blog` | `src/app/blog/page.tsx` | — |
| `/case-studies` | `src/app/case-studies/page.tsx` | — |
| `/contact-us` | `src/app/contact-us/page.tsx` | — |
| `/events` | `src/app/events/page.tsx` | Not in canonical URL list |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | — |
| `/terms-and-conditions` | `src/app/terms-and-conditions/page.tsx` | — |
| `/thank-you` | `src/app/thank-you/page.tsx` | — |
| `/services/global-event-solutions` | `…/page.tsx` | Canonical hub |
| `/services/global-event-solutions/trade-show-booth-design` | — | Canonical detail |
| `/services/global-event-solutions/event-lead-generation` | — | Canonical detail |
| `/services/global-event-solutions/industry-events` | — | Canonical detail |
| `/services/global-event-solutions/custom-events` | — | Canonical detail |
| `/services/global-event-solutions/event-booth-rental` | — | Canonical detail |
| `/services/global-event-solutions/trade-show-booth-builder` | — | Canonical detail |
| `/services/global-event-solutions/modular-portable-booths` | — | **Non-canonical** → redirect |
| `/services/booth-design-production/modular-portable-booths` | — | Canonical detail |
| `/services/media-production` | — | Canonical hub |
| `/services/media-production/event-video-production` | — | Canonical detail |
| `/services/media-production/corporate-video-production` | — | Canonical detail |
| `/services/media-production/video-editing-services` | — | Canonical detail |
| `/services/media-production/live-streaming-services` | — | Canonical detail |
| `/services/media-production/video-testimonials` | — | **Non-canonical** → redirect |
| `/services/media-production/youtube-ads-b2b` | — | **Non-canonical** → redirect |
| `/services/performance-marketing` | — | Canonical hub |
| `/services/media-production/seo-services` | — | Canonical detail |
| `/services/performance-marketing/paid-advertising` | — | Canonical detail |
| `/services/performance-marketing/linkedin-ads-b2b` | — | Canonical detail |
| `/services/market-research` | — | Canonical hub |
| `/services/market-research/data-augmentation` | — | Canonical detail |
| `/services/market-research/data-validation` | — | Canonical detail |
| `/services/market-research/human-powered-market-intelligence` | — | Canonical detail |
| `/services/sales-qualified-lead-generation` | — | Canonical detail |

### 2.2 Component Inventory

**`src/components/sections/` (20 files):**
`Blogs.tsx`, `CTABanner.tsx`, `CaseStudies.tsx`, `CinematicSequence.tsx`, `ClientLogos.tsx`, `ComparisonTable.tsx`, `ContactUs.tsx`, `FAQ.tsx`, `FAQAccordion.tsx`, `Hero.tsx`, `OurServices.tsx`, `ProcessTimeline.tsx`, `ServicesGrid.tsx`, `StatsBar.tsx`, `Testimonials.tsx`, `TextSection.tsx`, `USPSection.tsx`, `UpcomingEvents.tsx`, `WhoWeAre.tsx`, `WhyChooseUs.tsx`

**`src/components/ui/` (7 files):**
`Globe.tsx`, `GlobeVisualization.tsx`, `Icon.tsx`, `button.tsx`, `button-colorful.tsx`, `infinite-slider.tsx`, `timeline.tsx`

**`src/components/layout/` (3 files):**
`Header.tsx`, `Footer.tsx`, `CinematicFooter.tsx`

**`src/components/about/` (13 files):**
`AboutPageContent.tsx`, `animated-h3.tsx`, `background-ripple-effect.tsx`, `clients-marquee.tsx`, `cta-section.tsx`, `culture.tsx`, `editorial-hero.tsx`, `global-presence.tsx`, `layout-text-flip.tsx`, `pointer-highlight.tsx`, `team-grid.tsx`, `testimonials.tsx`, `timeline.tsx`, `whisper-text.tsx`

**`src/components/content/` (2 files):**
`ServiceDetailPage.tsx`, `ServiceHubPage.tsx`

**`src/components/contact/` (2 files):**
`ContactUsContent.tsx`, `ThankYouContent.tsx`

**`src/components/resources/` (2 files):**
`BlogIndexContent.tsx`, `CaseStudiesIndexContent.tsx`

**`src/components/legal/` (2 files):**
`PrivacyPolicyContent.tsx`, `TermsContent.tsx`

**`src/components/services/` (2 files):**
`VideoTestimonialsContent.tsx`, `YouTubeAdsB2BContent.tsx`

**`src/components/providers/` (2 files):**
`SmoothScrollProvider.tsx`, `ThemeProvider.tsx`

### 2.3 Missing Files (confirmed absent)

| Path | Status | Impact |
|---|---|---|
| `src/components/sections/HomeHero.tsx` | Missing | Build-breaks `/` and `/about-us` |
| `src/components/ui/GlobalPresence.tsx` | Missing | May break other imports |
| `src/components/ui/zoom-parallax.tsx` | Missing | May break other imports |
| `src/components/ui/logo-cloud-3.tsx` | Missing | May break other imports |
| `src/components/ui/Heading.tsx` | Missing | To be created in Phase 1 |
| `src/components/ui/Text.tsx` | Missing | To be created in Phase 1 |
| `src/components/ui/Eyebrow.tsx` | Missing | To be created in Phase 1 |
| `src/components/ui/GradientText.tsx` | Missing | To be created in Phase 1 |

### 2.4 Confirmed Heading Violations

| File | Line | Tag | Current Use | Correct Fix |
|---|---|---|---|---|
| `src/components/layout/CinematicFooter.tsx` | 178 | `h3` | "Company" nav label | Change to `span` |
| `src/components/layout/CinematicFooter.tsx` | 187 | `h3` | "Services" nav label | Change to `span` |
| `src/components/layout/CinematicFooter.tsx` | 196 | `h3` | "Resources" nav label | Change to `span` |
| `src/components/layout/CinematicFooter.tsx` | 205 | `h3` | "Contact" nav label | Change to `span` |
| `src/components/sections/Testimonials.tsx` | 165 | `h4` | `testimonial.name` reviewer name | Change to `p` |

### 2.5 Heading Class Inconsistencies (visual drift risk — screenshot first)

| File | Current h2 classes | Canonical h2 classes | Risk |
|---|---|---|---|
| `ComparisonTable.tsx` | `text-3xl md:text-5xl font-bold font-heading` | `font-heading text-4xl lg:text-5xl font-bold leading-tight text-brand-charcoal` | Visual — skip unless screenshot confirms match |
| `ServicesGrid.tsx` | `text-3xl md:text-5xl font-bold font-heading` | same as above | same |
| `ProcessTimeline.tsx` | `text-3xl md:text-5xl font-bold font-heading` | same as above | same |
| `USPSection.tsx` | `text-3xl md:text-5xl font-bold font-heading` | same as above | same |
| `FAQAccordion.tsx` | `text-3xl md:text-5xl font-bold` | same as above | same |
| `FAQ.tsx` | `font-heading text-3xl lg:text-5xl font-bold` | same as above | same |
| `CTABanner.tsx` | `text-3xl md:text-6xl font-bold text-white font-heading` | intentionally different (CTA variant, white text) | Keep — design intent |
| `ContactUs.tsx` | `font-heading text-4xl lg:text-6xl font-bold` | intentionally different (contact variant) | Keep — design intent |
| `CinematicFooter.tsx` h2 | `text-5xl md:text-8xl font-black tracking-tighter` | intentionally different (display footer) | Keep — design intent |

### 2.6 Non-Canonical Content Components

Files in `src/components/services/` that map to non-canonical routes:
- `VideoTestimonialsContent.tsx` → serves `/services/media-production/video-testimonials` (to redirect)
- `YouTubeAdsB2BContent.tsx` → serves `/services/media-production/youtube-ads-b2b` (to redirect)

These cannot be deleted until the redirect pages are converted to `redirect()` calls. Delete after Phase 4.

### 2.7 Junk & Noise Files

| File | Action |
|---|---|
| `scratch/cleanup.js` | Delete |
| `lint_output.txt` | Delete |
| 44 × `.DS_Store` across project | Delete via `find . -name ".DS_Store" -delete` |
| `public/next.svg`, `public/vercel.svg`, `public/window.svg`, `public/file.svg` | Delete only after confirming no references (grep first) |
| `public/globe.svg` | Grep before deleting — may be referenced |

### 2.8 Missing npm Scripts

Current `package.json` scripts: `dev`, `build`, `start`, `lint`.
Missing: `typecheck`, `check`.

### 2.9 Content Architecture

Content lives in `src/content/`:
- `home-section-content.tsx` — all home page section data (testimonials, services, case studies, FAQ, etc.)
- `navigation.ts` — top nav, service nav groups, footer nav
- `pages.ts` — page metadata
- `page-sections/` — per-page content (about-us, blog, case-studies, contact, events, terms, thank-you)
- `page-sections/services/detail/` — 17 service detail content files
- `page-sections/services/` — 5 service hub content files

---

## 3. Phase 0: Build Stabilization

**Goal:** Zero build errors. No visual changes. Complete before any other work.

### Step 0.1 — Fix HomeHero import

**Root cause:** Both `src/app/page.tsx:2` and `src/app/about-us/page.tsx:3` import from `@/components/sections/HomeHero` which does not exist. The actual file is `src/components/sections/Hero.tsx` and exports the same `Hero` function.

**Fix:** Create `src/components/sections/HomeHero.tsx` as a re-export shim so all existing imports continue to work without touching route files:

```tsx
// src/components/sections/HomeHero.tsx
export { Hero } from "./Hero";
```

This is a two-line file. It preserves the import path used in page.tsx and about-us/page.tsx and does not change any visual component.

### Step 0.2 — Audit and stub remaining missing imports

Grep for any import of `zoom-parallax`, `logo-cloud-3`, or `ui/GlobalPresence` across all `.tsx`/`.ts` files:

```bash
grep -r "zoom-parallax\|logo-cloud-3\|ui/GlobalPresence" src/
```

For each found import:
- If the file is a live page/section, create a minimal stub component that renders `null` so the build passes without visual regression.
- If the file is already dead code (not imported by any live route), note it for deletion in Phase 5.

### Step 0.3 — Verify build baseline

```bash
npm run lint
./node_modules/.bin/tsc --noEmit --incremental false --pretty false
npm run build
```

Record all lint errors and type errors to a mental list (not a file — we delete `lint_output.txt` in Phase 5). The build must pass cleanly before proceeding to Phase 1.

---

## 4. Phase 1: Typography Primitives

**Goal:** Create four shared components. Do not use them yet. Do not refactor any existing component in this phase.

### 4.1 `src/components/ui/Heading.tsx`

**Contract:**
- Props: `as: "h1" | "h2" | "h3" | "h4"` (required), `children`, `className?`, `preserveClassName?: boolean`
- `preserveClassName=true` skips merging default variant classes, passing `className` through untouched. Use this for animation-specific sections.
- Uses `cva` for variant map.
- Uses `cn` (clsx + tailwind-merge) to merge variant + `className`.

**Canonical variant classes:**

| Level | Classes |
|---|---|
| `h1` | `font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-charcoal` |
| `h2` | `font-heading text-4xl lg:text-5xl font-bold leading-tight text-brand-charcoal` |
| `h3` | `font-heading text-2xl lg:text-3xl font-bold leading-tight text-brand-charcoal` |
| `h4` | `text-xs font-bold uppercase tracking-wider` |

**Implementation:**

```tsx
// src/components/ui/Heading.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("", {
  variants: {
    level: {
      h1: "font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-charcoal",
      h2: "font-heading text-4xl lg:text-5xl font-bold leading-tight text-brand-charcoal",
      h3: "font-heading text-2xl lg:text-3xl font-bold leading-tight text-brand-charcoal",
      h4: "text-xs font-bold uppercase tracking-wider",
    },
  },
});

interface HeadingProps extends VariantProps<typeof headingVariants> {
  as: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
  preserveClassName?: boolean;
}

export function Heading({ as: Tag, children, className, preserveClassName, level }: HeadingProps) {
  const resolvedLevel = level ?? (Tag as "h1" | "h2" | "h3" | "h4");
  const classes = preserveClassName ? className : cn(headingVariants({ level: resolvedLevel }), className);
  return <Tag className={classes}>{children}</Tag>;
}
```

### 4.2 `src/components/ui/Text.tsx`

**Contract:**
- Props: `variant: "hero" | "section" | "card" | "muted"`, `as?: "p" | "span" | "div"` (default `"p"`), `children`, `className?`

**Canonical variant classes:**

| Variant | Classes |
|---|---|
| `hero` | `text-xl leading-relaxed text-brand-charcoal/70` |
| `section` | `text-lg leading-relaxed text-gray-600` |
| `card` | `text-sm md:text-base leading-relaxed text-gray-600` |
| `muted` | `text-sm text-gray-500 leading-relaxed` |

### 4.3 `src/components/ui/Eyebrow.tsx`

**Contract:**
- Props: `as?: "span" | "p"` (default `"span"`), `children`, `className?`
- Never renders a heading tag.
- Default classes: `text-sm font-semibold tracking-wide uppercase`
- `className` is additive (merged via `cn`) so existing color/background overrides (e.g. `bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-full px-4 py-1.5`) pass through.

### 4.4 `src/components/ui/GradientText.tsx`

**Contract:**
- Props: `variant: "blue" | "red"`, `children`, `className?`
- Renders a `span` wrapping children with the appropriate gradient text class.
- `blue`: existing `bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent` (verify exact classes against current usage in `CinematicSequence.tsx` and `Hero.tsx`).
- `red`: existing red highlight span class.
- If the gradient classes used in components differ from this, copy them exactly rather than normalizing.

### 4.5 Verification after Phase 1

- Run `npm run lint` and `tsc --noEmit`. New files must have zero errors.
- Do not run the dev server yet — these components are unused.

---

## 5. Phase 2: Heading Semantic Corrections

**Goal:** Fix the five confirmed heading violations. Zero visual change. One component at a time; verify build after each.

### 5.1 `src/components/layout/CinematicFooter.tsx` — Nav labels

**Change:** Lines 178, 187, 196, 205 — replace each `h3` with `span`. The classes stay identical; only the tag changes.

Before (each of the four columns):
```tsx
<h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue">Company</h3>
```

After:
```tsx
<span className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue">Company</span>
```

Apply the same change to "Services" (line 187), "Resources" (line 196), and "Contact" (line 205). The `space-y-8` wrapper `div` and the `ul` below each label remain completely untouched.

### 5.2 `src/components/sections/Testimonials.tsx` — Reviewer name

**Change:** Line 165 — replace `h4` with `p`. Class stays identical.

Before:
```tsx
<h4 className="font-heading font-bold text-lg text-gray-900 leading-tight">
  {testimonial.name}
</h4>
```

After:
```tsx
<p className="font-heading font-bold text-lg text-gray-900 leading-tight">
  {testimonial.name}
</p>
```

### 5.3 Heading scale mismatches (deferred unless screenshot-confirmed safe)

The following components use `text-3xl md:text-5xl` for `h2` rather than the canonical `text-4xl lg:text-5xl`. These are **intentionally deferred** — the visual difference (4xl vs 3xl at mobile) is real and must be screenshot-compared before touching:

- `ComparisonTable.tsx`
- `ServicesGrid.tsx`
- `ProcessTimeline.tsx`
- `USPSection.tsx`
- `FAQAccordion.tsx`
- `FAQ.tsx`

**Action for each:** Take a before screenshot. Apply the canonical classes. Take an after screenshot. Compare. If there is any visual difference, revert and mark as "accepted variance" in this plan. If screenshots match, leave the fix in place.

Intentional exceptions (never normalize):
- `CTABanner.tsx` h2: `text-3xl md:text-6xl font-bold text-white font-heading` — CTA-specific design, intentionally large and white.
- `ContactUs.tsx` h2: `font-heading text-4xl lg:text-6xl font-bold` — Contact-section emphasis, intentionally large.
- `CinematicFooter.tsx` h2 "Ready to Accelerate?": `text-5xl md:text-8xl font-black tracking-tighter` — display footer, intentionally cinematic.
- `CinematicSequence.tsx` overlays: animation-driven `titleClassName` from content. Keep exactly as-is.
- `src/components/about/editorial-hero.tsx` h1: `font-heading text-[8vw] md:text-[5vw] lg:text-[5.5vw] font-bold leading-[1.1] tracking-tight` — About editorial variant, intentionally viewport-based.

### 5.4 Multi-h2 violations audit

Grep every page for multiple `h2` in the same section scope:

```bash
grep -n "<h2" src/components/sections/*.tsx src/components/about/*.tsx src/components/content/*.tsx
```

A section is allowed exactly one `h2`. If any section component contains two or more `h2` tags, demote the secondary ones to `h3` after screenshot comparison.

### 5.5 h1 count audit per route

After Phase 2, verify each page route has exactly one `h1`:

| Route | Expected h1 source |
|---|---|
| `/` | `Hero.tsx` → `font-heading text-5xl lg:text-7xl` |
| `/about-us` | `editorial-hero.tsx` → `font-heading text-[8vw]…` |
| `/blog` | `BlogIndexContent.tsx` → `text-4xl md:text-6xl font-bold font-heading` |
| `/case-studies` | `CaseStudiesIndexContent.tsx` → `text-4xl md:text-6xl font-bold font-heading` |
| `/contact-us` | `ContactUsContent.tsx` → `text-4xl md:text-6xl font-bold font-heading` |
| `/privacy-policy` | `PrivacyPolicyContent.tsx` |
| `/terms-and-conditions` | `TermsContent.tsx` |
| `/thank-you` | `ThankYouContent.tsx` |
| service hubs | `ServiceHubPage.tsx` hero |
| service details | `ServiceDetailPage.tsx` hero |

For any page found to have zero `h1` or more than one `h1`, fix it: the main title of the page gets `h1`, everything else demotes.

### 5.6 Card and subsection h3 audit

All cards, subsections, FAQ items, timeline entries, and service items must use `h3`, not `h2`. Quick audit targets:
- `CaseStudies.tsx` — case study titles: currently `h3` with `font heading font-bold text-2xl text-white` ✓
- `OurServices.tsx` — service titles: currently `h3` with `font-heading text-3xl font-bold` ✓
- `FAQ.tsx` — FAQ question text: currently `h3` with `font heading text-lg font-bold` ✓
- `UpcomingEvents.tsx` — event titles: currently `h3` ✓
- `src/components/ui/timeline.tsx` — timeline entries: currently `h3` ✓
- `WhyChooseUs.tsx` — reason titles: check actual tag; if `h2`, demote to `h3`
- `about/team-grid.tsx` — team member names: check actual tag; if heading, demote to `p`
- `about/clients-marquee.tsx` — section title: check if `h2` or `h3`; section title → `h2`, but it must not duplicate an existing `h2` on the same page

### 5.7 h4 audit

`h4` is only valid for grouped metadata labels — Challenge, Solution, Date, Location. Verified valid uses:
- `CaseStudies.tsx` — "text-[10px] font-bold" labels: ✓ (Challenge/Solution)
- `UpcomingEvents.tsx` — "text-xs font-bold" labels: ✓ (Date/Location)

Invalid (already fixed in 5.2):
- `Testimonials.tsx` line 165 — reviewer name: demoted to `p`

Check `Footer.tsx` for any `h4` on footer column labels; demote to `span` if present.

### 5.8 Verification after Phase 2

```bash
npm run lint
./node_modules/.bin/tsc --noEmit --incremental false --pretty false
npm run build
```

Then start the dev server and visually confirm:
- `/` — hero, services, testimonials, footer unchanged
- `/about-us` — editorial hero, globe, testimonials unchanged
- Footer — nav labels still visually styled correctly despite tag change

---

## 6. Phase 3: Supporting Layout Components

**Goal:** Create reusable layout/section primitives. Do not refactor existing components into them yet — create the new components and leave existing code untouched.

### 6.1 `src/components/sections/SectionShell.tsx`

Handles: `id`, semantic `<section>`, container width, spacing, background classes, custom `className`.

```tsx
interface SectionShellProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}
```

Default container: `container mx-auto px-8`. Default spacing: `py-20`. Both overridable via `className`/`containerClassName`.

### 6.2 `src/components/sections/SectionHeader.tsx`

Handles: optional `eyebrow`, required `heading`, optional `description`, optional action slot, configurable heading level (defaults to `h2`).

```tsx
interface SectionHeaderProps {
  eyebrow?: string;
  eyebrowClassName?: string;
  heading: React.ReactNode;
  headingLevel?: "h1" | "h2" | "h3";
  headingClassName?: string;
  description?: string;
  descriptionClassName?: string;
  action?: React.ReactNode;
  align?: "left" | "center";
}
```

Uses `Heading` and `Eyebrow` from Phase 1 internally. `eyebrowClassName` allows passing the full pill style string (e.g. `rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue px-4 py-1.5 inline-block mb-6`) to match each section's existing eyebrow appearance.

### 6.3 `src/components/ui/button.tsx` — Extensions

The existing `src/components/ui/button.tsx` uses CVA. Review it for current variants. Add missing variants only if needed (e.g. `ghost`, `link`). Do not change existing variants.

### 6.4 `src/components/ui/Card.tsx`

A thin visual wrapper. Opt-in only. Preserves existing rounded/shadow/border classes rather than normalizing them.

```tsx
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
```

Default classes: `bg-white rounded-3xl border border-gray-100 shadow-sm`. All overridable via `className`.

### 6.5 `src/components/ui/ImageFrame.tsx`

Wraps `next/image` with exact existing radius, object-fit, and sizes behavior.

```tsx
interface ImageFrameProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  objectFit?: "cover" | "contain";
}
```

Default: `fill`, `object-cover`, `rounded-3xl`. The outer container must have `relative` and appropriate sizing.

### 6.6 `src/components/ui/CmsHeadingRenderer.tsx`

A small local renderer for future-ready structured heading data. Currently used nowhere — exists for when content modules benefit from it.

```tsx
interface CmsHeadingData {
  text: string;
  highlight?: string;
  highlightVariant?: "blue" | "red";
}

interface CmsHeadingRendererProps {
  data: CmsHeadingData;
  level: "h1" | "h2" | "h3" | "h4";
  className?: string;
}
```

Renders `Heading` with the text, splitting `highlight` segment into `GradientText` if present.

### 6.7 Verification after Phase 3

- New components must have zero lint errors.
- No visual changes — these components are all created but not yet wired into existing pages.
- Run `npm run build` to confirm no import issues.

---

## 7. Phase 4: SEO & Metadata

**Goal:** Every canonical page has correct metadata, canonical URL, and structured data. Non-canonical routes redirect.

### 7.1 Add `metadataBase` to `src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://b2bsalesarrow.com"),
  title: { default: "B2B Sales Arrow | Premium Growth Partner", template: "%s | B2B Sales Arrow" },
  description: "...",
};
```

### 7.2 Add `typecheck` and `check` scripts to `package.json`

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit --incremental false",
    "check": "npm run lint && npm run typecheck && npm run build"
  }
}
```

### 7.3 Canonical metadata per page

For each canonical route, update or create the `export const metadata: Metadata` with:
- `title`: unique, from `docs/B2B Sales Arrow — Master SEO Landing Page Structure.md`
- `description`: unique, from same doc
- `openGraph`: `{ title, description, url: "https://b2bsalesarrow.com<canonical-path>", type: "website" }`
- `alternates`: `{ canonical: "https://b2bsalesarrow.com<canonical-path>" }`

Source of truth for SEO copy: `docs/B2B Sales Arrow — Master SEO Landing Page Structure.md`.

### 7.4 Redirects for non-canonical routes

Convert each non-canonical route page to a redirect using Next.js `redirect()`:

**`src/app/services/global-event-solutions/modular-portable-booths/page.tsx`:**
```tsx
import { redirect } from "next/navigation";
export default function Page() {
  redirect("/services/booth-design-production/modular-portable-booths");
}
```

**`src/app/services/media-production/youtube-ads-b2b/page.tsx`:**
```tsx
import { redirect } from "next/navigation";
export default function Page() {
  redirect("/services/media-production");
}
```

**`src/app/services/media-production/video-testimonials/page.tsx`:**
```tsx
import { redirect } from "next/navigation";
export default function Page() {
  redirect("/services/media-production");
}
```

After converting these three pages to redirects, the `VideoTestimonialsContent.tsx` and `YouTubeAdsB2BContent.tsx` in `src/components/services/` become unreferenced and can be deleted in Phase 5.

### 7.5 `src/app/sitemap.ts`

Generate sitemap from the canonical URL list. All 26 canonical marketing pages plus `/privacy-policy` and `/terms-and-conditions`. Do not include `/thank-you` (no-index), non-canonical routes, or `/events` if it has no published content.

```ts
import type { MetadataRoute } from "next";

const canonicalUrls = [
  "/",
  "/about-us",
  "/blog",
  "/case-studies",
  "/contact-us",
  "/privacy-policy",
  "/terms-and-conditions",
  "/services/global-event-solutions",
  "/services/global-event-solutions/trade-show-booth-design",
  // ... all 26 canonical pages from docs/url-structure.md
];

export default function sitemap(): MetadataRoute.Sitemap {
  return canonicalUrls.map((url) => ({
    url: `https://b2bsalesarrow.com${url}`,
    lastModified: new Date(),
    changeFrequency: url === "/" ? "weekly" : "monthly",
    priority: url === "/" ? 1.0 : url.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
```

### 7.6 `src/app/robots.ts`

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://b2bsalesarrow.com/sitemap.xml",
  };
}
```

### 7.7 FAQ JSON-LD

Pages with FAQ sections: `/` (FAQ section), all service hub and detail pages that have FAQ content in their content files.

Create `src/lib/structured-data.ts`:

```ts
export function buildFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function buildBreadcrumbJsonLd(crumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(({ name, url }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: url,
    })),
  };
}
```

Inject via `<script type="application/ld+json">` in relevant page metadata or a small server component. Apply FAQ JSON-LD to: `/` (uses `HOME_FAQ_CONTENT`), and each service page with FAQ data in its content file. Apply breadcrumb JSON-LD to all service detail pages.

### 7.8 No-index for `/thank-you`

```tsx
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
```

### 7.9 Verification after Phase 4

```bash
npm run build
```

Then in the built output:
- Visit `/sitemap.xml` → all 26+ canonical pages listed.
- Visit `/robots.txt` → sitemap URL present, no disallow of marketing pages.
- Check page source of `/` → `<link rel="canonical" ...>` present with correct URL.
- Check page source of `/services/global-event-solutions/modular-portable-booths` → redirects to correct URL (HTTP 307 in Next.js dev, but verify in production build).
- Check page source of `/thank-you` → `noindex` in meta.

---

## 8. Phase 5: Dead Code Cleanup

**Goal:** Remove files that are confirmed unreferenced. Grep before deleting anything.

### 8.1 Junk/Output Files (delete immediately)

```bash
rm scratch/cleanup.js
rm lint_output.txt
find . -name ".DS_Store" -not -path "./.git/*" -delete
```

### 8.2 `public/` Default Assets

Grep for references first:
```bash
grep -r "next\.svg\|vercel\.svg\|window\.svg\|file\.svg\|globe\.svg" src/ public/ --include="*.tsx" --include="*.ts" --include="*.css"
```

Delete only the ones with zero references in the source tree. Never delete `logo.png`, `Frames/`, or `undraw_contact-us_s4jn.svg` — these are confirmed used.

### 8.3 `src/components/services/` Content Components

After Phase 4 converts the non-canonical pages to `redirect()` calls, these files become dead:
- `src/components/services/VideoTestimonialsContent.tsx`
- `src/components/services/YouTubeAdsB2BContent.tsx`

Confirm with grep: `grep -r "VideoTestimonialsContent\|YouTubeAdsB2BContent" src/` — should show zero hits after the redirect conversion. Then delete.

### 8.4 Other Potentially Unused Components

Run an import graph pass for these:
- `src/components/sections/TextSection.tsx` — grep usage
- `src/components/sections/FAQAccordion.tsx` — grep usage (separate from `FAQ.tsx`)
- `src/components/sections/ComparisonTable.tsx` — grep usage
- `src/components/sections/StatsBar.tsx` — grep usage
- `src/components/sections/USPSection.tsx` — grep usage
- `src/components/about/AboutPageContent.tsx` — grep usage
- `src/components/about/whisper-text.tsx` — grep usage
- `src/components/about/layout-text-flip.tsx` — grep usage
- `src/components/about/pointer-highlight.tsx` — grep usage
- `src/components/about/background-ripple-effect.tsx` — grep usage

```bash
# Example for one file:
grep -rn "TextSection\|FAQAccordion\|ComparisonTable\|StatsBar\|USPSection" src/ --include="*.tsx" --include="*.ts"
```

Delete confirmed dead files. Keep anything with even one live import.

### 8.5 Stub Files Created in Phase 0

After Phase 5 grep pass confirms that `zoom-parallax.tsx`, `logo-cloud-3.tsx`, and `ui/GlobalPresence.tsx` are not referenced by any live page, delete the stubs. If they are still referenced, keep the stubs in place and document why.

### 8.6 Verification after Phase 5

```bash
npm run build
```

No regressions. All live pages still render. Import graph is clean.

---

## 9. Phase 6: Performance

**Goal:** Reduce duplicate animation setup and improve image loading. Zero visual change.

### 9.1 Lenis Sole Ownership

`src/components/providers/SmoothScrollProvider.tsx` must be the only file that creates a Lenis instance or calls `new Lenis()`.

Grep for other Lenis/RAF owners:
```bash
grep -rn "new Lenis\|lenis\|useRAF\|requestAnimationFrame" src/ --include="*.tsx" --include="*.ts" | grep -v SmoothScrollProvider
```

For each hit in a non-provider file: remove the duplicate Lenis instantiation. If the file has its own scroll listener, migrate it to use the shared Lenis context via the provider's exposed API or `window.__lenis` if that pattern exists.

### 9.2 Cancel RAF on Unmount

Any component with a `requestAnimationFrame` loop must call `cancelAnimationFrame` in the cleanup function returned by `useEffect`. Grep and verify:
```bash
grep -rn "requestAnimationFrame" src/ --include="*.tsx"
```

For each hit, confirm there is a matching `cancelAnimationFrame` in the effect cleanup.

### 9.3 Deterministic Globe Data

`src/components/ui/Globe.tsx` and `src/components/about/global-presence.tsx` likely generate arc/point data with `Math.random()`. This causes hydration mismatches and non-deterministic screenshots.

Fix: replace `Math.random()` in static data arrays with deterministic seeded values. Use a simple deterministic sequence or hardcoded coordinates. This does not change the visual appearance of the globe at runtime.

### 9.4 `next/image` for Non-Animated Images

Grep for `<img` tags (not from `next/image`):
```bash
grep -rn "<img " src/ --include="*.tsx"
```

For each hit that is:
- Not inside an SVG inline
- Not serving an animation frame sequence
- Not inside a component that explicitly needs raw `<img` for CSS animation reasons

Replace with `<Image>` from `next/image`. Add accurate `sizes` prop. Use `priority` only for above-the-fold hero images.

Do not replace `<img>` inside the Frames animation sequence or any GSAP canvas/WebGL context.

### 9.5 Dynamic Imports

Confirm these are already dynamically imported with `ssr: false`. If not, add:
- `Globe.tsx` / `GlobeVisualization.tsx`
- `CinematicSequence.tsx` (if it references browser APIs at module level)
- Any Three.js component

### 9.6 `"use client"` Audit

Grep all `"use client"` directives:
```bash
grep -rn '"use client"' src/ --include="*.tsx"
```

For each file: confirm it actually uses a hook, event handler, or browser API. If a component is purely presentational with no interactivity, remove `"use client"` and make it a server component. This is especially valuable for page-level wrappers and static content.

### 9.7 Verification after Phase 6

```bash
npm run build
```

The build output should show reduced client bundle size (check `next build` output for client chunk sizes). No visual regressions.

---

## 10. Phase 7: Lint & Type Quality

**Goal:** Zero lint errors, zero lint warnings, zero TypeScript errors.

### 10.1 Fix All Lint Errors

```bash
npm run lint 2>&1 | head -100
```

Common categories to fix:
- Unused imports: remove them
- Stale `// eslint-disable` comments: remove if the error no longer exists
- `any` types on globe refs: use `THREE.WebGLRenderer | null` or appropriate Three.js types
- `<img>` warnings: already handled in Phase 6
- Invalid Tailwind classes: fix typos (e.g. `hover:text-white:bg-brand-cyan` → `hover:text-white hover:bg-brand-cyan`)
- `href="#"` placeholder links: replace with actual routes from `navigation.ts` or a `#` anchor if intentional

Target: `npm run lint` produces zero output.

### 10.2 Fix All TypeScript Errors

```bash
./node_modules/.bin/tsc --noEmit --incremental false --pretty false
```

Common categories:
- Missing type imports
- `any` in component props
- Unsafe array indexing (`items[0]` without null check)
- Framer Motion ref type mismatches

Do not use `// @ts-ignore` or `// @ts-expect-error` unless the underlying library type is wrong and there is no better fix.

### 10.3 Invalid Tailwind Class Audit

Search for known broken class patterns:
```bash
grep -rn "hover:text-.*:bg-\|text-brand-.*/" src/ --include="*.tsx"
```

Fix each instance to valid Tailwind syntax. Where the intended class is ambiguous, keep the original and leave a comment.

### 10.4 Verification after Phase 7

```bash
npm run check
```

All three commands (lint, typecheck, build) must pass cleanly with zero errors and zero warnings.

---

## 11. Canonical Type Scale Reference (for ongoing development)

Use these classes for every new heading going forward. Do not create new variants without updating this plan.

| Tag | Use | Tailwind Classes |
|---|---|---|
| `h1` | Page title / hero title | `font-heading text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-charcoal` |
| `h2` | Section title (one per section) | `font-heading text-4xl lg:text-5xl font-bold leading-tight text-brand-charcoal` |
| `h3` | Card / subsection / FAQ item / timeline entry | `font-heading text-2xl lg:text-3xl font-bold leading-tight text-brand-charcoal` |
| `h4` | Grouped metadata labels only (Challenge, Solution, Date, Location) | `text-xs font-bold uppercase tracking-wider` |

| Pattern | Tailwind Classes |
|---|---|
| Hero paragraph | `text-xl leading-relaxed text-brand-charcoal/70` |
| Section paragraph | `text-lg leading-relaxed text-gray-600` |
| Card paragraph | `text-sm md:text-base leading-relaxed text-gray-600` |
| Eyebrow/pill | `text-sm font-semibold tracking-wide uppercase` |
| Tiny badge | `text-[10px] font-black uppercase tracking-widest` |

**Intentional exceptions (never normalize):**
- About editorial hero h1: `font-heading text-[8vw] md:text-[5vw] lg:text-[5.5vw] font-bold leading-[1.1] tracking-tight`
- CinematicFooter display h2: `text-5xl md:text-8xl font-black tracking-tighter`
- CinematicSequence beats: animation-driven `titleClassName` from content data
- CTABanner h2: `text-3xl md:text-6xl font-bold text-white font-heading` (white, large, CTA-specific)
- ContactUs h2: `font-heading text-4xl lg:text-6xl font-bold` (contact emphasis)

---

## 12. Heading Semantic Rules (for ongoing development)

- Exactly one `h1` per page/route.
- Each major section gets exactly one `h2`. Nothing else in that section uses `h2`.
- Cards, subsections, FAQ questions, timeline entries, and feature items use `h3`.
- `h4` only for genuine grouped metadata labels (Challenge/Solution/Date/Location on case study or event cards).
- Eyebrows, badges, stat numbers, reviewer names, nav group labels, dates, and decorative display text are never headings.
- When using `Heading` component with `preserveClassName`, you are opting out of canonical defaults — document why.

---

## 13. Verification Checklist (run after all phases)

### Commands

```bash
npm run check
# expands to:
npm run lint         # zero errors, zero warnings
npm run typecheck    # zero errors
npm run build        # clean build, no warnings
```

### DOM Checks (browser DevTools or automated)

- [ ] Exactly one `<h1>` per route
- [ ] Each major section has one `<h2>`, never two
- [ ] Cards/subsections use `<h3>`
- [ ] `<h4>` only for Challenge/Solution/Date/Location metadata
- [ ] No `<h3>` or `<h4>` for nav labels, reviewer names, badge text, or decorative content
- [ ] CinematicFooter nav labels render as `<span>` not `<h3>`
- [ ] Testimonials reviewer name renders as `<p>` not `<h4>`

### Route Checks

- [ ] `/sitemap.xml` — all 26 canonical pages present
- [ ] `/robots.txt` — valid, includes sitemap URL
- [ ] `/services/global-event-solutions/modular-portable-booths` → 307 redirect to `/services/booth-design-production/modular-portable-booths`
- [ ] `/services/media-production/youtube-ads-b2b` → 307 redirect to `/services/media-production`
- [ ] `/services/media-production/video-testimonials` → 307 redirect to `/services/media-production`
- [ ] All 26 canonical pages render without error
- [ ] `/thank-you` has `noindex` in head

### Visual Regression Pages (screenshot before/after each phase)

- [ ] `/` — hero, cinematic sequence, services, case studies, testimonials, FAQ, footer globe
- [ ] `/about-us` — editorial hero, timeline, globe, team, testimonials
- [ ] `/services/global-event-solutions` — hub page hero and sections
- [ ] `/services/global-event-solutions/trade-show-booth-design` — detail page
- [ ] `/services/media-production` — hub page
- [ ] `/services/performance-marketing/seo-services` — detail page
- [ ] `/blog` — index page
- [ ] `/case-studies` — index page
- [ ] `/contact-us` — form and map
- [ ] `/privacy-policy` — legal content
- [ ] `/terms-and-conditions` — legal content

### Interaction Checks

- [ ] Header desktop services dropdown — hover opens, links work
- [ ] Mobile menu — opens, closes, all links work
- [ ] Hero animation / preloader (if any)
- [ ] Cinematic sequence — scroll-driven beats advance correctly
- [ ] Sticky service cards — cards stack and unstick on scroll
- [ ] FAQ cards — flip/scroll works
- [ ] Testimonials carousel — autoplay, prev/next navigation, coverflow animation
- [ ] About globe — renders, rotates, no hydration error
- [ ] Footer globe — renders in CinematicFooter
- [ ] Footer magnetic buttons — GSAP mouse tracking works
- [ ] Footer marquee — animates continuously
- [ ] Contact form — prevents default, mock submit navigates to `/thank-you`
- [ ] Smooth scroll — Lenis active, no double-scroll behavior

---

## 14. File Deletion Summary (safe-to-delete after each phase)

| File | Delete After | Pre-Delete Grep Required |
|---|---|---|
| `scratch/cleanup.js` | Phase 5 | No |
| `lint_output.txt` | Phase 5 | No |
| All `.DS_Store` | Phase 5 | No |
| `src/components/services/VideoTestimonialsContent.tsx` | Phase 5 (after Phase 4) | Yes — confirm zero imports |
| `src/components/services/YouTubeAdsB2BContent.tsx` | Phase 5 (after Phase 4) | Yes — confirm zero imports |
| `public/next.svg`, `public/vercel.svg`, `public/window.svg`, `public/file.svg` | Phase 5 | Yes — confirm zero references |
| Any stub created for `zoom-parallax`, `logo-cloud-3`, `ui/GlobalPresence` | Phase 5 | Yes — confirm zero live imports |

---

## 15. Out of Scope (do not include in this pass)

The following are acknowledged but intentionally deferred to a future master cleanup phase:

- **Mock CMS registry** (`src/cms/mock/`): Premature until the real CMS contract exists.
- **Route restructuring** into `features/` and `shared/`: No functional value without CMS integration.
- **Component extraction at scale**: `SectionShell`, `SectionHeader`, `Card`, `ImageFrame`, and `CmsHeadingRenderer` are created in Phase 3 but not back-ported into existing sections. Existing sections continue to inline their classes. Migration is opt-in as new features are built.
- **Navigation link resolution by pageId**: The mock CMS routing pattern. Current `navigation.ts` hard-coded hrefs are fine.
- **Social link placeholders**: Out of scope.
- **Full SEO keyword copy audit**: Use docs as-is; deep copy rewriting is a content task, not an engineering task.
- **`/events` route status**: Not in canonical URL list. Leave as-is until product decision.
