"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Sparkles,
  Clock,
  FileText,
  Video,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveProjectOrder } from "@/lib/storage";
import { toast } from "@/components/ui/sonner";

interface CollegeProjectsSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function CollegeProjectsSection({
  onOpenConnect,
}: CollegeProjectsSectionProps) {
  // Submission Form State
  const [projectTitle, setProjectTitle] = useState("");
  const [domain, setDomain] = useState("AI & Machine Learning");
  const [degree, setDegree] = useState("B.Tech / B.E (Final Year)");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("2-3 Weeks");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "Full Working Code & Setup Guide",
    "Database Schema & Architecture Diagrams",
    "Step-by-Step Video Setup Walkthrough",
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const addonsList = [
    "Full Working Code & Setup Guide",
    "Database Schema & Architecture Diagrams",
    "Step-by-Step Video Setup Walkthrough",
    "Code Customization & Feature Addition",
    "1-on-1 Code Walkthrough & Mentoring",
    "GitHub Repository & Cloud Deployment Setup",
  ];

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleSubmitIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle || !details) return;

    setIsSubmitting(true);
    // Persist to local storage
    saveProjectOrder({
      projectTopic: projectTitle,
      domain,
      deadline,
      requirements: `${degree} | Deliverables: ${selectedAddons.join(", ")} | Details: ${details}`,
      studentName: "Student Applicant",
      contact: "Direct Followup",
    });

    // Send email via Brevo API directly to nexuslab27@gmail.com
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Custom College Project Order",
          name: "Student Applicant",
          contact: "Requested Direct Followup",
          topic: `${degree} - ${projectTitle}`,
          message: `Domain: ${domain}\nDeadline: ${deadline}\nDeliverables: ${selectedAddons.join(", ")}\nDetails: ${details}`,
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("College Project Request Dispatched!", {
        description: `Project details for "${projectTitle}" sent to nexuslab27@gmail.com.`,
        duration: 5000,
      });
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#10b981", "#3b82f6"],
        });
      } catch (e) {}
    }, 800);
  };

  return (
    <section id="projects" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
          <span>College Projects (1st, 2nd, 3rd & Final Year)</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          College Projects for{" "}
          <span className="gradient-text-cyan-purple">
            1st, 2nd, 3rd & Final Year.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          Save 200+ hours of study time. Whether you need a 1st year mini-project or final year major capstone, we build custom 100% tested working code, full setup guides, and end-to-end implementation for your college submission.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Save 200+ Study Hours</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Focus on exams and placement prep while we build and verify your project code end-to-end.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Architecture & Setup Guide</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Includes clean system architecture diagrams, database schema, and step-by-step local running instructions.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
            <Video className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">1-on-1 Code Walkthrough</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Direct screen-sharing call to explain every module and line of code so you defend your viva with confidence.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">100% Plagiarism Free</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Custom engineered repository built precisely to your college requirements with clean, modular architecture.
          </p>
        </div>
      </div>

      {/* Main Custom Project Submission Form Studio - Compact */}
      <div className="max-w-2xl mx-auto glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/30 shadow-xl relative overflow-hidden bg-gradient-to-b from-[#061021]/90 via-[#0a0f24]/85 to-[#030712]/95">
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white font-outfit">
              Custom College Project Request
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-[10px] font-semibold border border-cyan-500/30">
            100% Verified Code
          </span>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-2.5 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-white font-outfit">
              Project Request Submitted!
            </h4>
            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
              We received your request for <strong>&quot;{projectTitle}&quot;</strong> and will connect with you directly.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => onOpenConnect(`College Project Inquiry: ${projectTitle}`)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Directly</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setProjectTitle("");
                  setDetails("");
                }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs hover:bg-white/10 cursor-pointer"
              >
                Submit Another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitIdea} className="space-y-3">
            {/* Row 1: Title & Domain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                  Project Title / Concept *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Healthcare, IoT Smart Farm..."
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs border-white/10 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                  Target Domain
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                >
                  <option>AI / Machine Learning</option>
                  <option>Full-Stack Web (Next.js/React)</option>
                  <option>Blockchain & Smart Contracts</option>
                  <option>IoT & Embedded Systems</option>
                  <option>Mobile App (Flutter/React Native)</option>
                  <option>Cloud Computing & DevOps</option>
                  <option>Database (SQL/MongoDB)</option>
                </select>
              </div>
            </div>

            {/* Row 2: Degree Level & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                  Degree / Year Level
                </label>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                >
                  <option>B.Tech / B.E (Final Year Major)</option>
                  <option>B.Tech / B.E (3rd Year Minor)</option>
                  <option>B.Tech / B.E (1st/2nd Year)</option>
                  <option>BCA / MCA Capstone</option>
                  <option>M.Tech / MS Thesis</option>
                  <option>Polytechnic / Diploma</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                  Timeline
                </label>
                <select
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                >
                  <option>Urgent (3-5 Days)</option>
                  <option>1-2 Weeks</option>
                  <option>2-3 Weeks</option>
                  <option>1 Month+</option>
                </select>
              </div>
            </div>

            {/* Row 3: Description */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-200 mb-1">
                Project Requirements & Description *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Briefly describe key features, tech stack, or guidelines..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl glass-input text-xs border-white/10 focus:border-cyan-400"
              />
            </div>

            {/* Row 4: Compact Deliverables */}
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 mb-1">
                Deliverables Included:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {addonsList.slice(0, 3).map((addon) => (
                  <button
                    key={addon}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`text-left p-1.5 rounded-lg border text-[10px] transition-all flex items-center gap-1.5 cursor-pointer ${
                      selectedAddons.includes(addon)
                        ? "bg-cyan-950/60 border-cyan-500/60 text-cyan-200"
                        : "bg-white/[0.02] border-white/5 text-gray-400"
                    }`}
                  >
                    <CheckCircle2
                      className={`w-3 h-3 shrink-0 ${
                        selectedAddons.includes(addon)
                          ? "text-cyan-400"
                          : "text-gray-600"
                      }`}
                    />
                    <span className="truncate">{addon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Project Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
