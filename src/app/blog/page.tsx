import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import {
  BLOG_HERO,
  BLOG_WHO_WE_ARE,
  BLOG_LOGOS,
  BLOG_POSTS,
  BLOG_FAQ,
  BLOG_CONTACT,
} from "@/content/blog";
import { getPageMetadata } from "@/content/pages";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/blog");

export default function Page() {
  return (
    <main className="bg-brand-gray min-h-screen">
      <Header />
      <Hero {...BLOG_HERO} />
      <WhoWeAre {...BLOG_WHO_WE_ARE} />
      <ClientLogos logos={BLOG_LOGOS} />
      <Blogs {...BLOG_POSTS} />
      <FAQ {...BLOG_FAQ} />
      <ContactUs {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
}
