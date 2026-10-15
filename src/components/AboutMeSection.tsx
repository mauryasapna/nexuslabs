"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  PhoneCall,
  GraduationCap,
  Building2,
  MapPin,
  Mail,
  Send,
  Code2,
  Database,
  Layers,
} from "lucide-react";

interface AboutMeSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function AboutMeSection({ onOpenConnect }: AboutMeSectionProps) {
  // Quick demo state for Mailflow project showcase
  const [recipientEmail, setRecipientEmail] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("welcome");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleDemoSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientEmail) return;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 3500);
  };

  return (
    <section
      id="about-me"
      className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5"
    >
      {/* Header Badge */}
      <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-white" />
          <span>IT Developer • ELEKTRO LABS TECHNOLOGIES PVT. LTD.</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          About <span className="gradient-text-cyan-purple">Sapna</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto">
          Passionate IT Developer, Software Engineer, and Tech Mentor with proven track record in full-stack architecture, automation, and high-performance software systems at Maverick Tech.
        </p>
      </div>

      {/* Main Profile & Experience Grid - Monochrome */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
        {/* Left Col: Photo & Credentials (5 cols) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl p-5 border border-white/15 shadow-2xl relative overflow-hidden bg-zinc-950/95 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Image Container */}
            <div className="relative mx-auto w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-xl group">
              <img
                src="/images/sapna_profile.jpg"
                alt="Sapna - IT Developer at ELEKTRO LABS TECHNOLOGIES PVT. LTD."
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 grayscale-[25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Photo Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white font-outfit flex items-center gap-1.5 text-sm">
                    <span>Sapna</span>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </p>
                  <p className="text-[10px] text-zinc-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-white" />
                    <span>Bangalore, India</span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white text-[10px] font-mono font-black">
                    CGPA: 9.1
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white text-[10px] font-mono font-bold">
                    IT Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-white" />
                  <span>ELEKTRO LABS TECHNOLOGIES PVT. LTD.</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-semibold border border-white/20">
                  Active
                </span>
              </div>
              <p className="text-xs text-white font-semibold pl-5">
                Role: IT Developer
              </p>
              <p className="text-[11px] text-zinc-400 leading-relaxed pl-5">
                Developing robust IT solutions, software automation pipelines, modern full-stack applications, and scalable backend services.
              </p>
            </div>

            {/* Education Badge */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-white" />
                  <span>Bachelor of Technology (B.Tech)</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-black border border-white/20">
                  9.1 CGPA
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed pl-5">
                Strong engineering foundation in computer science, software design, algorithms, databases, and distributed systems.
              </p>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-2">
            <button
              onClick={() => onOpenConnect("Connect with Sapna")}
              className="flex-1 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Right Col: Bio & Featured Project Mailflow (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
          {/* Bio Card */}
          <div className="glass-panel rounded-2xl p-5 border border-white/10 bg-zinc-950/85 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white" />
              <h3 className="text-base sm:text-lg font-bold text-white font-outfit">
                Professional Bio & Engineering Vision
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Hello! I&apos;m <strong>Sapna</strong>, lead engineer at <strong>Maverick Tech</strong> & IT Developer at ELEKTRO LABS TECHNOLOGIES PVT. LTD. (B.Tech with <strong>9.1 CGPA</strong>). Alongside building high-performance production systems, my mission is to deliver turnkey engineering projects, robust business websites, automated email and workflow systems, and direct technical mentorship.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
              <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-xs font-bold text-white">9.1 CGPA</p>
                <p className="text-[10px] text-zinc-400">Academic Merit</p>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-xs font-bold text-white">IT Developer</p>
                <p className="text-[10px] text-zinc-400">ELEKTRO LABS</p>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-xs font-bold text-white">Full-Stack</p>
                <p className="text-[10px] text-zinc-400">Next.js & APIs</p>
              </div>
              <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-xs font-bold text-white">100% Tested</p>
                <p className="text-[10px] text-zinc-400">Verified Code</p>
              </div>
            </div>
          </div>

          {/* ⭐ FEATURED PROJECT: MAILFLOW ⭐ */}
          <div className="glass-panel rounded-2xl p-5 border border-white/15 shadow-xl bg-zinc-950/90 space-y-4 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold shadow-md">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white font-outfit flex items-center gap-2">
                    <span>Mailflow</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold border border-white/20">
                      Featured Project
                    </span>
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Automated Email Dispatch & Dynamic Template Engine
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-300">
                <Database className="w-3 h-3 text-white" />
                <span>DB + REST API Integrated</span>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-xs text-zinc-300 leading-relaxed">
              <strong>Mailflow</strong> is a full-featured automated email infrastructure system. It comes equipped with pre-configured professional email templates, a dynamic template creator, persistent database logging, and high-throughput REST APIs. Simply input any recipient email ID to dispatch instant transactional or campaign emails, or build and save brand-new custom templates with full flexibility.
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-white text-xs font-bold">
                  <Send className="w-3.5 h-3.5" />
                  <span>1-Click Dispatch</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Just provide the recipient email ID; the API automatically compiles and triggers delivery.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-white text-xs font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Dynamic Templates</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Choose from pre-set layouts or construct and store your own custom email templates on the fly.
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-white text-xs font-bold">
                  <Database className="w-3.5 h-3.5" />
                  <span>Database & API</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Tracks delivery receipts, logs history, manages subscriber tables, and connects to any backend.
                </p>
              </div>
            </div>

            {/* Interactive Live Demo Box */}
            <div className="p-3.5 rounded-xl bg-black border border-white/10 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-white" />
                  <span>Mailflow Interactive Test Sandbox</span>
                </span>
                <span className="text-[10px] text-zinc-400">Live API Simulator</span>
              </div>

              <form onSubmit={handleDemoSend} className="flex flex-col sm:flex-row gap-2">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="welcome" className="bg-zinc-900">Template: Welcome Onboarding</option>
                  <option value="project_update" className="bg-zinc-900">Template: Project Deliverable</option>
                  <option value="custom" className="bg-zinc-900">+ Create New Template</option>
                </select>

                <input
                  type="email"
                  placeholder="Enter recipient email (e.g. client@gmail.com)"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-white/15 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                />

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </button>
              </form>

              {sentSuccess && (
                <div className="p-2 rounded-lg bg-zinc-900 border border-white/20 text-white text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Mailflow API Dispatched: Template &quot;{selectedTemplate}&quot; queued and dispatched to {recipientEmail}!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
