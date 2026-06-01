import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TileId } from "@/data/tiles";

export const GRID_SIZE = 6;
export const CELL_COUNT = GRID_SIZE * GRID_SIZE;

interface GridState {
  /** one entry per cell, TileId or null */
  cells: (TileId | null)[];
  /** tile currently picked from the palette for click-to-place */
  selected: TileId | null;
}

/** A sample diagonal mosaic so the visualiser opens populated, like the macet. */
const PATTERN: (TileId | null)[] = [
  "ocean-wave", "forest-fern", "terracotta-dot", "yellow-star", "ocean-wave", "forest-fern",
  "forest-fern", "terracotta-dot", "yellow-star", "ocean-wave", "forest-fern", "terracotta-dot",
  "terracotta-dot", "yellow-star", "ocean-wave", "forest-fern", "terracotta-dot", "yellow-star",
  "yellow-star", "ocean-wave", "forest-fern", "terracotta-dot", "yellow-star", "ocean-wave",
  "ocean-wave", "forest-fern", "terracotta-dot", "yellow-star", "ocean-wave", "forest-fern",
  "forest-fern", "terracotta-dot", "yellow-star", "ocean-wave", "forest-fern", "terracotta-dot",
];

const initialState: GridState = {
  cells: [...PATTERN],
  selected: null,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    selectTile(state, action: PayloadAction<TileId | null>) {
      state.selected = state.selected === action.payload ? null : action.payload;
    },
    placeTile(state, action: PayloadAction<{ index: number; tile: TileId }>) {
      const { index, tile } = action.payload;
      if (index >= 0 && index < CELL_COUNT) state.cells[index] = tile;
    },
    placeSelected(state, action: PayloadAction<number>) {
      if (state.selected && action.payload >= 0 && action.payload < CELL_COUNT) {
        state.cells[action.payload] = state.selected;
      }
    },
    clearCell(state, action: PayloadAction<number>) {
      if (action.payload >= 0 && action.payload < CELL_COUNT) {
        state.cells[action.payload] = null;
      }
    },
    clearGrid(state) {
      state.cells = Array<TileId | null>(CELL_COUNT).fill(null);
      state.selected = null;
    },
  },
});

export const { selectTile, placeTile, placeSelected, clearCell, clearGrid } = gridSlice.actions;
export default gridSlice.reducer;
