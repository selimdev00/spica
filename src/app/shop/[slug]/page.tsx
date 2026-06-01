import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import TileSwatch from "@/components/TileSwatch";
import Reveal from "@/components/Reveal";
import AddToOrder from "@/components/AddToOrder";
import { TILES, TILE_MAP, type TileId } from "@/data/tiles";
import { formatUSD } from "@/lib/pricing";

export function generateStaticParams() {
  return TILES.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = TILE_MAP[slug as TileId];
  return { title: t ? `${t.name} - The Artisan Kiln` : "Tile - The Artisan Kiln" };
}

export default async function TilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tile = TILE_MAP[slug as TileId];
  if (!tile) notFound();
  const others = TILES.filter((t) => t.id !== tile.id);

  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Link href="/shop" className="text-[11px] font-semibold uppercase tracking-wide text-kiln-clay hover:underline">
            ← Shop
          </Link>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <span className="block aspect-square overflow-hidden rounded-[4px] border-2 border-line shadow-card">
              <TileSwatch tile={tile.id} className="h-full w-full" />
            </span>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink/80">
              Ceramic Tile
            </p>
            <h1 className="font-display text-[2.4rem] font-black uppercase leading-[1] tracking-tight">
              {tile.name}
            </h1>
            <p className="mt-2 font-display text-xl text-kiln-clay">{formatUSD(tile.price)} / sq. ft.</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">{tile.description}</p>
            <div className="mt-auto pt-6">
              <AddToOrder id={tile.id} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <h2 className="mb-4 font-display text-xl font-extrabold uppercase tracking-tight">
            More tiles
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {others.map((t) => (
              <Link key={t.id} href={`/shop/${t.id}`} className="group block border-2 border-line bg-cream/60 p-2 shadow-card-sm transition-transform hover:-translate-y-0.5">
                <span className="block aspect-square overflow-hidden rounded-[3px] border border-line">
                  <TileSwatch tile={t.id} className="h-full w-full" />
                </span>
                <p className="mt-2 text-center text-[11px] font-bold uppercase leading-tight group-hover:text-kiln-clay">
                  {t.name}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </SiteShell>
  );
}
