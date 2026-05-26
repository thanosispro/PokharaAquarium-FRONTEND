"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/UI/Section";
import { FishCard } from "@/components/UI/Card";
import { FadeIn, StaggerChildren, StaggerItem, TypewriterReveal } from "@/components/AnimationWrappers";
import { fishes } from "@/data/dummy";

const categories = ["All", "Freshwater", "Marine", "Exotic", "Pond"];

export default function FishesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFishes = activeCategory === "All" 
    ? fishes 
    : fishes.filter(f => f.category === activeCategory);

  // Duplicate for a larger showcase
  const allFishesToDisplay = [...filteredFishes, ...filteredFishes.map(f => ({ ...f, id: f.id + 100 }))];

  return (
    <div className="relative">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionHeader 
            title="Premium Fish Collection" 
            subtitle="Showcase" 
            className="mb-8"
          />
          <FadeIn delay={0.2} className="max-w-2xl mx-auto">
            <p className="text-foreground/70 text-lg">
              Explore our curated selection of exotic, marine, and freshwater fishes. Every specimen is carefully hand-selected and quarantined to ensure optimal health.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter & Grid */}
      <Section className="pt-0">
        <FadeIn delay={0.4} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                  : "glass-panel text-foreground/70 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allFishesToDisplay.map((fish, idx) => (
            <StaggerItem key={`${fish.id}-${idx}`}>
              <FishCard fish={fish} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </div>
  );
}
