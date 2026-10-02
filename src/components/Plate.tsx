import Image from "next/image";
import type { Photo } from "@/content/imagery";

/**
 * A symbolic photograph printed in the house hue. The frame sets the shape
 * (pass an aspect or height class); the image fills it.
 */
export function Plate({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  tone = "full",
  priority = false,
  decorative = false,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  tone?: "full" | "soft";
  priority?: boolean;
  decorative?: boolean;
}) {
  return (
    <div className={`plate ${className}`} data-tone={tone}>
      <Image
        src={photo.src}
        alt={decorative ? "" : photo.alt}
        fill
        sizes={sizes}
        quality={75}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="object-cover"
      />
    </div>
  );
}
