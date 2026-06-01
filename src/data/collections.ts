import type { TileId } from "./tiles";

export interface Collection {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  tiles: TileId[];
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "coastal",
    name: "Coastal",
    blurb: "Cool blues for kitchens and baths.",
    description: "Ocean Wave leads this set, with a scatter of Yellow Star for warmth. Built for splashbacks, shower walls and anywhere that wants to feel a little cooler.",
    tiles: ["ocean-wave", "yellow-star"],
  },
  {
    slug: "botanical",
    name: "Botanical",
    blurb: "Leaf motifs for sunrooms and patios.",
    description: "Forest Fern paired with Ocean Wave brings the garden indoors. A calm, leafy palette that suits sunrooms, conservatories and shaded patios.",
    tiles: ["forest-fern", "ocean-wave"],
  },
  {
    slug: "terracotta",
    name: "Terracotta",
    blurb: "Warm earthen tones for entryways.",
    description: "Terracotta Dot anchored by Yellow Star: warm, grounded and welcoming. Made for entryways, hearths and floors that take a lot of foot traffic.",
    tiles: ["terracotta-dot", "yellow-star"],
  },
  {
    slug: "celestial",
    name: "Celestial",
    blurb: "Star patterns for statement walls.",
    description: "Yellow Star takes the lead, with Forest Fern grounding it. A bold, graphic set for feature walls that are meant to be noticed.",
    tiles: ["yellow-star", "forest-fern"],
  },
];

export const COLLECTION_MAP: Record<string, Collection> = Object.fromEntries(
  COLLECTIONS.map((c) => [c.slug, c]),
);
