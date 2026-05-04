import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/contact-us");

export const metadata: Metadata = getPageMetadata("/contact-us");

export default function Page() {
  return <DocsPage page={page} />;
}
