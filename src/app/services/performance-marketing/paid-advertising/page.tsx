import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/performance-marketing/paid-advertising");

export const metadata: Metadata = getPageMetadata("/services/performance-marketing/paid-advertising");

export default function Page() {
  return <DocsPage page={page} />;
}
