"use client";

import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Briefcase,
  Zap,
  TrendingUp,
  Building2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Flame,
  MessageCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

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
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      tagline: "100% Tested & Verified Working Code",
      metrics: [
        { label: "Delivered Projects", value: "350+" },
        { label: "Code Quality", value: "100% Tested" },
        { label: "Delivery Time", value: "24-48 Hrs" },
      ],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=90",
      icon: GraduationCap,
      accentBorder: "border-blue-200 shadow-xl",
      ctaText: "Order College Project",
      ctaColor: "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25",
      href: "#projects",
    },
    {
      id: "business-websites",
      title: "Business Website (Professional Website)",
      subtitle: "Custom, Ultra-Fast Websites for Companies, Retail Shops, Startups, Clinics & E-Commerce Brands with Free Domain, SSL & Direct WhatsApp Lead Integration.",
      badge: "🏢 24-48 Hrs Fast Delivery",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      tagline: "Drive High-Converting Business Inquiries",
      metrics: [
        { label: "Delivery Time", value: "24-48 Hrs" },
        { label: "WhatsApp Leads", value: "1-Click" },
        { label: "Domain + SSL", value: "Free Setup" },
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90",
      icon: Building2,
      accentBorder: "border-emerald-200 shadow-xl",
      ctaText: "Build Business Website",
      ctaColor: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/25",
      href: "#business-websites",
    },
    {
      id: "learn-web-dev",
      title: "Learn How to Build a Website Easily with Me",
      subtitle: "Zero Programming Experience Needed! Personalized 1-on-1 Practical Live Mentorship. Build Real-World Production Apps & Launch Live on Vercel.",
      badge: "⚡ 1-on-1 Live Practical Mentorship",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      tagline: "Friendly Step-by-Step Training",
      metrics: [
        { label: "Students Trained", value: "120+" },
        { label: "Format", value: "1-on-1 Live" },
        { label: "Live Launch", value: "Included" },
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=90",
      icon: Zap,
      accentBorder: "border-amber-200 shadow-xl",
      ctaText: "Book 1-on-1 Web Mentorship",
      ctaColor: "bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-500/25",
      href: "#learn-web-dev",
    },
    {
      id: "digital-marketing",
      title: "Google Rank Digital Marketing (SEO Engine)",
      subtitle: "Guarantee Top Search Presence, Google Map Pack Dominance, High-Speed Core Web Vitals, and Inbound Organic Client Acquisition.",
      badge: "📈 Google Rank Accelerator",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      tagline: "Sub-Second Next.js Performance",
      metrics: [
        { label: "Google PageSpeed", value: "98-100" },
        { label: "Map Pack Rank", value: "Top 3 Goal" },
        { label: "Inbound Leads", value: "Organic" },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90",
      icon: TrendingUp,
      accentBorder: "border-purple-200 shadow-xl",
      ctaText: "Analyze SEO & Rank #1",
      ctaColor: "bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-500/25",
      href: "#digital-marketing",
    },
    {
      id: "internships",
      title: "Find Internship with Maverick Tech",
      subtitle: "Work on Production Codebases, Get Real Industry Mentorship, and Receive Recognized Completion Certificates & Letters of Recommendation (LOR).",
      badge: "💼 Real Production Work & LOR",
      badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
      tagline: "Resume & Portfolio Ready Experience",
      metrics: [
        { label: "Interns Placed", value: "180+" },
        { label: "Official LOR", value: "Included" },
        { label: "Work Mode", value: "Remote / Hybrid" },
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=90",
      icon: Briefcase,
      accentBorder: "border-indigo-200 shadow-xl",
      ctaText: "Apply For Internship With Us",
      ctaColor: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/25",
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

  const handleWhatsAppSlide = () => {
    sendToWhatsApp({
      source: "Featured Slider",
      details: {
        Highlight: activeSlide.title,
        Inquiry: activeSlide.ctaText,
      },
    });
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full pt-2 pb-6 px-1 sm:px-2 lg:px-4 max-w-full overflow-hidden"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-3 px-1 sm:px-2 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="p-1 sm:p-1.5 rounded-lg bg-blue-100 text-blue-700 border border-blue-200 shrink-0">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
          </span>
          <div className="min-w-0">
            <span className="text-xs sm:text-sm font-black text-zinc-900 tracking-wider font-outfit uppercase truncate block">
              Featured Highlights
            </span>
          </div>
        </div>

        {/* Responsive Slide Counter */}
        <div className="shrink-0">
          <span className="text-[10px] sm:text-xs text-blue-700 font-mono font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping hidden sm:inline-block" />
            <span>Slide {currentIdx + 1} / {highlightItems.length}</span>
          </span>
        </div>
      </div>

      {/* EXPANSIVE SHOWCASE BANNER - Clean White Background */}
      <div className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border ${activeSlide.accentBorder} transition-all duration-700 shadow-xl bg-white group flex flex-col justify-between`}>
        {/* Main Layout: Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-auto lg:min-h-[340px]">
          {/* Left Side: Content & Actions (Span 7) */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 flex flex-col justify-between z-10 space-y-3 sm:space-y-4 order-2 lg:order-1">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold border shadow-sm ${activeSlide.badgeColor}`}>
                {activeSlide.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-zinc-100 border border-zinc-200 text-zinc-700">
                {activeSlide.tagline}
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-zinc-900 font-outfit tracking-tight leading-tight">
                  {activeSlide.title}
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-zinc-600 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 max-w-md pt-1">
              {activeSlide.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-2 sm:p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-left"
                >
                  <div className="text-xs sm:text-sm font-black text-zinc-900 font-outfit">
                    {m.value}
                  </div>
                  <div className="text-[9px] text-zinc-500 font-medium truncate">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons - Filled Colors */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={activeSlide.href}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${activeSlide.ctaColor}`}
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleWhatsAppSlide}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </button>
            </div>
          </div>

          {/* Right Side: Photo (Span 5) */}
          <div className="lg:col-span-5 relative p-3 sm:p-4 flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-full h-44 sm:h-52 lg:h-full min-h-[180px] rounded-2xl overflow-hidden border border-zinc-200 shadow-md">
              <img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={`${activeSlide.title} - Maverick Tech Platform Highlight`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating Verified Badge on Image */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
                <div className="backdrop-blur-md bg-black/75 px-2.5 py-1 rounded-lg border border-white/20 font-bold text-[10px] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Production Ready</span>
                </div>
                <div className="backdrop-blur-md bg-blue-600 text-white px-2.5 py-1 rounded-lg font-bold text-[10px] shadow-sm">
                  Verified SWE
                </div>
              </div>

              {/* Navigation Arrows on Photo */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-zinc-200 text-zinc-800 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white border border-zinc-200 text-zinc-800 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
                title="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Timeline Strip with Slide Pills */}
        <div className="px-3 sm:px-6 py-2.5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            {highlightItems.map((item, idx) => {
              const ItemIcon = item.icon;
              const isSelected = currentIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                      : "bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700"
                  }`}
                >
                  <ItemIcon className="w-3 h-3" />
                  <span>{item.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[10px] text-zinc-500 font-semibold shrink-0 hidden sm:block">
            Direct WhatsApp: +91 91424 79986
          </div>
        </div>
      </div>
    </section>
  );
}
