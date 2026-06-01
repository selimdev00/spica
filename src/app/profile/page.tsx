import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import { UserIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Account - The Artisan Kiln" };

const DETAILS = [
  { label: "Name", value: "A. Smith" },
  { label: "Email", value: "a.smith@artisankiln.example" },
  { label: "Shipping", value: "14 Kiln Lane" },
];

const ORDERS = [
  { id: "#AK-1042", date: "May 2026", total: "$289.00", status: "Delivered" },
  { id: "#AK-1019", date: "Mar 2026", total: "$132.00", status: "Delivered" },
];

export default function ProfilePage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Account" title="Your Profile" />
      <div className="mx-auto max-w-2xl">
        <Reveal className="flex items-center gap-4 border-2 border-line bg-cream/60 p-5 shadow-card-sm">
          <UserIcon className="h-14 w-14" />
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight">A. Smith</h2>
            <p className="text-sm text-ink/80">Member since 2024</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/80">Details</h3>
          <dl className="divide-y-2 divide-line/30 border-y-2 border-line/30">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-baseline justify-between py-2.5">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink/80">{d.label}</dt>
                <dd className="text-sm">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.16} className="mt-6">
          <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/80">Recent orders</h3>
          <div className="divide-y-2 divide-line/30 border-y-2 border-line/30">
            {ORDERS.map((o) => (
              <div key={o.id} className="flex items-center justify-between py-3 text-sm">
                <span className="font-display font-bold">{o.id}</span>
                <span className="text-ink/70">{o.date}</span>
                <span className="tabular-nums">{o.total}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-kiln-fern">{o.status}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.24} className="mt-6 text-center">
          <Link href="/shop" className="btn-pill">Start a new order</Link>
        </Reveal>
      </div>
    </SiteShell>
  );
}
