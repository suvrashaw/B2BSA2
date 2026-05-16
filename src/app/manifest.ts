import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#ffffff",
    description: "Global capability. Strategic growth partner for B2B enterprises.",
    display: "standalone",
    icons: [
      {
        sizes: "any",
        src: "/logo.png",
        type: "image/png",
      },
    ],
    name: "B2B Sales Arrow",
    short_name: "B2BSA",
    start_url: "/",
    theme_color: "#1E6091",
  };
}
