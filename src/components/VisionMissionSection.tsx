"use client";

import React from "react";
import {
  Target,
  Compass,
  Sparkles,
  Rocket,
  CheckCircle2,
  GraduationCap,
  Building2,
  Zap,
  TrendingUp,
  Briefcase,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="relative py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Banner - Compact */}
      <div className="text-center max-w-3xl mx-auto mb-6 space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Target className="w-3.5 h-3.5 text-cyan-400" />
          <span>Our Core Purpose & Values</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Our Vision &{" "}
          <span className="gradient-text-cyan-purple">
            Our Mission.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          Transforming students into confident software engineers, and businesses into digitally dominant brands. Our mission is to make practical technology accessible, lightning-fast, and impactful for everyone.
        </p>
      </div>

      {/* Vision & Mission Side-by-Side Cards - Compact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {/* VISION CARD */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-cyan-500/30 shadow-xl relative overflow-hidden bg-gradient-to-br from-[#041426]/90 via-[#071324]/80 to-[#030712]/95 flex flex-col justify-between group hover:border-cyan-400/50 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider">
                Our Vision
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white font-outfit">
                Empower Every Builder & Business
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                To build a practical technology ecosystem where students never have to sacrifice their exam preparation or placement studies due to project deadlines, and where every business scales 10x with high-performance digital tools.
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10">
              {[
                "Democratize practical tech & hands-on software development",
                "Bridge the deep gap between college curriculum & industry skills",
                "Enable non-technical entrepreneurs to launch business sites in hours",
                "Foster genuine coding curiosity and self-driven builders across India",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MISSION CARD */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-purple-500/30 shadow-xl relative overflow-hidden bg-gradient-to-br from-[#120826]/90 via-[#0d0720]/80 to-[#030712]/95 flex flex-col justify-between group hover:border-purple-400/50 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center shadow-md">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-wider">
                Our Mission
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white font-outfit">
                Excellence, Speed & Real Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                To deliver uncompromising quality across all our core engineering offerings with zero false promises: 100% tested working code, transparent communication, rapid 24–48 hour turnaround, and personalized 1-on-1 support.
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10">
              {[
                "100% Working Code & Setup Guide for 1st, 2nd, 3rd & Final Year students",
                "High-converting, professional business websites with 1-click WhatsApp leads",
                "Personalized 1-on-1 mentorship so anyone can build websites easily",
                "Data-backed Google #1 SEO marketing to generate genuine inbound calls",
                "Real production codebase internships with verified certificates and LOR",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Values Banner */}
      <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-around gap-4 text-center">
        {[
          { label: "100% Working Code", icon: ShieldCheck, color: "text-cyan-400" },
          { label: "24-48 Hrs Delivery", icon: Rocket, color: "text-blue-400" },
          { label: "1-on-1 Mentorship", icon: Zap, color: "text-yellow-400" },
          { label: "Google Rank #1", icon: TrendingUp, color: "text-pink-400" },
          { label: "Verified LOR & Certificates", icon: Briefcase, color: "text-purple-400" },
        ].map((v, i) => {
          const VIcon = v.icon;
          return (
            <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-200">
              <VIcon className={`w-4 h-4 ${v.color}`} />
              <span>{v.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
