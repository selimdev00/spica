/**
 * Botanical border, drawn from scratch as SVG (no baked raster).
 * A vertical repeating motif of ferns, leaf sprigs, berries and small ceramic
 * tiles runs down both inner edges of the window. Purely decorative.
 */

function BotanicalStrip({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="60"
      height="100%"
      className="h-full w-[60px]"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <pattern id={flip ? "botR" : "botL"} width="60" height="240" patternUnits="userSpaceOnUse">
          {/* fern frond */}
          <g stroke="#5E7350" strokeWidth="1.6" strokeLinecap="round" fill="none">
            <path d="M30 6 V70" />
            <path d="M30 14 q-10 -5 -15 -2 M30 14 q10 -5 15 -2" />
            <path d="M30 26 q-11 -4 -17 0 M30 26 q11 -4 17 0" />
            <path d="M30 38 q-10 -3 -16 2 M30 38 q10 -3 16 2" />
            <path d="M30 50 q-8 -2 -13 3 M30 50 q8 -2 13 3" />
            <path d="M30 61 q-6 -1 -10 3 M30 61 q6 -1 10 3" />
          </g>

          {/* small ceramic tile */}
          <g transform="translate(16 84)">
            <rect width="28" height="28" rx="2" fill="#39536B" />
            <path
              d="M0 7 q3.5 -4 7 0 t7 0 t7 0 t7 0 M0 14 q3.5 -4 7 0 t7 0 t7 0 t7 0 M0 21 q3.5 -4 7 0 t7 0 t7 0 t7 0"
              fill="none"
              stroke="#CFE0EC"
              strokeWidth="1.4"
            />
          </g>

          {/* berry sprig */}
          <g>
            <path d="M30 122 V176" stroke="#5E7350" strokeWidth="1.6" strokeLinecap="round" />
            <g fill="#C0614A">
              <circle cx="22" cy="132" r="3" />
              <circle cx="38" cy="140" r="3" />
              <circle cx="23" cy="150" r="3" />
              <circle cx="37" cy="160" r="3" />
            </g>
            <g stroke="#5E7350" strokeWidth="1.3" strokeLinecap="round">
              <path d="M30 130 l-6 2 M30 138 l6 2 M30 148 l-6 2 M30 158 l6 2" />
            </g>
          </g>

          {/* leaf pair tile */}
          <g transform="translate(16 188)">
            <rect width="28" height="28" rx="2" fill="#D8A24A" />
            <path d="M14 4 v20 M14 9 l-6 -2 M14 9 l6 -2 M14 16 l-6 -1 M14 16 l6 -1" fill="none" stroke="#5E7350" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* leaf accents bridging tiles */}
          <g fill="#8A9A6B">
            <ellipse cx="12" cy="78" rx="6" ry="3" transform="rotate(-30 12 78)" />
            <ellipse cx="48" cy="182" rx="6" ry="3" transform="rotate(30 48 182)" />
          </g>
        </pattern>
      </defs>
      <rect width="60" height="100%" fill={`url(#${flip ? "botR" : "botL"})`} />
    </svg>
  );
}

export default function Frame() {
  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden select-none lg:block" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 w-[60px] opacity-90">
        <BotanicalStrip />
      </div>
      <div className="absolute inset-y-0 right-0 w-[60px] opacity-90">
        <BotanicalStrip flip />
      </div>
    </div>
  );
}
