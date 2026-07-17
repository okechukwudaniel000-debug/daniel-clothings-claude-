"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Scissors,
  MapPin,
  BriefcaseBusiness,
  Truck,
  Star,
} from "lucide-react";
import { features } from "@/lib/data";

const icons = [Gem, Scissors, MapPin, BriefcaseBusiness, Truck, Star];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeaturesSection() {
  return (
    <section aria-label="Why Choose Daniel Clothings" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            Our Promise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl"
          >
            Why Choose{" "}
            <span className="gold-text">Daniel Clothings</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feat, i) => {
            const Icon = icons[i] ?? Star;
            return (
              <motion.div
                key={feat.title}
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 36px rgba(212,175,55,0.12)",
                  borderColor: "rgba(212,175,55,0.50)",
                  transition: { duration: 0.3 },
                }}
                className="group glass rounded-xl p-6 flex flex-col gap-4 border border-gold/20 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="h-12 w-12 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-gold group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Check mark + title */}
                <div className="flex items-center gap-2">
                  <span className="text-gold font-bold text-base">✓</span>
                  <h3 className="font-display font-semibold text-lg text-ink group-hover:text-gold transition-colors duration-300">
                    {feat.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-ink/60 leading-relaxed">
                  {feat.description}
                </p>

                {/* Bottom accent bar */}
                <div className="mt-auto pt-3 border-t border-gold/8 flex items-center gap-2">
                  <div className="h-[1px] w-6 bg-gold/40 group-hover:w-12 transition-all duration-500" />
                  <div className="h-[1px] flex-1 bg-gold/8" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
