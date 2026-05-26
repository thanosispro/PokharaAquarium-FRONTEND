"use client";

import { Section, SectionHeader } from "@/components/UI/Section";
import { ProductCard } from "@/components/UI/Card";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/AnimationWrappers";
import { plants, pets } from "@/data/dummy";

export default function OtherPage() {
  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-accent/10 via-background to-background z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <SectionHeader 
            title="Beyond The Aquarium" 
            subtitle="Flora & Fauna" 
            align="center"
          />
          <FadeIn delay={0.2} className="max-w-2xl mx-auto text-center">
            <p className="text-foreground/70 text-lg">
              Complement your aquatic setup with our lush indoor botanical collection or find your next furry companion. Premium care, guaranteed.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section id="plants" className="pt-0">
        <SectionHeader title="Indoor Plants" subtitle="Botany" align="left" />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...plants, ...plants].map((plant, idx) => (
            <StaggerItem key={`plant-${idx}`}>
              <ProductCard item={plant} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <Section id="pets" className="bg-white/5 border-y border-white/5">
        <SectionHeader title="Dogs & Cats" subtitle="Companions" align="left" />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...pets, ...pets.slice(0,3)].map((pet, idx) => (
            <StaggerItem key={`pet-${idx}`}>
              <ProductCard item={pet} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </div>
  );
}
