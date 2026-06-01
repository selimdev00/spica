import SiteShell from "@/components/SiteShell";
import Cart from "@/components/Cart";
import Visualizer from "@/components/Visualizer";
import Checkout from "@/components/Checkout";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <SiteShell>
      <div className="mb-7 text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-ink/80">
            Handcrafted Ceramics
          </p>
        </Reveal>
        <Reveal delay={0.08} y={20}>
          <h1 className="font-display text-[2.6rem] font-black uppercase leading-[0.95] tracking-tight sm:text-[3.25rem]">
            Ceramic Tile Order Form
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-1 font-display text-lg tracking-[0.3em] text-kiln-clay">
            The Artisan Kiln
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal delay={0.26}>
            <h2 className="mb-4 font-display text-2xl font-extrabold uppercase tracking-tight">
              Shopping Cart &amp; Design Tool
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <Reveal delay={0.32} className="min-w-0">
              <Cart />
            </Reveal>
            <Reveal delay={0.42} className="min-w-0">
              <Visualizer />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.3}>
            <h2 className="mb-4 font-display text-2xl font-extrabold uppercase tracking-tight">
              Order Summary
            </h2>
          </Reveal>
          <Reveal delay={0.38}>
            <Checkout />
          </Reveal>
        </div>
      </div>
    </SiteShell>
  );
}
