import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import type { FAQProps } from "@/components/sections/FAQ";
import type { OurServicesProps } from "@/components/sections/OurServices";
import type { WhyChooseUsProps } from "@/components/sections/WhyChooseUs";
import type { MarketingPageIdentity } from "@/content/page-definitions";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTABanner } from "@/components/sections/CTABanner";
import { DataTable } from "@/components/sections/DataTable";
import { FAQ } from "@/components/sections/FAQ";
import { OurServices } from "@/components/sections/OurServices";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProofBar } from "@/components/sections/ProofBar";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

export interface ServiceDetailProps {
  caseStudies?: CaseStudiesProps;
  ctaBanner?: {
    ctaHref?: string;
    ctaLabel: string;
    description: string;
    title: string;
  };
  deliverables?: OurServicesProps;
  faq: FAQProps;
  hero: {
    description: string;
    title: string;
  };
  page: MarketingPageIdentity;
  parentPage?: MarketingPageIdentity;
  pricing?: {
    headers: string[];
    rows: { [key: string]: string }[];
    title: string;
  };
  pricingGuidance?: {
    description: string;
    footer?: string;
    headers: string[];
    rows: { [key: string]: string }[];
    title: string;
  };
  process?: {
    phases: { description: string; title: string; }[];
    title: string;
  };
  proofBar?: string[];
  relatedServices?: { href: string; title: string; }[];
  stats?: {
    items: { label: string; value: string }[];
    title: string;
  };
  why?: WhyChooseUsProps;
}

// SEO Utility Component
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
      }}
      type="application/ld+json"
    />
  );
}

const siteUrl = "https://b2bsalesarrow.com";

export function ServiceDetail({
  caseStudies,
  ctaBanner,
  deliverables,
  faq,
  hero,
  page,
  parentPage,
  pricing,
  pricingGuidance,
  process,
  proofBar,
  relatedServices,
  stats,
  why,
}: ServiceDetailProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(getBreadcrumbs(page, parentPage));
  const serviceJsonLd = buildServiceJsonLd({
    description: page.seo.description,
    name: page.pageName,
    url: page.seo.canonicalPath,
  });

  return (
    <main className="min-h-screen bg-brand-gray">
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} /> : null}
      <JsonLd data={breadcrumbJsonLd} />
      <Header darkBackground />

      <ServiceHero
        description={hero.description}
        primaryCta={{ href: "/contact", label: "Book a Strategy Session" }}
        secondaryCta={{ href: "/case-studies", label: "View Event Portfolio" }}
        title={hero.title}
      />

      {proofBar && <ProofBar stats={proofBar} />}

      {deliverables && <OurServices {...deliverables} />}

      {why && <WhyChooseUs {...why} />}

      {process && <ProcessTimeline phases={process.phases} title={process.title} />}

      {pricing && <DataTable headers={pricing.headers} rows={pricing.rows} title={pricing.title} />}

      {pricingGuidance && (
        <>
          <DataTable
            className="bg-brand-gray/50"
            description={pricingGuidance.description}
            headers={pricingGuidance.headers}
            rows={pricingGuidance.rows}
            title={pricingGuidance.title}
          />
          {pricingGuidance.footer && (
            <div className="container mx-auto -mt-12 px-8 pb-8">
              <p className="text-sm text-brand-gray/60">{pricingGuidance.footer}</p>
            </div>
          )}
        </>
      )}

      {caseStudies && <CaseStudies {...caseStudies} />}

      {stats && <WhoWeAre items={stats.items} title={stats.title} />}

      <FAQ {...faq} />

      {relatedServices && <RelatedServices services={relatedServices} />}

      <CTABanner
        ctaHref={ctaBanner?.ctaHref ?? "/contact"}
        ctaLabel={ctaBanner?.ctaLabel ?? "Book a Strategy Session"}
        description={
          ctaBanner?.description ?? "250+ events. $1.2B+ influenced. One conversation to start."
        }
        title={ctaBanner?.title ?? "Ready to Build Your Enterprise Growth Engine?"}
      />

      <Footer />
    </main>
  );
}

function getBreadcrumbs(page: MarketingPageIdentity, parentPage?: MarketingPageIdentity) {
  const crumbs = [{ name: "Home", url: siteUrl }];

  if (parentPage) {
    crumbs.push({
      name: parentPage.pageName,
      url: `${siteUrl}${normalizePath(parentPage.seo.canonicalPath)}`,
    });
  }

  crumbs.push({
    name: page.pageName,
    url: `${siteUrl}${normalizePath(page.seo.canonicalPath)}`,
  });

  return crumbs;
}

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.replace(/\/$/, "");
}
