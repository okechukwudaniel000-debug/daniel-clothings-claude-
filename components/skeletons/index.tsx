"use client";

import { cn } from "@/lib/utils";

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded bg-white/5",
        className
      )}
    >
      <div className="shimmer absolute inset-0 rounded" />
    </div>
  );
}

export function SkeletonHero() {
  return (
    <section className="relative h-screen w-full bg-bg flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl px-6">
        <SkeletonBlock className="h-3 w-32 rounded-full" />
        <SkeletonBlock className="h-16 w-full rounded-lg" />
        <SkeletonBlock className="h-8 w-3/4 rounded" />
        <div className="flex gap-4 mt-4">
          <SkeletonBlock className="h-12 w-40 rounded-full" />
          <SkeletonBlock className="h-12 w-40 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-gold/10 bg-surface p-0">
      <SkeletonBlock className="h-64 w-full rounded-none" />
      <div className="p-5 flex flex-col gap-3">
        <SkeletonBlock className="h-5 w-2/3" />
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-4/5" />
        <SkeletonBlock className="h-10 w-32 rounded-full mt-2" />
      </div>
    </div>
  );
}

export function SkeletonReviewCard() {
  return (
    <div className="rounded-xl border border-gold/10 bg-surface p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <SkeletonBlock className="h-12 w-12 rounded-full" />
        <div className="flex flex-col gap-2 flex-1">
          <SkeletonBlock className="h-4 w-24" />
          <SkeletonBlock className="h-3 w-16" />
        </div>
      </div>
      <SkeletonBlock className="h-3 w-20" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-5/6" />
    </div>
  );
}

export function SkeletonCollections() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-16">
          <SkeletonBlock className="h-3 w-28 rounded-full" />
          <SkeletonBlock className="h-10 w-72" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
