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
    name: "Booth Design & Production",
    href: "/services/booth-design-production",
    links: [],
  },
  {
    name: "Active Prospecting",
    href: "/services/sales-qualified-lead-generation",
    links: [],
  },
  {
    name: "Corporate Media Production",
    href: "/services/media-production",
    links: [],
  },
  {
    name: "Giveaways",
    href: "#",
    links: [],
  },
  {
    name: "Networking",
    href: "#",
    links: [],
  },
  {
    name: "Branding",
    href: "#",
    links: [],
  },
  {
    name: "Experience Creation",
    href: "#",
    links: [],
  },
  {
    name: "Database & Market Research",
    href: "/services/market-research",
    links: [],
  },
  {
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    links: [],
  },
];

export const footerServiceGroups: ServiceNavGroup[] = [
  {
    name: "Global Event Solutions",
    href: "/services/global-event-solutions",
    links: [
      {
        name: "Trade Show Booth Design",
        href: "/services/global-event-solutions/trade-show-booth-design",
      },
      { name: "Industry Events", href: "/services/global-event-solutions/industry-events" },
      { name: "Custom Events", href: "/services/global-event-solutions/custom-events" },
      { name: "Event Booth Rental", href: "/services/global-event-solutions/event-booth-rental" },
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
    ],
  },
  {
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    links: [
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Paid Advertising", href: "/services/paid-advertising" },
      { name: "LinkedIn Ads for B2B", href: "/services/linkedin-ads" },
    ],
  },
  {
    name: "Sales & Market Intelligence",
    href: "/services/sales-qualified-lead-generation",
    links: [
      { name: "Active Prospecting", href: "/services/sales-qualified-lead-generation" },
      { name: "Market Research", href: "/services/market-research" },
      { name: "Data Augmentation", href: "/services/data-augmentation" },
      { name: "Data Validation", href: "/services/data-validation" },
      { name: "Market Intelligence", href: "/services/market-intelligence" },
    ],
  },
];

export const footerNavigation: NavLink[] = [
  { name: "Blog", href: "/blog" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
