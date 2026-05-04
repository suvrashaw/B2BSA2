"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { GlobeMethods } from "react-globe.gl";

// Dynamically import react-globe.gl to prevent SSR issues with WebGL/Canvas
const GlobeGL = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[600px] rounded-full border border-white/5 bg-white/[0.02] animate-pulse flex items-center justify-center">
      <span className="text-white/20 text-sm tracking-widest uppercase">Initializing Globe...</span>
    </div>
  ),
});

// Data for Arcs and Markers
const N = 10;
const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    Math.random() > 0.5 ? "#4BC0D9" : "#ffffff", // Cyan or White
    Math.random() > 0.5 ? "#B23A48" : "#ffffff", // Red or White
  ],
}));

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
      const width = Math.min(window.innerWidth - 40, 800); // Max width 800
      setDimensions({ width, height: width });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center cursor-grab active:cursor-grabbing w-full">
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
        arcDashInitialGap={() => Math.random() * 5}
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
