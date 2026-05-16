import type { CmsSeo } from "@/cms/mock/types";

import type { Metadata } from "next";

const BASE_URL = "https://b2bsalesarrow.com";

export function buildPageMetadata(seo: CmsSeo, pageId?: string): Metadata {
  const canonicalUrl = `${BASE_URL}${seo.canonicalPath}`;
  const ogImageUrl = pageId
    ? `${BASE_URL}/og?pageId=${pageId}&title=${encodeURIComponent(seo.title)}`
    : `${BASE_URL}/og-default.png`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
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
