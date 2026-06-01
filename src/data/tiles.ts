export type TileId = "ocean-wave" | "forest-fern" | "terracotta-dot" | "yellow-star";

export interface Tile {
  id: TileId;
  name: string;
  /** unit price per sq. ft, USD */
  price: number;
  description: string;
}

/** Initial catalogue, sampled from the macet. */
export const TILES: Tile[] = [
  { id: "ocean-wave", name: "Ocean Wave", price: 28, description: "Hand-painted waves on a deep navy ground. A cool, rhythmic pattern for splashbacks and shower walls." },
  { id: "forest-fern", name: "Forest Fern", price: 30, description: "A single fern frond in cream on sage. Calm and leafy, made for sunrooms and shaded patios." },
  { id: "terracotta-dot", name: "Terracotta Dot", price: 26, description: "Scattered cream dots on warm terracotta. Grounded and welcoming for entryways and hearths." },
  { id: "yellow-star", name: "Yellow Star", price: 29, description: "A bold navy star on mustard. A graphic accent tile for feature walls that want to be noticed." },
];

export const TILE_MAP: Record<TileId, Tile> = Object.fromEntries(
  TILES.map((t) => [t.id, t]),
) as Record<TileId, Tile>;

/** Initial cart quantities (sq. ft) from the desktop macet. */
export const INITIAL_QUANTITIES: Record<TileId, number> = {
  "ocean-wave": 150,
  "forest-fern": 75,
  "terracotta-dot": 200,
  "yellow-star": 50,
};
