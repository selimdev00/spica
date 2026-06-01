"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Entrance reveal: fade + slide-up as the element enters the viewport (fires on
 * load for above-the-fold content). Pass `delay` to stagger siblings.
 * Respects prefers-reduced-motion via the global MotionConfig.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
