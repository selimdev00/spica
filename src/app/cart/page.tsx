import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import Cart from "@/components/Cart";

export const metadata: Metadata = { title: "Your Cart - The Artisan Kiln" };

export default function CartPage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="Your Order" title="Shopping Cart" />
      <div className="mx-auto max-w-3xl">
        <Reveal className="border-2 border-line bg-cream/60 p-5 shadow-card-sm">
          <Cart />
        </Reveal>
        <Reveal delay={0.12} className="mt-6 flex flex-wrap justify-end gap-3">
          <Link href="/shop" className="btn-pill">
            Keep shopping
          </Link>
          <Link
            href="/"
            className="rounded-full border-2 border-line bg-kiln-clay px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-cream shadow-card-sm transition-transform active:translate-y-px hover:bg-kiln-terracotta"
          >
            Proceed to checkout
          </Link>
        </Reveal>
      </div>
    </SiteShell>
  );
}
