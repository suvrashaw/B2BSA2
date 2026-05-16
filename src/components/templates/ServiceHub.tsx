import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { FAQProps } from "@/components/sections/FAQ";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { OurServices } from "@/components/sections/OurServices";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JsonLd } from "@/components/templates/ServiceDetail";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

export interface ServiceHubProps {
  caseStudies?: CaseStudiesProps;
  ctaBanner?: {
    ctaHref?: string;
    ctaLabel: string;
    description?: string;
    title: string;
  };
  faq: FAQProps;
  hero: {
    description: string;
    title: string;
  };
  page: MarketingPageIdentity;
  process?: {
    heading?: string;
    phases: { description: string; title: string; }[];
    steps?: { description: string; title: string; }[];
    title?: string;
  };
  proofBar?: string[];
  relatedServices?: { href: string; title: string; }[];
  services: OurServicesProps;
  stats?: {
    items: { label: string; value: string }[];
    title: string;
  };
  why: WhyChooseUsProps;
}

export function ServiceHub({
  caseStudies,
  ctaBanner,
  faq,
  hero,
  page,
  process,
  proofBar,
  relatedServices,
  services,
  stats,
  why,
}: ServiceHubProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const serviceJsonLd = buildServiceJsonLd({
    description: page.seo.description,
    name: page.pageName,
    url: page.seo.canonicalPath,
  });

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <Header darkBackground />

      <ServiceHero
        description={hero.description}
        primaryCta={{ href: "/contact", label: "Book a Strategy Session" }}
        secondaryCta={{ href: "/case-studies", label: "View Event Portfolio" }}
        title={hero.title}
      />

      {proofBar && <ProofBar stats={proofBar} />}

      <OurServices {...services} />

      <WhyChooseUs {...why} />

      {process && (
        <ProcessTimeline
          steps={process.steps ?? process.phases}
          title={process.title ?? process.heading}
        />
      )}

      {caseStudies && <CaseStudies {...caseStudies} />}

      {stats && <WhoWeAre items={stats.items} title={stats.title} />}

      <FAQ {...faq} />

      {relatedServices && <RelatedServices services={relatedServices} />}

      <CTABanner
        ctaHref={ctaBanner?.ctaHref ?? "/contact"}
        ctaLabel={ctaBanner?.ctaLabel ?? "Book a Strategy Session"}
        description={ctaBanner?.description ?? "250+ events. $1.2B+ influenced. One conversation to start."}
        title={ctaBanner?.title ?? "Ready to Build Your Enterprise Growth Engine?"}
      />

      <Footer />
    </main>
  );
}
