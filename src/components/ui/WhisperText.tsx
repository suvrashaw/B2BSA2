"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PointerHighlight } from "./PointerHighlight";

// Make sure to register plugin client-side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface WhisperTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  triggerStart?: string;
  highlights?: string[];
  highlightColor?: "blue" | "red";
}

export const WhisperText: React.FC<WhisperTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 0.8,
  x = 0,
  y = 40,
  triggerStart = "top 85%",
  highlights = [],
  highlightColor = "blue",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-word]");

      gsap.set(targets, { opacity: 0, y: y, rotateX: -45, transformOrigin: "0% 50% -50" });

      gsap.to(targets, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
          once: true,
        },
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        ease: "power3.out",
        stagger: delay / 1000,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, delay, duration, x, y, triggerStart]);

  const renderWords = () =>
    text.split(" ").map((word, i) => {
      if (word === "\\n") {
        return <div key={i} className="basis-full h-0" />;
      }
      const cleanWord = word.replace(/[.,]/g, "");
      const isHighlighted = highlights?.includes(cleanWord);

      const content = isHighlighted ? (
        <PointerHighlight color={highlightColor}>
          <span>{word}</span>
        </PointerHighlight>
      ) : (
        word
      );

      return (
        <span
          key={i}
          data-word
          className="inline-block whitespace-nowrap"
          style={{ position: "relative", perspective: "1000px" }}
        >
          {content}
        </span>
      );
    });

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}
      style={{ overflow: "visible" }}
    >
      {renderWords()}
    </div>
  );
};
