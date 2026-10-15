"use client";

import React from "react";
import {
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

interface AIWebDevSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function AIWebDevSection({
  onOpenConnect,
}: AIWebDevSectionProps) {
  const steps = [
    {
      num: "01",
      title: "UI Design & AI Workflows",
      desc: "Learn how to easily convert any idea or drawing into stunning, modern responsive website layouts using smart AI tools and prompt templates.",
      badge: "Beginner Friendly",
    },
    {
      num: "02",
      title: "Modern React & Next.js Stack",
      desc: "Assemble interactive buttons, sleek mobile menus, dark themes, and clean minimalist layouts without getting stuck on technical bugs.",
      badge: "Zero to Hero",
    },
    {
      num: "03",
      title: "Lead Capture & WhatsApp Integration",
      desc: "Connect direct click-to-chat WhatsApp triggers, dynamic contact forms, and database storage to collect real client inquiries.",
      badge: "Real Business Ready",
    },
    {
      num: "04",
      title: "1-Click Free Hosting & Custom Domain",
      desc: "Connect your personal or brand custom domain, configure free SSL security certificates, and deploy your live website in seconds.",
      badge: "Live on Internet",
    },
  ];

  const handleWhatsApp = () => {
    sendToWhatsApp({
      source: "Learn Web Development Section",
      details: {
        Inquiry: "1-on-1 Practical Live Mentorship Booking",
        Goal: "Build and deploy production websites in 1 week",
      },
    });
  };

  return (
    <section
      id="learn-web-dev"
      className="relative py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200"
    >
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Zap className="w-3.5 h-3.5 text-amber-600" />
          <span>⚡ 3. Learn How to Build a Website Easily with Me</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Learn How to Build a Website{" "}
          <span className="gradient-text-cyan-purple">
            Easily with Maverick Tech.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
          Master modern, professional website development with zero prior coding experience! 1-on-1 personal mentorship to design, build, and deploy production web applications using modern frameworks and smart AI workflows.
        </p>
      </div>

      {/* 4-Step Easy Learning Pathway */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {steps.map((s) => (
          <div
            key={s.num}
            className="bg-white rounded-2xl p-5 border border-zinc-200 space-y-3 flex flex-col justify-between hover:border-zinc-300 transition-all group shadow-sm hover:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center text-xs font-black font-mono">
                  {s.num}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border bg-zinc-100 text-zinc-700 border-zinc-200">
                  {s.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-zinc-900 font-outfit">
                {s.title}
              </h4>
              <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Personalized Mentorship Card */}
      <div className="bg-gradient-to-r from-amber-50/70 via-blue-50/70 to-indigo-50/70 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-lg relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Personal 1-on-1 Mentorship</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-zinc-900 font-outfit">
                Start Building Your Own Websites in Just 1 Week
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenConnect("Learn How to Build a Website Easily with Me")}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-amber-600/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Start Building with Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
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
              <div key={i} className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-zinc-900 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{f.title}</span>
                </div>
                <p className="text-[11px] text-zinc-600 pl-6 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
