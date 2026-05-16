# Content Architecture & Typography Standardisation Strategy

This document is the single source of truth for the B2BSA2 project's content architecture, typography system, and SEO infrastructure. It covers both the strategic "why" and the technical "how" for every decision made.

**Prerequisite state (as of 2026-05-16):**
- Build, lint, and typecheck pass cleanly.
- Core UI components (`Heading`, `Text`, etc.) exist but are currently bypassed in several sections in favour of raw HTML tags + Tailwind classes.
- `sitemap.ts`, `robots.ts`, `metadataBase` are in place.
- All 3 non-canonical routes redirect correctly.

---

## 1. Core Objectives

1. **Visual Parity**: Identical typography metrics (H1-H3) across all 26+ canonical pages.
2. **Editorial Excellence**: Strict "Editorial" style for section headings with automated one-word brand highlighting.
3. **Data-Driven SEO**: Decouple metadata, JSON-LD, and route definitions into a centralized "Mock CMS" registry.
4. **Architectural Integrity**: Transition from a flat `src/components/` to a feature-first architecture.
5. **Reliability**: Build-time validation for internal links and accessibility guardrails.

---

## 2. Design & Typography Decisions

### 2.1 Heading Hierarchy (The "Editorial" Rule)

All headings (H1-H4) **must** use the `<Heading />` component. Raw `<h1>`-`<h4>` tags are forbidden in feature/section components. This enforces identical typography metrics across all pages.

| Level | Responsive Style | Use Case |
| :--- | :--- | :--- |
| **H1** | `text-5xl lg:text-8xl font-bold` | Page Hero — exactly one per page, no exceptions |
| **H2** | `text-4xl lg:text-7xl font-bold` | Section Titles — Editorial Style across all pages |
| **H3** | `text-2xl lg:text-3xl font-bold` | Cards, team names, blog titles, sub-section headers |
| **H4** | `text-xl lg:text-2xl font-bold` | Tertiary descriptors, minor labels |

**1 page = 1 H1.** Verified via DOM audit after every phase.

### 2.2 Keyword Highlighting

Every H1 and H2 must contain exactly one highlighted keyword using the `<PointerHighlight />` component.

- **Logic**: `Heading` component splits its `children` string into words and wraps the `highlight` prop match with `<PointerHighlight />`.
- **Alternating Colors**: Colors alternate between sections to create visual rhythm.
  - **Variant `blue`**: `#1e6091` (Brand Blue)
  - **Variant `cyan`**: `#4bc0d9` (Brand Cyan)
- **No Animation**: No word-by-word reveal. Focus solely on the static highlight effect.

### 2.3 Highlight Pre-Selection Policy

The `highlight` field in `CmsHeading` requires a single keyword to be chosen per heading.

1. **Who selects it**: The content/marketing owner picks the single most commercially important keyword. AI-generated suggestions may be used as a fallback, but must be human-reviewed before merging.
2. **When it is filled in**: During Phase C, when each page entry is added to `src/cms/mock/registry.ts`. No page entry ships without it.
3. **Alternating color rule**: Alternate `highlightVariant` as `"blue"` → `"cyan"` → `"blue"` in the order sections appear on the page.

### 2.4 Accessibility (A11y) Mandate

To maintain a 100/100 Lighthouse score:
- **Globe/Sliders**: `role="region"` with `aria-label` pulled from the CMS.
- **Buttons/Links**: Descriptive `aria-label` required if button text is generic (e.g., "Learn More").
- **Forms**: Every input must have a uniquely associated `<label>` or `aria-labelledby`.
- **Images**: Every `<Image />` must have an `alt` field populated via the CMS. No image ships without `alt`.

---

## 3. Target Folder Structure

```
src/
  app/                          ← Next.js routes, unchanged

  features/
    home/
      sections/                 ← Hero, CinematicSequence, ClientLogos, WhoWeAre,
                                   OurServices, CaseStudies, UpcomingEvents,
                                   WhyChooseUs, Testimonials, Blogs, FAQ,
                                   ContactUs, CTABanner
    about/
      sections/                 ← all src/components/about/*
    services/
      ServiceHubPage.tsx
      ServiceDetailPage.tsx
    resources/
      BlogIndexContent.tsx
      CaseStudiesIndexContent.tsx
    contact/
      ContactUsContent.tsx
      ThankYouContent.tsx
    legal/
      PrivacyPolicyContent.tsx
      TermsContent.tsx

  shared/
    layout/
      Header.tsx
      Footer.tsx
      CinematicFooter.tsx
    providers/
      ThemeProvider.tsx
      SmoothScrollProvider.tsx
    sections/
      SectionShell.tsx
      SectionHeader.tsx
      ProcessTimeline.tsx
      ServicesGrid.tsx
    ui/
      Heading.tsx               ← Updated with highlight logic
      Text.tsx
      Eyebrow.tsx
      GradientText.tsx
      Button.tsx
      ButtonLink.tsx            ← NEW
      Badge.tsx                 ← NEW
      StatCard.tsx              ← NEW
      Globe.tsx
      InfiniteSlider.tsx
      Timeline.tsx
    forms/
      TextInput.tsx             ← NEW
      SelectInput.tsx           ← NEW
      TextareaInput.tsx         ← NEW
      ContactForm.tsx           ← NEW
    cards/
      ServiceCard.tsx           ← NEW
      CaseStudyCard.tsx         ← NEW
      BlogCard.tsx              ← NEW
      EventCard.tsx             ← NEW
      TestimonialCard.tsx       ← NEW
      FAQCard.tsx               ← NEW

  cms/
    mock/
      types.ts                  ← NEW
      routes.ts                 ← NEW
      resolve.ts                ← NEW
      seo.ts                    ← NEW
      navigation.ts             ← NEW (replaces src/content/navigation.ts)
      registry.ts               ← NEW
      componentMap.ts           ← NEW

  lib/
    utils.ts
    seo.ts                      ← NEW
    structured-data.ts

  content/                      ← unchanged until real CMS replaces it
```

---

## 4. TypeScript Type Definitions (`src/cms/mock/types.ts`)

```ts
export type PageId = string;

export type PageType =
  | "home" | "serviceHub" | "serviceDetail"
  | "resourceIndex" | "company" | "contact"
  | "legal" | "system";

export interface CmsSeo {
  title: string;
  description: string;
  canonicalPath: string;
  focusKeyphrase?: string;
  secondaryKeywords?: string[];
  noIndex?: boolean;
}

export interface CmsHeading {
  text: string;
  highlight?: string;
  highlightVariant?: "blue" | "cyan";
}

export interface CmsImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export interface CmsLink {
  label: string;
  pageId?: PageId;
  href?: string;
}

export interface CmsCTA {
  label: string;
  pageId?: PageId;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export interface CmsFAQ {
  question: string;
  answer: string;
}

export interface CmsPage {
  id: PageId;
  pageType: PageType;
  seo: CmsSeo;
  title: CmsHeading;                           // Main H1 heading
  sectionHeadings?: Record<string, CmsHeading>; // Section-specific H2s
  tags?: string[];                             // For Internal Link Graph
  internalLinks?: CmsLink[];
  faqs?: CmsFAQ[];
  ctas?: CmsCTA[];
}
```

---

## 5. Canonical Route Registry (`src/cms/mock/routes.ts`)

Single source of truth for all internal URLs in the app.

```ts
export const pageRoutes: Record<PageId, string> = {
  "home":                                        "/",
  "about-us":                                    "/about-us",
  "blog":                                        "/blog",
  "case-studies":                                "/case-studies",
  "contact-us":                                  "/contact-us",

  // Global Event Solutions
  "service.global-event-solutions":              "/services/global-event-solutions",
  "service.trade-show-booth-design":             "/services/global-event-solutions/trade-show-booth-design",
  "service.event-lead-generation":               "/services/global-event-solutions/event-lead-generation",
  "service.industry-events":                     "/services/global-event-solutions/industry-events",
  "service.custom-events":                       "/services/global-event-solutions/custom-events",
  "service.event-booth-rental":                  "/services/global-event-solutions/event-booth-rental",
  "service.trade-show-booth-builder":            "/services/global-event-solutions/trade-show-booth-builder",
  "service.modular-portable-booths":             "/services/booth-design-production/modular-portable-booths",

  // Media Production
  "service.media-production":                    "/services/media-production",
  "service.event-video-production":              "/services/media-production/event-video-production",
  "service.corporate-video-production":          "/services/media-production/corporate-video-production",
  "service.video-editing-services":              "/services/media-production/video-editing-services",
  "service.live-streaming-services":             "/services/media-production/live-streaming-services",

  // Performance Marketing
  "service.performance-marketing":               "/services/performance-marketing",
  "service.seo-services":                        "/services/performance-marketing/seo-services",
  "service.paid-advertising":                    "/services/performance-marketing/paid-advertising",
  "service.linkedin-ads-b2b":                    "/services/performance-marketing/linkedin-ads-b2b",

  // Sales Qualified Lead Generation
  "service.sales-qualified-lead-generation":     "/services/sales-qualified-lead-generation",

  // Market Research
  "service.market-research":                     "/services/market-research",
  "service.data-augmentation":                   "/services/market-research/data-augmentation",
  "service.data-validation":                     "/services/market-research/data-validation",
  "service.human-powered-market-intelligence":   "/services/market-research/human-powered-market-intelligence",

  // System pages
  "privacy-policy":                              "/privacy-policy",
  "terms-and-conditions":                        "/terms-and-conditions",
  "thank-you":                                   "/thank-you",
};
```

---

## 6. The "Mock CMS" Architecture

### 6.1 Page Registry Example (`src/cms/mock/registry.ts`)

```ts
{
  id: "trade-show-booth-design",
  pageType: "serviceDetail",
  seo: {
    title: "Trade Show Booth Design | Global Exhibition Solutions",
    description: "Award-winning trade show booth design...",
    canonicalPath: "/services/global-event-solutions/trade-show-booth-design",
    focusKeyphrase: "trade show booth design",
  },
  title: {
    text: "Future-Proof Your Exhibition with Elite Booth Design",
    highlight: "Elite",
    highlightVariant: "blue",
  },
  sectionHeadings: {
    "capabilities": { text: "Our Design Capabilities", highlight: "Capabilities", highlightVariant: "cyan" },
    "process":      { text: "Our Strategic Process",   highlight: "Strategic",    highlightVariant: "blue" },
  },
  tags: ["#ExhibitionDesign", "#EventStrategy"],
  faqs: [
    { question: "What booth sizes do you offer?", answer: "We offer 10x10 through 50x50..." },
  ],
}
```

### 6.2 Link Resolution (`src/cms/mock/resolve.ts`)

```ts
export function resolvePageHref(pageId: PageId): string {
  const path = pageRoutes[pageId];
  if (!path) throw new Error(`[cms] No route for pageId: "${pageId}"`);
  return path;
}

export function resolveLink(link: CmsLink): string {
  if (link.pageId) return resolvePageHref(link.pageId);
  if (link.href)   return link.href;
  return "#";
}
```

### 6.3 Internal Link Graph (`getRelatedContent`)

```ts
export interface RelatedItem {
  id: PageId;
  title: string;
  href: string;
}

// Returns up to `limit` pages sharing at least one tag with the input.
export function getRelatedContent(
  tags: string[],
  limit = 3,
  excludeId?: string
): RelatedItem[] {
  return cmsPages
    .filter(p => p.id !== excludeId && p.tags?.some(t => tags.includes(t)))
    .slice(0, limit)
    .map(p => ({ id: p.id, title: p.title.text, href: resolvePageHref(p.id) }));
}
```

**Usage**: On every `ServiceDetailPage`, call `getRelatedContent(page.tags)` to automatically inject the top 3 related Case Studies with no manual curation.

---

## 7. SEO Infrastructure

### 7.1 Page Metadata (`src/lib/seo.ts`)

```ts
const BASE = "https://b2bsalesarrow.com";

export function buildPageMetadata(seo: CmsSeo, pageId?: string): Metadata {
  const ogImageUrl = pageId
    ? `${BASE}/api/og?pageId=${pageId}&title=${encodeURIComponent(seo.title)}`
    : `${BASE}/og-default.png`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `${BASE}${seo.canonicalPath}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${BASE}${seo.canonicalPath}`,
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
    ...(seo.noIndex && { robots: { index: false, follow: false } }),
  };
}
```

### 7.2 Automated JSON-LD Schema (`src/lib/structured-data.ts`)

The following schemas are automatically generated per page from CMS data:

| Schema Type | Source Data | Pages |
| :--- | :--- | :--- |
| `Organization` | Brand metadata, 40+ country contacts | All pages |
| `Service` | Service name, description, provider | Service hubs & details |
| `FAQPage` | `page.faqs[]` array in registry | Service details, Home |
| `BreadcrumbList` | Route depth from `pageRoutes` | All pages |

### 7.3 Dynamic OG Image Generation (`src/app/api/og/route.tsx`)

- Uses `@vercel/og` (built into Next.js).
- Accepts `?pageId=` and `?title=` query params.
- Renders a brand-aligned 1200×630 image on-the-fly.
- `buildPageMetadata` automatically points every page to this route.

### 7.4 CMS-Driven Sitemap (`src/app/sitemap.ts`)

```ts
export default function sitemap() {
  return Object.entries(pageRoutes)
    .filter(([id]) => !pageSeo[id]?.noIndex)
    .map(([, path]) => ({
      url: `https://b2bsalesarrow.com${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1.0 : path.split("/").length <= 2 ? 0.8 : 0.6,
    }));
}
```

---

## 8. Hero Image CMS Migration

`Hero.tsx` currently uses hardcoded `Unsplash` URLs. The following must migrate to CMS data:

| Prop | Migrates To |
| :--- | :--- |
| `image` (URL string) | `CmsImage` object (`src`, `alt`, `priority: true`) stored in registry |
| `stat` (value, label, icon) | `heroBadge` field in the CMS page entry |
| `title`, `subtitle`, `badge` | `CmsHeading` / plain string fields in the registry |

**Pattern:**
```tsx
// Before (hardcoded)
<Hero title="Global B2B..." image="https://images.unsplash.com/..." />

// After (CMS-driven)
const page = getCmsPage("about-us")!;
<Hero title={page.title} image={page.heroImage} stat={page.heroBadge} />
```

Default fallbacks stay in `Hero.tsx` as a last-resort safety net only.

---

## 9. Execution Phases

### Phase A: Component Standardisation
1. Update `Heading.tsx` with CVA metrics, `highlight` prop, and `<PointerHighlight />` injection.
2. Create `Badge`, `StatCard`, `ButtonLink` UI primitives.
3. Create `TextInput`, `SelectInput`, `TextareaInput`, `ContactForm` form components.
4. Create `ServiceCard`, `CaseStudyCard`, `BlogCard`, `EventCard`, `TestimonialCard`, `FAQCard`.

### Phase B: Section Migration (order: lowest → highest animation risk)
1. **Hero** — Hero Image CMS migration first (see §8)
2. **`FAQ.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, questions → `FAQCard`
3. **`Blogs.tsx`** — h2 → `Heading`, items → `BlogCard`
4. **`WhoWeAre.tsx`** — h2 → `Heading`, stats → `StatCard`
5. **`CaseStudies.tsx`** — h2 → `Heading`, cards → `CaseStudyCard`
6. **`UpcomingEvents.tsx`** — h2 → `Heading`, items → `EventCard`
7. **`WhyChooseUs.tsx`** — h2 → `Heading`, reason titles → `Heading as="h3"`
8. **`OurServices.tsx`** — h2 → `Heading`, cards → `ServiceCard`
9. **`Testimonials.tsx`** — h2 → `Heading`, cards → `TestimonialCard`
10. **`ContactUs.tsx`** — form → `ContactForm`
11. **`CTABanner.tsx`** — h2 with `preserveClassName`
12. **`ClientLogos.tsx`** — extract logo list into data structure
13. **About sections** — `team-grid.tsx`, `clients-marquee.tsx`, `editorial-hero.tsx`
14. **Content templates** — `ServiceHubPage.tsx`, `ServiceDetailPage.tsx`, index pages
15. **Legal pages** — `PrivacyPolicyContent.tsx`, `TermsContent.tsx`

### Phase C: CMS Wiring
1. Implement `types.ts`, `routes.ts`, `seo.ts`, `navigation.ts`, `registry.ts`, `resolve.ts`.
2. Wire `Header`, `Footer`, `CinematicFooter` to CMS navigation.
3. Wire all route pages to `buildPageMetadata(getCmsPage(id)!.seo, id)`.
4. Wire sitemap from `pageRoutes`.
5. Replace all `href="#"` CTAs with `resolvePageHref`.
6. Implement JSON-LD schema automation.
7. Implement Dynamic OG image route (`/api/og`).
8. Implement Internal Link Graph (`getRelatedContent`).
9. **Link Integrity Validator**: Run `scripts/validate-cms-links.ts` — parses the entire registry and fails the build if any `pageId` or image `src` is unresolvable.

### Phase D: Folder Restructure
1. Move `providers/` → `shared/providers/`
2. Move `layout/` → `shared/layout/`
3. Move `ui/` → `shared/ui/`
4. Move shared sections → `shared/sections/`
5. Move home sections → `features/home/sections/`
6. Move `about/` → `features/about/sections/`
7. Move `content/` → `features/services/`
8. Move `resources/` → `features/resources/`
9. Move `contact/` → `features/contact/`
10. Move `legal/` → `features/legal/`
11. Delete `src/components/` once empty.

---

## 10. Verification & Quality Control

### 10.1 Build-Time Commands
```bash
npm run check                # lint + typecheck + build (zero errors)
npm run validate-cms-links   # zero broken links or missing image paths
```

### 10.2 Structural Checks
- [ ] `src/components/` does not exist
- [ ] All imports use `@/features/`, `@/shared/`, `@/cms/`, or `@/lib/`
- [ ] No raw internal `href="/..."` strings in layout or navigation
- [ ] All navigation links resolve through `resolvePageHref`
- [ ] `sitemap.ts` generates from `pageRoutes`
- [ ] Route metadata uses `buildPageMetadata(getCmsPage(id)!.seo, id)`

### 10.3 DOM Audit
- [ ] Exactly one `<h1>` per route (all 26 canonical pages)
- [ ] Every section has exactly one `<h2>`
- [ ] All card titles use `<h3>`
- [ ] No raw `<h1>` or `<h2>` tags remain (must render via `<Heading />`)
- [ ] No `<h3>` used for nav labels, badges, or decorative text

### 10.4 Visual Audit
- [ ] **Metric Parity**: Service H2 vs. About H2 are identical in size
- [ ] **Highlight Rhythm**: Blue and Cyan variants alternate correctly across all Home page sections
- [ ] **Responsive Scaling**: H1 and H2 scale correctly on mobile without layout shift

### 10.5 SEO Validation
- [ ] **Google Rich Results Test**: All service pages pass `FAQPage` schema validation
- [ ] **OG Images**: All pages generate a valid 1200×630 share image
- [ ] **Canonical Tags**: No two pages share the same canonical URL

### 10.6 Visual Regression Pages
- [ ] `/`
- [ ] `/about-us`
- [ ] `/services/global-event-solutions`
- [ ] `/services/global-event-solutions/trade-show-booth-design`
- [ ] `/services/media-production`
- [ ] `/services/performance-marketing/seo-services`
- [ ] `/blog`
- [ ] `/case-studies`
- [ ] `/contact-us`
- [ ] `/privacy-policy`

---

## 11. Out of Scope
- **Real CMS Integration** (Contentful, Sanity, etc.) — `src/cms/mock/` is the placeholder
- **Dark Mode** — the project is strictly Light-Mode
- **`CinematicSequence` CMS migration** — deferred to a later plan
- **A/B testing, feature flags**
- **Internationalisation**
- **Auth or gated pages**
- **New** blog or case study detail routes — existing ones are in scope for Phase B migration only
