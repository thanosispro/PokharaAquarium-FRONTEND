"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Info, Plus, Ruler, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FishCard({ fish, className }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn("glass-card rounded-2xl overflow-hidden group cursor-pointer", className)}
    >
      <div className="relative h-64 w-full overflow-hidden bg-primary/5">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        <Image 
          src={fish.image}
          alt={fish.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out z-10"
        />
        
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {fish.badges.map(badge => (
            <span key={badge} className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md text-white rounded-full border border-white/10">
              {badge}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 relative z-20">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{fish.name}</h3>
            <p className="text-sm text-foreground/60 italic">{fish.scientificName}</p>
          </div>
          <span className="text-primary font-bold text-lg">{fish.price}</span>
        </div>
        
        <p className="text-sm text-foreground/70 mt-3 line-clamp-2">{fish.description}</p>
        
        <div className="mt-6 flex justify-between items-center pt-4 border-t border-white/10">
          <div className="flex items-center gap-1 text-xs text-foreground/60">
            <Droplets className="w-3.5 h-3.5 text-primary" />
            {fish.stats.temp}
          </div>
          <button className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function AquariumCard({ aquarium, className }) {
  return (
    <div className={cn("glass-card rounded-2xl overflow-hidden group flex flex-col h-full", className)}>
      <div className="relative h-56 w-full shrink-0 overflow-hidden">
        <Image 
          src={aquarium.image}
          alt={aquarium.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 z-10">
          <span className="text-white font-bold text-xl">{aquarium.title}</span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6 text-sm text-foreground/70">
          <div className="flex items-center gap-1">
            <Ruler className="w-4 h-4 text-primary" />
            {aquarium.dimensions}
          </div>
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4 text-primary" />
            {aquarium.capacity}
          </div>
        </div>
        
        <ul className="mb-6 space-y-2 flex-1">
          {aquarium.features.map(feature => (
            <li key={feature} className="text-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-primary font-bold">{aquarium.price}</span>
          <button className="px-4 py-2 bg-white/10 hover:bg-primary text-white text-sm font-semibold rounded-lg transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductCard({ item, className }) {
  return (
    <div className={cn("glass-card rounded-xl overflow-hidden group p-4 flex flex-col gap-4", className)}>
      <div className="relative h-48 w-full rounded-lg overflow-hidden shrink-0">
        <Image 
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">{item.name}</h4>
          {item.type && <span className="text-xs text-foreground/50">{item.type}</span>}
        </div>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
          <span className="text-primary font-semibold">{item.price}</span>
          <button className="text-xs font-semibold text-white bg-white/10 px-3 py-1.5 rounded hover:bg-primary transition-colors">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
