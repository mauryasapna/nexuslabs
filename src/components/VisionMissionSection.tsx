"use client";

import React from "react";
import {
  Target,
  Compass,
  Rocket,
  ShieldCheck,
  Zap,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Target className="w-3.5 h-3.5 text-cyan-400" />
          <span>Core Purpose & Direction</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Vision &{" "}
          <span className="gradient-text-cyan-purple">
            Mission
          </span>
        </h2>
      </div>

      {/* Separate Cards for Vision & Mission with Exact Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* VISION CARD */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#041426]/90 via-[#071324]/80 to-[#030712]/95 flex flex-col justify-between group hover:border-cyan-400/50 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Compass className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider">
                Vision
              </span>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-black text-white font-outfit">
                Vision
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                To build a world where no student feels helpless under the weight of tough project deadlines, and no passionate entrepreneur gives up on their dream just because they don&apos;t know how to code. We envision a future where technology is not a barrier, but a bridge that empowers everyone to build, learn, and grow without fear.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION CARD */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#120826]/90 via-[#0d0720]/80 to-[#030712]/95 flex flex-col justify-between group hover:border-purple-400/50 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-500/20 text-purple-300 border border-purple-500/40 uppercase tracking-wider">
                Mission
              </span>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-black text-white font-outfit">
                Mission
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                To be the trusted mentor we wish we had. We deliver 100% working code, rapid support, and honest 1-on-1 guidance so students can ace their studies without losing sleep, and small businesses can confidently claim their space in the digital world. Your growth is our responsibility, and your peace of mind is our priority.
              </p>
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
