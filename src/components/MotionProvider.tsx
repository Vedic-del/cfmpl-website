"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-driven motion for the whole site, re-scanned on each route change.
 *
 * - [data-reveal] elements rise in (or unveil, for plates) as they enter view.
 *   Content is fully visible without JavaScript and under reduced motion;
 *   anything already on screen is revealed at once so the first paint never
 *   flashes empty.
 * - [data-parallax] plates drift their image against the scroll. The image
 *   layer is oversized in CSS, and the offset is clamped inside that margin.
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"));
    const vh = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.dataset.revealed = "true";
    });
    root.dataset.motion = "ready";

    // A plate starts fully clipped, which the observer counts as never visible,
    // so plates are watched through their parent element instead.
    const watched = new Map<Element, HTMLElement[]>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          watched.get(e.target)?.forEach((el) => (el.dataset.revealed = "true"));
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets
      .filter((el) => !el.dataset.revealed)
      .forEach((el) => {
        const node = el.dataset.reveal === "plate" && el.parentElement ? el.parentElement : el;
        watched.set(node, [...(watched.get(node) ?? []), el]);
        io.observe(node);
      });

    // Parallax only where there is room for it to read; on phones it is just movement.
    const layers = (window.innerWidth >= 768 ? Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]")) : [])
      .map((el) => ({ el, inner: el.querySelector<HTMLElement>(".plate-inner"), factor: Number(el.dataset.parallax) || 0.1 }))
      .filter((l): l is { el: HTMLElement; inner: HTMLElement; factor: number } => !!l.inner);

    let raf = 0;
    const update = () => {
      raf = 0;
      const h = window.innerHeight;
      for (const { el, inner, factor } of layers) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > h + 100) continue;
        const max = r.height * 0.08;
        const y = Math.max(-max, Math.min(max, (r.top + r.height / 2 - h / 2) * -factor));
        inner.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    if (layers.length) {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
