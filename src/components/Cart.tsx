"use client";

import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTile, increment, removeLine, setQuantity } from "@/store/slices/cartSlice";
import { TILE_MAP, TILES, type TileId } from "@/data/tiles";
import { calcShipping, calcSubtotal, formatUSD } from "@/lib/pricing";
import TileSwatch from "./TileSwatch";
import { PlusIcon, TrashIcon } from "./icons";

export default function Cart() {
  const lines = useAppSelector((s) => s.cart.lines);
  const dispatch = useAppDispatch();
  const [adding, setAdding] = useState(false);

  const subtotal = useMemo(() => calcSubtotal(lines), [lines]);
  const shipping = calcShipping(subtotal);
  const grandTotal = subtotal + shipping;
  const missing = TILES.filter((t) => !lines.some((l) => l.id === t.id));

  return (
    <section>
      <div className="-mx-1 overflow-x-auto px-1">
       <table className="w-full min-w-[460px] border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-line text-left align-bottom text-[10px] font-semibold uppercase leading-tight tracking-wide text-ink/80">
            <th className="pb-2 pr-2">Tile Collection</th>
            <th className="pb-2 pr-2">Item</th>
            <th className="pb-2 pr-2">
              Quantity<br />
              <span className="font-normal normal-case">(sq. ft.)</span>
            </th>
            <th className="pb-2 pr-2">
              Unit Price<br />
              <span className="font-normal normal-case">($)</span>
            </th>
            <th className="pb-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {lines.length === 0 && (
            <tr>
              <td colSpan={5} className="py-6 text-center text-ink/50">
                Your cart is empty. Add a tile below.
              </td>
            </tr>
          )}
          {lines.map((line) => {
            const tile = TILE_MAP[line.id];
            return (
              <tr key={line.id} className="border-b border-line/25 align-middle">
                <td className="py-3 pr-2">
                  <span className="flex items-center gap-2">
                    <span className="block h-7 w-7 shrink-0 overflow-hidden rounded-[3px] border-2 border-line">
                      <TileSwatch tile={line.id} className="h-full w-full" />
                    </span>
                    <span className="text-[11px] font-bold uppercase leading-tight tracking-wide">
                      {tile.name}
                    </span>
                  </span>
                </td>
                <td className="py-3 pr-2">
                  <span className="block h-9 w-9 overflow-hidden rounded-[3px] border-2 border-line">
                    <TileSwatch tile={line.id} className="h-full w-full" />
                  </span>
                </td>
                <td className="py-3 pr-2">
                  <span className="bracket text-sm">
                    <input
                      type="number"
                      min={0}
                      value={line.quantity}
                      aria-label={`${tile.name} quantity in square feet`}
                      onChange={(e) =>
                        dispatch(setQuantity({ id: line.id, quantity: Number(e.target.value) }))
                      }
                      className="box w-[46px] bg-cream text-center outline-none focus:border-kiln-clay"
                    />
                  </span>
                </td>
                <td className="py-3 pr-2">
                  <span className="bracket text-sm">
                    <span className="box">{formatUSD(tile.price)}</span>
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex items-center justify-center gap-1.5">
                    <button
                      type="button"
                      aria-label={`Add one more ${tile.name}`}
                      title="Add"
                      onClick={() => dispatch(increment(line.id))}
                      className="flex flex-col items-center gap-0.5 text-[8px] font-semibold uppercase text-ink/80 hover:text-kiln-fern"
                    >
                      <PlusIcon className="h-4 w-4" />
                      Add
                    </button>
                    <button
                      type="button"
                      aria-label={`Remove ${tile.name}`}
                      title="Remove"
                      onClick={() => dispatch(removeLine(line.id))}
                      className="flex flex-col items-center gap-0.5 text-[8px] font-semibold uppercase text-ink/80 hover:text-kiln-clay"
                    >
                      <TrashIcon className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
       </table>
      </div>

      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {missing.length > 0 && !adding && (
            <button
              type="button"
              className="btn-pill"
              onClick={() => setAdding(true)}
            >
              <PlusIcon className="h-4 w-4" />
              Add new tile to cart
            </button>
          )}
          {adding &&
            missing.map((t) => (
              <button
                key={t.id}
                type="button"
                className="btn-pill"
                onClick={() => {
                  dispatch(addTile(t.id as TileId));
                  if (missing.length === 1) setAdding(false);
                }}
              >
                <span className="h-4 w-4 overflow-hidden rounded-[2px] border border-line">
                  <TileSwatch tile={t.id} className="h-full w-full" />
                </span>
                {t.name}
              </button>
            ))}
        </div>

        <dl className="space-y-1.5 text-sm sm:text-right">
          <TotalRow label="Subtotal" value={formatUSD(subtotal)} />
          <TotalRow label="Shipping" value={shipping === 0 ? "$0.00" : formatUSD(shipping)} />
          <TotalRow label="Grand Total" value={formatUSD(grandTotal)} strong />
        </dl>
      </div>
    </section>
  );
}

function TotalRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-end gap-3">
      <dt
        className={`uppercase tracking-wide ${
          strong ? "font-bold text-ink" : "font-semibold text-ink/80"
        }`}
      >
        {label}:
      </dt>
      <dd className="bracket text-sm">
        <span className="box">{value}</span>
      </dd>
    </div>
  );
}
