const BASE = "https://b2bsalesarrow.com";

const ORGANIZATION = {
  "@type": "Organization" as const,
  name: "B2B Sales Arrow",
  url: BASE,
  logo: `${BASE}/logo.png`,
  sameAs: ["https://www.linkedin.com/company/b2b-sales-arrow/"],
  description:
    "Global capability. Strategic growth partner for B2B enterprises specializing in event solutions and digital marketing.",
};

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    ...ORGANIZATION,
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
}

export function buildServiceJsonLd({ name, description, url }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE}${url}`,
    provider: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: ORGANIZATION.url,
    },
  };
}

export function buildFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(crumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(({ name, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: url,
    })),
  };
}
