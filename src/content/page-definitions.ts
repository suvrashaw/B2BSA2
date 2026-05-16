import type { CmsSeo, PageType } from "@/cms/mock/types";

export interface MarketingPageDefinition {
  pageId: string;
  pageName: string;
  pageType: MarketingPageType;
  seo: CmsSeo;
}

export type MarketingPageIdentity = Pick<MarketingPageDefinition, "pageName" | "seo">;

export type MarketingPageType = Exclude<PageType, "legal" | "system">;
