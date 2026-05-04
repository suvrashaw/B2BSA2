import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/performance-marketing/linkedin-ads-b2b");

export const metadata: Metadata = getPageMetadata("/services/performance-marketing/linkedin-ads-b2b");

export default function Page() {
  return <DocsPage page={page} />;
}
