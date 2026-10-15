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
  MessageCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

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
      tag: "📈 4. Google Rank Digital Marketing (SEO Engine)",
      title: "Rank Your Website #1 on Google Fast.",
      highlight: "Technical SEO, Core Web Vitals & Local Search Optimization.",
      subtitle: "Drive predictable inbound organic client traffic. We optimize schema architecture, page speed, mobile performance, and local business map pack listings for maximum organic revenue.",
      ctaText: "Scale Google Search Ranking",
      ctaHref: "#digital-marketing",
      ctaIcon: TrendingUp,
      metrics: [
        { label: "Google PageSpeed", value: "98-100" },
        { label: "Search Ranking", value: "Top 3 Goal" },
        { label: "Monthly ROI", value: "High Inbound" },
      ],
    },
    internships: {
      tag: "💼 5. Production Software Internships",
      title: "Production Software Development Internships.",
      highlight: "Live GitHub Repository PRs & Verified Recommendation Letters.",
      subtitle: "Stop doing dummy tutorial assignments. Work on live enterprise applications, commit code to real GitHub repos, and earn verifiable Experience Certificates and Personalized Letters of Recommendation (LOR).",
      ctaText: "Apply for Live Internship",
      ctaHref: "#internships",
      ctaIcon: Briefcase,
      metrics: [
        { label: "Repo Work", value: "Live Code" },
        { label: "Deliverables", value: "Cert + LOR" },
        { label: "Direct Mentor", value: "1-on-1 Code" },
      ],
    },
  };

  const current = hubData[activeHub];
  const CtaIcon = current.ctaIcon;

  const tabs = [
    { id: "projects", label: "1. College Projects" },
    { id: "business", label: "2. Business Website" },
    { id: "learn-web", label: "3. Learn Web Dev" },
    { id: "seo", label: "4. Google SEO Rank" },
    { id: "internships", label: "5. Internships + LOR" },
  ];

  const handleWhatsApp = () => {
    sendToWhatsApp({
      source: "Hero Section",
      details: {
        Offering: current.tag,
        Inquiry: current.ctaText,
      },
    });
  };

  return (
    <section className="relative pt-6 pb-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      {/* 5 Core Offerings Switcher Tabs */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 flex-wrap max-w-4xl mx-auto mb-8 p-1.5 rounded-2xl bg-zinc-100/80 border border-zinc-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveHub(tab.id as any)}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm ${
              activeHub === tab.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                : "bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dedicated Hero Content */}
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-300">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-xs font-bold tracking-wide shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>{current.tag}</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.15] font-outfit">
          {current.title}{" "}
          <br className="hidden sm:inline" />
          <span className="gradient-text-cyan-purple">
            {current.highlight}
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto font-normal leading-relaxed">
          {current.subtitle}
        </p>

        {/* Key Real Metrics */}
        <div className="pt-2 flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          {current.metrics.map((m, i) => (
            <div key={i} className="text-center px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 min-w-[100px] shadow-sm">
              <div className="text-base sm:text-xl font-black text-zinc-900 font-mono">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTAs - Filled Colorful Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={current.ctaHref}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <CtaIcon className="w-4 h-4" />
            <span>{current.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
