"use client";

import { type DragEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCell, clearGrid, placeSelected, placeTile, selectTile } from "@/store/slices/gridSlice";
import { TILES, type TileId } from "@/data/tiles";
import TileSwatch from "./TileSwatch";

export default function Visualizer() {
  const cells = useAppSelector((s) => s.grid.cells);
  const selected = useAppSelector((s) => s.grid.selected);
  const dispatch = useAppDispatch();

  const onDrop = (index: number) => (e: DragEvent) => {
    e.preventDefault();
    const tile = e.dataTransfer.getData("text/tile") as TileId;
    if (tile) dispatch(placeTile({ index, tile }));
  };

  return (
    <section>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <h3 className="font-display text-base font-extrabold uppercase tracking-tight">
          Visualize Your Order:
        </h3>
        <button
          type="button"
          onClick={() => dispatch(clearGrid())}
          className="text-[10px] font-semibold uppercase tracking-wide text-kiln-clay hover:underline"
        >
          Clear
        </button>
      </div>
      <p className="mb-3 text-xs text-ink/80">Drag and drop tiles here to create patterns.</p>

      <div className="flex items-start gap-4">
        {/* 6x6 grid */}
        <div
          className="grid aspect-square w-full max-w-[300px] flex-1 grid-cols-6 gap-[3px] border-2 border-line bg-cream p-[3px]"
          role="group"
          aria-label="Design grid, 6 by 6"
        >
          {cells.map((cell, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Cell ${i + 1}${cell ? `, ${cell}` : ", empty"}`}
              onClick={() => dispatch(placeSelected(i))}
              onDoubleClick={() => dispatch(clearCell(i))}
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop(i)}
              className="relative aspect-square overflow-hidden border border-line/30 bg-parchment/40 transition-colors hover:border-line"
            >
              <AnimatePresence mode="wait">
                {cell && (
                  <motion.span
                    key={cell}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.16 }}
                    className="absolute inset-0"
                  >
                    <TileSwatch tile={cell} className="h-full w-full" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* palette */}
        <div className="w-[150px] shrink-0">
          <h4 className="mb-2 text-[10px] font-semibold uppercase leading-tight tracking-wide text-ink/80">
            Design Palette
          </h4>
          <div className="flex flex-col gap-2">
            {TILES.map((t) => {
              const isSel = selected === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("text/tile", t.id)}
                  onClick={() => dispatch(selectTile(t.id))}
                  title={t.name}
                  className={`group flex items-center gap-1.5 rounded-[3px] border-2 p-1 text-left transition-all ${
                    isSel ? "border-kiln-clay bg-parchment shadow-card-sm" : "border-line"
                  }`}
                >
                  <span className="h-8 w-8 shrink-0 overflow-hidden rounded-[2px] border border-line">
                    <TileSwatch tile={t.id} className="h-full w-full" />
                  </span>
                  <span className="min-w-0 break-words text-[10px] font-bold uppercase leading-tight">
                    {t.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
