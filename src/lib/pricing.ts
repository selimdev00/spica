import { TILE_MAP, type TileId } from "@/data/tiles";

export interface CartLine {
  id: TileId;
  quantity: number;
}

export const FREE_SHIPPING_THRESHOLD = 500;
export const FLAT_SHIPPING = 25;

/** Subtotal = sum(quantity * unit price). */
export function calcSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + l.quantity * TILE_MAP[l.id].price, 0);
}

/** Free when subtotal > $500, otherwise flat $25. */
export function calcShipping(subtotal: number): number {
  return subtotal > FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING;
}

export function calcGrandTotal(subtotal: number): number {
  return subtotal + calcShipping(subtotal);
}

export function formatUSD(value: number): string {
  return `$${value.toFixed(2)}`;
}
