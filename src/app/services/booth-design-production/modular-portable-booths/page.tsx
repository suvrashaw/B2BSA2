import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/booth-design-production/modular-portable-booths");

export const metadata: Metadata = getPageMetadata("/services/booth-design-production/modular-portable-booths");

export default function Page() {
  return <DocsPage page={page} />;
}
