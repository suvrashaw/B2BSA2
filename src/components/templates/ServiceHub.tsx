import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import type { FAQProps } from "@/components/sections/FAQ";
import { OurServices } from "@/components/sections/OurServices";
import type { OurServicesProps } from "@/components/sections/OurServices";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { getPageByUrl } from "@/content/pages";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

export interface ServiceHubProps {
  canonicalPath?: string;
  hero: {
    title: string;
    description: string;
  };
  proofBar?: string[];
  services: OurServicesProps;
  why: WhyChooseUsProps;
  process?: {
    heading?: string;
    phases: { title: string; description: string }[];
    steps?: { title: string; description: string }[];
    title?: string;
  };
  caseStudies?: CaseStudiesProps;
  stats?: {
    title: string;
    items: { label: string; value: string }[];
  };
  faq: FAQProps;
  relatedServices?: { title: string; href: string }[];
}

export function ServiceHub({
  canonicalPath,
  hero,
  proofBar,
  services,
  why,
  process,
  caseStudies,
  stats,
  faq,
  relatedServices,
}: ServiceHubProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const page = canonicalPath ? getPageByUrl(canonicalPath) : null;
  const serviceJsonLd = page
    ? buildServiceJsonLd({
        name: page.pageName,
        description: page.metaDescription,
        url: canonicalPath!,
      })
    : null;

  return (
    <main className="min-h-screen bg-brand-gray">
      {serviceJsonLd ? <JsonLd data={serviceJsonLd} /> : null}
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Header darkBackground />

      <ServiceHero
        title={hero.title}
        description={hero.description}
        primaryCta={{ label: "Book a Strategy Session", href: "/contact" }}
        secondaryCta={{ label: "View Event Portfolio", href: "/case-studies" }}
      />

      {proofBar && <ProofBar stats={proofBar} />}

      <OurServices {...services} />

      <WhyChooseUs {...why} />

      {process && (
        <ProcessTimeline
          title={process.title ?? process.heading}
          steps={process.steps ?? process.phases}
        />
      )}

      {caseStudies && <CaseStudies {...caseStudies} />}

      {stats && <WhoWeAre title={stats.title} items={stats.items} />}

      <FAQ {...faq} />

      {relatedServices && <RelatedServices services={relatedServices} />}

      <CTABanner
        title="Ready to Build Your Enterprise Growth Engine?"
        description="250+ events. $1.2B+ influenced. One conversation to start."
        ctaLabel="Book a Strategy Session"
        ctaHref="/contact"
      />

      <Footer />
    </main>
  );
}
