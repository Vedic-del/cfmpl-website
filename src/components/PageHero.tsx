import Image from "next/image";
import type { Photo } from "@/content/imagery";

/**
 * Interior page hero. Dark band in the house register, optionally over a
 * photograph toned to the brand hue.
 */
export function PageHero({
  eyebrow,
  lines,
  lede,
  photo,
}: {
  eyebrow: string;
  lines: readonly string[];
  lede?: string;
  photo?: Photo;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-deep text-warm">
      {photo ? (
        <>
          <Image src={photo.src} alt="" fill loading="eager" fetchPriority="high" sizes="100vw" quality={70} className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand mix-blend-color opacity-60" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/85 to-deep/40" />
        </>
      ) : null}
      <div className="container-house py-20 md:py-28">
        <p className="eyebrow text-brand-light">{eyebrow}</p>
        <h1 className="display mt-5 max-w-[20ch] text-warm md:text-[3.25rem]">
          {lines.map((l, i) => (
            <span key={i} className="md:block">
              {l}{" "}
            </span>
          ))}
        </h1>
        {lede ? <p className="lede mt-7 max-w-[60ch] text-warm/75">{lede}</p> : null}
      </div>
    </section>
  );
}
