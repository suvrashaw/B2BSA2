import { ImageResponse } from "@vercel/og";

import { getCmsPage } from "@/cms/mock/registry";
import { getPageByUrl } from "@/content/pages";

export const runtime = "edge";

const siteUrl = "https://b2bsalesarrow.com";

function getOgContent(searchParams: URLSearchParams) {
  const pageId = searchParams.get("pageId");
  const title = searchParams.get("title");
  const path = searchParams.get("path");

  if (pageId) {
    const page = getCmsPage(pageId);

    if (page) {
      const resolvedTitle = title ?? page.seo.title;

      return {
        title: resolvedTitle.replace(" | B2B Sales Arrow", ""),
        description: page.seo.description,
        group: page.pageType === "serviceDetail" ? "Service" : "B2B Growth",
      };
    }
  }

  if (!path) {
    return {
      title: "B2B Sales Arrow",
      description: "Premium growth partner for enterprise event and digital solutions.",
      group: "B2B Growth",
    };
  }

  try {
    const page = getPageByUrl(path);

    return {
      title: page.metaTitle.replace(" | B2B Sales Arrow", ""),
      description: page.metaDescription,
      group: page.navigationGroup,
    };
  } catch {
    return {
      title: "B2B Sales Arrow",
      description: "Premium growth partner for enterprise event and digital solutions.",
      group: "B2B Growth",
    };
  }
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const content = getOgContent(searchParams);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f7fbff",
        color: "#052238",
        fontFamily: "Inter, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(2,62,138,0.96) 0%, rgba(30,96,145,0.9) 46%, rgba(42,157,143,0.88) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -80,
          top: -120,
          width: 500,
          height: 500,
          borderRadius: 500,
          border: "2px solid rgba(255,255,255,0.2)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 90,
          bottom: -120,
          width: 360,
          height: 360,
          borderRadius: 360,
          background: "rgba(255,255,255,0.12)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "58px 68px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 14,
                background: "#ffffff",
                color: "#023e8a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 800,
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
              padding: "12px 20px",
              fontSize: 18,
              fontWeight: 700,
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
              lineHeight: 1.04,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            {content.title}
          </div>
          <div
            style={{
              marginTop: 28,
              color: "rgba(255,255,255,0.86)",
              fontSize: 27,
              lineHeight: 1.35,
              maxWidth: 980,
            }}
          >
            {content.description}
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, color: "#ffffff", fontSize: 22, fontWeight: 700 }}>
          <span>Strategy</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>•</span>
          <span>Execution</span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>•</span>
          <span>Pipeline</span>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
