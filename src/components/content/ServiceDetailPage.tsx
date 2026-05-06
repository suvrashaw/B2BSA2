import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/HomeHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OurServices } from "@/components/sections/OurServices";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageByUrl } from "@/content/pages";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/lib/structured-data";
import type { HeroProps } from "@/components/sections/HomeHero";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { WhoWeAreProps } from "@/components/sections/WhoWeAre";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { TestimonialsProps } from "@/components/sections/Testimonials";
import type { FAQProps } from "@/components/sections/FAQ";
import type { ContactUsProps } from "@/components/sections/ContactUs";

export interface ServiceDetailPageProps {
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
  const parentPath =
    pathSegments.length > 2 ? `/${pathSegments.slice(0, -1).join("/")}` : null;
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

export function ServiceDetailPage({
  canonicalPath,
  hero,
  why,
  deliverables,
  stats,
  caseStudies,
  testimonials,
  faq,
  contact,
}: ServiceDetailPageProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const breadcrumbJsonLd = canonicalPath
    ? buildBreadcrumbJsonLd(getBreadcrumbs(canonicalPath))
    : null;

  return (
    <main className="min-h-screen bg-brand-gray">
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
