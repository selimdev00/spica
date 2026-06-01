import Link from "next/link";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/data/posts";

export const metadata: Metadata = { title: "Blog - The Artisan Kiln" };

export default function BlogPage() {
  return (
    <SiteShell>
      <PageTitle eyebrow="From the Studio" title="Blog" />
      <div className="mx-auto max-w-2xl divide-y-2 divide-line/30">
        {POSTS.map((p, i) => (
          <Reveal as="article" key={p.slug} delay={i * 0.06}>
            <Link href={`/blog/${p.slug}`} className="group block py-5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/80">{p.date}</p>
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight group-hover:text-kiln-clay">
                {p.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-ink/80">{p.excerpt}</p>
              <span className="mt-2 inline-block text-[11px] font-semibold uppercase tracking-wide text-kiln-clay">
                Read more →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </SiteShell>
  );
}
