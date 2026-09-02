"use client";

import React, { useState } from "react";
import {
  Building2,
  Store,
  Rocket,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Zap,
  Globe,
  Star,
  Sparkles,
  Check,
  MessageSquare,
} from "lucide-react";

interface BusinessWebsiteSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function BusinessWebsiteSection({
  onOpenConnect,
}: BusinessWebsiteSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "corporate" | "local" | "startup" | "ecommerce">("all");

  const businessTypes = [
    {
      id: "corporate",
      icon: Building2,
      title: "Corporate & Company Websites",
      category: "Private Ltd, Agencies & Consultancies",
      desc: "Build instant trust with clients, partners, and investors with enterprise-grade UI, service catalog, and client proof.",
      badge: "Enterprise Trust",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      features: [
        "Brand Identity & Color Palette",
        "Multi-page Clean Architecture",
        "Lead Capture CRM Alert Forms",
        "Custom Domain & SSL Security",
      ],
    },
    {
      id: "local",
      icon: Store,
      title: "Local Business & Retail Showroom",
      category: "Shops, Clinics, Salons & Restaurants",
      desc: "Bring local Delhi NCR customers directly to your shop with Google Maps directions, click-to-call, and WhatsApp chat.",
      badge: "Local SEO #1",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      features: [
        "1-Click Direct WhatsApp Button",
        "Google Maps & Direction Nav",
        "Photo Gallery of Work / Shop",
        "Delhi NCR Local Search SEO",
      ],
    },
    {
      id: "startup",
      icon: Rocket,
      title: "Startup & SaaS Landing Pages",
      category: "Early-stage Founders & Launches",
      desc: "Convert early visitors into signups with high-converting hero sections, animated feature showcases, and demo previews.",
      badge: "High Conversion",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      features: [
        "Modern Glassmorphism UI",
        "Waitlist / Early Access Pipeline",
        "Pricing & Tier Comparisons",
        "Ultra-Fast 95+ Speed Score",
      ],
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-Commerce & Product Showcase",
      category: "Online Brands, Boutiques & Wholesalers",
      desc: "Sell products online directly with product catalogs, shopping carts, Razorpay/UPI checkout, and WhatsApp order alerts.",
      badge: "UPI & Online Pay",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      features: [
        "Product Grid & Search Filters",
        "Razorpay / Paytm / UPI Gateway",
        "Instant WhatsApp Order Alert",
        "Easy Inventory Management",
      ],
    },
  ];

  const filtered =
    activeTab === "all" ? businessTypes : businessTypes.filter((b) => b.id === activeTab);

  return (
    <section
      id="business-websites"
      className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Banner - Compact */}
      <div className="text-center max-w-2xl mx-auto mb-6 space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Building2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Business Website (Professional Website)</span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight font-outfit">
          Launch Your High-Impact{" "}
          <span className="gradient-text-cyan-purple">
            Professional Business Website.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
          High-converting, ultra-fast websites engineered to rank on Google and capture direct client inquiries on WhatsApp. Delivered in 24–48 Hours.
        </p>

        {/* Filter Pills - Compact */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
          {[
            { id: "all", label: "All Types" },
            { id: "corporate", label: "🏢 Corporate" },
            { id: "local", label: "🏪 Local Shop" },
            { id: "startup", label: "🚀 Startup" },
            { id: "ecommerce", label: "🛍️ E-Commerce" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-black border-cyan-400 shadow-sm shadow-cyan-500/20"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Business Solutions - Compact Size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filtered.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-cyan-500/40 transition-all group flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-outfit">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-light">{item.category}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold border ${item.badgeColor} shrink-0`}>
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs text-gray-300 font-light leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                {/* Compact 2-column Features Grid */}
                <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-white/5">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Compact */}
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenConnect(`Business Website Inquiry: ${item.title}`)}
                  className="px-3.5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                >
                  <span>Order This Website</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onOpenConnect(`WhatsApp Discuss: ${item.title}`)}
                  className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  <PhoneCall className="w-3 h-3 text-emerald-400" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guaranteed Commercial Package Banner - Compact */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/30 shadow-lg relative overflow-hidden bg-gradient-to-r from-[#041426]/90 to-[#020914]/95">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-sm font-bold text-white font-outfit">
                All Business Websites Include Complete Launch Kit
              </h4>
            </div>
            <p className="text-[11px] text-gray-400">
              Free custom domain (.com/.in), SSL security, mobile-first design & WhatsApp lead setup.
            </p>
          </div>

          <button
            onClick={() => onOpenConnect("Complete Business Website Package (Delhi)")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/25 transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Get Instant Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
