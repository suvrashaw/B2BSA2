import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/global-event-solutions/event-booth-rental");

export const metadata: Metadata = getPageMetadata("/services/global-event-solutions/event-booth-rental");

export default function Page() {
  return <DocsPage page={page} />;
}
