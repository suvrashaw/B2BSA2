import { getPageByUrl } from "@/content/pages";

import type { CmsHeading, CmsPage, PageId, PageType } from "./types";

import { pageRoutes } from "./routes";
import { pageSeo } from "./seo";

const serviceHubIds = new Set<PageId>([
  "service.global-event-solutions",
  "service.market-research",
  "service.media-production",
  "service.performance-marketing",
  "service.sales-qualified-lead-generation",
]);

function buildHeading(id: PageId, path: string): CmsHeading {
  if (id === "home") {
    return {
      highlight: "Event",
      highlightVariant: "blue",
      text: "B2B Global Event Solutions & Trade Show Booth Designs",
    };
  }

  if (id === "privacy-policy" || id === "terms-and-conditions" || id === "cookie-policy") {
    return {
      highlight: pageSeo[id].title.split(" ")[0],
      highlightVariant: "blue",
      text: pageSeo[id].title.replace(" | B2B Sales Arrow", ""),
    };
  }

  if (id === "thank-you") {
    return { highlight: "Thank", highlightVariant: "blue", text: "Thank You" };
  }

  try {
    const page = getPageByUrl(path);

    return {
      highlight: page.focusKeyphrase.split(" ")[0],
      highlightVariant: "blue",
      text: page.hero.title,
    };
  } catch {
    return {
      text: pageSeo[id].title.replace(" | B2B Sales Arrow", ""),
    };
  }
}

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

export const cmsPages: CmsPage[] = Object.entries(pageRoutes).map(([id, path]) => {
  let pageData: null | ReturnType<typeof getPageByUrl> = null;

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
      heroBadge: { icon: "Globe", label: "Countries Served", value: "40+" },
      heroImage: {
        alt: "B2B trade show event with exhibition booth and lead generation",
        priority: true as const,
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
      },
    }),
    ctas: pageData?.ctas.map((cta) => ({
      href: cta.href,
      label: cta.label,
    })),
    faqs: pageData?.faqs,
    internalLinks: pageData?.internalLinks.map((link) => ({
      href: link.href,
      label: link.sourceSection,
    })),
    tags: pageData?.secondaryKeywords?.map((keyword) => `#${keyword.replaceAll(/\s+/g, "")}`),
  };
});

export const cmsPagesById: Record<PageId, CmsPage> = Object.fromEntries(
  cmsPages.map((page) => [page.id, page])
);

export function getCmsPage(pageId: PageId): CmsPage | undefined {
  return cmsPagesById[pageId];
}
