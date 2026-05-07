import Image from "next/image";

interface ZoomParallaxImage {
  src: string;
  alt: string;
}

interface ZoomParallaxProps {
  images: ZoomParallaxImage[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  if (images.length === 0) return null;

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-8 md:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="bg-brand-charcoal/5 relative h-56 overflow-hidden rounded-3xl md:h-72"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
