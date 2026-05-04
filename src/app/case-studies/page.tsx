import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/case-studies");

export const metadata: Metadata = getPageMetadata("/case-studies");

export default function Page() {
  return <DocsPage page={page} />;
}
