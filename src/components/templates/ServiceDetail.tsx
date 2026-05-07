import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ContactUs } from "@/components/sections/ContactUs";
import type { ContactUsProps } from "@/components/sections/ContactUs";
import { FAQ } from "@/components/sections/FAQ";
import type { FAQProps } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { OurServices } from "@/components/sections/OurServices";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
// SEO Utility Component
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll('<', String.raw`\u003c`),
      }}
    />
  );
}

import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import { getPageByUrl } from "@/content/pages";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib";
import type { HeroProps } from "@/components/sections/Hero";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { WhoWeAreProps } from "@/components/sections/WhoWeAre";
import type { TestimonialsProps } from "@/components/sections/Testimonials";

export interface ServiceDetailProps {
  canonicalPath?: string;
  hero: HeroProps;
  why: WhyChooseUsProps;
  deliverables: OurServicesProps;
  stats: WhoWeAreProps;
  caseStudies: CaseStudiesProps;
  testimonials: TestimonialsProps;
  faq: FAQProps;
  contact: ContactUsProps;
}

const siteUrl = "https://b2bsalesarrow.com";

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
}

function getBreadcrumbs(canonicalPath: string) {
  const normalizedPath = normalizePath(canonicalPath);
  const pathSegments = normalizedPath.split("/").filter(Boolean);
  const parentPath = pathSegments.length > 2 ? `/${pathSegments.slice(0, -1).join("/")}` : null;
  const crumbs = [{ name: "Home", url: siteUrl }];

  if (parentPath) {
    try {
      const parentPage = getPageByUrl(parentPath);
      crumbs.push({
        name: parentPage.pageName,
        url: `${siteUrl}${normalizePath(parentPage.url)}`,
      });
    } catch {
      // Some detail pages intentionally live under non-hub groupings.
    }
  }

  const currentPage = getPageByUrl(normalizedPath);
  crumbs.push({
    name: currentPage.pageName,
    url: `${siteUrl}${normalizePath(currentPage.url)}`,
  });

  return crumbs;
}

export function ServiceDetail({
  canonicalPath,
  hero,
  why,
  deliverables,
  stats,
  caseStudies,
  testimonials,
  faq,
  contact,
}: ServiceDetailProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const breadcrumbJsonLd = canonicalPath
    ? buildBreadcrumbJsonLd(getBreadcrumbs(canonicalPath))
    : null;

  return (
    <main className="bg-brand-gray min-h-screen">
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <Header />
      <Hero {...hero} />
      <WhyChooseUs {...why} />
      <OurServices {...deliverables} />
      <WhoWeAre {...stats} />
      <CaseStudies {...caseStudies} />
      <ClientLogos />
      <Testimonials {...testimonials} />
      <FAQ {...faq} />
      <ContactUs {...contact} />
      <Footer />
    </main>
  );
}
