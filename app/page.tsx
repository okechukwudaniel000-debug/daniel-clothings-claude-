"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import {
  SkeletonHero,
  SkeletonCollections,
  SkeletonReviewCard,
} from "@/components/skeletons";

// Eagerly load hero (above the fold)
import HeroSection from "@/components/HeroSection";

import AnimatedSection from "@/components/AnimatedSection";

// Lazy-load below-the-fold sections
const StorySection = dynamic(() => import("@/components/StorySection"), {
  ssr: false,
  loading: () => (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <div className="h-8 w-48 shimmer rounded mb-8 mx-auto" />
    </div>
  ),
});

const CollectionsSection = dynamic(
  () => import("@/components/CollectionsSection"),
  {
    ssr: false,
    loading: () => <SkeletonCollections />,
  }
);

const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"), {
  ssr: false,
});

const TrustIndicators = dynamic(() => import("@/components/TrustIndicators"), {
  ssr: false,
});

const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"), {
  ssr: false,
  loading: () => (
    <div className="py-28 px-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      <SkeletonReviewCard />
      <SkeletonReviewCard />
    </div>
  ),
});

const ShowcaseSection = dynamic(() => import("@/components/ShowcaseSection"), {
  ssr: false,
});

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

// Section divider component
function GoldDivider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-golden to-transparent my-16" />
  );
}

export default function Home() {
  const [heroReady, setHeroReady] = useState(false);

  // Simulate hero readiness after a brief load
  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <main id="main">
      <Header />

      {/* Hero */}
      {heroReady ? <HeroSection /> : <SkeletonHero />}

      {/* Below-the-fold sections */}
      <Suspense fallback={null}>
        <AnimatedSection>
          <StorySection />
        </AnimatedSection>
        <GoldDivider />

        <AnimatedSection>
          <CollectionsSection />
        </AnimatedSection>
        <GoldDivider />

        <AnimatedSection>
          <TrustIndicators />
        </AnimatedSection>
        <GoldDivider />

        <AnimatedSection>
          <FeaturesSection />
        </AnimatedSection>
        <GoldDivider />

        <AnimatedSection>
          <ReviewsSection />
        </AnimatedSection>
        <GoldDivider />

        <AnimatedSection>
          <ShowcaseSection />
        </AnimatedSection>
        <GoldDivider />

        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <GoldDivider />

        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </Suspense>
    </main>
  );
}
