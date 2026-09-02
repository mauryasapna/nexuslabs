"use client";

import React, { useState } from "react";
import {
  Code2,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Zap,
  GraduationCap,
  ChevronRight,
  Laptop,
} from "lucide-react";

interface SplitShowcase3DProps {
  onOpenConnect: (topic?: string) => void;
}

export default function SplitShowcase3D({ onOpenConnect }: SplitShowcase3DProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "College Project Studio",
      tag: "100% Working Code & Viva Prep",
      subtitle: "Save Your Time To Study — We Build Your Final Year & Minor Projects",
      badge: "Save 200+ Hours",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      image: "/images/project_building_3d.jpg",
      href: "#projects",
      glowColor: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]",
      actionText: "Order College Project",
      icon: Code2,
    },
    {
      id: 2,
      title: "1-on-1 AI Web Dev Masterclass",
      tag: "Build Website in Sec & Business Websites",
      subtitle: "Learn to build websites in seconds with AI, or get custom business-related websites built for your company",
      badge: "Build Website in Sec",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      image: "/images/female_trainer_3d.jpg",
      href: "#ai-web-dev",
      glowColor: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]",
      actionText: "Masterclass & Business Sites",
      icon: Zap,
    },
    {
      id: 3,
      title: "Digital Marketing & SEO Suite",
      tag: "Rank #1 on Google & 10x Traffic",
      subtitle: "Master SEO, search ranking algorithms, and organic website traffic growth",
      badge: "Google Rank #1",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      image: "/images/digital_marketing_3d.jpg",
      href: "#digital-marketing",
      glowColor: "group-hover:border-pink-500/50 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]",
      actionText: "Analyze Website SEO",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>3D Interactive Ecosystem</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-outfit">
          Three Dedicated Pillars.{" "}
          <span className="gradient-text-cyan-purple">One Unified Hub.</span>
        </h2>
      </div>

      {/* 3-Way 3D Split Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group relative glass-panel rounded-3xl p-5 border border-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer ${card.glowColor}`}
            >
              {/* Top Image Frame with 3D Depth */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold border backdrop-blur-md ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Floating Bottom Icon Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 backdrop-blur-md bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">
                    <Icon className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="font-semibold text-[11px] truncate">
                      {card.tag}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={card.href}
                  className="text-xs font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>{card.actionText}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenConnect(`Inquiry regarding: ${card.title}`);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Connect 💬
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
