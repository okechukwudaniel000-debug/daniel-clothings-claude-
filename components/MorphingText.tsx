"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MorphingTextProps {
  phrases: string[];
  period?: number;
}

export default function MorphingText({
  phrases,
  period = 2000,
}: MorphingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, period);

    return () => clearInterval(intervalId);
  }, [phrases, period]);

  return (
    <div className="relative h-8 w-full">
      <AnimatePresence mode="wait">
        <motion.p
          key={phrases[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 text-center font-body text-secondary text-lg"
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
