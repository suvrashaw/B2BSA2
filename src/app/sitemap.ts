import { pageRoutes } from "@/cms/mock/routes";
import { pageSeo } from "@/cms/mock/seo";

import type { MetadataRoute } from "next";

const siteUrl = "https://b2bsalesarrow.com";

function getPriority(url: string): number {
  if (url === "/") return 1;
  return url.split("/").filter(Boolean).length <= 1 ? 0.8 : 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(pageRoutes)
    .filter(([id]) => !pageSeo[id]?.noIndex)
    .map(([, path]) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: getPriority(path),
    }));
}
