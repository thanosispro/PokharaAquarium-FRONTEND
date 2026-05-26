"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, Star, Sparkles, Anchor, Waves } from "lucide-react";
import { Section, SectionHeader } from "@/components/UI/Section";
import { FishCard, AquariumCard, ProductCard } from "@/components/UI/Card";
import { FadeIn, StaggerChildren, StaggerItem, TypewriterReveal } from "@/components/AnimationWrappers";
import { fishes, aquariums, plants, pets, testimonials } from "@/data/dummy";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/aquarium/1.webp"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#020813]/80 via-transparent to-[#020813]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <FadeIn delay={0.1} className="mb-6">
            <span className="inline-block py-2 px-4 rounded-full glass-panel text-primary font-semibold tracking-widest text-sm uppercase">
              Premium Aquatic Experience
            </span>
          </FadeIn>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <TypewriterReveal text="Bring Nature" delay={0.2} className="justify-center" />
            <br />
            <TypewriterReveal text="Into Your Home" delay={1.5} className="justify-center text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent" />
          </h1>

          <FadeIn delay={2.5}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover a world of exotic fishes, custom-built luxury aquariums, and premium pet supplies crafted for the modern interior.
            </p>
          </FadeIn>

          <FadeIn delay={2.8} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/fishes" className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:-translate-y-1 transition-all flex items-center gap-2">
              Explore Fishes <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#custom-aquariums" className="px-8 py-4 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Custom Aquariums
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Services Overview */}
      <Section id="services" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Exotic Fishes", desc: "Rare freshwater & marine species.", icon: <Anchor className="w-8 h-8 text-primary" /> },
            { title: "Custom Tanks", desc: "Tailor-made to fit your space perfectly.", icon: <Waves className="w-8 h-8 text-primary" /> },
            { title: "Indoor Flora", desc: "Lush green plants for aquascaping.", icon: <Leaf className="w-8 h-8 text-primary" /> },
            { title: "Pet Supplies", desc: "Premium food and accessories.", icon: <Sparkles className="w-8 h-8 text-primary" /> },
          ].map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="glass-panel p-8 rounded-2xl h-full hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Custom Aquariums Showcase */}
      <Section id="custom-aquariums">
        <SectionHeader
          title="Masterpieces in Glass"
          subtitle="Custom Aquariums"
          align="left"
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aquariums.map(aq => (
            <StaggerItem key={aq.id}>
              <AquariumCard aquarium={aq} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Featured Fishes */}
      <Section id="featured-fishes">
        <SectionHeader
          title="Jewels of the Ocean"
          subtitle="Exotic Collection"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishes.slice(0, 3).map((fish, idx) => (
            <FadeIn key={fish.id} delay={idx * 0.2}>
              <FishCard fish={fish} />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.6} className="mt-12 text-center">
          <Link href="/fishes" className="inline-flex items-center gap-2 group text-primary font-semibold hover:text-white transition-colors">
            View All Species
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </Section>

      {/* Side Business (Plants & Pets) */}
      <Section id="plants-pets">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Plants */}
          <div>
            <SectionHeader title="Indoor Nature" subtitle="Botany" align="left" className="mb-8" />
            <div className="grid grid-cols-2 gap-4">
              {plants.slice(0, 4).map((plant, idx) => (
                <FadeIn key={plant.id} delay={idx * 0.1}>
                  <ProductCard item={plant} />
                </FadeIn>
              ))}
            </div>
          </div>
          {/* Pets */}
          <div>
            <SectionHeader title="Pet Companions" subtitle="Cats & Dogs" align="left" className="mb-8" />
            <div className="grid grid-cols-2 gap-4">
              {pets.slice(0, 4).map((pet, idx) => (
                <FadeIn key={pet.id} delay={idx * 0.1}>
                  <ProductCard item={pet} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section id="why-us" className="bg-[#040d1f] relative rounded-[3rem] mx-4 md:mx-12 my-12 overflow-hidden border border-white/5 shadow-2xl shadow-primary/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Pokhara Aquarium?</h2>
            </FadeIn>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              We go beyond selling fish. We craft thriving ecosystems tailored to your environment, backed by years of expertise and a passion for aquatic life.
            </p>
            <ul className="space-y-4">
              {[
                "Ethically sourced, quarantined & healthy livestock.",
                "High-clarity, scratch-resistant customized tanks.",
                "Expert aquascaping and installation services.",
                "Premium and safe transportation across Nepal."
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} direction="left">
                  <li className="flex items-center gap-4 glass-panel p-4 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
          <FadeIn direction="right" className="relative h-[600px] w-full rounded-2xl overflow-hidden glass-card">
            <Image
              src="/aquarium/1.webp"
              alt="Expert Aquascaping"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#040d1f] to-transparent"></div>
          </FadeIn>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <SectionHeader title="What Our Clients Say" subtitle="Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <FadeIn key={test.id} delay={idx * 0.2}>
              <div className="glass-panel p-8 rounded-2xl relative h-full">
                <div className="absolute top-6 right-6 text-primary/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{test.name}</h4>
                  <p className="text-sm text-primary">{test.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section id="cta" className="pb-0" fullHeight={false}>
        <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-700"></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to bring the ocean indoors?</h2>
            <p className="text-xl text-foreground/80 mb-10">
              Visit our showroom in Pokhara or contact us to discuss your dream aquarium setup.
            </p>
            <Link href="/contact" className="px-10 py-5 bg-white text-[#040d1f] font-bold rounded-full text-lg hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-[0_0_40px_rgba(14,165,233,0.8)] hover:scale-105">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
