"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export function useParallax(distance: number = 120) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [distance, -distance]
  );

  return { ref, y, scrollYProgress };
}
