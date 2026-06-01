import type { TileId } from "@/data/tiles";

/** Decorative ceramic-tile patterns, drawn as SVG so they scale crisply. */
export default function TileSwatch({
  tile,
  className = "",
}: {
  tile: TileId;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      {PATTERNS[tile]}
    </svg>
  );
}

const PATTERNS: Record<TileId, JSX.Element> = {
  "ocean-wave": (
    <>
      <rect width="40" height="40" fill="#39536B" />
      <g fill="none" stroke="#CFE0EC" strokeWidth="2.2" strokeLinecap="round">
        <path d="M-2 10 q5 -6 10 0 t10 0 t10 0 t10 0" />
        <path d="M-2 20 q5 -6 10 0 t10 0 t10 0 t10 0" />
        <path d="M-2 30 q5 -6 10 0 t10 0 t10 0 t10 0" />
      </g>
    </>
  ),
  "forest-fern": (
    <>
      <rect width="40" height="40" fill="#5E7350" />
      <g stroke="#E7EAD9" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M20 4 V36" />
        <path d="M20 10 L12 7 M20 10 L28 7" />
        <path d="M20 18 L11 15 M20 18 L29 15" />
        <path d="M20 26 L13 23 M20 26 L27 23" />
        <path d="M20 33 L15 31 M20 33 L25 31" />
      </g>
    </>
  ),
  "terracotta-dot": (
    <>
      <rect width="40" height="40" fill="#C36B4E" />
      <g fill="#F4ECDB">
        <circle cx="10" cy="10" r="3.2" />
        <circle cx="30" cy="10" r="3.2" />
        <circle cx="20" cy="20" r="3.2" />
        <circle cx="10" cy="30" r="3.2" />
        <circle cx="30" cy="30" r="3.2" />
      </g>
    </>
  ),
  "yellow-star": (
    <>
      <rect width="40" height="40" fill="#D8A24A" />
      <path
        d="M20 7 l3.4 7.2 7.9 0.9 -5.9 5.3 1.6 7.8 -7-3.9 -7 3.9 1.6-7.8 -5.9-5.3 7.9-0.9z"
        fill="#39536B"
      />
    </>
  ),
};
