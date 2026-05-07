/* eslint-disable @next/next/no-sync-scripts */
import { Partytown } from "@builder.io/partytown/react";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export function PartytownScripts() {
  return (
    <>
      <Partytown debug={false} forward={["dataLayer.push"]} />
      {gaId ? (
        <>
          <script
            type="text/partytown"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.gtag = function gtag(){ window.dataLayer.push(arguments); };
                window.gtag('js', new Date());
                window.gtag('config', '${gaId}', { send_page_view: true });
              `,
            }}
          />
        </>
      ) : null}
    </>
  );
}
