/**
 * Geometry of the CFM mark: three pairs of parallel lines at 0°, 60° and 120°
 * around a small central hexagon, in a 300 × 300 box. Shared by the home hero
 * (where it assembles on scroll) and the regulatory notice.
 */
const R = 118; // half-length of each line
const D = 22; // offset from centre = apothem of the hexagon
const C = 150;

export const MARK_LINES = [0, 60, 120].flatMap((deg) => {
  const t = (deg * Math.PI) / 180;
  const ux = Math.cos(t);
  const uy = Math.sin(t);
  return [1, -1].map((s) => {
    const ox = C + s * D * -uy;
    const oy = C + s * D * ux;
    return { x1: ox - R * ux, y1: oy - R * uy, x2: ox + R * ux, y2: oy + R * uy };
  });
});

export const MARK_HEX = Array.from({ length: 6 }, (_, k) => {
  const a = ((30 + 60 * k) * Math.PI) / 180;
  const r = (2 * D) / Math.sqrt(3);
  return `${(C + r * Math.cos(a)).toFixed(2)},${(C + r * Math.sin(a)).toFixed(2)}`;
}).join(" ");
