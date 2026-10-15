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
    <section id="vision-mission" className="relative py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Target className="w-3.5 h-3.5 text-blue-600" />
          <span>Core Purpose & Direction</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Vision & <span className="gradient-text-cyan-purple">Mission</span>
        </h2>
      </div>

      {/* Separate Cards for Vision & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* VISION CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-zinc-300 hover:shadow-xl transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                <Compass className="w-6 h-6 text-blue-600" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                Vision
              </span>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-outfit">
                Our Vision
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                To build a world where no student feels helpless under the weight of tough project deadlines, and no passionate entrepreneur gives up on their dream just because they don&apos;t know how to code. At Maverick Tech, we envision a future where technology is not a barrier, but a bridge that empowers everyone to build, learn, and grow without fear.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-zinc-300 hover:shadow-xl transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                Mission
              </span>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-outfit">
                Our Mission
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                To be the trusted mentor we wish we had. Maverick Tech delivers 100% working code, rapid support, and honest 1-on-1 guidance so students can ace their studies without losing sleep, and businesses can confidently claim their space in the digital world. Your growth is our responsibility, and your peace of mind is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Values Banner */}
      <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-wrap items-center justify-around gap-4 text-center shadow-xs">
        {[
          { label: "100% Working Code", icon: ShieldCheck, color: "text-blue-600" },
          { label: "24-48 Hrs Delivery", icon: Rocket, color: "text-emerald-600" },
          { label: "1-on-1 Mentorship", icon: Zap, color: "text-amber-500" },
          { label: "Google Rank #1", icon: TrendingUp, color: "text-purple-600" },
          { label: "Verified LOR & Certificates", icon: Briefcase, color: "text-indigo-600" },
        ].map((v, i) => {
          const VIcon = v.icon;
          return (
            <div key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-800">
              <VIcon className={`w-4 h-4 ${v.color}`} />
              <span>{v.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
