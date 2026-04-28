"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedH3Props {
  text: string;
  className?: string;
  delayOffset?: number;
}

export const AnimatedH3 = ({ text, className, delayOffset = 0 }: AnimatedH3Props) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words to maintain proper word wrapping
  const words = text.split(" ");

  return (
    <h3
      ref={ref}
      className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.1] font-heading transition-colors duration-700",
        className
      )}
    >
      {words.map((word, wordIndex) => {
        // Calculate the starting letter index for this word to ensure smooth continuous stagger
        const previousLettersCount = words
          .slice(0, wordIndex)
          .reduce((acc, w) => acc + w.length, 0);

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIndex) => {
              const globalIndex = previousLettersCount + charIndex;
              return (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, filter: "blur(0px)" }
                      : { opacity: 0, y: 30, filter: "blur(12px)" }
                  }
                  transition={{
                    duration: 0.8,
                    delay: delayOffset + globalIndex * 0.03,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </h3>
  );
};
