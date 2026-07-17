"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/lib/data";

const AUTO_INTERVAL = 4500;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-gold" : "text-gold/20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="glass rounded-2xl border border-gold/20 p-8 flex flex-col gap-5 shadow-xl shadow-gold/5 h-full">
      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Quote */}
      <blockquote className="font-body italic text-lg sm:text-xl text-secondary leading-relaxed flex-1">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gold/10">
        {/* Avatar placeholder */}
        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/30 flex items-center justify-center font-display font-bold text-gold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-body font-medium text-sm text-primary">{review.name}</p>
          <p className="font-body text-xs text-secondary">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    filter: "blur(8px)",
    transition: { duration: 0.4 },
  }),
};

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => (i + delta + reviews.length) % reviews.length);
    },
    []
  );

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), AUTO_INTERVAL);
  }, [go]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleNav = (delta: number) => {
    go(delta);
    startTimer();
  };

  return (
    <section id="reviews" aria-label="Customer Reviews" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl"
          >
            Worn With <span className="gold-text">Pride</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <ReviewCard review={reviews[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                  startTimer();
                }}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-gold/25 hover:bg-gold/40"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleNav(-1)}
              aria-label="Previous review"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleNav(1)}
              aria-label="Next review"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
