export interface CaseStudyCardSummary {
  label: string;
  text: string;
}

export interface CaseStudyCardData {
  id: string;
  client: string;
  title: string;
  image: string;
  icon: string;
  metric: string;
  metricLabel: string;
  primarySummary: CaseStudyCardSummary;
  secondarySummary: CaseStudyCardSummary;
  href?: string;
  badge?: string;
  inactiveLabel?: string;
}

export interface CaseStudyIndexEntry {
  id: string;
  anchorId: string;
  title: string;
  industry: string;
  event: string;
  servicesText: string;
  serviceCategories: string[];
  geography: string;
  companySize: string;
  challenge: string;
  whatWeDid: string;
  results: string;
  card: CaseStudyCardData;
}
