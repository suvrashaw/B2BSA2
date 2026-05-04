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
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services/global-event-solutions" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

export const serviceNavigationGroups: ServiceNavGroup[] = [
  {
    name: "Global Event Solutions",
    href: "/services/global-event-solutions",
    links: [
      { name: "Trade Show Booth Design", href: "/services/global-event-solutions/trade-show-booth-design" },
      { name: "Event Lead Generation", href: "/services/global-event-solutions/event-lead-generation" },
      { name: "Industry Events", href: "/services/global-event-solutions/industry-events" },
      { name: "Custom Events", href: "/services/global-event-solutions/custom-events" },
      { name: "Event Booth Rental", href: "/services/global-event-solutions/event-booth-rental" },
      { name: "Trade Show Booth Builder", href: "/services/global-event-solutions/trade-show-booth-builder" },
    ],
  },
  {
    name: "Booth Design & Production",
    href: "/services/booth-design-production/modular-portable-booths",
    links: [
      { name: "Modular & Portable Booths", href: "/services/booth-design-production/modular-portable-booths" },
    ],
  },
  {
    name: "Media Production",
    href: "/services/media-production",
    links: [
      { name: "Event Video Production", href: "/services/media-production/event-video-production" },
      { name: "Corporate Video Production", href: "/services/media-production/corporate-video-production" },
      { name: "Video Editing Services", href: "/services/media-production/video-editing-services" },
      { name: "Live Streaming Services", href: "/services/media-production/live-streaming-services" },
    ],
  },
  {
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    links: [
      { name: "SEO Services", href: "/services/performance-marketing/seo-services" },
      { name: "Paid Advertising", href: "/services/performance-marketing/paid-advertising" },
      { name: "LinkedIn Ads for B2B", href: "/services/performance-marketing/linkedin-ads-b2b" },
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
      { name: "Data Augmentation", href: "/services/market-research/data-augmentation" },
      { name: "Data Validation", href: "/services/market-research/data-validation" },
      { name: "Human-Powered Market Intelligence", href: "/services/market-research/human-powered-market-intelligence" },
    ],
  },
];

export const footerNavigation: NavLink[] = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];
