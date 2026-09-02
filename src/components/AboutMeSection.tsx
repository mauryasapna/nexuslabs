"use client";

import React from "react";
import {
  User,
  Sparkles,
  Code2,
  CheckCircle2,
  PhoneCall,
  GraduationCap,
  Building2,
  Zap,
  Briefcase,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface AboutMeSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function AboutMeSection({ onOpenConnect }: AboutMeSectionProps) {
  return (
    <section
      id="about-me"
      className="relative py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Badge - Compact */}
      <div className="text-center max-w-2xl mx-auto mb-4 space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <User className="w-3.5 h-3.5 text-cyan-400" />
          <span>Software Engineer • Bangalore</span>
        </div>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight font-outfit">
          Meet <span className="gradient-text-cyan-purple">Sapna</span>
        </h2>
      </div>

      {/* Main Compact About Me Card */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/30 shadow-xl relative overflow-hidden bg-gradient-to-br from-[#051329]/90 via-[#0a0f24]/85 to-[#030712]/95">
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6">
          {/* Left: Compact Photo */}
          <div className="relative shrink-0 w-36 sm:w-44 aspect-[4/5] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-xl group">
            <img
              src="/images/meera_review.jpg"
              alt="Sapna - Software Engineer working at Bangalore"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/75 backdrop-blur-sm border border-white/10 flex items-center justify-between text-[11px]">
              <div>
                <p className="font-bold text-white font-outfit flex items-center gap-1">
                  <span>Sapna</span>
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                </p>
                <p className="text-[9px] text-gray-300 flex items-center gap-0.5">
                  <MapPin className="w-2.5 h-2.5 text-pink-400" />
                  <span>Bangalore, India</span>
                </p>
              </div>
              <span className="px-1.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[9px] font-mono font-bold">
                SWE
              </span>
            </div>
          </div>

          {/* Right: Compact Bio, Pills & Action */}
          <div className="flex-1 space-y-3.5 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyan-400 flex items-center justify-center md:justify-start gap-1 font-outfit">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Software Engineer • Work at Bangalore</span>
              </span>

              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-outfit">
                &ldquo;Work at Bangalore, but I want to help people explore easily.&rdquo;
              </h3>

              <p className="text-xs sm:text-[13px] text-gray-300 font-light leading-relaxed">
                Hello! I&apos;m <strong>Sapna</strong>—a Software Engineer currently working at Bangalore. Alongside building enterprise software, my mission is to help students and businesses explore and master modern technology effortlessly. Whether you need end-to-end college capstone projects, high-converting business websites, 1-on-1 coding mentorship, or production internships—I am here to guide you directly at every step.
              </p>
            </div>

            {/* 4 Compact Skill Mini-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-white truncate">College Projects Expert</p>
                  <p className="text-[10px] text-gray-400 truncate">1st to Final Year 100% working code</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-white truncate">Business Websites</p>
                  <p className="text-[10px] text-gray-400 truncate">Fast WhatsApp lead-capture sites</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-white truncate">Learn Web Dev Easily</p>
                  <p className="text-[10px] text-gray-400 truncate">1-on-1 live coding in seconds</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-bold text-white truncate">Internship Guidance</p>
                  <p className="text-[10px] text-gray-400 truncate">Live repos, verified certificate & LOR</p>
                </div>
              </div>
            </div>

            {/* Compact Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <button
                onClick={() => onOpenConnect("About Me Direct Connect")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Connect with Me Directly</span>
              </button>

              <a
                href="#projects"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-semibold text-xs transition-colors flex items-center gap-1"
              >
                <span>View Projects & Services</span>
                <ArrowRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
