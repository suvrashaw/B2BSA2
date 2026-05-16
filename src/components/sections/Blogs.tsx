"use client";

import { useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import { BlogCard, BlogCardGrid } from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { type BlogsContent, HOME_BLOGS_CONTENT } from "@/content/home";

export interface BlogsProps {
  blogs?: BlogsContent["blogs"];
  content?: BlogsContent;
  ctaLabel?: BlogsContent["ctaLabel"];
  eyebrow?: BlogsContent["eyebrow"];
  heading?: BlogsContent["heading"];
  layout?: "deck" | "grid";
}

export function Blogs({
  content = HOME_BLOGS_CONTENT,
  blogs = content.blogs,
  ctaLabel = content.ctaLabel,
  eyebrow = content.eyebrow,
  heading = content.heading,
  layout = "deck",
}: BlogsProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "center center"],
    target: containerRef,
  });

  const spread = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-white py-20" id="blogs" ref={containerRef}>
      <div className="container mx-auto px-8">
        <div className="mb-4 flex flex-col items-start text-left lg:mb-8">
          <Eyebrow variant="primary">{eyebrow}</Eyebrow>
          <Heading as="h2">{heading}</Heading>
          <Link href="/blog">
            <Button className="mt-8" variant="tertiary">
              {ctaLabel}{" "}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </Link>
        </div>

        {layout === "grid" ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <BlogCardGrid blog={blog} />
              </Link>
            ))}
          </div>
        ) : (
          <div
            className="perspective-1000 relative mx-auto flex h-[800px] w-full max-w-3xl cursor-pointer items-center justify-center lg:h-[450px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {blogs.map((blog, index) => (
              <Link className="contents" href={`/blog/${blog.id}`} key={blog.id}>
                <BlogCard
                  blog={blog}
                  index={index}
                  isHovered={isHovered}
                  spread={spread}
                  total={blogs.length}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
