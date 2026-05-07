import Image from "next/image";

import { cn } from "@/lib";

interface ImageFrameProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  objectFit?: "cover" | "contain";
}

export function ImageFrame({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes,
  priority,
  className,
  containerClassName,
  objectFit = "cover",
}: ImageFrameProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        priority={priority}
        className={cn(objectFit === "cover" ? "object-cover" : "object-contain", className)}
      />
    </div>
  );
}
