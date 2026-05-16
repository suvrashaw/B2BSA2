import type { CmsLink, PageId } from "./types";

import { cmsPages } from "./registry";
import { pageRoutes } from "./routes";

export interface RelatedItem {
  href: string;
  id: PageId;
  title: string;
}

export function getRelatedContent(tags: string[], limit = 3, excludeId?: string): RelatedItem[] {
  return cmsPages
    .filter((page) => page.id !== excludeId && page.tags?.some((tag) => tags.includes(tag)))
    .slice(0, limit)
    .map((page) => ({
      href: resolvePageHref(page.id),
      id: page.id,
      title: page.title.text,
    }));
}

export function resolveLink(link: CmsLink): string {
  if (link.pageId) return resolvePageHref(link.pageId);
  if (link.href) return link.href;
  return "#";
}

export function resolvePageHref(pageId: PageId): string {
  const path = pageRoutes[pageId];

  if (!path) {
    throw new Error(`[cms] No route for pageId: "${pageId}"`);
  }

  return path;
}
