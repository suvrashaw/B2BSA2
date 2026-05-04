import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/media-production/live-streaming-services");

export const metadata: Metadata = getPageMetadata("/services/media-production/live-streaming-services");

export default function Page() {
  return <DocsPage page={page} />;
}
