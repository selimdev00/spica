"use client";

import { useRef, type ReactNode } from "react";
import { Provider } from "react-redux";
import { MotionConfig } from "framer-motion";
import { makeStore, type AppStore } from "./index";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) storeRef.current = makeStore();
  return (
    <Provider store={storeRef.current}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Provider>
  );
}
