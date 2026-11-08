"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type MomentsModule = { mountAll: (root: Document) => Promise<unknown>; unmountAll: (root: Document) => void };

/**
 * Mounts the page's dealt moment (data-moment="…") with the taste kit's own
 * loader, served unchanged from public/assets/moments. The loader mounts once
 * on a full page load; in-site navigation swaps pages without one, so this
 * unmounts the old page's moment and mounts the new page's on every route.
 */
export function Moments() {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.querySelector("[data-moment]")) return;
    let mod: MomentsModule | null = null;
    let gone = false;
    (window as unknown as { __momentsManual: boolean }).__momentsManual = true;
    import(/* webpackIgnore: true */ /* turbopackIgnore: true */ `${basePath}/assets/moments/moments.js`)
      .then((m: MomentsModule) => {
        if (gone) return;
        mod = m;
        return m.mountAll(document);
      })
      .catch(() => {
        // The moment's section is whole without its motion.
      });
    return () => {
      gone = true;
      mod?.unmountAll(document);
    };
  }, [pathname]);

  return null;
}
