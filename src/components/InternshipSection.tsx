"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Award,
  Laptop,
  DollarSign,
  Users,
  CheckCircle2,
  Send,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveCustomInternship } from "@/lib/storage";
import { toast } from "@/components/ui/sonner";
import { buildInternshipTemplate, sendToWhatsApp } from "@/lib/whatsapp";

interface InternshipSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function InternshipSection({
  onOpenConnect,
}: InternshipSectionProps) {
  // Custom Desired Internship Form State
  const [customDomain, setCustomDomain] = useState("");
  const [customName, setCustomName] = useState("");
  const [customContact, setCustomContact] = useState("");
  const [customCollege, setCustomCollege] = useState("");
  const [customYear, setCustomYear] = useState("3rd Year");
  const [customMode, setCustomMode] = useState("100% Remote");
  const [customDuration, setCustomDuration] = useState("2 Months");
  const [customSkills, setCustomSkills] = useState("");
  const [isCustomSubmitting, setIsCustomSubmitting] = useState(false);
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const handleSendWhatsAppDirect = () => {
    const formatted = buildInternshipTemplate({
      customName,
      customContact,
      customDomain,
      customCollege,
      customYear,
      customMode,
      customDuration,
      customSkills,
    });
    sendToWhatsApp(formatted);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim() || !customContact.trim() || !customDomain.trim()) {
      toast.error("Please enter your name, contact, and desired domain");
      return;
    }

    setIsCustomSubmitting(true);

    // 1. Save to local storage
    saveCustomInternship({
      customDomain: customDomain.trim(),
      studentName: customName.trim(),
      contact: customContact.trim(),
      college: customCollege.trim(),
      year: customYear,
      workMode: customMode,
      duration: customDuration,
      skills: customSkills.trim(),
    });

    // 2. Format WhatsApp Template & Trigger WhatsApp directly
    const formattedWhatsAppText = buildInternshipTemplate({
      customName: customName.trim(),
      customContact: customContact.trim(),
      customDomain: customDomain.trim(),
      customCollege: customCollege.trim(),
      customYear,
      customMode,
      customDuration,
      customSkills: customSkills.trim(),
    });
    sendToWhatsApp(formattedWhatsAppText);

    // 3. Send email via Brevo in background
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Custom Internship Application",
          name: customName.trim(),
          contact: customContact.trim(),
          domain: customDomain.trim(),
          college: `${customCollege.trim()} (${customYear})`,
          duration: `${customMode} - ${customDuration}`,
          message: customSkills.trim(),
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsCustomSubmitting(false);
      setCustomSubmitted(true);
      toast.success("Internship Formatted for WhatsApp!", {
        description: `Template sent to WhatsApp (+91 91424 79986).`,
        duration: 5000,
      });
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#ffffff", "#d4d4d8", "#a1a1aa", "#71717a"],
        });
      } catch (e) {}
    }, 600);
  };

  return (
    <section id="internships" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-white" />
          <span>Find Internship with Maverick Tech</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Engineering Internships with Maverick Tech.{" "}
          <span className="gradient-text-cyan-purple">
            Real Code, Official LOR & Experience Certificate.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
          Collaborate directly on live production software repositories and engineering systems. Contribute real code, master Git workflows, and earn an official experience certificate and personalized Letter of Recommendation (LOR).
        </p>
      </div>

      {/* CUSTOM INTERNSHIP APPLICATION BOX - Monochrome */}
      <div className="max-w-2xl mx-auto mb-8 glass-panel rounded-2xl p-4 sm:p-5 border border-white/15 shadow-xl relative overflow-hidden bg-zinc-950/95">
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white font-outfit">
              Internship Application
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-200 text-[10px] font-semibold border border-white/20">
            Verified LOR & Certificate
          </span>
        </div>

        {customSubmitted ? (
          <div className="py-6 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-outfit">
                Application Formatted for WhatsApp!
              </h4>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed mt-1">
                Thank you <strong>{customName}</strong>! Your application for <strong>&quot;{customDomain}&quot;</strong> was formatted and opened in WhatsApp.
              </p>
            </div>

            {/* Application Summary Box */}
            <div className="text-left bg-black p-3 rounded-xl border border-white/10 text-[11px] font-mono text-zinc-300 space-y-1 max-w-md mx-auto">
              <div className="text-zinc-500 font-bold uppercase text-[9px]">WhatsApp Template:</div>
              <div><strong>Applicant:</strong> {customName}</div>
              <div><strong>Contact:</strong> {customContact}</div>
              <div><strong>Domain:</strong> {customDomain}</div>
              <div><strong>College:</strong> {customCollege || "Not specified"} ({customYear})</div>
              <div><strong>Mode:</strong> {customMode} ({customDuration})</div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={handleSendWhatsAppDirect}
                className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Re-open WhatsApp</span>
              </button>

              <button
                onClick={() => setCustomSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs cursor-pointer"
              >
                Submit Another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCustomSubmit} className="space-y-3">
            {/* Row 1: Domain & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Desired Internship Domain *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI / ML, Fullstack Web, Python, Cloud..."
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs border-white/10 focus:border-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Work Mode & Duration
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <select
                    value={customMode}
                    onChange={(e) => setCustomMode(e.target.value)}
                    className="w-full px-2 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/10"
                  >
                    <option>100% Remote</option>
                    <option>Hybrid</option>
                  </select>
                  <select
                    value={customDuration}
                    onChange={(e) => setCustomDuration(e.target.value)}
                    className="w-full px-2 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/10"
                  >
                    <option>1 Month</option>
                    <option>2 Months</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 2: Name & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aman Gupta"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 9142479986"
                  value={customContact}
                  onChange={(e) => setCustomContact(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            {/* Row 3: College & Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  College / University Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. DTU, NSUT, IPU, DU, AKTU..."
                  value={customCollege}
                  onChange={(e) => setCustomCollege(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Current Year
                </label>
                <select
                  value={customYear}
                  onChange={(e) => setCustomYear(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/10"
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>Final Year / Graduate</option>
                </select>
              </div>
            </div>

            {/* Row 4: Skills (Optional) */}
            <div>
              <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                Skills / Interests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Basics of Python/JavaScript, C++..."
                value={customSkills}
                onChange={(e) => setCustomSkills(e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl glass-input text-xs"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 border-t border-white/10 flex justify-between items-center gap-2">
              <p className="text-[10px] text-zinc-400">
                ⚡ Sends your application directly to WhatsApp with full details
              </p>
              <button
                type="submit"
                disabled={isCustomSubmitting}
                className="px-6 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shrink-0"
              >
                {isCustomSubmitting ? (
                  "Formatting..."
                ) : (
                  <>
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Send on WhatsApp</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Internship Perks Highlights - Monochrome */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2 bg-zinc-950/70">
          <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mx-auto">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            Verified LOR & Certificate
          </h4>
          <p className="text-[11px] text-zinc-400">
            Globally verifiable digital credentials with QR validation for your LinkedIn & Resume.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2 bg-zinc-950/70">
          <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mx-auto">
            <Laptop className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            100% Live Project Code
          </h4>
          <p className="text-[11px] text-zinc-400">
            No dummy assignments. Ship code directly into live web apps and real client ecosystems.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2 bg-zinc-950/70">
          <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mx-auto">
            <DollarSign className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            Stipend & Rewards
          </h4>
          <p className="text-[11px] text-zinc-400">
            Earn milestone performance stipends upon project module completions.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2 bg-zinc-950/70">
          <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mx-auto">
            <Users className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            Direct 1-on-1 Guidance
          </h4>
          <p className="text-[11px] text-zinc-400">
            Weekly code reviews, resume enhancement sessions, and technical interview preparation.
          </p>
        </div>
      </div>
    </section>
  );
}
