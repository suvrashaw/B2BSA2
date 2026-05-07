import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "B2B Sales Arrow",
    short_name: "B2BSA",
    description: "Global capability. Strategic growth partner for B2B enterprises.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1E6091",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
