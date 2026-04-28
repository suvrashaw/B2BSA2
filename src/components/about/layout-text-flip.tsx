"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text,
  words,
  className,
}: {
  text: string;
  words: string[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className={cn("inline-flex flex-wrap items-center gap-x-[0.3em]", className)}>
      <span className="shrink-0">{text}</span>
      <div className="relative inline-flex items-center justify-start overflow-hidden h-[1.3em]">
        <span className="invisible whitespace-nowrap opacity-0 pointer-events-none italic font-medium select-none">
          {words.reduce((a, b) => a.length > b.length ? a : b)}
        </span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 1,
            }}
            className="absolute left-0 italic font-medium text-brand-blue whitespace-nowrap"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
