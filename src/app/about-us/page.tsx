import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/about-us");

export const metadata: Metadata = getPageMetadata("/about-us");

export default function Page() {
  return <DocsPage page={page} />;
}
