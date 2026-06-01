import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import TileSwatch from "@/components/TileSwatch";
import Reveal from "@/components/Reveal";
import type { TileId } from "@/data/tiles";

export const metadata: Metadata = { title: "Gallery - The Artisan Kiln" };

const T: TileId[] = ["ocean-wave", "forest-fern", "terracotta-dot", "yellow-star"];

// six 3x3 sample layouts
const LAYOUTS: { title: string; cells: TileId[] }[] = [
  { title: "Tideline", cells: [0, 1, 0, 1, 0, 1, 0, 1, 0].map((i) => T[i % 4]) as TileId[] },
  { title: "Orchard", cells: [1, 1, 2, 1, 2, 1, 2, 1, 1].map((i) => T[i % 4]) as TileId[] },
  { title: "Kiln Dust", cells: [2, 3, 2, 3, 2, 3, 2, 3, 2].map((i) => T[i % 4]) as TileId[] },
  { title: "Night Sky", cells: [3, 0, 3, 0, 3, 0, 3, 0, 3].map((i) => T[i % 4]) as TileId[] },
  { title: "Mosaic", cells: [0, 1, 2, 3, 0, 1, 2, 3, 0].map((i) => T[i % 4]) as TileId[] },
  { title: "Checker", cells: [0, 2, 0, 2, 1, 2, 0, 2, 0].map((i) => T[i % 4]) as TileId[] },
];

export default function GalleryPage() {
  return (
    <SiteShell>
      <PageTitle
        eyebrow="Inspiration"
        title="Gallery"
        subtitle="A few layouts customers have fired. Recreate any of them in the design tool."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LAYOUTS.map((l, i) => (
          <Reveal key={l.title} delay={i * 0.05} as="article" className="border-2 border-line bg-cream/60 p-3 shadow-card-sm"><figure>
            <div className="grid grid-cols-3 gap-[3px] overflow-hidden rounded-[3px] border-2 border-line">
              {l.cells.map((c, i) => (
                <span key={i} className="aspect-square">
                  <TileSwatch tile={c} className="h-full w-full" />
                </span>
              ))}
            </div>
            <figcaption className="mt-2 text-center font-display text-sm font-bold uppercase tracking-tight">
              {l.title}
            </figcaption>
          </figure></Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
