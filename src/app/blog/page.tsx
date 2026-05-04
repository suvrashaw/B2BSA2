import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/blog");

export const metadata: Metadata = getPageMetadata("/blog");

export default function Page() {
  return <DocsPage page={page} />;
}
