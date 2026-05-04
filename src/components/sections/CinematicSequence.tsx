"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import {
  HOME_CINEMATIC_SEQUENCE_CONTENT,
  type CinematicSequenceContent,
  type CinematicStoryBeat,
} from "./home-section-content";

export interface CinematicSequenceProps {
  content?: CinematicSequenceContent;
  frameCount?: CinematicSequenceContent["frameCount"];
  getFrameSrc?: CinematicSequenceContent["getFrameSrc"];
  loadingText?: CinematicSequenceContent["loadingText"];
  beats?: CinematicSequenceContent["beats"];
}

function useCinematicFrameImages(
  frameCount: number,
  getFrameSrc: CinematicSequenceContent["getFrameSrc"]
) {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadSignature = `${frameCount}:${getFrameSrc(1)}:${getFrameSrc(frameCount)}`;
  const [loadedSignature, setLoadedSignature] = useState<string | null>(null);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    let cancelled = false;

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        if (cancelled) return;

        loadedCount++;
        if (loadedCount === frameCount) {
          setLoadedSignature(loadSignature);
        }
      };
      // Important to push first to maintain exact order
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      cancelled = true;
    };
  }, [frameCount, getFrameSrc, loadSignature]);

  return { imagesRef, imagesLoaded: loadedSignature === loadSignature };
}

function CinematicBeatOverlay({
  beat,
  progress,
}: {
  beat: CinematicStoryBeat;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, beat.opacityInput, beat.opacityOutput);
  const y = useTransform(progress, beat.yInput, beat.yOutput);
  const pointerEvents = useTransform(opacity, (v) => (v > 0 ? "auto" : "none"));

  return (
    <motion.div
      style={{ opacity, y, pointerEvents }}
      className={beat.className}
    >
      {beat.eyebrow && (
        <span className={beat.eyebrow.className}>{beat.eyebrow.text}</span>
      )}
      <h2 className={beat.titleClassName}>{beat.title}</h2>
      {beat.description && (
        <p className={beat.description.className}>{beat.description.text}</p>
      )}
      {beat.cta && (
        <button className={beat.cta.className}>{beat.cta.label}</button>
      )}
    </motion.div>
  );
}

export function CinematicSequence({
  content = HOME_CINEMATIC_SEQUENCE_CONTENT,
  frameCount = content.frameCount,
  getFrameSrc = content.getFrameSrc,
  loadingText = content.loadingText,
  beats = content.beats,
}: CinematicSequenceProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { imagesRef, imagesLoaded } = useCinematicFrameImages(frameCount, getFrameSrc);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track progress and draw the corresponding frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current) return;
    
    // Map latest (0-1) to frame index (0-59)
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[frameIndex];
    
    if (ctx && img) {
      drawCover(ctx, img, canvas.width, canvas.height);
    }
  });

  // Initial draw and handle resize
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-draw current frame based on scroll on resize
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollYProgress.get() * frameCount)
      );
      if (ctx && imagesRef.current[frameIndex]) {
        drawCover(ctx, imagesRef.current[frameIndex], canvas.width, canvas.height);
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // trigger once
    
    return () => window.removeEventListener("resize", handleResize);
  }, [frameCount, imagesLoaded, imagesRef, scrollYProgress]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Frame canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0"
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Loading Indicator (Optional but good UX) */}
        {!imagesLoaded && (
          <div className="absolute z-50 text-white/50 text-sm tracking-widest uppercase font-semibold">
            {loadingText}
          </div>
        )}

        {beats.map((beat) => (
          <CinematicBeatOverlay
            key={beat.id}
            beat={beat}
            progress={scrollYProgress}
          />
        ))}

      </div>
    </section>
  );
}

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) {
  const imgRatio = img.width / img.height;
  const canvasRatio = w / h;
  let renderW, renderH, x, y;

  if (imgRatio > canvasRatio) {
    renderH = h;
    renderW = img.width * (h / img.height);
    x = (w - renderW) / 2;
    y = 0;
  } else {
    renderW = w;
    renderH = img.height * (w / img.width);
    x = 0;
    y = (h - renderH) / 2;
  }

  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(img, x, y, renderW, renderH);
}
