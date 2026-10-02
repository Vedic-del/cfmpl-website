import Image from "next/image";
import type { Photo } from "@/content/imagery";

/**
 * Interior page hero: an optional parent label (for wayfinding on sub-pages),
 * the page's H1, and a short lede. Optionally over a photograph toned to the
 * brand hue.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  photo,
}: {
  eyebrow?: string;
  title: string;
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
        {eyebrow ? <p className="eyebrow mb-5 text-brand-light">{eyebrow}</p> : null}
        <h1 className="display max-w-[22ch] text-warm md:text-[3.25rem]">{title}</h1>
        {lede ? <p className="lede mt-7 max-w-[60ch] text-warm/80">{lede}</p> : null}
      </div>
    </section>
  );
}
