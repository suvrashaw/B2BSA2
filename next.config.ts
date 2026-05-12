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
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(withNextVideo(nextConfig));
