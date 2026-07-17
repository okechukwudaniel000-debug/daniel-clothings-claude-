"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Daniel Clothings"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.05), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-5"
        >
          About
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-8"
        >
          About{" "}
          <span className="gold-text">Daniel Clothings</span>
        </motion.h2>

        {/* Decorative rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-12"
        />

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <p className="font-body text-xl sm:text-2xl text-secondary leading-relaxed italic font-light">
            &ldquo;Excellence is not a destination — it is the standard from which every collection departs.&rdquo;
          </p>

          <p className="font-body text-base sm:text-lg text-secondary leading-relaxed">
            Daniel Clothings was born from a single belief: that Nigerian fashion deserves
            a global platform built on uncompromising craftsmanship. Founded in Lagos,
            our atelier fuses the rich vocabulary of Ankara prints, Agbada grandeur, and
            Senator tailoring with the precision of modern luxury design — creating
            garments that travel fluently from ceremony to boardroom.
          </p>

          <p className="font-body text-base sm:text-lg text-secondary leading-relaxed">
            Every piece begins as a conversation between heritage and innovation.
            Our master tailors select only premium-grade fabrics before a single
            pattern is drawn. The result is clothing that does more than fit — it speaks.
            Each silhouette is engineered to change how you carry yourself, because we
            believe that what you wear is the first statement you make.
          </p>

          <p className="font-body text-base sm:text-lg text-secondary leading-relaxed">
            Ten thousand satisfied clients. Five hundred corporate partnerships. A single
            standard: yours. Daniel Clothings does not follow trends — it creates them,
            thread by thread, with the authenticity that only genuine craftsmanship
            can produce.
          </p>
        </motion.div>

        {/* Closing ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="h-2 w-2 rounded-full bg-gold/60" />
          <p className="font-display text-[10px] tracking-[0.3em] text-secondary uppercase">
            Where Tradition Meets Modern Elegance
          </p>
          <div className="h-2 w-2 rounded-full bg-gold/60" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>
      </div>
    </section>
  );
}
