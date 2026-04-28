"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 60;

// Helper to pad number (e.g. 1 -> "001")
const currentFrame = (index: number) => 
  `/Frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export function CinematicSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // We preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
        }
      };
      // Important to push first to maintain exact order
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track progress and draw the corresponding frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded || !canvasRef.current) return;
    
    // Map latest (0-1) to frame index (0-59)
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = images[frameIndex];
    
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
        FRAME_COUNT - 1,
        Math.floor(scrollYProgress.get() * FRAME_COUNT)
      );
      if (ctx && images[frameIndex]) {
        drawCover(ctx, images[frameIndex], canvas.width, canvas.height);
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // trigger once
    
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, images, scrollYProgress]);

  // Story beats fade mapping
  const introOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [0, 1, 1]);
  const introY = useTransform(scrollYProgress, [0, 0.15], [30, 0]);

  const approachOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const approachY = useTransform(scrollYProgress, [0.25, 0.35], [30, 0]);

  const servicesOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const servicesY = useTransform(scrollYProgress, [0.5, 0.6], [30, 0]);

  const ctaOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.75, 0.85], [30, 0]);

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
            Loading Cinematic Experience...
          </div>
        )}

        <motion.div 
          style={{ opacity: introOpacity, y: introY, pointerEvents: useTransform(introOpacity, v => v > 0 ? "auto" : "none") }}
          className="absolute left-0 text-left max-w-lg pl-8 md:pl-16 pr-8 py-10 bg-black/40 backdrop-blur-md rounded-r-3xl border-y border-r border-white/10 shadow-2xl"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Immersive <br/> Experience.
          </h2>
        </motion.div>

        <motion.div 
          style={{ opacity: approachOpacity, y: approachY, pointerEvents: useTransform(approachOpacity, v => v > 0 ? "auto" : "none") }}
          className="absolute right-8 lg:right-24 text-right max-w-xl px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end"
        >
          <span className="text-brand-cyan uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md">
            Precision Engineered
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            A strategic approach to <br/> spatial storytelling.
          </h2>
          <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-lg drop-shadow-md">
            We don't just build booths. We architect conversion environments designed to capture enterprise leads and communicate market dominance.
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity: servicesOpacity, y: servicesY, pointerEvents: useTransform(servicesOpacity, v => v > 0 ? "auto" : "none") }}
          className="absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end"
        >
          <span className="text-brand-blue uppercase tracking-[0.3em] text-sm font-bold block mb-4 drop-shadow-md">
            End-to-End Execution
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            From Blueprint <br/> to Reality.
          </h2>
        </motion.div>

        <motion.div 
          style={{ opacity: ctaOpacity, y: ctaY, pointerEvents: useTransform(ctaOpacity, v => v > 0 ? "auto" : "none") }}
          className="absolute right-8 lg:right-24 text-right max-w-lg px-8 py-10 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl flex flex-col items-end"
        >
          <h2 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
            Command The <br/> Floor.
          </h2>
          <button className="bg-brand-red hover:bg-brand-maroon text-white px-10 py-4 rounded-full font-bold text-lg tracking-wide transition-colors shadow-xl">
            Start Your Project
          </button>
        </motion.div>

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
