import type { Metadata } from "next";

import { DocsPage } from "@/components/content/DocsPage";
import { getPageByUrl, getPageMetadata } from "@/content/pages";

const page = getPageByUrl("/services/market-research/human-powered-market-intelligence");

export const metadata: Metadata = getPageMetadata("/services/market-research/human-powered-market-intelligence");

export default function Page() {
  return <DocsPage page={page} />;
}
