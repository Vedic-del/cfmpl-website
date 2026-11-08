import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content/imagery";
import { Plate } from "./Plate";

/**
 * Interior page hero: the words on the dark ground at left, the photograph to
 * the right edge. It enters once on load: the h1 rises out of its mask, then
 * the lede and actions; the photograph is never hidden, it settles.
 *
 * `natural` shows a photograph of people in its own colours; otherwise it is
 * printed in the house hue. `develop` makes the photograph the page's dealt
 * moment (picture-develops: it develops like a print as it comes on screen).
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  photo,
  natural = false,
  develop = false,
  actions,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  photo?: Photo;
  natural?: boolean;
  develop?: boolean;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-deep text-warm">
      <div
        className={`container-house relative z-10 py-18 md:py-24 ${photo ? "lg:grid lg:min-h-[560px] lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-0" : "md:py-28"}`}
      >
        <div className={photo ? "lg:py-24 lg:pr-16" : ""}>
          {eyebrow ? (
            <p className="intro mb-6 font-display text-[14px] text-brand-light" style={{ ["--intro-delay" as string]: "0ms" }}>
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`display-lg intro-mask text-warm ${photo ? "max-w-[18ch]" : "max-w-[24ch]"}`}
            style={{ ["--intro-delay" as string]: "80ms" }}
          >
            {title}
          </h1>
          {lede ? (
            <div className="lede intro mt-8 max-w-[52ch] text-warm/85" style={{ ["--intro-delay" as string]: "430ms" }}>
              {lede}
            </div>
          ) : null}
          {actions ? (
            <div className="intro mt-9 flex flex-wrap gap-3" style={{ ["--intro-delay" as string]: "490ms" }}>
              {actions}
            </div>
          ) : null}
          {children}
        </div>
      </div>
      {photo ? (
        <div className="relative aspect-[16/10] overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[47%]">
          {develop ? (
            <figure data-moment="picture-develops" className="absolute inset-0 m-0">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 60vw, 100vw"
                quality={75}
                className="object-cover"
              />
            </figure>
          ) : natural ? (
            <div className="intro-settle absolute inset-0">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 60vw, 100vw"
                quality={75}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="intro-settle absolute inset-0">
              <Plate photo={photo} priority sizes="(min-width: 1024px) 60vw, 100vw" className="absolute inset-0" />
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}
