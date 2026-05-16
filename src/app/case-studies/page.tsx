import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudiesIndex } from "@/components/sections/CaseStudiesIndex";
import { getPageMetadata } from "@/content/pages";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/case-studies");

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <CaseStudiesIndex />
      <Footer />
    </main>
  );
}
