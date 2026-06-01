"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { addTile } from "@/store/slices/cartSlice";
import type { TileId } from "@/data/tiles";

export default function AddToOrder({ id }: { id: TileId }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        dispatch(addTile(id));
        router.push("/");
      }}
      className="w-full rounded-full border-2 border-line bg-kiln-clay px-4 py-3 text-sm font-bold uppercase tracking-wide text-cream shadow-card-sm transition-transform active:translate-y-px hover:bg-kiln-terracotta"
    >
      Add to order
    </button>
  );
}
