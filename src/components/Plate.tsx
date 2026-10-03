import Image from "next/image";
import type { Photo } from "@/content/imagery";

/**
 * A symbolic photograph printed in the house hue. The frame sets the shape
 * (pass an aspect or height class); the image fills it.
 *
 * By default it unveils as it scrolls into view. `parallax` drifts the image
 * gently against the scroll (a factor of about 0.1 is plenty).
 */
export function Plate({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  tone = "full",
  priority = false,
  decorative = false,
  reveal = true,
  parallax,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  tone?: "full" | "soft";
  priority?: boolean;
  decorative?: boolean;
  reveal?: boolean;
  parallax?: number;
}) {
  return (
    <div
      className={`plate ${className}`}
      data-tone={tone}
      data-reveal={reveal ? "plate" : undefined}
      data-parallax={parallax}
    >
      <div className="plate-inner">
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
    </div>
  );
}
