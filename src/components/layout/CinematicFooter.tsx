"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MagneticButton = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave as unknown as EventListener);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave as unknown as EventListener);
        };
      }, element);

      return () => ctx.revert();
    },[]);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Human-Powered Intelligence</span> <span className="text-brand-blue/60">✦</span>
    <span>Global Event Excellence</span> <span className="text-brand-cyan/60">✦</span>
    <span>Lead Generation Leaders</span> <span className="text-brand-blue/60">✦</span>
    <span>Trusted by Fortune 500s</span> <span className="text-brand-cyan/60">✦</span>
    <span>B2B Growth Partners</span> <span className="text-brand-blue/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "20vh", opacity: 0 },
        {
          y: "0vh",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, contentRef.current],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-background text-foreground cinematic-footer-wrapper overflow-hidden pb-20"
    >
      <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[100px] pointer-events-none z-0 opacity-50" />
      <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none opacity-30" />

      <div
        ref={giantTextRef}
        className="footer-giant-bg-text absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none uppercase transition-opacity duration-1000"
      >
        B2B SALES ARROW
      </div>

      <div className="w-full overflow-hidden bg-background/40 backdrop-blur-md py-6 z-10 -rotate-1 scale-105 shadow-xl relative">
        <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.4em] text-muted-foreground uppercase">
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 mt-32 w-full max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-8xl font-black footer-text-glow tracking-tighter mb-20 text-center transition-colors duration-500"
        >
          Ready to Accelerate?
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 w-full text-left">
          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue">Company</h3>
            <ul className="space-y-5 text-sm font-medium text-muted-foreground">
              <li><Link href="/about-us" className="hover:text-foreground transition-all hover:pl-2">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-foreground transition-all hover:pl-2">Our Team</Link></li>
              <li><Link href="/contact-us" className="hover:text-foreground transition-all hover:pl-2">Careers</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-cyan">Services</h3>
            <ul className="space-y-5 text-sm font-medium text-muted-foreground">
              <li><Link href="/services/global-event-solutions" className="hover:text-foreground transition-all hover:pl-2">Global Events</Link></li>
              <li><Link href="/services/market-research" className="hover:text-foreground transition-all hover:pl-2">Market Intelligence</Link></li>
              <li><Link href="/services/sales-qualified-lead-generation" className="hover:text-foreground transition-all hover:pl-2">Lead Generation</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue">Resources</h3>
            <ul className="space-y-5 text-sm font-medium text-muted-foreground">
              <li><Link href="/blog" className="hover:text-foreground transition-all hover:pl-2">Insights Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-foreground transition-all hover:pl-2">Case Studies</Link></li>
              <li><Link href="/contact-us" className="hover:text-foreground transition-all hover:pl-2">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-cyan">Contact</h3>
            <div className="space-y-5 text-sm font-medium text-muted-foreground leading-relaxed">
              <p className="flex flex-col">
                <span className="text-foreground font-bold mb-1">New York</span>
                244 Fifth Avenue, Suite 2, NY 10001
              </p>
              <p className="flex flex-col">
                <span className="text-foreground font-bold mb-1">Bangalore</span>
                Brigade IRV, Whitefield, 560066
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full mt-32 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 pt-12">




        <MagneticButton
          as="button"
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full footer-glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground group order-3 border-border/10"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </MagneticButton>
      </div>
    </footer>
  );
}
