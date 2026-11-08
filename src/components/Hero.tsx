import Image from "next/image";
import Link from "next/link";
import { imagery } from "@/content/imagery";

type Fact = { figure: string; label: string };

/**
 * Home hero: exactly the first screen. The completed coastal interchange as a
 * full-bleed layer, printed in the house hue and darkened on the left where
 * the words sit; the h1, the line under it, two actions, and four facts at
 * the foot. It enters once on load (globals.css): the h1's lines rise, the
 * rest fades up, the photograph settles. Nothing here moves on scroll.
 */
export function Hero({
  lines,
  lede,
  facts,
}: {
  lines: readonly string[];
  lede: string;
  facts: readonly Fact[];
}) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-deep text-warm md:min-h-[calc(100svh-114px)]"
    >
      <div aria-hidden="true" className="intro-settle absolute inset-0 -z-10">
        <Image
          src={imagery.heroAfter.src}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 767px) 300vw, 100vw"
          quality={75}
          className="object-cover object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-brand mix-blend-color opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/25 max-md:bg-gradient-to-b max-md:from-deep/80 max-md:via-deep/75 max-md:to-deep/90" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/85 to-transparent" />
      </div>

      <div className="container-house flex flex-1 flex-col justify-between gap-12 pt-14 pb-8 md:pt-20 md:pb-10">
        <div className="max-w-[46rem]">
          <h1 id="hero-heading" className="display-lg text-warm">
            {lines.map((l, i) => (
              <span
                key={i}
                className="intro-mask block"
                style={{ ["--intro-delay" as string]: `${i * 80}ms` }}
              >
                {l}
                {i < lines.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="intro mt-7 max-w-[52ch] text-[17px] leading-[1.7] text-warm/90 md:text-[19px]" style={{ ["--intro-delay" as string]: "380ms" }}>
            {lede}
          </p>
          <div className="intro mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center" style={{ ["--intro-delay" as string]: "440ms" }}>
            <Link href="/contact" className="btn btn--light">
              Discuss a mandate
            </Link>
            <Link href="/services" className="link-draw inline-flex min-h-12 items-center gap-2 px-2 text-[15px] font-medium text-warm">
              See our services <span aria-hidden="true" className="m-arrow">→</span>
            </Link>
          </div>
        </div>

        <dl className="intro grid grid-cols-2 gap-x-6 gap-y-5 border-t border-warm/20 pt-6 md:grid-cols-4" style={{ ["--intro-delay" as string]: "500ms" }}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="num block font-display text-[1.5rem] leading-none text-warm md:text-[1.875rem]">{f.figure}</span>
                <span aria-hidden="true" className="mt-2 block text-[14px] text-warm/75">
                  {f.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
