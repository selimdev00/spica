import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import TileSwatch from "@/components/TileSwatch";
import Reveal from "@/components/Reveal";
import { COLLECTIONS } from "@/data/collections";

export const metadata: Metadata = { title: "Collections - The Artisan Kiln" };

export default function CollectionsPage() {
  return (
    <SiteShell>
      <PageTitle
        eyebrow="Curated Sets"
        title="Collections"
        subtitle="Pre-paired palettes to take the guesswork out of mixing patterns."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.06}>
            <Link
              href={`/collections/${c.slug}`}
              className="group flex h-full items-center gap-4 border-2 border-line bg-cream/60 p-4 shadow-card-sm transition-transform hover:-translate-y-0.5"
            >
              <div className="flex shrink-0 -space-x-2">
                {c.tiles.map((t) => (
                  <span key={t} className="h-14 w-14 overflow-hidden rounded-[3px] border-2 border-line">
                    <TileSwatch tile={t} className="h-full w-full" />
                  </span>
                ))}
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight group-hover:text-kiln-clay">
                  {c.name}
                </h3>
                <p className="text-sm text-ink/80">{c.blurb}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
