import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Blogs } from "@/components/sections/Blogs";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { BLOG_HERO, BLOG_LOGOS, BLOG_POSTS, BLOG_CONTACT } from "@/content/blog";
import { getPageMetadata } from "@/content/pages";

import type { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("/blog");

export default function Page() {
  return (
    <main className="bg-brand-gray min-h-screen">
      <Header />
      <Hero {...BLOG_HERO} />
      <ClientLogos logos={BLOG_LOGOS} heading="Content Categories" overlap={false} />
      <Blogs {...BLOG_POSTS} layout="grid" />
      <ContactUs {...BLOG_CONTACT} />
      <Footer />
    </main>
  );
}
