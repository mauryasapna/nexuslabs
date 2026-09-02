"use client";

import React from "react";
import {
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers,
  Cpu,
  Globe,
  Rocket,
  ShieldCheck,
  PhoneCall,
  Clock,
  Check,
  Laptop,
  GraduationCap,
} from "lucide-react";

interface AIWebDevSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function AIWebDevSection({
  onOpenConnect,
}: AIWebDevSectionProps) {
  const steps = [
    {
      num: "01",
      title: "UI Design & AI Prompt Workflows",
      desc: "Learn how to easily convert any idea or drawing into stunning, modern responsive website layouts using smart AI tools and prompt templates.",
      badge: "Beginner Friendly",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    },
    {
      num: "02",
      title: "Modern React & Next.js Stack",
      desc: "Assemble interactive buttons, sleek mobile menus, dark/light themes, and glassmorphic designs without getting stuck on technical bugs.",
      badge: "Zero to Hero",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    },
    {
      num: "03",
      title: "Lead Capture & WhatsApp Integration",
      desc: "Connect direct click-to-chat WhatsApp triggers, dynamic contact forms, and database storage to collect real client inquiries.",
      badge: "Real Business Ready",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      num: "04",
      title: "1-Click Free Hosting & Custom Domain",
      desc: "Connect your personal or brand custom domain, configure free SSL security certificates, and deploy your live website in seconds.",
      badge: "Live on Internet",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
  ];

  return (
    <section
      id="learn-web-dev"
      className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Banner - Compact */}
      <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span>Learn How to Make an Website Easily with Me</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Learn How to Make an Website{" "}
          <span className="gradient-text-yellow-amber">
            Easily with Me.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          Master modern, professional website development with zero prior coding experience! 1-on-1 personal mentorship to design, build, and deploy production web applications using modern frameworks and smart AI workflows.
        </p>
      </div>

      {/* 4-Step Easy Learning Pathway - Compact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {steps.map((s) => (
          <div
            key={s.num}
            className="glass-card rounded-2xl p-4 border border-white/10 space-y-2 flex flex-col justify-between hover:border-yellow-500/40 transition-all group shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 flex items-center justify-center text-xs font-black font-mono">
                  {s.num}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${s.badgeColor}`}>
                  {s.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-yellow-300 transition-colors font-outfit">
                {s.title}
              </h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Personalized Mentorship Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-yellow-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#141208]/90 to-[#070914]/95">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-bold border border-yellow-500/40">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                <span>Personal 1-on-1 Mentorship (Delhi & Online)</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white font-outfit">
                Start Building Your Own Websites in Just 1 Week
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConnect("Learn How to Make an Website Easily with Me")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-yellow-500/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Book 1-on-1 Mentorship</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenConnect("WhatsApp Mentorship Inquiry")}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              { title: "Live Screen Sharing", desc: "Interactive screen share & real-time guidance on your own laptop." },
              { title: "Pre-Tested AI Prompts", desc: "Battle-tested prompt library to generate fullstack components easily." },
              { title: "Launch Real Website", desc: "You will finish the masterclass with your own live deployed website." },
            ].map((f, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white/[0.04] border border-yellow-500/20 space-y-1">
                <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{f.title}</span>
                </div>
                <p className="text-[11px] text-gray-400 pl-6">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
