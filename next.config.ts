import withBundleAnalyzer from "@next/bundle-analyzer";
import { withNextVideo } from "next-video/process";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/performance-marketing/seo-services",
        destination: "/services/seo-services",
        permanent: true,
      },
      {
        source: "/services/performance-marketing/paid-advertising",
        destination: "/services/paid-advertising",
        permanent: true,
      },
      {
        source: "/services/performance-marketing/linkedin-ads",
        destination: "/services/linkedin-ads",
        permanent: true,
      },
      {
        source: "/services/performance-marketing/linkedin-ads-b2b",
        destination: "/services/linkedin-ads",
        permanent: true,
      },
      {
        source: "/services/market-research/data-augmentation",
        destination: "/services/data-augmentation",
        permanent: true,
      },
      {
        source: "/services/market-research/data-validation",
        destination: "/services/data-validation",
        permanent: true,
      },
      {
        source: "/services/market-research/human-powered-market-intelligence",
        destination: "/services/market-intelligence",
        permanent: true,
      },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/insights", destination: "/blog", permanent: true },
      {
        source: "/services/booth-design-production/modular-portable-booths",
        destination: "/services/global-event-solutions/modular-portable-booths",
        permanent: true,
      },
    ];
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(withNextVideo(nextConfig));
