"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const rows = new Array(40).fill(1);
  const cols = new Array(40).fill(1);

  return (
    <div
      style={{
        transform: `translate(-20%, -30%) skewX(-30deg) skewY(10deg) scale(1)`,
      }}
      className={cn(
        "absolute -top-1/4 -left-1/4 z-0 flex h-[150%] w-[150%] p-4",
        className
      )}
      {...props}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="relative h-full w-20 sm:w-32 flex-shrink-0 border-l border-black/[0.04] dark:border-white/[0.04]"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              className="relative h-12 sm:h-20 w-full flex-shrink-0 border-t border-black/[0.04] dark:border-white/[0.04] hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200"
            >
              {j % 4 === 0 && i % 4 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  suppressHydrationWarning
                  className="absolute -left-[14px] -top-[14px] h-7 w-7 text-black/20 dark:text-white/20 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-6-6h12"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
