import Link from "next/link";
import { CartIcon, UserIcon } from "./icons";

const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

/** Faux browser-chrome top bar: traffic-light dots, nav, cart + account, per the macet. */
export default function Header() {
  return (
    <header className="flex items-center gap-4 border-b-2 border-line bg-cream px-4 py-2.5">
      {/* traffic lights */}
      <div className="flex shrink-0 items-center gap-2">
        <span className="h-3 w-3 rounded-full border border-line/40 bg-kiln-clay" />
        <span className="h-3 w-3 rounded-full border border-line/40 bg-kiln-mustard" />
        <span className="h-3 w-3 rounded-full border border-line/40 bg-kiln-sage" />
      </div>

      <div className="ml-auto flex items-center gap-6">
        <nav className="hidden items-center gap-5 text-[12px] font-bold uppercase tracking-wide md:flex">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-kiln-clay">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" aria-label="Cart, 3 items" className="relative hover:text-kiln-clay">
            <CartIcon className="h-5 w-5 text-ink" />
            <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full border border-line bg-kiln-fern px-1 text-[9px] font-bold text-cream">
              3
            </span>
          </Link>
          <Link href="/profile" aria-label="Account" className="flex items-center gap-3">
            <UserIcon className="h-6 w-6" />
            <span className="rounded-full border-2 border-line px-3 py-1 text-[11px] font-bold hover:bg-parchment">
              A. Smith
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
