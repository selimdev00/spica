export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "glazing-in-small-batches",
    title: "Glazing in small batches",
    date: "May 2026",
    excerpt: "Why we cap each firing at a few dozen tiles, and what that means for colour variation.",
    body: [
      "Every glaze we mix behaves a little differently depending on humidity, kiln load and the exact minute it comes out of the fire. Rather than fight that, we lean into it.",
      "Capping each firing at a few dozen tiles keeps the colour tight within a batch while letting gentle variation read across a whole wall. It is the difference between a printed sheet and something made by hand.",
      "If you are matching an older order, send us the batch code on your invoice and we will get as close as the kiln allows.",
    ],
  },
  {
    slug: "laying-out-a-feature-wall",
    title: "Laying out a feature wall",
    date: "April 2026",
    excerpt: "A short guide to mixing the Ocean Wave and Yellow Star patterns without it feeling busy.",
    body: [
      "The trick with two strong patterns is to give one of them room to breathe. Pick a lead tile, let it carry most of the field, and use the second as a punctuation mark.",
      "Ocean Wave as the field with a scattered Yellow Star every fifth tile reads calm up close and lively from across the room.",
      "Use the design tool to test the rhythm before you order. Drop the tiles onto the 6x6 grid and step back from the screen.",
    ],
  },
  {
    slug: "from-stencil-to-kiln",
    title: "From stencil to kiln",
    date: "March 2026",
    excerpt: "Following a single Terracotta Dot tile through every step of the studio process.",
    body: [
      "It starts as a hand-cut stencil, no wider than a postcard. Glaze is pulled across it in one pass, then the stencil is lifted while the surface is still wet.",
      "The tile dries overnight, gets a clear top coat, and waits for a full kiln before its single firing at temperature.",
      "What comes out is never quite identical to what went in, and that is the point.",
    ],
  },
];

export const POST_MAP: Record<string, Post> = Object.fromEntries(POSTS.map((p) => [p.slug, p]));
