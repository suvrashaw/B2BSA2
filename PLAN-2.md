# PLAN-2: Component System, Mock CMS, Folder Restructure

Picks up after PLAN.md is fully verified. Confirmed prerequisite state as of 2026-05-07:
- Build, lint, and typecheck all pass cleanly
- `Heading`, `Text`, `Eyebrow`, `GradientText`, `Card`, `ImageFrame`, `CmsHeadingRenderer`, `SectionShell`, `SectionHeader` exist
- `HomeHero`, `GlobalPresence`, `zoom-parallax`, `logo-cloud-3` stubs exist
- All 3 non-canonical routes redirect
- `sitemap.ts`, `robots.ts`, `metadataBase` in place
- CinematicFooter nav labels are `span`, Testimonials reviewer name is `p`

---

## Design Decisions

**Heading variants:** One canonical class per level. No named sub-variants in `Heading.tsx`. Use `className` to override, use `preserveClassName` for animation exceptions (`CinematicSequence`, `CinematicFooter` display h2, About editorial h1). This keeps the API minimal and forces intentional overrides to be explicit.

**CMS heading shape:** Leave existing `src/content/` files as plain strings. `CmsHeadingRenderer` accepts both `string` and `{ text, highlight, highlightVariant }`. Content files are only migrated to the structured shape when a real CMS is connected.

**PageScaffold:** Not created. `Header` and `Footer` must always be declared explicitly in route files. A scaffold wrapping them would obscure page structure and conflict with per-route metadata patterns.

**1 page = 1 h1.** No exceptions. Verified via DOM check after every phase.

---

## 1. Target Folder Structure

Move the current flat `src/components/` structure into feature-first folders. Content files stay in `src/content/` — they are not moving until a real CMS replaces them.

```
src/
  app/                          ← Next.js routes, unchanged

  features/
    home/
      sections/                 ← Hero (HomeHero shim stays), CinematicSequence,
                                   ClientLogos, WhoWeAre, OurServices, CaseStudies,
                                   UpcomingEvents, WhyChooseUs, Testimonials,
                                   Blogs, FAQ, ContactUs, CTABanner
    about/
      sections/                 ← all src/components/about/*
    services/
      ServiceHubPage.tsx        ← src/components/content/ServiceHubPage.tsx
      ServiceDetailPage.tsx     ← src/components/content/ServiceDetailPage.tsx
    resources/
      BlogIndexContent.tsx      ← src/components/resources/
      CaseStudiesIndexContent.tsx
    contact/
      ContactUsContent.tsx      ← src/components/contact/
      ThankYouContent.tsx
    legal/
      PrivacyPolicyContent.tsx  ← src/components/legal/
      TermsContent.tsx

  shared/
    layout/
      Header.tsx                ← src/components/layout/
      Footer.tsx
      CinematicFooter.tsx
    providers/
      ThemeProvider.tsx         ← src/components/providers/
      SmoothScrollProvider.tsx
    sections/
      SectionShell.tsx          ← src/components/sections/
      SectionHeader.tsx
      ProcessTimeline.tsx       ← shared across multiple service pages
      ServicesGrid.tsx
    ui/
      Heading.tsx               ← src/components/ui/
      Text.tsx
      Eyebrow.tsx
      GradientText.tsx
      Button.tsx                ← rename button.tsx
      ButtonLink.tsx            ← new
      Card.tsx
      ImageFrame.tsx
      Icon.tsx
      Badge.tsx                 ← new
      StatCard.tsx              ← new
      Globe.tsx
      GlobeVisualization.tsx
      InfiniteSlider.tsx        ← rename infinite-slider.tsx
      Timeline.tsx              ← rename timeline.tsx
      CmsHeadingRenderer.tsx
    forms/
      TextInput.tsx             ← new
      SelectInput.tsx           ← new
      TextareaInput.tsx         ← new
      ContactForm.tsx           ← new
    cards/
      ServiceCard.tsx           ← new
      CaseStudyCard.tsx         ← new
      BlogCard.tsx              ← new
      EventCard.tsx             ← new
      TestimonialCard.tsx       ← new
      FAQCard.tsx               ← new

  cms/
    mock/
      types.ts                  ← new
      routes.ts                 ← new
      resolve.ts                ← new
      seo.ts                    ← new
      navigation.ts             ← new (replaces src/content/navigation.ts)
      registry.ts               ← new
      componentMap.ts           ← new

  lib/
    utils.ts                    ← already exists
    seo.ts                      ← new
    structured-data.ts          ← already exists (PLAN.md)

  content/                      ← unchanged, stays until real CMS
```

---

## 2. Phase A: New Shared Components

Create all new components before migrating existing sections into them. No existing component code changes in this phase — only new files.

### A.1 `src/shared/ui/Badge.tsx`

The small pill/tag used on service cards, event cards, and case study cards.

```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "cyan" | "white" | "dark";
  className?: string;
}
```

Variant classes:
- `blue`: `bg-brand-blue text-white`
- `cyan`: `bg-brand-cyan text-white`
- `white`: `bg-white border border-gray-100 text-gray-600`
- `dark`: `bg-brand-charcoal text-white`

Default size: `px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full`.

### A.2 `src/shared/ui/StatCard.tsx`

The metric display used in WhoWeAre and StatsBar.

```tsx
interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}
```

No default layout — this is a pure display component. The wrapping grid or flex layout stays in the section component. Use the exact classes currently in `WhoWeAre.tsx` for the value and label.

### A.3 `src/shared/ui/ButtonLink.tsx`

A typed link wrapper using `next/link`. Same visual output as the current inline `<button>` and `<a>` patterns.

```tsx
interface ButtonLinkProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}
```

Variants and classes — copy directly from the most common button patterns in `OurServices.tsx`, `Hero.tsx`, and `CTABanner.tsx`. Do not invent new visual styles.

### A.4 Form field components

#### `src/shared/forms/TextInput.tsx`

```tsx
interface TextInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}
```

Renders: label, `<input type="text">`, optional error message. Classes copied exactly from the current form in `ContactUsContent.tsx`.

#### `src/shared/forms/SelectInput.tsx`

Same interface as `TextInput` but renders `<select>` with an `options: Array<{ value: string; label: string }>` prop.

#### `src/shared/forms/TextareaInput.tsx`

Same interface as `TextInput` but renders `<textarea>` with a `rows?: number` prop.

#### `src/shared/forms/ContactForm.tsx`

Assembles `TextInput`, `SelectInput`, `TextareaInput` into the full contact form currently in `ContactUsContent.tsx`. Exact same fields, layout, and visual output.

State management:
```tsx
const [fields, setFields] = useState({ name: "", email: "", company: "", service: "", message: "" });
const [errors, setErrors] = useState<Record<string, string>>({});
const [isLoading, setIsLoading] = useState(false);
```

Validation (on submit and on blur):
- `name`: required
- `email`: required, must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- `message`: required, minimum 20 characters

Submit handler:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;
  setIsLoading(true);
  await new Promise((r) => setTimeout(r, 800));
  router.push("/thank-you");
};
```

Button state: disabled + spinner SVG while `isLoading` is true. Visual spinner must match the brand color (`text-brand-blue`).

### A.5 Card components

Create these only if the layouts genuinely differ. If two card types are visually identical, use a single generic `Card` with different props instead of two files.

#### `src/shared/cards/ServiceCard.tsx`
Used in `OurServices.tsx` sticky card layout. Props: `title`, `description`, `icon`, `ctaLabel`, `color` (accent bar color class), `image`. The current sticky scroll behavior stays inside `OurServices.tsx` — `ServiceCard` is just the visual shell.

#### `src/shared/cards/CaseStudyCard.tsx`
Used in `CaseStudies.tsx` accordion expand layout. Props: `title`, `image`, `tags`, `challenge`, `solution`, `result`. The expand interaction stays in `CaseStudies.tsx`.

#### `src/shared/cards/BlogCard.tsx`
Used in `Blogs.tsx`. Props: `title`, `excerpt`, `image`, `date`, `category`, `href`.

#### `src/shared/cards/EventCard.tsx`
Used in `UpcomingEvents.tsx`. Props: `title`, `image`, `date`, `location`, `badgeLabel`, `ctaLabel`.

#### `src/shared/cards/TestimonialCard.tsx`
Used in `Testimonials.tsx` coverflow carousel. Props: `name`, `role`, `company`, `image`, `quote`, `rating`. The 3D coverflow animation props (`rotateY`, `x`, `z`, `scale`, `opacity`) are passed from the parent carousel state — this card is purely the visual shell.

#### `src/shared/cards/FAQCard.tsx`
Used in `FAQ.tsx`. Props: `question`, `answer`. The flip or expand interaction logic stays in `FAQ.tsx`.

### A.6 Verification after Phase A

```bash
npm run lint
./node_modules/.bin/tsc --noEmit --incremental false --pretty false
```

All new files must have zero errors. Dev server must start. No existing pages change visually — new components are created but not yet used.

---

## 3. Phase B: Section Migration

Wire the new shared components into existing section components. One section at a time. Screenshot before and after each. Build must pass after each migration.

### B.1 Migration order (lowest to highest animation risk)

1. **`FAQ.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, FAQ questions → `FAQCard`, body → `Text`
2. **`Blogs.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, blog items → `BlogCard`
3. **`WhoWeAre.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, stats → `StatCard`
4. **`CaseStudies.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, cases → `CaseStudyCard`
5. **`UpcomingEvents.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, events → `EventCard`
6. **`WhyChooseUs.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, reason titles → `Heading as="h3"`
7. **`OurServices.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, service cards → `ServiceCard`
8. **`Testimonials.tsx`** — eyebrow → `Eyebrow`, h2 → `Heading as="h2"`, testimonial cards → `TestimonialCard`
9. **`ContactUs.tsx`** — h2 with `preserveClassName` (intentional large variant), form → `ContactForm`
10. **`CTABanner.tsx`** — h2 with `preserveClassName` (intentional white/large variant)
11. **`ClientLogos.tsx`** — extract logo list into a reusable data structure
12. **About sections** — `team-grid.tsx`, `clients-marquee.tsx`, `editorial-hero.tsx`
13. **Content templates** — `ServiceHubPage.tsx`, `ServiceDetailPage.tsx`, `BlogIndexContent.tsx`, `CaseStudiesIndexContent.tsx`, `ContactUsContent.tsx`
14. **Legal pages** — `PrivacyPolicyContent.tsx`, `TermsContent.tsx`

### B.2 `SectionShell` rollout rule

Every section that has the pattern:
```tsx
<section id="..." className="py-... bg-...">
  <div className="container mx-auto px-8">
```
should become:
```tsx
<SectionShell id="..." className="py-... bg-...">
```

Pass extra container classes via `containerClassName`. Decorative absolute-positioned elements (gradients, blurs) live inside the section but outside the container — pass them as `children` before the container, or add a `decorations` slot if that pattern repeats across many sections.

### B.3 `SectionHeader` rollout rule

The motion-animated eyebrow + heading + optional description block that appears at the top of every section becomes `SectionHeader`. The `SectionHeader` component must bake in the standard Framer Motion entry animation (`initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`) used by all sections. Pass the eyebrow pill class string via `eyebrowClassName` to match each section's color:

| Section | eyebrowClassName |
|---|---|
| CaseStudies, Testimonials | `rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue px-4 py-1.5 inline-block mb-6` |
| OurServices, UpcomingEvents | `rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-blue px-4 py-1.5 inline-block mb-6` |
| FAQ | `rounded-full bg-brand-charcoal/5 border border-brand-charcoal/10 text-brand-charcoal px-4 py-1.5 inline-block mb-6` |
| WhoWeAre, WhyChooseUs, Blogs | match current inline class exactly |

### B.4 Verification after Phase B

```bash
npm run check
```

DOM checks (browser DevTools on each page):
- `/` — exactly one `<h1>`, every section has one `<h2>`, all `SectionHeader`-powered sections render correctly
- `/about-us` — one `<h1>` (editorial hero)
- All service pages — one `<h1>` per page

Screenshot compare: `/`, `/about-us`, `/services/global-event-solutions`, `/blog`, `/case-studies`, `/contact-us` before and after.

---

## 4. Phase C: Mock CMS Registry

**Goal:** Decouple routing, SEO, and navigation data from inline hard-coded values. Create `src/cms/mock/` as an isolated, deletable layer. When a real CMS is connected, this entire directory is replaced.

### C.1 `src/cms/mock/types.ts`

```ts
export type PageId = string;

export type PageType =
  | "home"
  | "serviceHub"
  | "serviceDetail"
  | "resourceIndex"
  | "company"
  | "contact"
  | "legal"
  | "system";

export interface CmsSeo {
  title: string;
  description: string;
  canonicalPath: string;
  focusKeyphrase?: string;
  secondaryKeywords?: string[];
  noIndex?: boolean;
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
  internalLinks?: CmsLink[];
  faqs?: CmsFAQ[];
  ctas?: CmsCTA[];
}
```

### C.2 `src/cms/mock/routes.ts`

All 26 canonical routes from `docs/url-structure.md` plus system pages. This is the single source of truth for every internal URL in the app:

```ts
import type { PageId } from "./types";

export const pageRoutes: Record<PageId, string> = {
  // Marketing pages
  "home":                                        "/",
  "about-us":                                    "/about-us",
  "blog":                                        "/blog",
  "case-studies":                                "/case-studies",
  "contact-us":                                  "/contact-us",

  // Global Event Solutions (hub + 6 details + 1 canonical from booth-design)
  "service.global-event-solutions":              "/services/global-event-solutions",
  "service.trade-show-booth-design":             "/services/global-event-solutions/trade-show-booth-design",
  "service.event-lead-generation":               "/services/global-event-solutions/event-lead-generation",
  "service.industry-events":                     "/services/global-event-solutions/industry-events",
  "service.custom-events":                       "/services/global-event-solutions/custom-events",
  "service.event-booth-rental":                  "/services/global-event-solutions/event-booth-rental",
  "service.trade-show-booth-builder":            "/services/global-event-solutions/trade-show-booth-builder",
  "service.modular-portable-booths":             "/services/booth-design-production/modular-portable-booths",

  // Media Production (hub + 4 canonical details)
  "service.media-production":                    "/services/media-production",
  "service.event-video-production":              "/services/media-production/event-video-production",
  "service.corporate-video-production":          "/services/media-production/corporate-video-production",
  "service.video-editing-services":              "/services/media-production/video-editing-services",
  "service.live-streaming-services":             "/services/media-production/live-streaming-services",

  // Performance Marketing (hub + 3 details)
  "service.performance-marketing":               "/services/performance-marketing",
  "service.seo-services":                        "/services/performance-marketing/seo-services",
  "service.paid-advertising":                    "/services/performance-marketing/paid-advertising",
  "service.linkedin-ads-b2b":                    "/services/performance-marketing/linkedin-ads-b2b",

  // Sales Qualified Lead Generation
  "service.sales-qualified-lead-generation":     "/services/sales-qualified-lead-generation",

  // Market Research (hub + 3 details)
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

### C.3 `src/cms/mock/resolve.ts`

```ts
import { pageRoutes } from "./routes";
import type { CmsLink, PageId } from "./types";

export function resolvePageHref(pageId: PageId): string {
  const path = pageRoutes[pageId];
  if (!path) throw new Error(`[cms] No route for pageId: "${pageId}"`);
  return path;
}

export function resolveLink(link: CmsLink): string {
  if (link.pageId) return resolvePageHref(link.pageId);
  if (link.href) return link.href;
  return "#";
}
```

### C.4 `src/cms/mock/seo.ts`

Full title and description for every page in `pageRoutes`. Copy SEO copy from `docs/B2B Sales Arrow — Master SEO Landing Page Structure.md`. Every page must have a unique title and description — no duplicates allowed.

Structure:
```ts
import type { PageId, CmsSeo } from "./types";
import { pageRoutes } from "./routes";

export const pageSeo: Record<PageId, CmsSeo> = {
  "home": {
    title: "B2B Sales Arrow | Premium Global B2B Growth Partner",
    description: "End-to-end B2B growth: global events, lead generation, media production, and market research. Trusted by Fortune 500s across 40+ countries.",
    canonicalPath: pageRoutes["home"],
    focusKeyphrase: "B2B growth partner",
  },
  "thank-you": {
    title: "Thank You | B2B Sales Arrow",
    description: "We received your message. Our team will be in touch shortly.",
    canonicalPath: pageRoutes["thank-you"],
    noIndex: true,
  },
  // ... all remaining pages from SEO doc
};
```

### C.5 `src/cms/mock/navigation.ts`

Replaces `src/content/navigation.ts`. All links use `pageId` — no raw `href` strings:

```ts
import type { PageId } from "./types";

export interface NavItem { label: string; pageId: PageId; }
export interface ServiceGroup { label: string; pageId: PageId; children: NavItem[]; }

export const topNav: NavItem[] = [
  { label: "Home",         pageId: "home" },
  { label: "About",        pageId: "about-us" },
  { label: "Services",     pageId: "service.global-event-solutions" },
  { label: "Case Studies", pageId: "case-studies" },
  { label: "Blog",         pageId: "blog" },
  { label: "Contact",      pageId: "contact-us" },
];

export const serviceGroups: ServiceGroup[] = [
  {
    label: "Global Event Solutions",
    pageId: "service.global-event-solutions",
    children: [
      { label: "Trade Show Booth Design",    pageId: "service.trade-show-booth-design" },
      { label: "Event Lead Generation",      pageId: "service.event-lead-generation" },
      { label: "Industry Events",            pageId: "service.industry-events" },
      { label: "Custom Events",              pageId: "service.custom-events" },
      { label: "Event Booth Rental",         pageId: "service.event-booth-rental" },
      { label: "Trade Show Booth Builder",   pageId: "service.trade-show-booth-builder" },
    ],
  },
  {
    label: "Booth Design & Production",
    pageId: "service.modular-portable-booths",
    children: [
      { label: "Modular & Portable Booths", pageId: "service.modular-portable-booths" },
    ],
  },
  {
    label: "Media Production",
    pageId: "service.media-production",
    children: [
      { label: "Event Video Production",      pageId: "service.event-video-production" },
      { label: "Corporate Video Production",  pageId: "service.corporate-video-production" },
      { label: "Video Editing Services",      pageId: "service.video-editing-services" },
      { label: "Live Streaming Services",     pageId: "service.live-streaming-services" },
    ],
  },
  {
    label: "Performance Marketing",
    pageId: "service.performance-marketing",
    children: [
      { label: "SEO Services",        pageId: "service.seo-services" },
      { label: "Paid Advertising",    pageId: "service.paid-advertising" },
      { label: "LinkedIn Ads for B2B", pageId: "service.linkedin-ads-b2b" },
    ],
  },
  {
    label: "Sales Qualified Lead Generation",
    pageId: "service.sales-qualified-lead-generation",
    children: [],
  },
  {
    label: "Market Research",
    pageId: "service.market-research",
    children: [
      { label: "Data Augmentation",                    pageId: "service.data-augmentation" },
      { label: "Data Validation",                      pageId: "service.data-validation" },
      { label: "Human-Powered Market Intelligence",    pageId: "service.human-powered-market-intelligence" },
    ],
  },
];

export const footerNav: NavItem[] = [
  { label: "Blog",         pageId: "blog" },
  { label: "Case Studies", pageId: "case-studies" },
  { label: "About Us",     pageId: "about-us" },
  { label: "Contact Us",   pageId: "contact-us" },
];

export const socialLinks = {
  linkedin:  "https://linkedin.com/company/b2bsalesarrow",
  twitter:   "#",
  instagram: "#",
};
```

### C.6 `src/cms/mock/registry.ts`

Master page registry. Every canonical page gets a `CmsPage` entry:

```ts
import type { CmsPage } from "./types";
import { pageSeo } from "./seo";

export const cmsPages: CmsPage[] = [
  {
    id: "home",
    pageType: "home",
    seo: pageSeo["home"],
    ctas: [
      { label: "Explore Our Work",  pageId: "case-studies",                     variant: "primary" },
      { label: "Our Services",      pageId: "service.global-event-solutions",   variant: "secondary" },
    ],
  },
  // ... all pages
];

export function getCmsPage(id: string): CmsPage | undefined {
  return cmsPages.find((p) => p.id === id);
}
```

### C.7 `src/cms/mock/componentMap.ts`

Maps section IDs (as used in `docs/url-structure.md`) to component names. This table is the contract between content structure and UI:

```ts
export const sectionComponentMap: Record<string, string> = {
  // Universal
  "hero":             "features/*/sections/Hero",
  "cta-banner":       "features/home/sections/CTABanner",
  "faq":              "features/home/sections/FAQ",
  "contact":          "features/home/sections/ContactUs",
  "client-logos":     "features/home/sections/ClientLogos",
  "testimonials":     "features/home/sections/Testimonials",

  // Services
  "services-grid":    "shared/sections/ServicesGrid",
  "process-timeline": "shared/sections/ProcessTimeline",

  // Home page
  "case-studies":     "features/home/sections/CaseStudies",
  "upcoming-events":  "features/home/sections/UpcomingEvents",
  "why-choose-us":    "features/home/sections/WhyChooseUs",
  "who-we-are":       "features/home/sections/WhoWeAre",
  "our-services":     "features/home/sections/OurServices",
  "blogs":            "features/home/sections/Blogs",
};
```

### C.8 `src/lib/seo.ts`

```ts
import type { Metadata } from "next";
import type { CmsSeo } from "@/cms/mock/types";

const BASE = "https://b2bsalesarrow.com";

export function buildPageMetadata(seo: CmsSeo): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `${BASE}${seo.canonicalPath}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${BASE}${seo.canonicalPath}`,
      type: "website",
    },
    ...(seo.noIndex && { robots: { index: false, follow: false } }),
  };
}
```

### C.9 Wire navigation into `Header.tsx` and `CinematicFooter.tsx`

Replace imports of `src/content/navigation.ts` with `src/cms/mock/navigation.ts`. Replace all raw `href` strings with `resolvePageHref(item.pageId)`:

```tsx
// Before
import { topNavigation } from "@/content/navigation";
<Link href={item.href}>{item.name}</Link>

// After
import { topNav } from "@/cms/mock/navigation";
import { resolvePageHref } from "@/cms/mock/resolve";
<Link href={resolvePageHref(item.pageId)}>{item.label}</Link>
```

Apply to: `Header.tsx`, `Footer.tsx`, `CinematicFooter.tsx`.

### C.10 Wire CMS metadata into route pages

For each route page that has a hand-written `metadata` export, replace it with a CMS-driven one:

```ts
// src/app/about-us/page.tsx
import { getCmsPage } from "@/cms/mock/registry";
import { buildPageMetadata } from "@/lib/seo";

const page = getCmsPage("about-us")!;
export const metadata = buildPageMetadata(page.seo);
```

### C.11 Wire sitemap from CMS routes

Update `src/app/sitemap.ts` to generate from `pageRoutes` rather than the hand-written array:

```ts
import { pageRoutes } from "@/cms/mock/routes";
import { pageSeo } from "@/cms/mock/seo";

export default function sitemap() {
  return Object.entries(pageRoutes)
    .filter(([id]) => !pageSeo[id]?.noIndex)
    .map(([, path]) => ({
      url: `https://b2bsalesarrow.com${path}`,
      lastModified: new Date(),
      changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "/" ? 1.0 : path.split("/").length <= 2 ? 0.8 : 0.6,
    }));
}
```

### C.12 Replace `href="#"` CTAs

After wiring navigation, grep for remaining raw placeholder links:

```bash
grep -rn 'href="#"' src/ --include="*.tsx"
```

For each hit:
- Known destination → `resolvePageHref(pageId)`
- Anchor scroll (e.g. `#contact`) → leave as-is
- Genuinely unknown → add `data-cms-placeholder="true"` so they are greppable later

### C.13 Verification after Phase C

```bash
npm run check
grep -rn 'href="/' src/components/ src/features/ src/shared/ 2>/dev/null | grep -v "external\|cms-placeholder"
```

Second command should return zero hits — no raw internal href strings outside of CMS resolution.

---

## 5. Phase D: Folder Restructure

Move all files from `src/components/` into `src/features/` and `src/shared/` per the target structure in §1. Do not change any component logic during the move.

### D.1 Rules for every move

1. Create the target directory.
2. Move the file.
3. Add a one-line shim at the old path: `export { X } from "@/new/path/to/X"`.
4. `npm run build` — must pass before continuing.
5. Update all import sites to the new path.
6. Delete the shim.
7. `npm run build` — must pass before the next file.

Never move a file and update import sites in the same step. Shims keep the build green throughout.

### D.2 Migration sequence

Move one directory at a time in this order:

1. `src/components/providers/` → `src/shared/providers/`
2. `src/components/layout/` → `src/shared/layout/`
3. `src/components/ui/` → `src/shared/ui/`
4. Shared sections (SectionShell, SectionHeader, ProcessTimeline, ServicesGrid) → `src/shared/sections/`
5. Home sections (Hero/HomeHero, CinematicSequence, ClientLogos, WhoWeAre, OurServices, CaseStudies, UpcomingEvents, WhyChooseUs, Testimonials, Blogs, FAQ, ContactUs, CTABanner) → `src/features/home/sections/`
6. `src/components/about/` → `src/features/about/sections/`
7. `src/components/content/` → `src/features/services/`
8. `src/components/resources/` → `src/features/resources/`
9. `src/components/contact/` → `src/features/contact/`
10. `src/components/legal/` → `src/features/legal/`

After step 10, `src/components/` should be empty. Delete it.

### D.3 Alias additions (optional)

If import paths become verbose, add convenience aliases to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*":          ["./src/*"],
      "@shared/*":    ["./src/shared/*"],
      "@features/*":  ["./src/features/*"],
      "@cms/*":       ["./src/cms/*"]
    }
  }
}
```

Update `src/content/navigation.ts` import sites to import from `@/cms/mock/navigation` after Phase C is complete. After that, `src/content/navigation.ts` can be deleted (confirm with grep first).

### D.4 Verification after Phase D

```bash
npm run check
ls src/components/ 2>/dev/null && echo "FAIL: components/ still exists" || echo "OK: components/ removed"
```

All imports must resolve. Visual spot-check on `/`, `/about-us`, one service page.

---

## 6. Phase E: `/events` Route

The `/events` route exists at `src/app/events/page.tsx` but is not in `docs/url-structure.md`.

**Recommended action:** Keep the route but exclude from sitemap and navigation until content is ready. Add `noIndex: true` to its metadata now:

```ts
export const metadata: Metadata = {
  title: "Upcoming Events | B2B Sales Arrow",
  robots: { index: false, follow: false },
};
```

When events content is production-ready:
1. Add `"events"` to `pageRoutes` in `src/cms/mock/routes.ts`
2. Add SEO entry to `pageSeo`
3. Add nav entry if needed
4. Remove `noIndex`
5. Sitemap auto-generates the entry

---

## 7. Verification Checklist

### Commands

```bash
npm run check   # lint + typecheck + build, zero errors
```

### Structural checks

- [ ] `src/components/` does not exist
- [ ] All imports use `@/features/`, `@/shared/`, `@/cms/`, `@/content/`, or `@/lib/`
- [ ] No raw internal `href="/..."` strings in layout or navigation components
- [ ] All navigation links resolve through `resolvePageHref`
- [ ] `socialLinks` defined in CMS — no inline `href="#"` for socials in component JSX
- [ ] `sitemap.ts` generates from `pageRoutes`, not a hand-written array
- [ ] Route metadata uses `buildPageMetadata(getCmsPage(id)!.seo)`
- [ ] Contact form validates, shows loading state, pushes to `/thank-you`

### DOM checks

- [ ] Exactly one `<h1>` per route (all 26 canonical pages)
- [ ] Every section has exactly one `<h2>`
- [ ] All card titles use `<h3>`
- [ ] No `<h3>` or `<h4>` for nav labels, names, badges, or decorative text

### Visual regression pages

- [ ] `/` — all sections unchanged
- [ ] `/about-us` — editorial hero, globe, team unchanged
- [ ] `/services/global-event-solutions`
- [ ] `/services/global-event-solutions/trade-show-booth-design`
- [ ] `/services/media-production`
- [ ] `/services/performance-marketing/seo-services`
- [ ] `/blog`
- [ ] `/case-studies`
- [ ] `/contact-us` — form validates and submits correctly
- [ ] `/privacy-policy`
- [ ] `/terms-and-conditions`

### Interaction checks

- [ ] Header dropdown — all service links resolve via CMS
- [ ] Mobile menu — all links work
- [ ] Footer links — resolve via CMS
- [ ] CinematicFooter links — resolve via CMS
- [ ] Contact form — field validation, loading state, redirect to `/thank-you`
- [ ] All carousels, accordions, sticky cards, globe, cinematic sequence — unchanged

---

## 8. Out of Scope For This Plan

- Real CMS integration (Contentful, Sanity, Prismic, etc.) — `src/cms/mock/` is the placeholder
- A/B testing, feature flags
- Internationalisation
- Auth or gated pages
- Analytics beyond current setup
- Any visual redesign
- Blog or case study detail page routes (not in `docs/url-structure.md`)
