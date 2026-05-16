import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CaseStudies } from "@/components/sections/CaseStudies";
import type { CaseStudiesProps } from "@/components/sections/CaseStudies";
import { CTABanner } from "@/components/sections/CTABanner";
import { DataTable } from "@/components/sections/DataTable";
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
import { getPageByUrl } from "@/content/pages";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from "@/lib";

// SEO Utility Component
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
      }}
    />
  );
}

export interface ServiceDetailProps {
  canonicalPath?: string;
  hero: {
    title: string;
    description: string;
  };
  proofBar?: string[];
  deliverables?: OurServicesProps;
  why?: WhyChooseUsProps;
  process?: {
    title: string;
    phases: { title: string; description: string }[];
  };
  pricing?: {
    title: string;
    headers: string[];
    rows: { [key: string]: string }[];
  };
  pricingGuidance?: {
    title: string;
    description: string;
    headers: string[];
    rows: { [key: string]: string }[];
    footer?: string;
  };
  caseStudies?: CaseStudiesProps;
  stats?: {
    title: string;
    items: { label: string; value: string }[];
  };
  faq: FAQProps;
  relatedServices?: { title: string; href: string }[];
  ctaBanner?: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref?: string;
  };
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
  proofBar,
  deliverables,
  why,
  process,
  pricing,
  pricingGuidance,
  caseStudies,
  stats,
  faq,
  relatedServices,
  ctaBanner,
}: ServiceDetailProps) {
  const faqJsonLd = faq.faqs?.length ? buildFaqJsonLd(faq.faqs) : null;
  const breadcrumbJsonLd = canonicalPath
    ? buildBreadcrumbJsonLd(getBreadcrumbs(canonicalPath))
    : null;
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
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <Header darkBackground />

      <ServiceHero
        title={hero.title}
        description={hero.description}
        primaryCta={{ label: "Book a Strategy Session", href: "/contact" }}
        secondaryCta={{ label: "View Event Portfolio", href: "/case-studies" }}
      />

      {proofBar && <ProofBar stats={proofBar} />}

      {deliverables && <OurServices {...deliverables} />}

      {why && <WhyChooseUs {...why} />}

      {process && <ProcessTimeline title={process.title} phases={process.phases} />}

      {pricing && <DataTable title={pricing.title} headers={pricing.headers} rows={pricing.rows} />}

      {pricingGuidance && (
        <>
          <DataTable
            title={pricingGuidance.title}
            description={pricingGuidance.description}
            headers={pricingGuidance.headers}
            rows={pricingGuidance.rows}
            className="bg-brand-gray/50"
          />
          {pricingGuidance.footer && (
            <div className="container mx-auto -mt-12 px-8 pb-8">
              <p className="text-sm text-brand-gray/60">{pricingGuidance.footer}</p>
            </div>
          )}
        </>
      )}

      {caseStudies && <CaseStudies {...caseStudies} />}

      {stats && <WhoWeAre title={stats.title} items={stats.items} />}

      <FAQ {...faq} />

      {relatedServices && <RelatedServices services={relatedServices} />}

      <CTABanner
        title={ctaBanner?.title ?? "Ready to Build Your Enterprise Growth Engine?"}
        description={
          ctaBanner?.description ?? "250+ events. $1.2B+ influenced. One conversation to start."
        }
        ctaLabel={ctaBanner?.ctaLabel ?? "Book a Strategy Session"}
        ctaHref={ctaBanner?.ctaHref ?? "/contact"}
      />

      <Footer />
    </main>
  );
}
