import { ImageResponse } from "@vercel/og";

import { getCmsPage } from "@/cms/mock/registry";
import {
  getMarketingPageById,
  getMarketingPageByPath,
  getMarketingPageGroup,
} from "@/content/marketing-pages";

export const runtime = "edge";

const siteUrl = "https://b2bsalesarrow.com";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const content = getOgContent(searchParams);

  return new ImageResponse(
    <div
      style={{
        background: "#f7fbff",
        color: "#052238",
        display: "flex",
        fontFamily: "Inter, Arial, sans-serif",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(2,62,138,0.96) 0%, rgba(30,96,145,0.9) 46%, rgba(42,157,143,0.88) 100%)",
          inset: 0,
          position: "absolute",
        }}
      />
      <div
        style={{
          border: "2px solid rgba(255,255,255,0.2)",
          borderRadius: 500,
          height: 500,
          position: "absolute",
          right: -80,
          top: -120,
          width: 500,
        }}
      />
      <div
        style={{
          background: "rgba(255,255,255,0.12)",
          borderRadius: 360,
          bottom: -120,
          height: 360,
          position: "absolute",
          right: 90,
          width: 360,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px 68px",
          position: "relative",
          width: "100%",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "#ffffff",
                borderRadius: 14,
                color: "#023e8a",
                display: "flex",
                fontSize: 28,
                fontWeight: 800,
                height: 54,
                justifyContent: "center",
                width: 54,
              }}
            >
              B
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#ffffff", fontSize: 30, fontWeight: 800 }}>
                B2B Sales Arrow
              </span>
              <span style={{ color: "rgba(255,255,255,0.76)", fontSize: 18 }}>
                {siteUrl.replace("https://", "")}
              </span>
            </div>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.42)",
              borderRadius: 999,
              color: "#ffffff",
              fontSize: 18,
              fontWeight: 700,
              padding: "12px 20px",
            }}
          >
            {content.group}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <div
            style={{
              color: "#b9f2ff",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 0,
              marginBottom: 22,
            }}
          >
            Enterprise growth systems, built to convert.
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: content.title.length > 58 ? 58 : 66,
              fontWeight: 900,
              letterSpacing: 0,
              lineHeight: 1.04,
            }}
          >
            {content.title}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.86)",
              fontSize: 27,
              lineHeight: 1.35,
              marginTop: 28,
              maxWidth: 980,
            }}
          >
            {content.description}
          </div>
        </div>

        <div style={{ color: "#ffffff", display: "flex", fontSize: 22, fontWeight: 700, gap: 18 }}>
          <span>Strategy</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>•</span>
          <span>Execution</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>•</span>
          <span>Pipeline</span>
        </div>
      </div>
    </div>,
    {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
      height: 630,
      width: 1200,
    }
  );
}

function getOgContent(searchParams: URLSearchParams) {
  const pageId = searchParams.get("pageId");
  const title = searchParams.get("title");
  const path = searchParams.get("path");

  if (pageId) {
    const marketingPage = getMarketingPageById(pageId);

    if (marketingPage) {
      const resolvedTitle = title ?? marketingPage.seo.title;

      return {
        description: marketingPage.seo.description,
        group: getMarketingPageGroup(marketingPage),
        title: resolvedTitle.replace(" | B2B Sales Arrow", ""),
      };
    }

    const page = getCmsPage(pageId);

    if (page) {
      const resolvedTitle = title ?? page.seo.title;

      return {
        description: page.seo.description,
        group: page.pageType === "serviceDetail" ? "Service" : "B2B Growth",
        title: resolvedTitle.replace(" | B2B Sales Arrow", ""),
      };
    }
  }

  if (!path) {
    return {
      description: "Premium growth partner for enterprise event and digital solutions.",
      group: "B2B Growth",
      title: "B2B Sales Arrow",
    };
  }

  try {
    const marketingPage = getMarketingPageByPath(path);

    if (marketingPage) {
      return {
        description: marketingPage.seo.description,
        group: getMarketingPageGroup(marketingPage),
        title: marketingPage.seo.title.replace(" | B2B Sales Arrow", ""),
      };
    }

    return {
      description: "Premium growth partner for enterprise event and digital solutions.",
      group: "B2B Growth",
      title: "B2B Sales Arrow",
    };
  } catch {
    return {
      description: "Premium growth partner for enterprise event and digital solutions.",
      group: "B2B Growth",
      title: "B2B Sales Arrow",
    };
  }
}
