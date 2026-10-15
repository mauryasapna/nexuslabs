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
  MessageCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

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
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
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
      desc: "Bring local customers directly to your shop with Google Maps directions, click-to-call, and WhatsApp chat.",
      badge: "Local SEO #1",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      features: [
        "1-Click Direct WhatsApp Button",
        "Google Maps & Direction Nav",
        "Photo Gallery of Work / Shop",
        "Local Search & Maps SEO",
      ],
    },
    {
      id: "startup",
      icon: Rocket,
      title: "Startup & SaaS Landing Pages",
      category: "Early-stage Founders & Launches",
      desc: "Convert early visitors into signups with high-converting hero sections, animated feature showcases, and demo previews.",
      badge: "High Conversion",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
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
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      features: [
        "Product Grid & Search Filters",
        "Razorpay / Paytm / UPI Gateway",
        "Instant WhatsApp Order Alert",
        "Order Invoice & Customer DB",
      ],
    },
  ];

  const filtered =
    activeTab === "all"
      ? businessTypes
      : businessTypes.filter((b) => b.id === activeTab);

  const handleWhatsApp = (title: string) => {
    sendToWhatsApp({
      source: "Business Website Section",
      details: {
        WebsiteType: title,
        Inquiry: "Commercial Website Development & Launch",
      },
    });
  };

  return (
    <section id="business-websites" className="py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>🏢 2. High-Converting Business Websites</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Custom Websites That <span className="gradient-text-emerald-cyan">Convert Visitors Into Paying Clients</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-xl mx-auto">
          Delivered in 24-48 hours. Free custom domain, SSL certificate, Next.js sub-second speed, and 1-click WhatsApp lead integration.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 pt-2 flex-wrap">
          {["all", "corporate", "local", "startup", "ecommerce"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer capitalize shadow-sm ${
                activeTab === tab
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300"
              }`}
            >
              {tab === "all" ? "All Business Types" : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Business Cards - Clean White Cards with Colored Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {filtered.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 font-medium">{item.category}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold border ${item.badgeColor} shrink-0`}>
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 font-normal leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                {/* Compact 2-column Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-zinc-100">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons - Filled Colors */}
              <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenConnect(`Business Website Inquiry: ${item.title}`)}
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                >
                  <span>Order Website</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => handleWhatsApp(item.title)}
                  className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guaranteed Commercial Package Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-emerald-50 rounded-2xl p-4 sm:p-5 border border-blue-200/80 shadow-md relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
                All Business Websites Include Complete Launch Kit
              </h4>
            </div>
            <p className="text-xs text-zinc-600">
              Free custom domain (.com/.in), SSL security, mobile-first design & WhatsApp lead setup.
            </p>
          </div>

          <button
            onClick={() => onOpenConnect("Complete Business Website Package")}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
          >
            <span>Get Instant Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
