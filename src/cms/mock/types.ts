export type PageType =
  | "home"
  | "serviceHub"
  | "serviceDetail"
  | "resourceIndex"
  | "company"
  | "contact"
  | "legal"
  | "system";

export interface CmsSeo {
  title: string;
  description: string;
  canonicalPath: string;
  focusKeyphrase?: string;
  secondaryKeywords?: string[];
  noIndex?: boolean;
}

export interface CmsHeading {
  text: string;
  highlight?: string;
  highlightVariant?: "blue" | "cyan";
}

export interface CmsImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export interface CmsLink {
  label: string;
  pageId?: PageId;
  href?: string;
}

export interface CmsCTA {
  label: string;
  pageId?: PageId;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export interface CmsFAQ {
  question: string;
  answer: string;
}

export interface CmsPage {
  id: PageId;
  pageType: PageType;
  seo: CmsSeo;
  title: CmsHeading;
  heroImage?: CmsImage;
  heroBadge?: { value: string; label: string; icon?: string };
  sectionHeadings?: Record<string, CmsHeading>;
  tags?: string[];
  internalLinks?: CmsLink[];
  faqs?: CmsFAQ[];
  ctas?: CmsCTA[];
}

export type PageId = string & { readonly __pageIdBrand?: never };
