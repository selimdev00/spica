import Link from "next/link";

const LINKS: { label: string; href: string }[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Shipping Info", href: "/shipping" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t-2 border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-5 text-center text-[11px] uppercase tracking-wide text-ink/80">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-kiln-clay">
              {l.label}
            </Link>
          ))}
        </div>
        <p>© 2026 The Artisan Kiln. All rights reserved.</p>
      </div>
    </footer>
  );
}
