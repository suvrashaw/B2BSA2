import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Blogs } from "@/components/sections/Blogs";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import {
  BLOG_HERO,
  BLOG_WHO_WE_ARE,
  BLOG_LOGOS,
  BLOG_POSTS,
  BLOG_FAQ,
  BLOG_CONTACT,
} from "@/content/page-sections/blog";
import { getPageMetadata } from "@/content/pages";

export const metadata: Metadata = getPageMetadata("/blog");

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-gray">
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
