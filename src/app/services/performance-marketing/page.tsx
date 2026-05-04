import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/performance-marketing");

export const metadata: Metadata = getPageMetadata("/services/performance-marketing");

export default function Page() {
  return <DocsPage page={page} />;
}
