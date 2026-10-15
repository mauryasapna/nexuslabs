"use client";

import React, { useState } from "react";
import { UserRole } from "./AuthModal";
import {
  GraduationCap,
  Briefcase,
  Building2,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react";

interface HeroSectionProps {
  user: { name: string; email: string; role: UserRole } | null;
  onOpenConnect: (topic?: string) => void;
  onRoleToggle: (newRole: UserRole) => void;
}

export default function HeroSection({
  user,
  onOpenConnect,
  onRoleToggle,
}: HeroSectionProps) {
  // 5 Core Dedicated Pillars
  const [activeHub, setActiveHub] = useState<"projects" | "business" | "learn-web" | "seo" | "internships">("projects");

  const hubData = {
    projects: {
      tag: "🎓 1. College Projects (1st, 2nd, 3rd & Final Year)",
      title: "College Projects: 1st, 2nd, 3rd & Final Year.",
      highlight: "100% Working Source Code & Architecture Setup Guide.",
      subtitle: "Save 200+ hours of study time! Share your 1st year mini-project or final year major capstone requirements with Maverick Tech. Complete source code, setup guide, and 1-on-1 code walkthrough.",
      ctaText: "Order College Project (1st - Final Yr)",
      ctaHref: "#projects",
      ctaIcon: GraduationCap,
      metrics: [
        { label: "All 4 Years", value: "1st - Final" },
        { label: "Code Quality", value: "100% Tested" },
        { label: "Delivery Speed", value: "24-48 Hrs" },
      ],
    },
    business: {
      tag: "🏢 2. Business Website (Professional Website)",
      title: "Custom Professional Business Websites.",
      highlight: "High-Converting, Ultra-Fast & Direct WhatsApp Lead Capture.",
      subtitle: "Get enterprise-grade, modern business websites built for your company, clinic, startup, retail showroom or e-commerce brand. Delivered in 24-48 hours with free custom domain, SSL security, and Google SEO setup.",
      ctaText: "Get Professional Business Website",
      ctaHref: "#business-websites",
      ctaIcon: Building2,
      metrics: [
        { label: "Delivery Time", value: "24-48 Hrs" },
        { label: "WhatsApp Leads", value: "1-Click" },
        { label: "Domain & SSL", value: "Free Setup" },
      ],
    },
    "learn-web": {
      tag: "⚡ 3. Learn How to Build a Website Easily with Me",
      title: "Learn How to Build a Website Easily with Me.",
      highlight: "1-on-1 Personalized Live Mentorship (Beginner to Pro).",
      subtitle: "No prior programming background required. Connect with Maverick Tech mentors directly for hands-on, live screen-sharing mentorship to master modern AI workflows, Next.js, and launch your own real websites easily.",
      ctaText: "Book 1-on-1 Web Mentorship",
      ctaHref: "#learn-web-dev",
      ctaIcon: Zap,
      metrics: [
        { label: "Format", value: "1-on-1 Live" },
        { label: "Duration", value: "1 Week Fast" },
        { label: "Skill Level", value: "Zero to Hero" },
      ],
    },
    seo: {
      tag: "📈 4. Google Rank with the Help of Digital Marketing",
      title: "Google Rank with the Help of Digital Marketing.",
      highlight: "Rank #1 on Google Searches & 10x Organic Customer Inquiries.",
      subtitle: "Dominate Google search results with algorithmic on-page technical SEO, high-intent keyword targeting, authority backlink development, and conversion-focused customer funnels.",
      ctaText: "Analyze Website & Rank #1",
      ctaHref: "#digital-marketing",
      ctaIcon: TrendingUp,
      metrics: [
        { label: "Google Ranking", value: "Top #1" },
        { label: "Traffic Growth", value: "10x Surge" },
        { label: "Local SEO", value: "High Intent" },
      ],
    },
    internships: {
      tag: "💼 5. Find Internship with Maverick Tech",
      title: "Find Internship with Maverick Tech — Real Production Work.",
      highlight: "Work on Production Codebases with Official LOR & Certificate.",
      subtitle: "Gain real-world software engineering and growth experience under personal tech mentorship. Contribute to live repositories, master Git workflows, and receive recognized completion certificates and recommendation letters for your resume.",
      ctaText: "Apply For Internship With Us",
      ctaHref: "#internships",
      ctaIcon: Briefcase,
      metrics: [
        { label: "Real Repositories", value: "Live Code" },
        { label: "Official LOR", value: "Included" },
        { label: "Work Mode", value: "Remote/Hybrid" },
      ],
    },
  };

  const current = hubData[activeHub];
  const CtaIcon = current.ctaIcon;

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-3 sm:px-6 w-full overflow-hidden">
      {/* Background ambient lighting (Monochrome) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hub Tabs Navigation (The 5 Core Pillars - Monochrome) */}
      <div className="max-w-5xl mx-auto mb-8 flex items-center justify-center gap-2 flex-wrap">
        {[
          { id: "projects", label: "1. 🎓 College Projects" },
          { id: "business", label: "2. 🏢 Business Website" },
          { id: "learn-web", label: "3. ⚡ Learn Web Dev Easily" },
          { id: "seo", label: "4. 📈 Google Rank / SEO" },
          { id: "internships", label: "5. 💼 Find Internship" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveHub(tab.id as any)}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer shadow-md ${
              activeHub === tab.id
                ? "bg-white text-black border-white scale-105"
                : "bg-white/[0.04] border-white/10 text-zinc-300 hover:text-white hover:border-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dedicated Hero Content */}
      <div className="max-w-4xl mx-auto text-center space-y-5 animate-in fade-in duration-300">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-zinc-900 text-zinc-200 text-xs font-semibold tracking-wide shadow-sm">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>{current.tag}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] font-outfit">
          {current.title}{" "}
          <br className="hidden sm:inline" />
          <span className="gradient-text-cyan-purple">
            {current.highlight}
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
          {current.subtitle}
        </p>

        {/* Key Real Metrics */}
        <div className="pt-2 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {current.metrics.map((m, i) => (
            <div key={i} className="text-center px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 min-w-[90px]">
              <div className="text-base sm:text-xl font-black text-white font-mono">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTAs (Monochrome) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={current.ctaHref}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs sm:text-sm shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <CtaIcon className="w-4 h-4" />
            <span>{current.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenConnect(`Inquiry for ${current.tag}`)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Connect on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
