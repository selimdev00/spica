import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "About - The Artisan Kiln" };

const PARAS = [
  "The Artisan Kiln is a small studio firing ceramic tiles the slow way: pressed, glazed and kiln-fired in modest batches so no two tiles are ever quite identical.",
  "Every pattern in the catalogue, from Ocean Wave to Yellow Star, starts as a hand-cut stencil. We keep the palette deliberately small and earthen so collections always sit well together on a wall or a floor.",
  "Order by the square foot, lay out your own pattern in the visualiser, and we will fire to match. Most orders ship within two weeks.",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Our Story" title="The Artisan Kiln" />
      <div className="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/90">
        {PARAS.map((p, i) => (
          <Reveal key={i} delay={0.05 + i * 0.07} as="div">
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
