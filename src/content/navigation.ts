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
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services/global-event-solutions" },
  { name: "Trade Shows", href: "#" },
  { name: "Insights", href: "/insights" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact-us" },
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
      { name: "Trade Show Booth Design", href: "#" },
      { name: "Industry Events", href: "#" },
      { name: "Custom Events", href: "#" },
      { name: "Event Booth Rental", href: "#" },
    ],
  },
  {
    name: "Media Production",
    href: "/services/media-production",
    links: [
      { name: "Event Video Production", href: "#" },
      { name: "Corporate Video Production", href: "#" },
      { name: "Live Streaming Services", href: "#" },
    ],
  },
  {
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    links: [
      { name: "SEO Services", href: "#" },
      { name: "Paid Advertising", href: "#" },
      { name: "LinkedIn Ads for B2B", href: "#" },
    ],
  },
  {
    name: "Sales & Market Intelligence",
    href: "/services/sales-qualified-lead-generation",
    links: [
      { name: "Active Prospecting", href: "/services/sales-qualified-lead-generation" },
      { name: "Market Research", href: "/services/market-research" },
      { name: "Data Augmentation", href: "#" },
    ],
  },
];

export const footerNavigation: NavLink[] = [
  { name: "Insights", href: "/insights" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];
