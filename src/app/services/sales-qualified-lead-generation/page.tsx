import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/sales-qualified-lead-generation");

export const metadata: Metadata = getPageMetadata("/services/sales-qualified-lead-generation");

export default function Page() {
  return <DocsPage page={page} />;
}
