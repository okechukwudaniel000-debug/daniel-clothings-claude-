"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { storySections } from "@/lib/data";

// Decorative SVG pattern per chapter
function PatternSvg({ pattern }: { pattern: string }) {
  const configs: Record<string, React.ReactNode> = {
    journey: (
      // Winding thread motif
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-30">
        <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="6 12" />
        <circle cx="100" cy="100" r="65" stroke="#F5D67B" strokeWidth="0.6" strokeDasharray="4 8" />
        <circle cx="100" cy="100" r="40" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="18" stroke="#F5D67B" strokeWidth="0.6" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="#D4AF37" strokeWidth="0.4" opacity="0.5" />
      </svg>
    ),
    heritage: (
      // Ankara-inspired geometric
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-30">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={20 + i * 16}
            y={20 + i * 16}
            width={160 - i * 32}
            height={160 - i * 32}
            rx="2"
            stroke="#D4AF37"
            strokeWidth="0.7"
            transform={`rotate(${i * 15} 100 100)`}
          />
        ))}
        <polygon points="100,30 170,150 30,150" stroke="#F5D67B" strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>
    ),
    corporate: (
      // Clean grid lines
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-25">
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={44 + i * 28} x2="180" y2={44 + i * 28} stroke="#D4AF37" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`v${i}`} x1={44 + i * 28} y1="20" x2={44 + i * 28} y2="180" stroke="#D4AF37" strokeWidth="0.5" />
        ))}
        <rect x="60" y="60" width="80" height="80" stroke="#F5D67B" strokeWidth="0.8" fill="none" />
      </svg>
    ),
    confidence: (
      // Rising arrow / crown
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-30">
        <path d="M100 30 L130 80 L170 60 L150 110 L170 150 L100 130 L30 150 L50 110 L30 60 L70 80 Z" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
        <path d="M100 60 L120 95 L160 78 L143 118 L160 140 L100 125 L40 140 L57 118 L40 78 L80 95 Z" stroke="#F5D67B" strokeWidth="0.5" fill="none" opacity="0.6" />
      </svg>
    ),
  };
  return (
    <div className="w-full h-full absolute inset-0">
      {configs[pattern] ?? configs.journey}
    </div>
  );
}

function StoryChapter({
  section,
  index,
}: {
  section: (typeof storySections)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const patternY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative min-h-[70vh] flex items-center py-24 px-6 overflow-hidden ${
        isEven ? "justify-start" : "justify-end"
      }`}
    >
      {/* Decorative pattern side */}
      <motion.div
        style={{ y: patternY }}
        className={`absolute top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 pointer-events-none ${
          isEven ? "right-0 sm:right-8" : "left-0 sm:left-8"
        }`}
      >
        <PatternSvg pattern={section.pattern} />
      </motion.div>

      {/* Glow sphere */}
      <div
        className={`absolute w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-8 ${
          isEven ? "right-16 top-1/3" : "left-16 bottom-1/3"
        }`}
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12), transparent)" }}
      />

      {/* Chapter number */}
      <div
        className={`absolute top-12 font-display text-[8rem] sm:text-[10rem] font-bold leading-none text-gold/4 select-none pointer-events-none ${
          isEven ? "right-8" : "left-8"
        }`}
      >
        0{index + 1}
      </div>

      {/* Text block */}
      <motion.div
        style={{ y, opacity }}
        className={`relative z-10 max-w-lg ${isEven ? "ml-0 lg:ml-20" : "mr-0 lg:mr-20"}`}
      >
        <p className="section-eyebrow mb-4">{section.eyebrow}</p>

        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
          {section.title.split(" ").map((word, wi) => (
            <span
              key={wi}
              className={
                wi === 0 || (section.title.includes("Nigerian") && word === "Nigerian")
                  ? "gold-text"
                  : "text-ink"
              }
            >
              {word}{" "}
            </span>
          ))}
        </h2>

        <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-transparent mb-6" />

        <p className="font-body text-ink/70 text-base sm:text-lg leading-relaxed">
          {section.copy}
        </p>
      </motion.div>
    </div>
  );
}

export default function StorySection() {
  return (
    <section id="story" aria-label="Brand story" className="relative">
      {/* Section header */}
      <div className="text-center py-24 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-4"
        >
          The Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl"
        >
          Crafted With <span className="gold-text">Purpose</span>
        </motion.h2>
      </div>

      {/* Horizontal gold rule top */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {storySections.map((section, i) => (
        <div key={section.eyebrow}>
          <StoryChapter section={section} index={i} />
          {i < storySections.length - 1 && (
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
          )}
        </div>
      ))}

      {/* Horizontal gold rule bottom */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
