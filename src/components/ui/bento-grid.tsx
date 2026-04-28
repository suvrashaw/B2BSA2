"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-8 rounded-2xl overflow-hidden transition-all duration-500",
                        "border border-white/10 bg-white/5 backdrop-blur-md",
                        "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20",
                        "hover:-translate-y-1 will-change-transform",
                        item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                        {
                            "shadow-[0_0_30px_rgba(255,255,255,0.05)] border-white/20":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-500`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:12px_12px]" />
                    </div>

                    <div className="relative flex flex-col space-y-6 h-full">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-[var(--color-brand-cyan)]/20 text-white group-hover:text-[var(--color-brand-cyan)] transition-all duration-500">
                                {item.icon}
                            </div>
                            {item.status && (
                                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 text-white/80 group-hover:bg-white/20 transition-colors duration-300">
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-3 flex-grow">
                            <h3 className="text-2xl font-semibold text-white tracking-tight">
                                {item.title}
                                {item.meta && (
                                    <span className="ml-3 text-sm text-[var(--color-brand-cyan)] font-normal tracking-wider">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-base text-white/60 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                            <div className="flex items-center space-x-2 text-xs text-white/50 uppercase tracking-wider">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 rounded-md bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-cyan)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>

                    {/* Gradient background hover effect */}
                    <div
                        className={`absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-[var(--color-brand-cyan)] via-transparent to-[var(--color-brand-blue)]`}
                    />
                </div>
            ))}
        </div>
    );
}
