/**
 * Image loader for the static export.
 *
 * The site is published as plain files (GitHub Pages), so there is no Next.js
 * server to resize images on request. Instead:
 *   - Local photographs in /images/ are pre-sized at build time into
 *     name-640.webp, name-1080.webp and name-1920.webp; the loader picks the
 *     smallest that covers the requested width.
 *   - Other local files (the logo, the mark) are served as-is.
 * Local paths are prefixed with the base path the site is published under.
 */

const VARIANTS = [640, 1080, 1920];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("/images/") && src.endsWith(".webp")) {
    const w = VARIANTS.find((v) => v >= width) ?? VARIANTS[VARIANTS.length - 1];
    return `${basePath}${src.replace(/\.webp$/, `-${w}.webp`)}`;
  }
  if (src.startsWith("/")) return `${basePath}${src}`;
  return src;
}
