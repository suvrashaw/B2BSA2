import type { Metadata } from "next";

import { getPageByUrl } from "@/content/pages";
import { buildPageMetadata } from "@/lib/seo";

import type { CmsSeo, PageId } from "./types";

import { pageRoutes } from "./routes";

const manualSeo: Record<PageId, CmsSeo> = {
  "cookie-policy": {
    canonicalPath: "/cookie-policy",
    description:
      "Learn how B2B Sales Arrow uses session, analytics, and functional cookies to operate and improve the website.",
    title: "Cookie Policy | B2B Sales Arrow",
  },
  events: {
    canonicalPath: "/events",
    description:
      "Upcoming B2B trade shows and industry events. Let B2B Sales Arrow design your booth presence and maximise your pipeline at every event.",
    focusKeyphrase: "B2B industry events",
    title: "B2B Industry Events | B2B Sales Arrow",
  },
  home: {
    canonicalPath: "/",
    description:
      "Global capability. Strategic growth. Enterprise event and digital solutions for modern businesses.",
    focusKeyphrase: "B2B global event solutions",
    title: "B2B Sales Arrow | Premium Growth Partner",
  },
  "privacy-policy": {
    canonicalPath: "/privacy-policy",
    description:
      "Learn about how B2B Sales Arrow collects, uses, and protects your data in accordance with global privacy standards.",
    title: "Privacy Policy | B2B Sales Arrow",
  },
  "terms-and-conditions": {
    canonicalPath: "/terms-and-conditions",
    description:
      "Read the terms and conditions governing the use of the B2B Sales Arrow website and services.",
    title: "Terms & Conditions | B2B Sales Arrow",
  },
  "thank-you": {
    canonicalPath: "/thank-you",
    description:
      "Thank you for contacting B2B Sales Arrow. Our team will review your message and get back to you shortly.",
    noIndex: true,
    title: "Thank You | B2B Sales Arrow",
  },
};

function getSeoForRoute(id: PageId, path: string): CmsSeo {
  const manual = manualSeo[id];

  if (manual) return manual;

  const page = getPageByUrl(path);

  return {
    canonicalPath: page.url.replace(/\/$/, "") || "/",
    description: page.metaDescription,
    focusKeyphrase: page.focusKeyphrase,
    secondaryKeywords: page.secondaryKeywords,
    title: page.metaTitle,
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
