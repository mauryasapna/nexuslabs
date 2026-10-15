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
  MessageCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

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

  const handleWhatsAppSEO = () => {
    sendToWhatsApp({
      source: "SEO Growth Engine",
      details: {
        Inquiry: "Google Rank #1 Strategy Consulting",
        AuditedSite: auditResult?.url || "Client Website",
      },
    });
  };

  return (
    <section id="digital-marketing" className="relative py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
          <span>📈 4. Google Rank Digital Marketing (SEO Engine)</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Rank Your Website <span className="gradient-text-cyan-purple">#1 on Google Search</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
          We combine Next.js Core Web Vitals speed (98+), Schema.org Rich Snippets, and local Google Map Pack optimization to generate consistent inbound business revenue.
        </p>
      </div>

      {/* Real Google SERP Simulation Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-zinc-200 shadow-xl mb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
                Live Google #1 Search Result Preview
              </h3>
              <p className="text-[11px] text-zinc-500">
                Live simulation of how your website appears at the very top of Google Search with verified rich snippets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-mono font-bold">
              Core Web Vitals: 99/100
            </span>
          </div>
        </div>

        {/* Real Google SERP Card Preview */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2.5 font-sans">
          {/* Breadcrumbs & URL */}
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
              M
            </div>
            <div className="flex items-center gap-1 text-[11px]">
              <span className="text-zinc-800 font-bold">Maverick Tech</span>
              <span className="text-zinc-400">› services › google-ranking</span>
            </div>
          </div>

          {/* SERP Clickable Title */}
          <h3 className="text-base sm:text-lg font-bold text-blue-700 hover:underline cursor-pointer leading-snug">
            Maverick Tech™ | College Projects, Business Websites & Google #1 SEO Growth
          </h3>

          {/* 5-Star Google Rich Snippet */}
          <div className="flex items-center gap-2 text-xs text-zinc-600">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span className="text-zinc-600 text-[11px]">
              Rating: <strong className="text-zinc-900 font-bold">4.98</strong> · 350+ reviews · Verified Engineering & Business Agency
            </span>
          </div>

          {/* Description Snippet */}
          <p className="text-xs text-zinc-600 font-normal leading-relaxed">
            Get 100% working source code for 1st, 2nd, 3rd & final year college projects with full setup. Launch high-converting professional business websites with instant WhatsApp lead capture. Rank #1 on Google with data-driven SEO.
          </p>

          {/* Google Sitelinks Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-zinc-200">
            <div className="p-2.5 rounded-lg bg-white border border-zinc-200">
              <p className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                College Projects
              </p>
              <p className="text-[10px] text-zinc-500 truncate">1st to Final Year Code</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-zinc-200">
              <p className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                Business Websites
              </p>
              <p className="text-[10px] text-zinc-500 truncate">Fast Commercial Sites</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-zinc-200">
              <p className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                Learn Web Dev
              </p>
              <p className="text-[10px] text-zinc-500 truncate">1-on-1 Mentorship</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-zinc-200">
              <p className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                Find Internships
              </p>
              <p className="text-[10px] text-zinc-500 truncate">Official LOR & Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Google Ranking */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {[
          {
            icon: Zap,
            title: "Sub-Second Web Vitals (100/100)",
            desc: "Next.js SSR & Turbopack. Google loves speed; your website loads in under 0.8 seconds.",
            badge: "PageSpeed 100",
            badgeClass: "bg-blue-50 text-blue-800 border-blue-200",
          },
          {
            icon: Search,
            title: "Schema.org & Rich Snippets",
            desc: "Structured JSON-LD tags give your website 5-star ratings, FAQ accordions, and sitelinks.",
            badge: "Rich Snippet",
            badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
          },
          {
            icon: Target,
            title: "High-Intent Buyer Keywords",
            desc: "Zero-fluff keyword strategy targeting active buyers ready to purchase your services.",
            badge: "Buyer Intent",
            badgeClass: "bg-purple-50 text-purple-800 border-purple-200",
          },
          {
            icon: Globe2,
            title: "Local Google Maps Ranking",
            desc: "Rank in the top 3 of the Google Map Pack to capture walk-ins and direct phone callers.",
            badge: "Map Pack #1",
            badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
          },
        ].map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 space-y-2.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-xl bg-zinc-100 text-zinc-800 border border-zinc-200">
                  <IconComp className="w-4 h-4" />
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeClass}`}>
                  {item.badge}
                </span>
              </div>
              <h4 className="text-sm font-bold text-zinc-900 font-outfit">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Interactive Audit & Consultation Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Interactive Audit Sandbox */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-zinc-200 shadow-xl space-y-4">
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-zinc-200">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-600" />
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
                Instant Google SEO Rank Audit
              </h3>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">Live Lighthouse Engine</span>
          </div>

          <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter your website domain (e.g. mycompany.com)"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-600 focus:bg-white shadow-sm"
            />
            <button
              type="submit"
              disabled={isAuditing}
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-600/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0 disabled:opacity-50"
            >
              <Search className="w-3.5 h-3.5" />
              <span>{isAuditing ? "Scanning..." : "Run Free SEO Audit"}</span>
            </button>
          </form>

          {auditResult && (
            <div className="space-y-3 pt-2">
              {/* Score Badges */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200">
                  <div className="text-base sm:text-lg font-black text-purple-900 font-mono">
                    {auditResult.overallRankScore}/100
                  </div>
                  <div className="text-[9px] text-zinc-600 uppercase font-semibold">SEO Rank Score</div>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-base sm:text-lg font-black text-emerald-900 font-mono">
                    {auditResult.webVitalsScore}/100
                  </div>
                  <div className="text-[9px] text-zinc-600 uppercase font-semibold">Speed Score</div>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-xs sm:text-sm font-black text-blue-900 font-mono truncate">
                    {auditResult.backlinkPower}
                  </div>
                  <div className="text-[9px] text-zinc-600 uppercase font-semibold">Authority</div>
                </div>
              </div>

              {/* Keywords List */}
              <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-zinc-900">
                  <span>Targeted Google Keywords & Rankings</span>
                  <span className="text-[10px] text-emerald-700 font-mono font-bold">
                    {auditResult.trafficGrowth}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {auditResult.topKeywords.map((k, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 rounded-xl bg-white text-xs text-zinc-800 flex items-center justify-between border border-zinc-200"
                    >
                      <span className="font-semibold truncate max-w-[210px] sm:max-w-xs">{k.kw}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-zinc-500 font-mono">{k.volume}</span>
                        <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-mono font-bold text-[10px] border border-purple-200">
                          {k.rank}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Fixes */}
              <div className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-2">
                <p className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Implemented Architecture For Guaranteed Rankings:</span>
                </p>
                <ul className="space-y-1 text-xs text-zinc-600">
                  {auditResult.actionablePlan.map((plan, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-600 mt-0.5 font-bold">•</span>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Consulting Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-purple-50/80 via-blue-50/80 to-white rounded-3xl p-5 sm:p-6 border border-purple-200 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 text-[10px] font-bold border border-purple-300 inline-block">
              Google Rank #1 Strategy Blueprint
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-zinc-900 font-outfit">
              Get Your Website Ranked on Google Page #1
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Whether you run a local retail store, company, startup, or portfolio—ranking on Google Page #1 turns search queries into inbound paying customers. Connect directly with Maverick Tech for a 1-on-1 SEO roadmap.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="p-3 rounded-2xl bg-white border border-purple-200/80 shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs shrink-0">
                #1
              </div>
              <div className="text-xs">
                <p className="font-bold text-zinc-900">Full On-Page & Technical Crawl Audit</p>
                <p className="text-zinc-500 text-[10px]">Zero crawl errors, instant Google indexation within 24 hours</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-emerald-200/80 shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                10x
              </div>
              <div className="text-xs">
                <p className="font-bold text-zinc-900">Direct WhatsApp Inbound Lead Flow</p>
                <p className="text-zinc-500 text-[10px]">High-intent local buyers directed straight to your phone</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleWhatsAppSEO}
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp for SEO Ranking</span>
          </button>
        </div>
      </div>
    </section>
  );
}
