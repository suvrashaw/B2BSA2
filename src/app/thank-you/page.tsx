import { getCmsPageMetadata } from "@/cms/mock/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { Hero } from "@/components/sections/Hero";
import { OurServices } from "@/components/sections/OurServices";
import { THANK_YOU_HERO, THANK_YOU_SERVICES, THANK_YOU_BLOGS } from "@/content/thank-you";

import type { Metadata } from "next";

export const metadata: Metadata = getCmsPageMetadata("thank-you");

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
      <Header />
      <Hero {...THANK_YOU_HERO} />
      <OurServices {...THANK_YOU_SERVICES} />
      <Blogs {...THANK_YOU_BLOGS} />
      <Footer />
    </main>
  );
}
