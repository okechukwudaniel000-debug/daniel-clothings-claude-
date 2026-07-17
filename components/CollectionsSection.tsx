"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { collections, type Collection } from "@/lib/data";

function CollectionCard({
  collection,
  index,
}: {
  collection: Collection;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        delay: (index % 3) * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="shine-card group rounded-xl overflow-hidden border border-gold/15 hover:border-gold/40 bg-surface transition-all duration-300 hover:shadow-xl hover:shadow-gold/8 flex flex-col"
    >
      {/* Image area with zoom */}
      <div className="overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full h-56 relative">
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              className="object-cover"
              style={{ objectPosition: collection.objectPosition || "top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <p className="section-eyebrow text-[9px]">
          {collection.id.toUpperCase()}
        </p>
        <h3 className="font-display font-semibold text-xl text-primary group-hover:text-gold transition-colors duration-300">
          {collection.name}
        </h3>
        <p className="font-body text-sm text-secondary leading-relaxed flex-1">
          {collection.description}
        </p>

        {/* Explore button */}
        <motion.a
          href="#contact"
          whileHover={{ x: 3 }}
          className="mt-3 inline-flex items-center gap-1.5 text-gold font-body text-xs tracking-widest uppercase hover:gap-3 transition-all duration-200 group/btn"
        >
          Explore
          <ArrowUpRight
            size={13}
            className="group-hover/btn:rotate-45 transition-transform duration-200"
          />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      aria-label="Featured Collections"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            Featured Collections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl"
          >
            Dress Every <span className="gold-text">Chapter</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 mx-auto w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <CollectionCard key={col.id} collection={col} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
