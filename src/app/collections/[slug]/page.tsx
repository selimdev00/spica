import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import TileSwatch from "@/components/TileSwatch";
import Reveal from "@/components/Reveal";
import { COLLECTIONS, COLLECTION_MAP } from "@/data/collections";
import { TILE_MAP } from "@/data/tiles";
import { formatUSD } from "@/lib/pricing";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = COLLECTION_MAP[slug];
  return { title: c ? `${c.name} - The Artisan Kiln` : "Collection - The Artisan Kiln" };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = COLLECTION_MAP[slug];
  if (!c) notFound();

  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link href="/collections" className="text-[11px] font-semibold uppercase tracking-wide text-kiln-clay hover:underline">
            ← Collections
          </Link>
        </Reveal>
        <PageTitle eyebrow="Collection" title={c.name} subtitle={c.description} />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
          {c.tiles.map((t, i) => {
            const tile = TILE_MAP[t];
            return (
              <Reveal key={t} delay={i * 0.08} className="border-2 border-line bg-cream/60 p-3 shadow-card-sm">
                <span className="block aspect-square overflow-hidden rounded-[3px] border-2 border-line">
                  <TileSwatch tile={t} className="h-full w-full" />
                </span>
                <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight">{tile.name}</h3>
                <p className="text-sm text-ink/80">{formatUSD(tile.price)} / sq. ft.</p>
                <Link href={`/shop/${t}`} className="btn-pill mt-3 w-full">
                  View tile
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <Link href="/" className="btn-pill">
            Start an order with this set
          </Link>
        </Reveal>
      </div>
    </SiteShell>
  );
}
