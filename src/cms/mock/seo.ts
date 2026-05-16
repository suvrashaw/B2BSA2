import { getPageByUrl } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

import { pageRoutes } from "./routes";

import type { CmsSeo, PageId } from "./types";
import type { Metadata } from "next";

const manualSeo: Record<PageId, CmsSeo> = {
  home: {
    title: "B2B Sales Arrow | Premium Growth Partner",
    description:
      "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
    canonicalPath: "/",
    focusKeyphrase: "B2B global event solutions",
  },
  events: {
    title: "B2B Industry Events | B2B Sales Arrow",
    description:
      "Upcoming B2B trade shows and industry events. Let B2B Sales Arrow design your booth presence and maximise your pipeline at every event.",
    canonicalPath: "/events",
    focusKeyphrase: "B2B industry events",
  },
  "privacy-policy": {
    title: "Privacy Policy | B2B Sales Arrow",
    description:
      "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
    canonicalPath: "/privacy-policy",
  },
  "terms-and-conditions": {
    title: "Terms & Conditions | B2B Sales Arrow",
    description:
      "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
    canonicalPath: "/terms-and-conditions",
  },
  "cookie-policy": {
    title: "Cookie Policy | B2B Sales Arrow",
    description:
      "Learn how B2B Sales Arrow uses session, analytics, and functional cookies to operate and improve the website.",
    canonicalPath: "/cookie-policy",
  },
  "thank-you": {
    title: "Thank You | B2B Sales Arrow",
    description:
      "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
    canonicalPath: "/thank-you",
    noIndex: true,
  },
};

function getSeoForRoute(id: PageId, path: string): CmsSeo {
  const manual = manualSeo[id];

  if (manual) return manual;

  const page = getPageByUrl(path);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    canonicalPath: page.url.replace(/\/$/, "") || "/",
    focusKeyphrase: page.focusKeyphrase,
    secondaryKeywords: page.secondaryKeywords,
  };
}

export const pageSeo: Record<PageId, CmsSeo> = Object.fromEntries(
  Object.entries(pageRoutes).map(([id, path]) => [id, getSeoForRoute(id, path)])
);

export function getCmsPageMetadata(pageId: PageId): Metadata {
  const seo = pageSeo[pageId];

  if (!seo) {
    throw new Error(`[cms] No SEO entry for pageId: "${pageId}"`);
  }

  return buildPageMetadata(seo, pageId);
}
