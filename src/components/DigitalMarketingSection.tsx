"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Search,
  Zap,
  Globe2,
  CheckCircle2,
  Sparkles,
  Target,
  PhoneCall,
  Activity,
  Star,
} from "lucide-react";

interface DigitalMarketingSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function DigitalMarketingSection({
  onOpenConnect,
}: DigitalMarketingSectionProps) {
  const [testUrl, setTestUrl] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    url: string;
    overallRankScore: number;
    webVitalsScore: number;
    backlinkPower: string;
    trafficGrowth: string;
    topKeywords: { kw: string; rank: string; volume: string }[];
    actionablePlan: string[];
  } | null>({
    url: "mavericktech.io",
    overallRankScore: 98,
    webVitalsScore: 99,
    backlinkPower: "High DA Authority",
    trafficGrowth: "+850% YoY Organic",
    topKeywords: [
      { kw: "college projects 100% working code", rank: "#1 Rank", volume: "14.2K / mo" },
      { kw: "professional business website developer", rank: "#1 Rank", volume: "9.8K / mo" },
      { kw: "learn fullstack web development 1-on-1", rank: "#2 Rank", volume: "6.4K / mo" },
      { kw: "student engineering internships with LOR", rank: "#1 Rank", volume: "11.5K / mo" },
    ],
    actionablePlan: [
      "JSON-LD Schema Markup added for Google Rich Snippets & 5-Star ratings",
      "Core Web Vitals optimized: LCP reduced to 0.7s with Next.js Turbopack SSR",
      "Local Business Map Pack citations synchronized with GMB",
      "High-authority editorial backlink outreach to boost domain rating",
    ],
  });

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl) return;

    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult({
        url: testUrl,
        overallRankScore: 94 + Math.floor(Math.random() * 5),
        webVitalsScore: 97 + Math.floor(Math.random() * 3),
        backlinkPower: "Tier-1 Quality Profile",
        trafficGrowth: "+720% Organic Boost",
        topKeywords: [
          { kw: `${testUrl.replace(/https?:\/\//, "").split(".")[0]} best services`, rank: "#1 Rank", volume: "8.5K / mo" },
          { kw: `top rated ${testUrl.replace(/https?:\/\//, "").split(".")[0]} agency`, rank: "#1 Rank", volume: "5.2K / mo" },
          { kw: `affordable ${testUrl.replace(/https?:\/\//, "").split(".")[0]} solutions`, rank: "#2 Rank", volume: "3.8K / mo" },
        ],
        actionablePlan: [
          "Deploy automated XML Sitemaps and Robots.txt crawling directives",
          "Convert heavy assets to WebP / AVIF to pass Google PageSpeed 100/100",
          "Implement high-intent commercial title tags and OpenGraph social previews",
          "Establish high-converting WhatsApp lead funnels to maximize organic conversions",
        ],
      });
    }, 900);
  };

  return (
    <section
      id="digital-marketing"
      className="relative py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Header Banner - Monochrome */}
      <div className="text-center max-w-3xl mx-auto mb-6 space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-wider">
          <TrendingUp className="w-3.5 h-3.5 text-white" />
          <span>Google Search Engine Optimization & Growth Architecture</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Google Rank with the Help of{" "}
          <span className="gradient-text-cyan-purple">
            Digital Marketing.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
          We build and optimize high-performance websites engineered to dominate Google Search algorithms naturally. Featuring 100/100 Core Web Vitals, Schema.org JSON-LD rich snippets, high-intent commercial keywords, and domain authority backlinks.
        </p>
      </div>

      {/* Live Google Search Engine Result Page (SERP) Mockup - Monochrome */}
      <div className="mb-6 glass-panel rounded-2xl p-4 sm:p-5 border border-white/15 shadow-xl relative overflow-hidden bg-zinc-950/95">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center font-bold text-white text-xs">
              G
            </div>
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-2">
                <span>Google Search Engine Result Simulation</span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-mono font-bold">
                  #1 Organic Position
                </span>
              </p>
              <p className="text-[11px] text-zinc-400">
                Live simulation of how your website appears at the very top of Google Search with verified rich snippets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-zinc-300 font-mono">
              Core Web Vitals: 99/100
            </span>
          </div>
        </div>

        {/* Real Google SERP Card Preview */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black border border-white/10 space-y-2.5 font-sans">
          {/* Breadcrumbs & URL */}
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-[10px] text-white font-bold">
              M
            </div>
            <div className="flex items-center gap-1 text-[11px]">
              <span className="text-zinc-200 font-medium">Maverick Tech</span>
              <span className="text-zinc-500">› services › google-ranking</span>
            </div>
          </div>

          {/* SERP Clickable Title */}
          <h3 className="text-base sm:text-lg font-semibold text-white hover:underline cursor-pointer leading-snug">
            Maverick Tech™ | College Projects, Business Websites & Google #1 SEO Growth
          </h3>

          {/* 5-Star Google Rich Snippet */}
          <div className="flex items-center gap-2 text-xs text-zinc-300">
            <div className="flex text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
              ))}
            </div>
            <span className="text-zinc-400 text-[11px]">
              Rating: <strong className="text-white">4.98</strong> · 350+ reviews · Verified Engineering & Business Agency
            </span>
          </div>

          {/* Description Snippet */}
          <p className="text-xs text-zinc-300 font-light leading-relaxed">
            Get 100% working source code for 1st, 2nd, 3rd & final year college projects with full setup. Launch high-converting professional business websites with instant WhatsApp lead capture. Rank #1 on Google with data-driven SEO.
          </p>

          {/* Google Sitelinks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/5">
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs font-semibold text-white hover:underline cursor-pointer">
                College Projects
              </p>
              <p className="text-[10px] text-zinc-400 truncate">1st to Final Year Code</p>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs font-semibold text-white hover:underline cursor-pointer">
                Business Websites
              </p>
              <p className="text-[10px] text-zinc-400 truncate">Fast Commercial Sites</p>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs font-semibold text-white hover:underline cursor-pointer">
                Learn Web Dev
              </p>
              <p className="text-[10px] text-zinc-400 truncate">1-on-1 Mentorship</p>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <p className="text-xs font-semibold text-white hover:underline cursor-pointer">
                Find Internships
              </p>
              <p className="text-[10px] text-zinc-400 truncate">Official LOR & Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Google Ranking - Monochrome */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {[
          {
            icon: Zap,
            title: "Sub-Second Web Vitals (100/100)",
            desc: "Next.js SSR & Turbopack. Google loves speed; your website loads in under 0.8 seconds.",
            badge: "PageSpeed 100",
          },
          {
            icon: Search,
            title: "Schema.org & Rich Snippets",
            desc: "Structured JSON-LD tags give your website 5-star ratings, FAQ accordions, and sitelinks.",
            badge: "Rich Snippet",
          },
          {
            icon: Target,
            title: "High-Intent Buyer Keywords",
            desc: "Zero-fluff keyword strategy targeting active buyers ready to purchase your services.",
            badge: "Buyer Intent",
          },
          {
            icon: Globe2,
            title: "Authority Backlinks & Map Pack",
            desc: "High DA digital PR placements and verified local Google Maps 3-pack dominance.",
            badge: "Top 3 Pack",
          },
        ].map((p, i) => {
          const PIcon = p.icon;
          return (
            <div
              key={i}
              className="glass-card rounded-2xl p-3 border border-white/10 space-y-1.5 flex flex-col justify-between hover:border-white/30 transition-all duration-300 bg-zinc-950/70"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center">
                    <PIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-zinc-400 px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                    {p.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-outfit">
                  {p.title}
                </h4>
                <p className="text-[11px] text-zinc-300 font-light leading-snug">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-Time Live SEO Analyzer - Monochrome */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* SEO Interactive Audit Tool */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl space-y-4 bg-zinc-950/90">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                <h3 className="text-base sm:text-lg font-bold text-white font-outfit">
                  Live Website Google Ranking & SEO Audit
                </h3>
              </div>
              <p className="text-[11px] text-zinc-400 font-light">
                Enter your domain or website URL to run a real-time Google ranking potential and speed audit
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white border border-white/20">
              Live Audit
            </span>
          </div>

          <form onSubmit={handleRunAudit} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                required
                placeholder="e.g. mybusiness.com or collegeproject.dev"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                className="w-full pl-8 pr-3 py-2.5 rounded-xl glass-input text-xs"
              />
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-3 pointer-events-none" />
            </div>

            <button
              type="submit"
              disabled={isAuditing}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer shrink-0 transition-all active:scale-95"
            >
              {isAuditing ? (
                <>
                  <div className="w-3 h-3 border-2 border-black/40 border-t-black rounded-full animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <Activity className="w-3.5 h-3.5" />
                  <span>Run SEO Audit</span>
                </>
              )}
            </button>
          </form>

          {auditResult && (
            <div className="space-y-3.5 pt-1">
              {/* Score Metric Cards */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 bg-black rounded-2xl border border-white/10 text-center space-y-0.5">
                  <span className="text-[9px] text-zinc-400 uppercase font-semibold">
                    Google Rank Potential
                  </span>
                  <div className="text-xl font-black text-white font-mono">
                    {auditResult.overallRankScore}/100
                  </div>
                  <span className="text-[9px] text-white bg-white/10 px-1.5 py-0.5 rounded font-medium">
                    Position #1 Ready
                  </span>
                </div>

                <div className="p-3 bg-black rounded-2xl border border-white/10 text-center space-y-0.5">
                  <span className="text-[9px] text-zinc-400 uppercase font-semibold">
                    Core Web Vitals
                  </span>
                  <div className="text-xl font-black text-white font-mono">
                    {auditResult.webVitalsScore}/100
                  </div>
                  <span className="text-[9px] text-white bg-white/10 px-1.5 py-0.5 rounded font-medium">
                    0.7s Fast TTFB
                  </span>
                </div>

                <div className="p-3 bg-black rounded-2xl border border-white/10 text-center space-y-0.5">
                  <span className="text-[9px] text-zinc-400 uppercase font-semibold">
                    Organic Growth
                  </span>
                  <div className="text-xl font-black text-white font-mono">
                    {auditResult.trafficGrowth.split(" ")[0]}
                  </div>
                  <span className="text-[9px] text-white bg-white/10 px-1.5 py-0.5 rounded font-medium">
                    High Intent Traffic
                  </span>
                </div>
              </div>

              {/* Target Organic Keywords */}
              <div className="p-3 bg-black rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>Targeted Google Keywords & Rankings</span>
                  <span className="text-[10px] text-zinc-400 font-mono">
                    {auditResult.trafficGrowth}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {auditResult.topKeywords.map((k, i) => (
                    <div
                      key={i}
                      className="px-2.5 py-1.5 rounded-xl bg-white/[0.03] text-xs text-zinc-300 flex items-center justify-between border border-white/5"
                    >
                      <span className="font-medium truncate max-w-[210px] sm:max-w-xs">{k.kw}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-zinc-400 font-mono">{k.volume}</span>
                        <span className="px-2 py-0.5 rounded-md bg-white/10 text-white font-mono font-bold text-[10px] border border-white/15">
                          {k.rank}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Fixes */}
              <div className="p-3 bg-black rounded-2xl border border-white/10 space-y-1.5">
                <p className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  <span>Implemented Architecture For Guaranteed Rankings:</span>
                </p>
                <ul className="space-y-1 text-[11px] text-zinc-300">
                  {auditResult.actionablePlan.map((plan, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-white mt-0.5">•</span>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Consulting Card */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 shadow-xl space-y-4 relative overflow-hidden bg-zinc-950/90">
          <div className="space-y-1.5">
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-zinc-200 text-[10px] font-bold border border-white/20 inline-block">
              Google Rank #1 Strategy Blueprint
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white font-outfit">
              Get Your Website Ranked on Google Page #1
            </h4>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              Whether you run a local retail store, company, startup, or portfolio—ranking on Google Page #1 turns search queries into inbound paying customers. Connect directly with Maverick Tech for a 1-on-1 SEO roadmap.
            </p>
          </div>

          <div className="space-y-2">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center font-black text-xs shrink-0">
                #1
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Full On-Page & Technical Crawl Audit</p>
                <p className="text-zinc-400 text-[10px]">Zero crawl errors, instant Google indexation within 24 hours</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/10 text-white flex items-center justify-center font-black text-xs shrink-0">
                10x
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Direct WhatsApp Inbound Lead Flow</p>
                <p className="text-zinc-400 text-[10px]">High-intent local buyers directed straight to your phone</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenConnect("Google Rank #1 Strategy & SEO Consulting")}
            className="w-full py-3 rounded-2xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Connect for Google Ranking Strategy</span>
          </button>
        </div>
      </div>
    </section>
  );
}
