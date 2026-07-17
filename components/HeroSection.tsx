"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import GoldParticles from "./GoldParticles";
import MorphingText from "./MorphingText";
import { morphingPhrases } from "@/lib/data";

// SVG spiral rings — animated rotation layers representing fabric / motion
function SpiralRing({
  size,
  delay,
  duration,
  opacity,
  reverse,
  dashes,
}: {
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  reverse?: boolean;
  dashes?: string;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ opacity }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, delay, ease: "linear", repeat: Infinity }}
    >
      <ellipse
        cx={size / 2}
        cy={size / 2}
        rx={size / 2 - 2}
        ry={size * 0.3}
        fill="none"
        stroke="#D4AF37"
        strokeWidth={1}
        strokeDasharray={dashes ?? "8 14"}
      />
    </motion.svg>
  );
}

// Fabric label badge — floating fashion categories
function FabricBadge({
  label,
  style,
  delay,
}: {
  label: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      style={style}
      className="absolute font-display text-[9px] sm:text-[11px] tracking-[0.22em] text-secondary uppercase pointer-events-none select-none"
    >
      {label}
    </motion.div>
  );
}

const fabricLabels = [
  { label: "Ankara", style: { top: "22%", left: "8%" }, delay: 0.4 },
  { label: "Agbada", style: { top: "38%", right: "7%" }, delay: 0.6 },
  { label: "Senator", style: { bottom: "28%", left: "10%" }, delay: 0.8 },
  { label: "Corporate", style: { top: "16%", right: "14%" }, delay: 1.0 },
  { label: "Native Attire", style: { bottom: "20%", right: "9%" }, delay: 1.2 },
  { label: "Luxury", style: { top: "60%", left: "6%" }, delay: 1.4 },
];

export default function HeroSection() {
  const { ref, y } = useParallax(120);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden flex items-center justify-center"
      aria-label="Hero: Daniel Clothings"
    >
      {/* Animated background layers */}
      <motion.div
        style={{ y: 0 }}
        className="absolute inset-0 z-0"
      >
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.13) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,214,123,0.09) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Spiral rings */}
        <SpiralRing size={700} delay={0} duration={70} opacity={0.18} dashes="10 20" />
        <SpiralRing size={520} delay={0.3} duration={55} opacity={0.14} reverse dashes="5 18" />
        <SpiralRing size={340} delay={0.5} duration={40} opacity={0.22} dashes="6 10" />
        <SpiralRing size={900} delay={0} duration={90} opacity={0.10} reverse dashes="14 30" />
        <SpiralRing size={180} delay={0.2} duration={28} opacity={0.30} dashes="4 8" />

        {/* Gold particles */}
        <GoldParticles count={60} />

        {/* Fabric label badges */}
        {fabricLabels.map((b) => (
          <FabricBadge key={b.label} {...b} />
        ))}

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]/90" />
      </motion.div>

      {/* Main hero content */}
      <motion.div
        style={{ y }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="section-eyebrow mb-5"
        >
          Est. 2020 &mdash; Lagos, Nigeria
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="font-display font-bold tracking-tight text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none mb-4"
        >
          <motion.span variants={textVariants} custom={1} className="gold-text">
            Daniel
          </motion.span>
          <br />
          <motion.span variants={textVariants} custom={2} className="text-primary">
            Clothings
          </motion.span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent my-5"
        />

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="w-full"
        >
          <MorphingText phrases={morphingPhrases} />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <HeroButton primary href="#collections">
            Shop Collection
          </HeroButton>
          <HeroButton href="#story">Explore Styles</HeroButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-display text-[9px] tracking-[0.3em] text-secondary uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function HeroButton({
  children,
  href,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={[
        "relative overflow-hidden px-8 py-4 rounded-full font-body text-sm tracking-widest uppercase font-medium transition-all duration-300 inline-flex items-center justify-center",
        primary
          ? "bg-gold text-[#080808] shadow-lg shadow-gold/25 hover:shadow-gold/50 hover:shadow-xl"
          : "border border-gold/60 text-gold hover:bg-gold/5 hover:border-gold hover:shadow-[0_0_24px_rgba(212,175,55,0.20)]",
      ].join(" ")}
    >
      {/* Ripple glow */}
      {primary && (
        <motion.span
          className="absolute inset-0 rounded-full bg-gold-light/20"
          initial={{ scale: 0, opacity: 0.6 }}
          whileHover={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.7 }}
        />
      )}
      {children}
    </motion.a>
  );
}
