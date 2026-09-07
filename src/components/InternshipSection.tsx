"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Award,
  CheckCircle2,
  Users,
  DollarSign,
  ArrowRight,
  Sparkles,
  Laptop,
  Send,
  ExternalLink,
  MessageCircle,
  Mail,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveCustomInternship } from "@/lib/storage";
import { toast } from "@/components/ui/sonner";

interface InternshipSectionProps {
  onOpenConnect: (roleName?: string) => void;
}

export default function InternshipSection({
  onOpenConnect,
}: InternshipSectionProps) {
  // Custom Internship Application State (Where student specifies custom domain)
  const [customDomain, setCustomDomain] = useState("");
  const [customName, setCustomName] = useState("");
  const [customContact, setCustomContact] = useState("");
  const [customCollege, setCustomCollege] = useState("");
  const [customYear, setCustomYear] = useState("3rd Year");
  const [customMode, setCustomMode] = useState("100% Remote");
  const [customDuration, setCustomDuration] = useState("3 Months");
  const [customSkills, setCustomSkills] = useState("");
  const [isCustomSubmitting, setIsCustomSubmitting] = useState(false);
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDomain || !customName || !customContact) return;

    setIsCustomSubmitting(true);
    // Persist to browser localStorage database
    saveCustomInternship({
      customDomain,
      studentName: customName,
      contact: customContact,
      college: customCollege,
      year: customYear,
      workMode: customMode,
      duration: customDuration,
      skills: customSkills,
    });

    // Send email via Brevo API directly to nexuslab27@gmail.com
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Custom Internship Application",
          name: customName,
          contact: customContact,
          domain: customDomain,
          college: `${customCollege} (${customYear})`,
          duration: `${customMode} - ${customDuration}`,
          message: customSkills,
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsCustomSubmitting(false);
      setCustomSubmitted(true);
      toast.success("Custom Internship Request Dispatched!", {
        description: `Details sent to nexuslab27@gmail.com for domain: ${customDomain}.`,
        duration: 5000,
      });
      try {
        confetti({
          particleCount: 130,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#a855f7", "#ec4899", "#06b6d4", "#10b981"],
        });
      } catch (e) {}
    }, 900);
  };

  const handleCustomWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello! I would like to apply for an internship:\n` +
      `• Desired Domain: ${customDomain}\n` +
      `• Name: ${customName}\n` +
      `• Contact: ${customContact}\n` +
      `• College: ${customCollege || "Not specified"} (${customYear})\n` +
      `• Preferred Mode: ${customMode} (${customDuration})\n` +
      `• Skills/Interest: ${customSkills || "Ready to learn"}\n` +
      `Looking forward to hearing from you!`
    );
    window.open(`https://wa.me/919142479986?text=${text}`, "_blank");
  };

  return (
    <section id="internships" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          <span>Find Internship with Me</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Find Internship with Me.{" "}
          <span className="gradient-text-cyan-purple">
            Real Experience, Official LOR & Certificates.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          Collaborate directly on live production software repositories and engineering systems. Contribute real code, master Git pull request workflows, and earn an official experience certificate and personalized Letter of Recommendation (LOR).
        </p>
      </div>

      {/* CUSTOM INTERNSHIP APPLICATION BOX - Compact */}
      <div className="max-w-2xl mx-auto mb-8 glass-panel rounded-2xl p-4 sm:p-5 border border-purple-500/30 shadow-xl relative overflow-hidden bg-gradient-to-b from-[#0b0f1f]/95 to-[#050714]/95">
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white font-outfit">
              Internship Application
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 text-[10px] font-semibold border border-purple-500/30">
            Verified LOR & Certificate
          </span>
        </div>

        {customSubmitted ? (
          <div className="py-6 text-center space-y-2.5 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-white font-outfit">
              Application Received!
            </h4>
            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
              Thank you <strong>{customName}</strong>! Your application for <strong>&quot;{customDomain}&quot;</strong> has been logged.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={handleCustomWhatsAppSend}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Connect on WhatsApp</span>
              </button>

              <button
                onClick={() => setCustomSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs cursor-pointer"
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
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                  Desired Internship Domain *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI / ML, Fullstack Web, Python, Cloud..."
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs border-purple-500/40 focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                  Work Mode & Duration
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <select
                    value={customMode}
                    onChange={(e) => setCustomMode(e.target.value)}
                    className="w-full px-2 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                  >
                    <option>100% Remote</option>
                    <option>Hybrid</option>
                  </select>
                  <select
                    value={customDuration}
                    onChange={(e) => setCustomDuration(e.target.value)}
                    className="w-full px-2 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
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
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
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
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
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
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
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
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                  Current Year
                </label>
                <select
                  value={customYear}
                  onChange={(e) => setCustomYear(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
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
              <label className="block text-[11px] font-semibold text-gray-200 mb-1">
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
            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                type="submit"
                disabled={isCustomSubmitting}
                className="w-full sm:w-auto px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-bold text-xs shadow-md shadow-purple-500/20 flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95"
              >
                {isCustomSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Internship Perks Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            Verified LOR & Certificate
          </h4>
          <p className="text-[11px] text-gray-400">
            Globally verifiable digital credentials with QR validation for your LinkedIn & Resume.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
            <Laptop className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            100% Live Project Code
          </h4>
          <p className="text-[11px] text-gray-400">
            No dummy assignments. Ship code directly into live web apps and real client ecosystems.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
            <DollarSign className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            Stipend & Rewards
          </h4>
          <p className="text-[11px] text-gray-400">
            Earn milestone performance stipends upon project module completions.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
            <Users className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            Direct 1-on-1 Guidance
          </h4>
          <p className="text-[11px] text-gray-400">
            Weekly code reviews, resume enhancement sessions, and technical interview preparation.
          </p>
        </div>
      </div>
    </section>
  );
}
