"use client";

import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  CheckCircle2,
  FileCode,
  ArrowRight,
  Sparkles,
  Flame,
  Star,
} from "lucide-react";

interface HomeTopSlidebarProps {
  onOpenConnect: (topic?: string) => void;
  onReplayIntro: () => void;
}

export default function HomeTopSlidebar({
  onOpenConnect,
  onReplayIntro,
}: HomeTopSlidebarProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Expansive Full-Page Showcase Highlights (Exact 5 Core Services)
  const highlightItems = [
    {
      id: "projects",
      title: "College Projects (1st, 2nd, 3rd & Final Year)",
      subtitle: "Save Your Time To Study — We Build 1st, 2nd, 3rd and Final Year Projects with 100% Working Source Code, Setup Guide & Full Implementation.",
      badge: "🎓 All 4 Years Supported",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      tagline: "100% Tested & Verified Working Code",
      metrics: [
        { label: "Delivered Projects", value: "350+" },
        { label: "Code Quality", value: "100% Tested" },
        { label: "Delivery Time", value: "24-48 Hrs" },
      ],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=90",
      icon: GraduationCap,
      accentBorder: "border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.3)]",
      ctaText: "Order College Project",
      ctaColor: "from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500",
      href: "#projects",
    },
    {
      id: "business-websites",
      title: "Business Website (Professional Website)",
      subtitle: "Custom, Ultra-Fast Websites for Companies, Retail Shops, Startups, Clinics & E-Commerce Brands with Free Domain, SSL & Direct WhatsApp Lead Integration.",
      badge: "🏢 24-48 Hrs Fast Delivery",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      tagline: "Drive High-Converting Business Inquiries",
      metrics: [
        { label: "Delivery Time", value: "24-48 Hrs" },
        { label: "WhatsApp Leads", value: "1-Click" },
        { label: "Domain + SSL", value: "Free Setup" },
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90",
      icon: TrendingUp,
      accentBorder: "border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.3)]",
      ctaText: "Order Business Website",
      ctaColor: "from-blue-500 via-indigo-600 to-cyan-600 hover:from-blue-400 hover:to-cyan-500",
      href: "#business-websites",
    },
    {
      id: "learn-web-dev",
      title: "Learn How to Make an Website Easily with Me",
      subtitle: "Join Hands-on 1-on-1 Mentorship in Delhi & Online. Zero Coding Knowledge Needed — Master Modern AI Workflows and Deploy Real Websites in Just 1 Week.",
      badge: "⚡ 1-on-1 Personal Mentorship",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
      tagline: "Build Websites 10x Faster with AI",
      metrics: [
        { label: "Format", value: "1-on-1 Live" },
        { label: "Timeline", value: "1 Week Fast" },
        { label: "Skill Level", value: "Zero to Hero" },
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=90",
      icon: Zap,
      accentBorder: "border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.3)]",
      ctaText: "Book 1-on-1 Mentorship",
      ctaColor: "from-yellow-500 via-amber-600 to-orange-600 hover:from-yellow-400 hover:to-orange-500",
      href: "#learn-web-dev",
    },
    {
      id: "digital-marketing",
      title: "Google Rank with the Help of Digital Marketing",
      subtitle: "Dominate Google Search #1 Rankings, Optimize Technical On-Page SEO, and Scale Organic Customer Acquisition with 1-on-1 Consultation.",
      badge: "📈 Google Rank #1 Suite",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
      tagline: "Drive 10x Organic Web Traffic",
      metrics: [
        { label: "Search Ranking", value: "Top #1" },
        { label: "Traffic Growth", value: "10x Surge" },
        { label: "Audit Tool", value: "Live Online" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90",
      icon: TrendingUp,
      accentBorder: "border-pink-500/50 shadow-[0_0_50px_rgba(236,72,153,0.3)]",
      ctaText: "Analyze SEO & Rank #1",
      ctaColor: "from-pink-500 via-rose-600 to-purple-600 hover:from-pink-400 hover:to-purple-500",
      href: "#digital-marketing",
    },
    {
      id: "internships",
      title: "Find Internship with Me",
      subtitle: "Work on Production Codebases, Get Real Industry Mentorship, and Receive Recognized Completion Certificates & Letters of Recommendation (LOR).",
      badge: "💼 Real Production Work & LOR",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      tagline: "Resume & Portfolio Ready Experience",
      metrics: [
        { label: "Interns Placed", value: "180+" },
        { label: "Official LOR", value: "Included" },
        { label: "Work Mode", value: "Remote / Hybrid" },
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90",
      icon: Briefcase,
      accentBorder: "border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.3)]",
      ctaText: "Apply For Internship With Me",
      ctaColor: "from-purple-500 via-indigo-600 to-pink-600 hover:from-purple-400 hover:to-pink-500",
      href: "#internships",
    },
  ];

  // Auto-slides every 3.8s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % highlightItems.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, highlightItems.length]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + highlightItems.length) % highlightItems.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % highlightItems.length);
  };

  const activeSlide = highlightItems[currentIdx];
  const ActiveIcon = activeSlide.icon;

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full pt-2 pb-6 px-1 sm:px-2 lg:px-4 max-w-full overflow-hidden"
    >
      {/* Top Header: Clean on Mobile & Desktop */}
      <div className="flex items-center justify-between mb-2.5 px-1 sm:px-2 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="p-1 sm:p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" />
          </span>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black text-white tracking-wider font-outfit uppercase truncate block">
              Featured Highlights
            </span>
          </div>
        </div>

        {/* Responsive Mobile-Friendly Slide Counter */}
        <div className="shrink-0">
          <span className="text-[10px] sm:text-xs text-cyan-300 font-mono font-bold bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/40 shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping hidden sm:inline-block" />
            <span>Slide {currentIdx + 1} / {highlightItems.length}</span>
          </span>
        </div>
      </div>

      {/* EXPANSIVE SHOWCASE BANNER */}
      <div className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border ${activeSlide.accentBorder} transition-all duration-700 shadow-2xl bg-[#030712] group flex flex-col justify-between`}>
        {/* Main Layout: Responsive Grid - Compact Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-auto lg:min-h-[340px]">
          {/* Left Side: Content & Actions (Span 7) */}
          <div className="lg:col-span-7 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between z-10 space-y-2.5 sm:space-y-3 order-2 lg:order-1">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold border backdrop-blur-xl shadow-md ${activeSlide.badgeColor}`}>
                {activeSlide.badge}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 border border-white/10 text-gray-300">
                {activeSlide.tagline}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shrink-0">
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-white font-outfit tracking-tight leading-tight">
                  {activeSlide.title}
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-300 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 max-w-md pt-0.5">
              {activeSlide.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-1.5 sm:p-2 rounded-xl bg-white/[0.04] border border-white/10 text-left"
                >
                  <div className="text-xs sm:text-sm font-black text-cyan-300 font-outfit">
                    {m.value}
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-gray-400 font-medium truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href={activeSlide.href}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl bg-gradient-to-r ${activeSlide.ctaColor} text-white font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95`}
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onOpenConnect(`Highlight Inquiry: ${activeSlide.title}`)}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Call</span>
              </button>
            </div>
          </div>

          {/* Right Side: Compact Photo (Span 5) */}
          <div className="lg:col-span-5 relative p-2.5 sm:p-3.5 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-40 sm:h-48 lg:h-full min-h-[160px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 shadow-lg">
              <img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={`${activeSlide.title} - NexusLabs Platform Highlight`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Verified Badge on Image */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
                <div className="backdrop-blur-md bg-black/70 px-2 py-0.5 rounded-lg border border-white/20 font-semibold text-[9px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>Production Ready</span>
                </div>
                <div className="backdrop-blur-md bg-cyan-500 text-black px-2 py-0.5 rounded-lg font-bold text-[9px]">
                  Verified SWE
                </div>
              </div>

              {/* Navigation Arrows on Photo */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/80 hover:bg-cyan-500 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/80 hover:bg-cyan-500 hover:text-black border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
                title="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Timeline Strip with Slide Pills */}
        <div className="px-2.5 sm:px-5 py-2 bg-black/80 border-t border-white/10 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            {highlightItems.map((item, idx) => {
              const ItemIcon = item.icon;
              const isSelected = currentIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/30"
                      : "bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white"
                  }`}
                >
                  <ItemIcon className="w-2.5 h-2.5" />
                  <span>{item.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[9px] text-gray-400 font-mono shrink-0 hidden sm:block">
            Direct: +91 91424 79986
          </div>
        </div>
      </div>
    </section>
  );
}
