"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trustStats } from "@/lib/data";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

function StatCounter({
  value,
  suffix,
  label,
  decimals = 0,
  inView,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  inView: boolean;
  index: number;
}) {
  const count = useAnimatedCounter(value, 1800 + index * 200, decimals, inView);
  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center gap-2"
    >
      <div className="font-display font-bold text-4xl sm:text-5xl gold-text tabular-nums">
        {displayValue}
        <span className="text-2xl sm:text-3xl">{suffix}</span>
      </div>
      <div className="font-body text-xs tracking-widest text-secondary uppercase">{label}</div>
    </motion.div>
  );
}

export default function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section aria-label="Trust statistics" className="relative py-20 px-6 overflow-hidden">
      {/* Horizontal rule lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(212,175,55,0.06), transparent)",
        }}
      />

      <div
        ref={ref}
        className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {trustStats.map((stat, i) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            decimals={stat.decimals}
            inView={inView}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
