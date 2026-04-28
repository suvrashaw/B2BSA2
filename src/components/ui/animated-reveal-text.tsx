"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textClassName?: string;
  highlightClassName?: string;
  duration?: number;
  highlightColor?: string;
  ease?: "easeIn" | "easeOut" | "easeInOut" | "linear";
  delay?: number;
}

const HighlightText = React.forwardRef<HTMLDivElement, HighlightTextProps>(
  (
    {
      text,
      as: Component = "h2",
      className,
      textClassName,
      highlightClassName,
      duration = 1.2,
      highlightColor = "var(--color-brand-cyan)",
      ease = "easeInOut",
      delay = 0.2,
      ...props
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(resolvedRef, { once: true, margin: "-100px" });

    // Split text into lines or words for more granular animation if desired, 
    // but the component specs use a single span reveal.
    return (
      <div ref={resolvedRef} className={cn("relative", className)} {...props}>
        <Component
          className={cn(
            "font-heading leading-[1.4] tracking-normal",
            textClassName
          )}
        >
          <motion.span
            className={cn(
              "relative px-[10px] rounded-[4px]",
              "text-white",
              highlightClassName
            )}
            initial={{
              clipPath: "inset(0 100% 0 0)",
            }}
            animate={isInView ? {
              clipPath: "inset(0 0% 0 0)",
            } : {}}
            transition={{
              duration,
              ease,
              delay
            }}
            style={{
              backgroundImage: `linear-gradient(to right, ${highlightColor}20, ${highlightColor}40)`,
              borderLeft: `4px solid ${highlightColor}`
            }}
          >
            {text}
          </motion.span>
        </Component>
      </div>
    );
  }
);
HighlightText.displayName = "HighlightText";

export { HighlightText };
