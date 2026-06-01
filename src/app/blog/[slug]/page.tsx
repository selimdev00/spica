import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Reveal from "@/components/Reveal";
import { POSTS, POST_MAP } from "@/data/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_MAP[slug];
  return { title: post ? `${post.title} - The Artisan Kiln` : "Post - The Artisan Kiln" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POST_MAP[slug];
  if (!post) notFound();

  return (
    <SiteShell>
      <article className="mx-auto max-w-2xl">
        <Reveal>
          <Link href="/blog" className="text-[11px] font-semibold uppercase tracking-wide text-kiln-clay hover:underline">
            ← Blog
          </Link>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-ink/80">{post.date}</p>
          <h1 className="font-display text-[2.2rem] font-black uppercase leading-[1] tracking-tight sm:text-[2.6rem]">
            {post.title}
          </h1>
        </Reveal>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/90">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={0.08 + i * 0.05} as="div">
              <p>{para}</p>
            </Reveal>
          ))}
        </div>
      </article>
    </SiteShell>
  );
}
