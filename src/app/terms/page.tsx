import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Terms of Service - The Artisan Kiln" };

const PARAS = [
  "These terms cover orders placed through The Artisan Kiln. By placing an order you agree to them.",
  "Tiles are made to order and fired in small batches, so slight variation in colour and texture between tiles is expected and is not considered a defect.",
  "Prices are quoted per square foot and may change without notice. The price shown at checkout is the price that applies to your order.",
  "Title and risk pass to you on delivery. Please inspect your order on arrival and report any breakage within 7 days.",
];

export default function TermsPage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Legal" title="Terms of Service" />
      <div className="mx-auto max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/90">
        {PARAS.map((p, i) => (
          <Reveal key={i} delay={0.05 + i * 0.05} as="div">
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
