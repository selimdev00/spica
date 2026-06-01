import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Contact - The Artisan Kiln" };

const DETAILS = [
  { label: "Email", value: "hello@artisankiln.example" },
  { label: "Phone", value: "+1 (555) 014-2026" },
  { label: "Studio", value: "14 Kiln Lane, open Tue-Sat" },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageTitle
        eyebrow="Say Hello"
        title="Contact Us"
        subtitle="Questions about an order, a colour match, or a trade quote? Reach the studio directly."
      />
      <div className="mx-auto max-w-md divide-y-2 divide-line/30 border-y-2 border-line/30">
        {DETAILS.map((d, i) => (
          <Reveal key={d.label} delay={0.05 + i * 0.06} as="div">
            <div className="flex items-baseline justify-between py-3">
              <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink/80">{d.label}</dt>
              <dd className="font-display text-base">{d.value}</dd>
            </div>
          </Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
