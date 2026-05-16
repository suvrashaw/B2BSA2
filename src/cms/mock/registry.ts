import { getPageByUrl } from "@/content/pages";

import { pageRoutes } from "./routes";
import { pageSeo } from "./seo";

import type { CmsHeading, CmsPage, PageId, PageType } from "./types";

const serviceHubIds = new Set<PageId>([
  "service.global-event-solutions",
  "service.media-production",
  "service.performance-marketing",
  "service.sales-qualified-lead-generation",
  "service.market-research",
]);

function getPageType(id: PageId): PageType {
  if (id === "home") return "home";
  if (id === "about") return "company";
  if (id === "contact") return "contact";
  if (id === "blog" || id === "case-studies" || id === "events") return "resourceIndex";
  if (id === "privacy-policy" || id === "terms-and-conditions" || id === "cookie-policy") {
    return "legal";
  }
  if (id === "thank-you") return "system";
  if (serviceHubIds.has(id)) return "serviceHub";
  return "serviceDetail";
}

function buildHeading(id: PageId, path: string): CmsHeading {
  if (id === "home") {
    return {
      text: "B2B Global Event Solutions & Trade Show Booth Designs",
      highlight: "Event",
      highlightVariant: "blue",
    };
  }

  if (id === "privacy-policy" || id === "terms-and-conditions" || id === "cookie-policy") {
    return {
      text: pageSeo[id].title.replace(" | B2B Sales Arrow", ""),
      highlight: pageSeo[id].title.split(" ")[0],
      highlightVariant: "blue",
    };
  }

  if (id === "thank-you") {
    return { text: "Thank You", highlight: "Thank", highlightVariant: "blue" };
  }

  try {
    const page = getPageByUrl(path);

    return {
      text: page.hero.title,
      highlight: page.focusKeyphrase.split(" ")[0],
      highlightVariant: "blue",
    };
  } catch {
    return {
      text: pageSeo[id].title.replace(" | B2B Sales Arrow", ""),
    };
  }
}

export const cmsPages: CmsPage[] = Object.entries(pageRoutes).map(([id, path]) => {
  let pageData: ReturnType<typeof getPageByUrl> | null = null;

  try {
    pageData = getPageByUrl(path);
  } catch {
    pageData = null;
  }

  return {
    id,
    pageType: getPageType(id),
    seo: pageSeo[id],
    title: buildHeading(id, path),
    ...(id === "home" && {
      heroImage: {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
        alt: "B2B trade show event with exhibition booth and lead generation",
        priority: true as const,
      },
      heroBadge: { value: "40+", label: "Countries Served", icon: "Globe" },
    }),
    tags: pageData?.secondaryKeywords?.map((keyword) => `#${keyword.replaceAll(/\s+/g, "")}`),
    internalLinks: pageData?.internalLinks.map((link) => ({
      label: link.sourceSection,
      href: link.href,
    })),
    faqs: pageData?.faqs,
    ctas: pageData?.ctas.map((cta) => ({
      label: cta.label,
      href: cta.href,
    })),
  };
});

export const cmsPagesById: Record<PageId, CmsPage> = Object.fromEntries(
  cmsPages.map((page) => [page.id, page])
);

export function getCmsPage(pageId: PageId): CmsPage | undefined {
  return cmsPagesById[pageId];
}
