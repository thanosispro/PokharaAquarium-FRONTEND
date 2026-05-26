"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/UI/Section";
import { FadeIn } from "@/components/AnimationWrappers";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Story */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Our Story" subtitle="About Us" align="left" className="mb-8" />
              <FadeIn delay={0.2}>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  Founded with a passion for marine life, Pokhara Aquarium started as a humble local store and has grown into the premier destination for custom aquariums, exotic fishes, and pet supplies in Nepal.
                </p>
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  We believe that an aquarium is more than just a tank; it's a living piece of art. Our mission is to bring the calming, mesmerizing beauty of nature directly into your personal and professional spaces.
                </p>
                <div className="flex gap-12">
                  <div>
                    <h4 className="text-4xl font-bold text-primary mb-2">15+</h4>
                    <p className="text-foreground/60 text-sm uppercase tracking-wider">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-accent mb-2">1k+</h4>
                    <p className="text-foreground/60 text-sm uppercase tracking-wider">Happy Clients</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn direction="left" delay={0.4} className="relative h-[500px] rounded-[3rem] overflow-hidden glass-card">
              <Image 
                src="/aquarium/2.webp" 
                alt="Showroom" 
                fill 
                className="object-cover"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process / Workshop */}
      <Section className="bg-[#030914] border-y border-white/5">
        <SectionHeader title="Our Custom Process" subtitle="Workshop" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Consultation", desc: "We discuss your space, budget, and vision for the ultimate setup." },
            { step: "02", title: "Design & Build", desc: "Our experts craft high-clarity rimsless glass tanks tailored to specifications." },
            { step: "03", title: "Installation", desc: "We deliver, setup, and aquascape the tank, introducing livestock safely." }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="glass-panel p-8 rounded-2xl h-full flex flex-col hover:border-primary/50 transition-colors">
                <span className="text-6xl font-black text-white/5 mb-6">{item.step}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-foreground/70 flex-1">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader title="Frequently Asked Questions" subtitle="FAQ" />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Do you offer maintenance services?", a: "Yes, we provide weekly and monthly maintenance packages for both freshwater and marine setups." },
            { q: "Do you ship fishes nationwide?", a: "We safely transport livestock using oxygen-filled protective grading across major cities in Nepal." },
            { q: "How long does a custom tank take?", a: "Depending on the size and complexity, standard custom tanks take 2-4 weeks from design to delivery." }
          ].map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="glass-panel p-6 rounded-xl cursor-default hover:bg-white/5 transition-colors">
                <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
