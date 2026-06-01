import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import TileSwatch from "@/components/TileSwatch";
import Reveal from "@/components/Reveal";
import { TILES } from "@/data/tiles";
import { formatUSD } from "@/lib/pricing";

export const metadata: Metadata = { title: "Shop - The Artisan Kiln" };

export default function ShopPage() {
  return (
    <SiteShell>
      <PageTitle
        eyebrow="Handcrafted Ceramics"
        title="Shop the Tiles"
        subtitle="Each tile is kiln-fired by hand and sold by the square foot. Pick your patterns, then build your order."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TILES.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.06}>
            <Link
              href={`/shop/${t.id}`}
              className="group block h-full border-2 border-line bg-cream/60 p-3 shadow-card-sm transition-transform hover:-translate-y-0.5"
            >
              <span className="block aspect-square overflow-hidden rounded-[3px] border-2 border-line">
                <TileSwatch tile={t.id} className="h-full w-full" />
              </span>
              <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight group-hover:text-kiln-clay">
                {t.name}
              </h3>
              <p className="text-sm text-ink/80">{formatUSD(t.price)} / sq. ft.</p>
              <span className="btn-pill mt-3 w-full">View tile</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
