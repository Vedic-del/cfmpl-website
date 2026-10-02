"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll reveals for every [data-reveal] element on the page. Content is fully
 * visible without JavaScript and under prefers-reduced-motion; this only adds the
 * rise-in once the document is marked ready. Re-scans on each route change.
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"));
    // Anything already on screen is revealed immediately so the first paint never flashes empty.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) el.dataset.revealed = "true";
    });
    root.dataset.motion = "ready";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.filter((el) => !el.dataset.revealed).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
