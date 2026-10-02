import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content/imagery";
import { Plate } from "./Plate";

/**
 * Interior page hero. Text on the dark ground at left; the photograph takes the
 * right side of the screen to its edge. Symbolic photographs are printed in the
 * house hue; photographs of people stay in natural colour.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  photo,
  natural = false,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  photo?: Photo;
  natural?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-deep text-warm">
      <div
        className={`container-house relative z-10 py-18 md:py-24 ${photo ? "lg:grid lg:min-h-[560px] lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-0" : "md:py-28"}`}
      >
        <div className={photo ? "lg:py-24 lg:pr-16" : ""}>
          {eyebrow ? <p className="eyebrow mb-6 text-brand-light">{eyebrow}</p> : null}
          <h1 className="display-lg max-w-[18ch] text-warm">{title}</h1>
          {lede ? <div className="lede mt-8 max-w-[52ch] text-warm/80">{lede}</div> : null}
          {children}
        </div>
      </div>
      {photo ? (
        <div className="relative aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[47%]">
          {natural ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 47vw, 100vw"
              quality={75}
              className="object-cover"
            />
          ) : (
            <Plate photo={photo} priority sizes="(min-width: 1024px) 47vw, 100vw" className="absolute inset-0" />
          )}
        </div>
      ) : null}
    </section>
  );
}
