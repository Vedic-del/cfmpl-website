/**
 * Image loader for the static export.
 *
 * The site is published as plain files (GitHub Pages), so there is no Next.js
 * server to resize images on request. Instead:
 *   - Unsplash photographs are resized by Unsplash's own CDN, which accepts
 *     width and quality parameters and serves modern formats automatically.
 *   - Local files (the logo, the mark) are served as-is, prefixed with the
 *     base path the site is published under.
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
  }
  if (src.startsWith("/")) return `${basePath}${src}`;
  return src;
}
