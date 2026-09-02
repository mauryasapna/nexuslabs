"use client";

import React, { useState } from "react";
import { UserRole } from "./AuthModal";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  Award,
  FileCode,
  Laptop,
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
      tagColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      title: "College Projects: 1st, 2nd, 3rd & Final Year.",
      highlight: "100% Working Source Code & Architecture Setup Guide.",
      subtitle: "Save 200+ hours of study time! Share your 1st year mini-project or final year major capstone requirements with me in Delhi. Complete source code, setup guide, and 1-on-1 code walkthrough.",
      ctaText: "Order College Project (1st - Final Yr)",
      ctaHref: "#projects",
      ctaIcon: GraduationCap,
      ctaGradient: "from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500",
      metrics: [
        { label: "All 4 Years", value: "1st - Final" },
        { label: "Code Quality", value: "100% Tested" },
        { label: "Delivery Speed", value: "24-48 Hrs" },
      ],
    },
    business: {
      tag: "🏢 2. Business Website (Professional Website)",
      tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      title: "Custom Professional Business Websites.",
      highlight: "High-Converting, Ultra-Fast & Direct WhatsApp Lead Capture.",
      subtitle: "Get enterprise-grade, modern business websites built for your company, clinic, startup, retail showroom or e-commerce brand. Delivered in 24-48 hours with free custom domain, SSL security, and Google SEO setup.",
      ctaText: "Get Professional Business Website",
      ctaHref: "#business-websites",
      ctaIcon: Building2,
      ctaGradient: "from-blue-500 via-cyan-600 to-indigo-600 hover:from-blue-400 hover:to-indigo-500",
      metrics: [
        { label: "Delivery Time", value: "24-48 Hrs" },
        { label: "WhatsApp Leads", value: "1-Click" },
        { label: "Domain & SSL", value: "Free Setup" },
      ],
    },
    "learn-web": {
      tag: "⚡ 3. Learn How to Make an Website Easily with Me",
      tagColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
      title: "Learn How to Make an Website Easily with Me.",
      highlight: "1-on-1 Personalized Live Mentorship (Beginner to Pro).",
      subtitle: "No prior programming background required. Connect with me directly for hands-on, live screen-sharing mentorship in Delhi & online to master modern AI workflows, Next.js, and launch your own real websites easily.",
      ctaText: "Book 1-on-1 Web Mentorship",
      ctaHref: "#learn-web-dev",
      ctaIcon: Zap,
      ctaGradient: "from-yellow-500 via-amber-600 to-orange-600 hover:from-yellow-400 hover:to-orange-500",
      metrics: [
        { label: "Format", value: "1-on-1 Live" },
        { label: "Duration", value: "1 Week Fast" },
        { label: "Skill Level", value: "Zero to Hero" },
      ],
    },
    seo: {
      tag: "📈 4. Google Rank with the Help of Digital Marketing",
      tagColor: "bg-pink-500/10 text-pink-300 border-pink-500/30",
      title: "Google Rank with the Help of Digital Marketing.",
      highlight: "Rank #1 on Google Searches & 10x Organic Customer Inquiries.",
      subtitle: "Dominate Google search results with algorithmic on-page technical SEO, high-intent keyword targeting, authority backlink development, and conversion-focused customer funnels.",
      ctaText: "Analyze Website & Rank #1",
      ctaHref: "#digital-marketing",
      ctaIcon: TrendingUp,
      ctaGradient: "from-pink-500 via-rose-600 to-purple-600 hover:from-pink-400 hover:to-purple-500",
      metrics: [
        { label: "Google Ranking", value: "Top #1" },
        { label: "Traffic Growth", value: "10x Surge" },
        { label: "Local Delhi SEO", value: "High Intent" },
      ],
    },
    internships: {
      tag: "💼 5. Find Internship with Me",
      tagColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      title: "Find Internship with Me — Real Production Work.",
      highlight: "Work on Production Codebases with Official LOR & Certificate.",
      subtitle: "Gain real-world software engineering and growth experience under personal tech mentorship. Contribute to live repositories, master Git workflows, and receive recognized completion certificates and recommendation letters for your resume.",
      ctaText: "Apply For Internship With Me",
      ctaHref: "#internships",
      ctaIcon: Briefcase,
      ctaGradient: "from-purple-500 via-indigo-600 to-pink-600 hover:from-purple-400 hover:to-pink-500",
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
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hub Tabs Navigation (The 5 Core Pillars) */}
      <div className="max-w-5xl mx-auto mb-8 flex items-center justify-center gap-2 flex-wrap">
        {[
          { id: "projects", label: "1. 🎓 College Projects", color: "hover:border-cyan-500/50" },
          { id: "business", label: "2. 🏢 Business Website", color: "hover:border-blue-500/50" },
          { id: "learn-web", label: "3. ⚡ Learn Web Dev Easily", color: "hover:border-yellow-500/50" },
          { id: "seo", label: "4. 📈 Google Rank / SEO", color: "hover:border-pink-500/50" },
          { id: "internships", label: "5. 💼 Find Internship", color: "hover:border-purple-500/50" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveHub(tab.id as any)}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all cursor-pointer shadow-md ${
              activeHub === tab.id
                ? "bg-white text-black border-white shadow-cyan-500/20 scale-105"
                : `bg-white/[0.04] border-white/10 text-gray-300 hover:text-white ${tab.color}`
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dedicated Hero Content */}
      <div className="max-w-4xl mx-auto text-center space-y-5 animate-in fade-in duration-300">
        {/* Status Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide shadow-sm ${current.tagColor}`}>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
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
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          {current.subtitle}
        </p>

        {/* Key Real Metrics */}
        <div className="pt-2 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {current.metrics.map((m, i) => (
            <div key={i} className="text-center px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 min-w-[90px]">
              <div className="text-base sm:text-xl font-black text-cyan-300 font-mono">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={current.ctaHref}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r ${current.ctaGradient} text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-95`}
          >
            <CtaIcon className="w-4 h-4" />
            <span>{current.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenConnect(`Inquiry for ${current.tag}`)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss Directly (Delhi Desk)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
