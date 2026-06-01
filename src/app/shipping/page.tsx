import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Shipping Info - The Artisan Kiln" };

const PARAS = [
  "Shipping is a flat $25.00 per order. Orders over $500 ship free.",
  "Because every tile is fired to order, most orders leave the studio within two weeks.",
  "Tiles are packed by hand with plenty of padding. If anything arrives broken, let us know within 7 days and we will re-fire the affected tiles.",
  "We currently ship domestically only. For larger trade orders, get in touch and we will arrange a freight quote.",
];

export default function ShippingPage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Orders" title="Shipping Info" />
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
