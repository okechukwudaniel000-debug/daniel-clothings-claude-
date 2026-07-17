"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { showcaseImages } from "@/lib/data";

function ShowcaseItem({
  item,
  index,
}: {
  item: (typeof showcaseImages)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: (index % 4) * 0.08,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.35 } }}
      className="group cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl border border-gold/10 hover:border-gold/30 transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-gold/8">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
        >
          <div
            className={`relative ${
              item.tall ? "h-72 sm:h-80" : "h-44 sm:h-52"
            }`}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover"
              style={{ objectPosition: item.objectPosition || "center" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="font-display text-[10px] tracking-widest text-gold/70 uppercase">
              {item.label}
            </p>
          </div>
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/40" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ShowcaseSection() {
  return (
    <section aria-label="Fashion Showcase" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            The Gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl"
          >
            Fashion <span className="gold-text">Showcase</span>
          </motion.h2>
        </div>

        {/* Masonry-style grid — 4-col with mixed row spans */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {showcaseImages.map((item, i) => (
            <div key={item.id} className="break-inside-avoid">
              <ShowcaseItem item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
