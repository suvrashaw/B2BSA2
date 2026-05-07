"use client";

import Video from "next-video";

import showreelAsset from "../../../videos/get-started.mp4.json";

interface VideoAsset {
  [x: string]: unknown;
  status: "ready" | "sourced" | "pending" | "uploading" | "processing" | "error";
  originalFilePath: string;
  provider: string;
  poster?: string;
  sources?: { src: string; type?: string }[];
  blurDataURL?: string;
  createdAt: number;
  updatedAt: number;
}

export function MediaShowreel() {
  return (
    <section className="bg-brand-gray px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-brand-blue text-sm font-semibold tracking-[0.2em] uppercase">
            Video SEO Ready
          </p>
          <h2 className="font-display text-brand-primary text-3xl leading-tight font-bold sm:text-4xl">
            Optimized video delivery without the page-speed penalty
          </h2>
          <p className="text-brand-primary/70 max-w-xl text-base leading-7">
            Media assets now run through next-video, with adaptive Mux playback,
            generated poster imagery, and a crawler-friendly player foundation
            for production pages.
          </p>
        </div>
        <div className="shadow-brand-blue/10 overflow-hidden rounded-lg border border-white/70 bg-white shadow-xl">
          <Video
            src={showreelAsset as VideoAsset}
            controls
            preload="metadata"
            poster={showreelAsset.poster}
            blurDataURL={showreelAsset.blurDataURL}
            aria-label="B2B Sales Arrow media production showreel"
            className="[--media-object-fit:cover]"
          />
        </div>
      </div>
    </section>
  );
}
