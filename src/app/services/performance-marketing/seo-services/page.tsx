import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/performance-marketing/seo-services");

export const metadata: Metadata = getPageMetadata("/services/performance-marketing/seo-services");

export default function Page() {
  return <DocsPage page={page} />;
}
