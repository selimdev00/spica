import Link from "next/link";
import TileSwatch from "./TileSwatch";
import { TILES, type TileId } from "@/data/tiles";

const LINKS: { label: string; href: string }[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Shipping Info", href: "/shipping" },
  { label: "Contact Us", href: "/contact" },
];

// repeated tile sequence for the seamless marquee (duplicated -> -50% loop)
const STRIP: TileId[] = [...TILES, ...TILES, ...TILES, ...TILES].map((t) => t.id);

export default function Footer() {
  return (
    <footer className="mt-10 border-t-2 border-line">
      {/* fancy: slow seamless marquee of tile patterns */}
      <div className="overflow-hidden border-b-2 border-line/30" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-[3px] py-2 motion-reduce:animate-none">
          {[...STRIP, ...STRIP].map((t, i) => (
            <span key={i} className="h-7 w-7 shrink-0 overflow-hidden rounded-[2px] border border-line/40">
              <TileSwatch tile={t} className="h-full w-full" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-center text-[11px] uppercase tracking-wide text-ink/80">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-kiln-clay">
              {l.label}
            </Link>
          ))}
        </div>
        <p>© 2026 The Artisan Kiln. All rights reserved.</p>
        <p className="text-ink/70">
          Designed &amp; built by{" "}
          <a
            href="https://selim.services"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-kiln-clay underline-offset-2 hover:underline"
          >
            Selim Ataballyev
          </a>
          {" · "}
          <a
            href="https://github.com/selimdev00/spica"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-kiln-clay underline-offset-2 hover:underline"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
