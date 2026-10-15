"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Building2,
  MapPin,
  Mail,
  Send,
  Code2,
  Database,
  Layers,
  MessageCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

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

  const handleWhatsAppChat = () => {
    sendToWhatsApp({
      source: "About Sapna",
      details: {
        Inquiry: "Direct Mentorship & Engineering Projects",
        Profile: "Sapna - IT Developer at ELEKTRO LABS TECHNOLOGIES PVT. LTD.",
      },
    });
  };

  return (
    <section
      id="about-me"
      className="relative py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200"
    >
      {/* Header Badge */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-blue-600" />
          <span>IT Developer • ELEKTRO LABS TECHNOLOGIES PVT. LTD.</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          About <span className="gradient-text-cyan-purple">Sapna</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-xl mx-auto">
          Passionate IT Developer, Software Engineer, and Tech Mentor with proven track record in full-stack architecture, automation, and high-performance software systems at Maverick Tech.
        </p>
      </div>

      {/* Main Profile & Experience Grid - Clean White Theme with Colored Filled Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
        {/* Left Col: Photo & Credentials (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-zinc-200 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            {/* Image Container with Sapna's Photo */}
            <div className="relative mx-auto w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200 shadow-md group bg-zinc-100">
              <img
                src="/images/sapna_profile.jpg"
                alt="Sapna - IT Developer at ELEKTRO LABS TECHNOLOGIES PVT. LTD."
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Photo Identity Tag */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-md flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-zinc-900 font-outfit flex items-center gap-1.5 text-sm">
                    <span>Sapna</span>
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </p>
                  <p className="text-[11px] text-zinc-600 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-red-500" />
                    <span>Bangalore, India</span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-black">
                    CGPA: 9.1
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-800 text-[10px] font-mono font-bold">
                    IT Developer
                  </span>
                </div>
              </div>
            </div>

            {/* ⭐ USER REQUESTED: B.TECH DEGREE CGPA - 9.0 DIRECTLY BELOW PHOTO ⭐ */}
            <div className="text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 shadow-sm">
              <p className="text-sm sm:text-base font-black text-blue-900 font-outfit tracking-wide flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>B.Tech degree CGPA - 9.0</span>
              </p>
            </div>

            {/* Role & Company Card */}
            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>ELEKTRO LABS TECHNOLOGIES PVT. LTD.</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  Active
                </span>
              </div>
              <p className="text-xs text-zinc-900 font-bold pl-5">
                Role: IT Developer
              </p>
              <p className="text-[11px] text-zinc-600 leading-relaxed pl-5">
                Developing robust IT solutions, software automation pipelines, modern full-stack applications, and scalable backend services.
              </p>
            </div>

            {/* Education Foundation Card */}
            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-900 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span>Bachelor of Technology (B.Tech)</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black border border-blue-200">
                  9.1 CGPA
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 leading-relaxed pl-5">
                Strong engineering foundation in computer science, software design, algorithms, databases, and distributed systems.
              </p>
            </div>
          </div>

          {/* Filled Vibrant Color Button: WhatsApp Connect */}
          <div className="pt-4 flex items-center gap-2">
            <button
              onClick={handleWhatsAppChat}
              className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Right Col: Bio & Featured Project Mailflow (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
          {/* Bio Card */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-md space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 font-outfit">
                Professional Bio & Engineering Vision
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 font-normal leading-relaxed">
              Hello! I&apos;m <strong>Sapna</strong>, lead engineer at <strong>Maverick Tech</strong> & IT Developer at ELEKTRO LABS TECHNOLOGIES PVT. LTD. (B.Tech with <strong>9.1 CGPA</strong>). Alongside building high-performance production systems, my mission is to deliver turnkey engineering projects, robust business websites, automated email and workflow systems, and direct technical mentorship.
            </p>

            {/* 4 Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center">
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                <p className="text-sm font-black text-blue-900">9.1 CGPA</p>
                <p className="text-[10px] text-zinc-600 font-medium">Academic Merit</p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <p className="text-sm font-black text-emerald-900">IT Developer</p>
                <p className="text-[10px] text-zinc-600 font-medium">ELEKTRO LABS</p>
              </div>
              <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100">
                <p className="text-sm font-black text-indigo-900">Full-Stack</p>
                <p className="text-[10px] text-zinc-600 font-medium">Next.js & APIs</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                <p className="text-sm font-black text-amber-900">100% Tested</p>
                <p className="text-[10px] text-zinc-600 font-medium">Verified Code</p>
              </div>
            </div>
          </div>

          {/* ⭐ FEATURED PROJECT: MAILFLOW ⭐ */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-xl space-y-4 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-600/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-zinc-900 font-outfit flex items-center gap-2">
                    <span>Mailflow</span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-200">
                      Featured Project
                    </span>
                  </h4>
                  <p className="text-[11px] text-zinc-500 font-medium">
                    Automated Email Dispatch & Dynamic Template Engine
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-lg border border-zinc-200">
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold">DB + REST API Integrated</span>
              </div>
            </div>

            {/* Project Description */}
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              <strong>Mailflow</strong> is a full-featured automated email infrastructure system. It comes equipped with pre-configured professional email templates, a dynamic template creator, persistent database logging, and high-throughput REST APIs. Simply input any recipient email ID to dispatch instant transactional or campaign emails, or build and save brand-new custom templates with full flexibility.
            </p>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-900 text-xs font-bold">
                  <Send className="w-3.5 h-3.5 text-blue-600" />
                  <span>1-Click Dispatch</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  Just provide the recipient email ID; the API automatically compiles and triggers delivery.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-900 text-xs font-bold">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Dynamic Templates</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  Choose from pre-set layouts or construct and store your own custom email templates on the fly.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-900 text-xs font-bold">
                  <Database className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Database & API</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-relaxed">
                  Tracks delivery receipts, logs history, manages subscriber tables, and connects to any backend.
                </p>
              </div>
            </div>

            {/* Interactive Live Demo Box */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-900 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-blue-600" />
                  <span>Mailflow Interactive Test Sandbox</span>
                </span>
                <span className="text-[11px] text-zinc-500 font-medium">Live API Simulator</span>
              </div>

              <form onSubmit={handleDemoSend} className="flex flex-col sm:flex-row gap-2">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-blue-600 font-medium shadow-sm"
                >
                  <option value="welcome">Template: Welcome Onboarding</option>
                  <option value="project_update">Template: Project Deliverable</option>
                  <option value="custom">+ Create New Template</option>
                </select>

                <input
                  type="email"
                  placeholder="Enter recipient email (e.g. client@gmail.com)"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 shadow-sm"
                />

                {/* Filled Colored Button: Send Mail */}
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/25 transition-all active:scale-95 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </button>
              </form>

              {sentSuccess && (
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
