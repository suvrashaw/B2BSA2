import { finalPageUrls } from "@/content/pages";

import type { MetadataRoute } from "next";

const siteUrl = "https://b2bsalesarrow.com";

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
}

const canonicalUrls = [...new Set(["/", ...finalPageUrls.map(normalizePath), "/privacy-policy", "/terms-and-conditions"])];

export default function sitemap(): MetadataRoute.Sitemap {
  return canonicalUrls.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: url === "/" ? "weekly" : "monthly",
    priority: url === "/" ? 1 : (url.split("/").filter(Boolean).length <= 1 ? 0.8 : 0.6),
  }));
}
