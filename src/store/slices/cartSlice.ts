import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_QUANTITIES, TILES, type TileId } from "@/data/tiles";
import type { CartLine } from "@/lib/pricing";

interface CartState {
  lines: CartLine[];
}

const initialState: CartState = {
  lines: TILES.map((t) => ({ id: t.id, quantity: INITIAL_QUANTITIES[t.id] })),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setQuantity(state, action: PayloadAction<{ id: TileId; quantity: number }>) {
      const line = state.lines.find((l) => l.id === action.payload.id);
      const next = Math.max(0, Math.round(action.payload.quantity) || 0);
      if (line) line.quantity = next;
    },
    increment(state, action: PayloadAction<TileId>) {
      const line = state.lines.find((l) => l.id === action.payload);
      if (line) line.quantity += 1;
    },
    decrement(state, action: PayloadAction<TileId>) {
      const line = state.lines.find((l) => l.id === action.payload);
      if (line) line.quantity = Math.max(0, line.quantity - 1);
    },
    removeLine(state, action: PayloadAction<TileId>) {
      state.lines = state.lines.filter((l) => l.id !== action.payload);
    },
    addTile(state, action: PayloadAction<TileId>) {
      if (!state.lines.some((l) => l.id === action.payload)) {
        state.lines.push({ id: action.payload, quantity: 50 });
      }
    },
  },
});

export const { setQuantity, increment, decrement, removeLine, addTile } = cartSlice.actions;
export default cartSlice.reducer;
