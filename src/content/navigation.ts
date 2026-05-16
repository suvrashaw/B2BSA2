export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceNavGroup {
  name: string;
  href: string;
  links: NavLink[];
}

export const topNavigation: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services/global-event-solutions" },
  { name: "Trade Shows", href: "#" },
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export const tradeShowLinks: NavLink[] = [
  { name: "Upcoming Trade Shows 2026", href: "#" },
  { name: "Trade Shows in Las Vegas", href: "#" },
  { name: "Trade Shows in Germany", href: "#" },
  { name: "Trade Shows in Dubai", href: "#" },
  { name: "Trade Shows in US", href: "#" },
];

export const serviceNavigationGroups: ServiceNavGroup[] = [
  {
    name: "Global Event Solutions",
    href: "/services/global-event-solutions",
    links: [
      {
        name: "Trade Show Booth Design",
        href: "/services/global-event-solutions/trade-show-booth-design",
      },
      {
        name: "Event Lead Generation",
        href: "/services/global-event-solutions/event-lead-generation",
      },
      { name: "Industry Events", href: "/services/global-event-solutions/industry-events" },
      { name: "Custom Events", href: "/services/global-event-solutions/custom-events" },
      { name: "Event Booth Rental", href: "/services/global-event-solutions/event-booth-rental" },
      {
        name: "Trade Show Booth Builder",
        href: "/services/global-event-solutions/trade-show-booth-builder",
      },
      {
        name: "Modular and Portable Booths",
        href: "/services/global-event-solutions/modular-portable-booths",
      },
    ],
  },
  {
    name: "Media Production",
    href: "/services/media-production",
    links: [
      { name: "Event Video Production", href: "/services/media-production/event-video-production" },
      {
        name: "Corporate Video Production",
        href: "/services/media-production/corporate-video-production",
      },
      {
        name: "Live Streaming Services",
        href: "/services/media-production/live-streaming-services",
      },
      { name: "Video Editing Services", href: "/services/media-production/video-editing-services" },
    ],
  },
  {
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    links: [
      { name: "SEO Services", href: "/services/performance-marketing/seo-services" },
      { name: "Paid Advertising", href: "/services/performance-marketing/paid-advertising" },
      { name: "LinkedIn Ads for B2B", href: "/services/performance-marketing/linkedin-ads" },
    ],
  },
  {
    name: "Sales Qualified Lead Generation",
    href: "/services/sales-qualified-lead-generation",
    links: [],
  },
  {
    name: "Market Research",
    href: "/services/market-research",
    links: [
      {
        name: "Human-Powered Intelligence",
        href: "/services/market-research/human-powered-market-intelligence",
      },
      { name: "Data Validation", href: "/services/market-research/data-validation" },
      { name: "Data Augmentation", href: "/services/market-research/data-augmentation" },
    ],
  },
];

export const footerServiceGroups: ServiceNavGroup[] = serviceNavigationGroups.map((group) => ({
  ...group,
  links: [...group.links],
}));

export const footerNavigation: NavLink[] = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];
