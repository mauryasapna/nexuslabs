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
  const [customDomain, setCustomDomain] = useState("Full-Stack Web Development (Next.js / React)");
  const [customDomainOther, setCustomDomainOther] = useState("");
  const [customName, setCustomName] = useState("");
  const [customContact, setCustomContact] = useState("");
  const [customCollege, setCustomCollege] = useState("");
  const [customYear, setCustomYear] = useState("3rd Year");
  const [customYearOther, setCustomYearOther] = useState("");
  const [customMode, setCustomMode] = useState("100% Remote");
  const [customModeOther, setCustomModeOther] = useState("");
  const [customDuration, setCustomDuration] = useState("2 Months");
  const [customDurationOther, setCustomDurationOther] = useState("");
  const [customSkills, setCustomSkills] = useState("");
  const [isCustomSubmitting, setIsCustomSubmitting] = useState(false);
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const getEffectiveDomain = () =>
    customDomain === "Other (Write your own domain)..."
      ? (customDomainOther.trim() || "Custom Domain")
      : customDomain;

  const getEffectiveMode = () =>
    customMode === "Other (Specify work mode)..."
      ? (customModeOther.trim() || "Custom Mode")
      : customMode;

  const getEffectiveDuration = () =>
    customDuration === "Other (Specify duration)..."
      ? (customDurationOther.trim() || "Custom Duration")
      : customDuration;

  const getEffectiveYear = () =>
    customYear === "Other (Specify academic year/status)..."
      ? (customYearOther.trim() || "Custom Year")
      : customYear;

  const handleSendWhatsAppDirect = () => {
    sendToWhatsApp({
      source: "Internship Direct WhatsApp",
      details: {
        Name: customName || "Applicant",
        Contact: customContact || "Not provided",
        Domain: getEffectiveDomain(),
        College: customCollege || "Engineering College",
        Year: getEffectiveYear(),
        Mode: getEffectiveMode(),
        Duration: getEffectiveDuration(),
      },
    });
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (customContact.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    const effDomain = getEffectiveDomain();
    const effMode = getEffectiveMode();
    const effDuration = getEffectiveDuration();
    const effYear = getEffectiveYear();

    setIsCustomSubmitting(true);

    try {
      saveCustomInternship({
        name: customName,
        contact: customContact,
        domain: effDomain,
        college: customCollege,
        year: effYear,
        mode: effMode,
        duration: effDuration,
        skills: customSkills,
      });

      sendToWhatsApp({
        source: "Internship Application Form",
        details: {
          Name: customName,
          Contact: customContact,
          Domain: effDomain,
          College: customCollege || "Not specified",
          Year: effYear,
          Mode: effMode,
          Duration: effDuration,
          Skills: customSkills || "Eager to learn and contribute",
        },
      });

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });

      setCustomSubmitted(true);
      toast.success("Application sent! Direct WhatsApp chat opened.");
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsCustomSubmitting(false);
    }
  };

  return (
    <section id="internships" className="relative py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
          <span>💼 5. Production Software Internships</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Engineering Internships with Maverick Tech.{" "}
          <span className="gradient-text-cyan-purple">
            Real Code, Official LOR & Experience Certificate.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
          Collaborate directly on live production software repositories and engineering systems. Contribute real code, master Git workflows, and earn an official experience certificate and personalized Letter of Recommendation (LOR).
        </p>
      </div>

      {/* CUSTOM INTERNSHIP APPLICATION BOX - White Theme */}
      <div className="max-w-2xl mx-auto mb-10 bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
              Internship Application
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-200">
            Verified LOR & Certificate
          </span>
        </div>

        {customSubmitted ? (
          <div className="py-6 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 font-outfit">
                Application Sent Directly to WhatsApp!
              </h4>
              <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed mt-1">
                Thank you <strong>{customName}</strong>! Your application for <strong>&quot;{getEffectiveDomain()}&quot;</strong> has opened directly in WhatsApp. Our mentorship team will review your details.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={handleSendWhatsAppDirect}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/25 flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Re-open WhatsApp</span>
              </button>

              <button
                onClick={() => setCustomSubmitted(false)}
                className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-700 text-xs font-bold cursor-pointer"
              >
                Submit Another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCustomSubmit} className="space-y-3.5">
            {/* Row 1: Domain & Work Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Desired Internship Domain *
                </label>
                <select
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-indigo-600 focus:bg-white font-medium shadow-sm"
                >
                  <option>Full-Stack Web Development (Next.js / React)</option>
                  <option>AI & Machine Learning Engineering</option>
                  <option>Python Backend & Cloud APIs</option>
                  <option>Mobile App Development (Flutter / React Native)</option>
                  <option>UI/UX & Frontend Engineering</option>
                  <option>Cybersecurity & Cloud DevOps</option>
                  <option>Other (Write your own domain)...</option>
                </select>

                {customDomain === "Other (Write your own domain)..." && (
                  <div className="mt-2 animate-in fade-in slide-in-from-top-1">
                    <input
                      type="text"
                      required
                      placeholder="Type your custom internship domain..."
                      value={customDomainOther}
                      onChange={(e) => setCustomDomainOther(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-indigo-400 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Work Mode & Duration
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={customMode}
                    onChange={(e) => setCustomMode(e.target.value)}
                    className="w-full px-2 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-indigo-600 focus:bg-white font-medium shadow-sm"
                  >
                    <option>100% Remote</option>
                    <option>Hybrid / Bangalore</option>
                    <option>Other (Specify work mode)...</option>
                  </select>
                  <select
                    value={customDuration}
                    onChange={(e) => setCustomDuration(e.target.value)}
                    className="w-full px-2 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-indigo-600 focus:bg-white font-medium shadow-sm"
                  >
                    <option>1 Month</option>
                    <option>2 Months</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>Other (Specify duration)...</option>
                  </select>
                </div>

                {/* Custom inputs if Other is selected */}
                {(customMode === "Other (Specify work mode)..." || customDuration === "Other (Specify duration)...") && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 animate-in fade-in slide-in-from-top-1">
                    {customMode === "Other (Specify work mode)..." && (
                      <input
                        type="text"
                        required
                        placeholder="Custom work mode..."
                        value={customModeOther}
                        onChange={(e) => setCustomModeOther(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-indigo-400 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
                      />
                    )}
                    {customDuration === "Other (Specify duration)..." && (
                      <input
                        type="text"
                        required
                        placeholder="Custom duration..."
                        value={customDurationOther}
                        onChange={(e) => setCustomDurationOther(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-indigo-400 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Row 2: Name & WhatsApp Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-indigo-600 focus:bg-white shadow-sm"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-zinc-700">
                    WhatsApp Number *
                  </label>
                  <span className={`text-[10px] font-mono font-bold ${customContact.length === 10 ? 'text-emerald-600' : 'text-zinc-500'}`}>
                    {customContact.length}/10 digits
                  </span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  placeholder="10-digit mobile number"
                  value={customContact}
                  onChange={(e) => setCustomContact(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-indigo-600 focus:bg-white shadow-sm font-mono tracking-wider"
                />
              </div>
            </div>

            {/* Row 3: College & Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  College / University Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. VTU, Anna Univ, Delhi Univ..."
                  value={customCollege}
                  onChange={(e) => setCustomCollege(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-indigo-600 focus:bg-white shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Current Academic Year
                </label>
                <select
                  value={customYear}
                  onChange={(e) => setCustomYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-indigo-600 focus:bg-white font-medium shadow-sm"
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>Final Year / Graduate</option>
                  <option>Other (Specify academic year/status)...</option>
                </select>

                {customYear === "Other (Specify academic year/status)..." && (
                  <div className="mt-2 animate-in fade-in slide-in-from-top-1">
                    <input
                      type="text"
                      required
                      placeholder="Specify your academic year or status..."
                      value={customYearOther}
                      onChange={(e) => setCustomYearOther(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-indigo-400 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Row 4: Skills */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Skills / Interests (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Basics of Python/JavaScript, C++..."
                value={customSkills}
                onChange={(e) => setCustomSkills(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-indigo-600 focus:bg-white shadow-sm"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-[11px] text-zinc-500 font-medium">
                ⚡ Sends your application directly to WhatsApp with full details
              </p>
              <button
                type="submit"
                disabled={isCustomSubmitting}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-md shadow-emerald-500/25 flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 shrink-0"
              >
                {isCustomSubmitting ? (
                  "Sending..."
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

      {/* Internship Perks Highlights - Clean White Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 text-center space-y-2 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center mx-auto">
            <Award className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
            Verified LOR & Certificate
          </h4>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            Globally verifiable digital credentials with QR validation for your LinkedIn & Resume.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 text-center space-y-2 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto">
            <Laptop className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
            100% Live Project Code
          </h4>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            No dummy assignments. Ship code directly into live web apps and real client ecosystems.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 text-center space-y-2 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
            <DollarSign className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
            Stipend & Rewards
          </h4>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            Earn milestone performance stipends upon project module completions.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 text-center space-y-2 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center mx-auto">
            <Users className="w-5 h-5" />
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
            Direct 1-on-1 Guidance
          </h4>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            Weekly code reviews, resume enhancement sessions, and technical interview preparation.
          </p>
        </div>
      </div>
    </section>
  );
}
