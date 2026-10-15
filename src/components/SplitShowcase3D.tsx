"use client";

import React, { useState } from "react";
import {
  Code2,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Zap,
  ChevronRight,
  MessageCircle,
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
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      image: "/images/project_building_3d.jpg",
      href: "#projects",
      glowColor: "hover:border-blue-300 hover:shadow-xl",
      actionText: "Order College Project",
      icon: Code2,
    },
    {
      id: 2,
      title: "1-on-1 AI Web Dev Masterclass",
      tag: "Build Website in Sec & Business Websites",
      subtitle: "Learn to build websites in seconds with AI, or get custom business-related websites built for your company",
      badge: "Build Website in Sec",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      image: "/images/female_trainer_3d.jpg",
      href: "#learn-web-dev",
      glowColor: "hover:border-amber-300 hover:shadow-xl",
      actionText: "Masterclass & Business Sites",
      icon: Zap,
    },
    {
      id: 3,
      title: "Digital Marketing & SEO Suite",
      tag: "Rank #1 on Google & 10x Traffic",
      subtitle: "Master SEO, search ranking algorithms, and organic website traffic growth",
      badge: "Google Rank #1",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      image: "/images/digital_marketing_3d.jpg",
      href: "#digital-marketing",
      glowColor: "hover:border-purple-300 hover:shadow-xl",
      actionText: "Analyze Website SEO",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Three Dedicated Pillars.{" "}
          <span className="gradient-text-cyan-purple">One Unified Hub.</span>
        </h2>
      </div>

      {/* 3-Way 3D Split Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group relative bg-white rounded-3xl p-5 border border-zinc-200 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer shadow-md ${card.glowColor}`}
            >
              {/* Top Image Frame */}
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-5 border border-zinc-200 shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold border backdrop-blur-md shadow-sm ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Floating Bottom Icon Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 backdrop-blur-md bg-black/75 px-2.5 py-1 rounded-lg border border-white/20">
                    <Icon className="w-3.5 h-3.5 text-white" />
                    <span className="font-bold text-[11px] truncate">
                      {card.tag}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-blue-600 backdrop-blur-md flex items-center justify-center text-white transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors font-outfit">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between">
                <a
                  href={card.href}
                  className="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1 transition-colors"
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
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1 shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
