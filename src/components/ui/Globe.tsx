"use client";

import React, { useEffect, useRef, useState } from "react";

import dynamic from "next/dynamic";

import type { GlobeMethods } from "react-globe.gl";

// Dynamically import react-globe.gl to prevent SSR issues with WebGL/Canvas
const GlobeGL = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] w-[600px] animate-pulse items-center justify-center rounded-full border border-white/5 bg-white/[0.02]">
      <span className="text-sm tracking-widest text-white/20 uppercase">Initializing Globe...</span>
    </div>
  ),
});

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: [string, string];
  dashInitialGap: number;
}

const arcsData: ArcData[] = [
  {
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 25.2048,
    endLng: 55.2708,
    color: ["#4BC0D9", "#ffffff"],
    dashInitialGap: 0.4,
  },
  {
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 1.3521,
    endLng: 103.8198,
    color: ["#ffffff", "#B23A48"],
    dashInitialGap: 1.1,
  },
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: -33.8688,
    endLng: 151.2093,
    color: ["#4BC0D9", "#B23A48"],
    dashInitialGap: 1.8,
  },
  {
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 51.5074,
    endLng: -0.1278,
    color: ["#ffffff", "#ffffff"],
    dashInitialGap: 2.2,
  },
  {
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    color: ["#B23A48", "#ffffff"],
    dashInitialGap: 2.9,
  },
  {
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 25.2048,
    endLng: 55.2708,
    color: ["#4BC0D9", "#ffffff"],
    dashInitialGap: 3.5,
  },
  {
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 43.6532,
    endLng: -79.3832,
    color: ["#ffffff", "#4BC0D9"],
    dashInitialGap: 4.1,
  },
  {
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 1.3521,
    endLng: 103.8198,
    color: ["#B23A48", "#4BC0D9"],
    dashInitialGap: 4.6,
  },
  {
    startLat: 43.6532,
    startLng: -79.3832,
    endLat: 25.2048,
    endLng: 55.2708,
    color: ["#ffffff", "#B23A48"],
    dashInitialGap: 0.9,
  },
  {
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 51.5074,
    endLng: -0.1278,
    color: ["#4BC0D9", "#ffffff"],
    dashInitialGap: 3,
  },
];

interface GlobeMarker {
  lat: number;
  lng: number;
  name: string;
}

const MARKERS = [
  { lat: 40.7128, lng: -74.006, name: "New York" },
  { lat: 51.5074, lng: -0.1278, name: "London" },
  { lat: 25.2048, lng: 55.2708, name: "Dubai" },
  { lat: 1.3521, lng: 103.8198, name: "Singapore" },
  { lat: -33.8688, lng: 151.2093, name: "Sydney" },
  { lat: 43.6532, lng: -79.3832, name: "Toronto" },
];

export function Globe() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });

  useEffect(() => {
    // Configure auto-rotation and initial position
    if (globeRef.current) {
      const controls = globeRef.current.controls() as Record<string, unknown>;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5; // Slow, premium rotation
      controls.enableZoom = false; // Disable zoom to keep it looking like a UI element

      // Point camera at a good starting angle
      globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.2 }, 1000);
    }
  }, []);

  // Handle resizing so the globe fits nicely on mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      const size = Math.min(globalThis.innerWidth - 40, globalThis.innerHeight * 0.62, 800);
      setDimensions({ width: size, height: size });
    };

    globalThis.addEventListener("resize", handleResize);
    handleResize();
    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex w-full cursor-grab items-center justify-center active:cursor-grabbing">
      <GlobeGL
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)" // Transparent to blend with footer
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        // Styling the globe to be dark/charcoal
        showAtmosphere={true}
        atmosphereColor="#4BC0D9"
        atmosphereAltitude={0.15}
        // Arcs
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={4}
        arcDashInitialGap={(arc: object) => (arc as ArcData).dashInitialGap}
        arcDashAnimateTime={4000}
        arcStroke={0.5} // Thin, luxurious lines
        // Custom Points (Locations)
        pointsData={MARKERS}
        pointColor={() => "#ffffff"}
        pointAltitude={0.05}
        pointRadius={0.5}
        pointsMerge={true}
        // Labels for points
        labelsData={MARKERS}
        labelLat={(d: unknown) => (d as GlobeMarker).lat}
        labelLng={(d: unknown) => (d as GlobeMarker).lng}
        labelText={(d: unknown) => (d as GlobeMarker).name}
        labelSize={1.5}
        labelDotRadius={0.3}
        labelColor={() => "rgba(255, 255, 255, 0.9)"}
        labelResolution={2}
        labelIncludeDot={true}
      />
    </div>
  );
}
