"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Ruler, 
  Droplets, 
  Maximize2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Home as HomeIcon, 
  Briefcase, 
  Utensils, 
  Building2,
  Settings,
  Hammer,
  Truck,
  Droplet
} from "lucide-react";
import { Section, SectionHeader } from "@/components/UI/Section";
import { FadeIn, StaggerChildren, StaggerItem, TypewriterReveal } from "@/components/AnimationWrappers";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const aquariumTypes = [
  {
    title: "Cube Aquarium",
    image: "/aquarium/1.webp",
    description: "Perfectly symmetrical designs for modern minimalist spaces.",
    icon: <Maximize2 className="w-6 h-6" />
  },
  {
    title: "Cuboid Aquarium",
    image: "/aquarium/2.webp",
    description: "Classic panoramic views with maximum horizontal swimming space.",
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Built-In Wall Aquarium",
    image: "/aquarium/3.webp",
    description: "Seamlessly integrated into your architecture for a living wall effect.",
    icon: <HomeIcon className="w-6 h-6" />
  },
  {
    title: "Office Setup",
    image: "/aquarium/4.webp",
    description: "Boost productivity and reduce stress with a professional aquatic display.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Luxury Living Room",
    image: "/aquarium/1.webp",
    description: "The centerpiece of your home, designed for high-end comfort.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Restaurant Display",
    image: "/aquarium/2.webp",
    description: "Create an unforgettable dining atmosphere with large-scale tanks.",
    icon: <Utensils className="w-6 h-6" />
  },
  {
    title: "Reception Showcase",
    image: "/aquarium/3.webp",
    description: "Make a powerful first impression with a custom reception installation.",
    icon: <Building2 className="w-6 h-6" />
  }
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Understanding your vision and space requirements.", icon: <Settings /> },
  { step: "02", title: "Dimension Planning", desc: "Detailed CAD measurements for a perfect fit.", icon: <Ruler /> },
  { step: "03", title: "Glass Preparation", desc: "Sourcing premium ultra-clear optic white glass.", icon: <Layers /> },
  { step: "04", title: "Frame Building", desc: "Reinforced structural frames for maximum safety.", icon: <Hammer /> },
  { step: "05", title: "Aquarium Assembly", desc: "Precision bonding with high-grade aquatic silicone.", icon: <Zap /> },
  { step: "06", title: "Water Testing", desc: "Rigorous leak testing and structural stress analysis.", icon: <Droplet /> },
  { step: "07", title: "Decoration Setup", desc: "Custom aquascaping with rocks, wood, and hardscape.", icon: <Droplets /> },
  { step: "08", title: "Installation", desc: "Professional delivery and final onsite setup.", icon: <Truck /> }
];

export default function AquariumPage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/aquarium/2.webp" 
            alt="Luxury Aquarium" 
            fill 
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-background via-background/60 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block py-2 px-4 rounded-full glass-panel text-primary font-semibold tracking-widest text-sm uppercase mb-6">
              Aquatic Architecture Studio
            </span>
          </FadeIn>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            <TypewriterReveal text="Custom Aquariums" delay={0.3} className="justify-center" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Crafted For Your Space</span>
          </h1>
          
          <FadeIn delay={1.8}>
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              Elevate your interior with precision-engineered aquatic systems designed to seamlessly integrate with your lifestyle.
            </p>
          </FadeIn>
          
          <FadeIn delay={2.1} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#dimension-builder" className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/50 transition-all flex items-center gap-2">
              Start Custom Build <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="px-8 py-4 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Request Consultation
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Aquarium Types showcase */}
      <Section id="aquarium-types">
        <SectionHeader 
          title="Designed for Distinction" 
          subtitle="Portfolio" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aquariumTypes.map((type, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group relative glass-card rounded-3xl overflow-hidden cursor-pointer h-full border border-white/5 hover:border-primary/50 transition-all duration-500">
                <div className="relative h-80 w-full">
                  <Image src={type.image} alt={type.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80"></div>
                </div>
                <div className="p-8 relative -mt-20 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{type.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{type.description}</p>
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Custom Dimension Builder Section */}
      <Section id="dimension-builder" className="bg-[#030a16]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Built to Your Specifications" 
              subtitle="Precision Engineering" 
              align="left"
            />
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              We specialize in creating aquariums that fit exactly where you need them. From wall integrations to massive floor-to-ceiling installations.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Glass Thickness", value: "8mm - 25mm", icon: <ShieldCheck className="text-primary" /> },
                { label: "Water Capacity", value: "Up to 5000L", icon: <Droplets className="text-primary" /> },
                { label: "Glass Type", value: "Ultra-Clear Optic", icon: <Layers className="text-primary" /> },
                { label: "Warranty", value: "10 Years Structural", icon: <ShieldCheck className="text-primary" /> }
              ].map((spec, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="left" className="glass-panel p-6 rounded-2xl">
                  <div className="mb-2">{spec.icon}</div>
                  <div className="text-sm text-foreground/50 uppercase tracking-widest">{spec.label}</div>
                  <div className="text-lg font-bold text-white">{spec.value}</div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[3rem] p-8 md:p-12 border border-primary/20 shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-foreground/40 font-mono tracking-widest uppercase">Dimension Calculator v1.0</span>
              </div>
              
              <div className="space-y-8">
                {[
                  { label: "Length (cm)", default: 120 },
                  { label: "Width (cm)", default: 60 },
                  { label: "Height (cm)", default: 60 }
                ].map((input, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-semibold">{input.label}</span>
                      <span className="text-primary font-mono">{input.default} cm</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-linear-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
                
                <div className="pt-8 border-t border-white/10 mt-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground/50 text-sm">Estimated Volume</span>
                    <span className="text-2xl font-black text-white font-mono tracking-tighter">432.00 Liters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/50 text-sm">Glass Weight</span>
                    <span className="text-xl font-bold text-primary font-mono">112.5 kg</span>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/50 rounded-2xl font-bold transition-all mt-4">
                  Send Specifications
                </button>
              </div>
            </div>
            
            {/* Background glowing elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </Section>

      {/* Built-in Showcase */}
      <Section id="built-in">
        <SectionHeader title="Luxury Integrations" subtitle="Architecture" />
        <div className="space-y-24">
          {[
            {
              title: "Seamless Wall Integration",
              desc: "Engineered to be structural and beautiful. Our wall-mounted series offers a minimalist look with hidden filtration systems accessible through custom cabinetry.",
              image: "/aquarium/3.webp",
              reverse: false
            },
            {
              title: "Cabinetry Excellence",
              desc: "Premium wood finishes or modern metallic frames. Our furniture-integrated aquariums serve as functional art pieces that define luxury interiors.",
              image: "/aquarium/4.webp",
              reverse: true
            }
          ].map((item, i) => (
            <div key={i} className={cn("flex flex-col lg:flex-row gap-16 items-center", item.reverse && "lg:flex-row-reverse")}>
              <FadeIn direction={item.reverse ? "left" : "right"} className="w-full lg:w-1/2">
                <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden glass-card">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent"></div>
                </div>
              </FadeIn>
              <FadeIn direction={item.reverse ? "right" : "left"} className="w-full lg:w-1/2">
                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{item.title}</h3>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed italic border-l-4 border-primary pl-8">
                  {item.desc}
                </p>
                <div className="flex gap-4">
                  <div className="p-4 glass-panel rounded-2xl text-center flex-1">
                    <div className="text-primary font-bold text-xl mb-1">Optic</div>
                    <div className="text-xs text-foreground/40 uppercase">Glass Type</div>
                  </div>
                  <div className="p-4 glass-panel rounded-2xl text-center flex-1">
                    <div className="text-primary font-bold text-xl mb-1">Remote</div>
                    <div className="text-xs text-foreground/40 uppercase">Maintenance</div>
                  </div>
                  <div className="p-4 glass-panel rounded-2xl text-center flex-1">
                    <div className="text-primary font-bold text-xl mb-1">LED</div>
                    <div className="text-xs text-foreground/40 uppercase">Smart Lighting</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Section>

      {/* Creation Process Timeline */}
      <Section id="process" className="bg-white/5">
        <SectionHeader title="The Art of Creation" subtitle="How We Build" />
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/30 to-transparent hidden lg:block -translate-x-1/2"></div>
          
          <div className="space-y-12 relative z-10">
            {processSteps.map((step, idx) => (
              <FadeIn key={idx} direction={idx % 2 === 0 ? "right" : "left"} className={cn(
                "flex flex-col lg:flex-row items-center gap-8 lg:gap-0",
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse text-right"
              )}>
                <div className="flex-1 w-full flex justify-center lg:justify-end pr-0 lg:pr-16 order-2 lg:order-1">
                  {idx % 2 === 0 && (
                    <div className="max-w-md">
                      <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-foreground/70">{step.desc}</p>
                    </div>
                  )}
                </div>
                
                <div className="relative flex items-center justify-center z-20 order-1 lg:order-2">
                  <div className="w-16 h-16 rounded-full glass-panel border-2 border-primary/50 flex items-center justify-center bg-background shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                    <span className="text-primary text-xl font-black">{step.step}</span>
                  </div>
                </div>

                <div className="flex-1 w-full flex justify-center lg:justify-start pl-0 lg:pl-16 order-3">
                  {idx % 2 !== 0 && (
                    <div className="max-w-md text-left lg:text-left">
                      <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-foreground/70">{step.desc}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Materials & Quality */}
      <Section id="materials">
        <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-accent"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Uncompromising Quality</h2>
              <div className="space-y-8">
                {[
                  { title: "German Engineering", desc: "We use only high-specification structural silicone with a 25-year lifespan." },
                  { title: "Polish Hardening", desc: "Machine-polished edges for crystal clarity and maximum bonding surface." },
                  { title: "Smart Integration", desc: "Cloud-connected filtration and lighting systems for remote monitoring." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                      <ShieldCheck />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
              <Image src="/aquarium/1.webp" alt="Materials" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                 <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center animate-pulse">
                    <ShieldCheck className="w-10 h-10 text-white" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery">
        <SectionHeader title="Inspired Installations" subtitle="Gallery" />
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[1,2,3,4,1,2].map((img, i) => (
            <FadeIn key={i} delay={i * 0.1} className="break-inside-avoid">
              <div className="relative group rounded-3xl overflow-hidden glass-card border border-white/5">
                <Image 
                  src={`/aquarium/${img}.webp`}
                  alt={`Gallery ${i}`}
                  width={600}
                  height={i % 2 === 0 ? 800 : 400}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div>
                      <h4 className="text-white font-bold text-lg">Modern Project {i + 1}</h4>
                      <p className="text-primary text-sm uppercase tracking-widest">Luxury Segment</p>
                   </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="mb-24">
        <div className="relative glass-card rounded-[4rem] p-16 md:p-32 overflow-hidden text-center border border-white/10">
          <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/5 -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/20 blur-[150px] rounded-full pointer-events-none"></div>
          
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Build Your Dream<br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/50 underline decoration-primary underline-offset-8">Aquarium</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12">
              Our designers are ready to transform your space with a custom aquatic masterpiece.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-white text-background font-black rounded-2xl hover:bg-primary hover:text-white transition-all shadow-2xl hover:shadow-primary/50 text-lg uppercase tracking-wider">
              Contact Us Now
            </Link>
            <Link href="/gallery" className="px-12 py-5 glass-panel text-white font-black rounded-2xl hover:bg-white/10 transition-all text-lg uppercase tracking-wider border border-white/20">
              Get Custom Design
            </Link>
          </FadeIn>
        </div>
      </Section>
    </main>
  );
}
