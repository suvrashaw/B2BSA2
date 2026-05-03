"use client";

import { motion, AnimatePresence } from "framer-motion";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TextRotatorProps {
    words: string[];
    className?: string;
    interval?: number;
    textGradient?: boolean;
    letterAnimation?: boolean;
}

const TextRotator = ({
    words,
    className = "",
    interval = 3000,
    textGradient = true,
    letterAnimation = true
}: TextRotatorProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words.length, interval]);

    const letterVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(5px)", scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: { delay: i * 0.05, duration: 0.4 }
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: -20,
            filter: "blur(5px)",
            scale: 0.9,
            transition: { delay: i * 0.02, duration: 0.3 }
        })
    };

    return (
        <span className={cn(
            "relative inline-block min-w-[300px] min-h-[1.5em]",
            !letterAnimation && textGradient && "bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-blue)]",
            className
        )}>
            <AnimatePresence mode="wait">
                {letterAnimation ? (
                    <motion.span
                        key={currentIndex}
                        className="absolute inset-0 flex items-center justify-center w-full"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {words[currentIndex].split('').map((letter, i) => (
                            <motion.span
                                key={`${currentIndex}-${i}`}
                                custom={i}
                                variants={letterVariants}
                                style={textGradient ? {
                                    color: 'var(--color-brand-cyan)',
                                    display: 'inline-block',
                                    textShadow: '0 0 25px rgba(75, 192, 217, 0.3)',
                                    fontWeight: 'inherit'
                                } : {}}
                                className={letter === ' ' ? 'ml-3' : ''}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </motion.span>
                ) : (
                    <motion.span
                        key={currentIndex}
                        className="absolute inset-0 flex items-center justify-center w-full text-[var(--color-brand-cyan)]"
                        initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
                        transition={{ y: { type: "spring", stiffness: 100, damping: 15 }, opacity: { duration: 0.5 }, filter: { duration: 0.4 } }}
                    >
                        {words[currentIndex]}
                    </motion.span>
                )}
            </AnimatePresence>
            <span className="opacity-0">{words[0]}</span>
        </span>
    );
};

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
            {/* Noise overlay texture */}
            <div
                className="absolute inset-0 mix-blend-overlay opacity-20 z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '120px 120px',
                }}
            />
            {/* Dynamic dotted grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />
            {/* Ambient light sources */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-brand-blue)]/10 blur-[120px]"
                animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-brand-cyan)]/10 blur-[100px]"
                animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            />
            
            {/* Edge lighting */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
        </div>
    );
};

export const ClassyHero = ({ 
    title = "10+ Years of", 
    words = ["Excellence", "Innovation", "Success"],
    subtitle = "With 10+ years of industry-rich experience, a legacy of excellence, and a proven track record."
}) => {
    return (
        <div className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
            <HeroBackground />

            <motion.div
                className="z-20 text-center px-4 relative mt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <motion.h1
                    className="text-white text-5xl md:text-7xl lg:text-8xl font-heading font-light max-w-5xl mx-auto leading-tight flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <span>{title}</span>
                    <TextRotator
                        words={words}
                        className="font-light italic"
                        interval={4000}
                        letterAnimation={true}
                    />
                </motion.h1>

                <motion.p
                    className="text-white/60 text-lg md:text-2xl mt-8 max-w-3xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {subtitle}
                </motion.p>
                
                <motion.div 
                   className="mt-16 w-[1px] h-24 bg-gradient-to-b from-[var(--color-brand-cyan)]/50 to-transparent mx-auto"
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: 96, opacity: 1 }}
                   transition={{ duration: 1.5, delay: 1.2 }}
                />
            </motion.div>
        </div>
    );
};
