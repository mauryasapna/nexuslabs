"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Clock,
  FileText,
  Video,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveProjectOrder } from "@/lib/storage";
import { toast } from "@/components/ui/sonner";
import { buildCollegeProjectTemplate, sendToWhatsApp } from "@/lib/whatsapp";

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

  const handleSendWhatsAppDirect = () => {
    const formatted = buildCollegeProjectTemplate({
      projectTitle,
      degree,
      domain,
      deadline,
      addons: selectedAddons,
      details,
    });
    sendToWhatsApp(formatted);
  };

  const handleSubmitIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle.trim() || !details.trim()) {
      toast.error("Please enter project title and details");
      return;
    }

    setIsSubmitting(true);

    // 1. Persist to local storage
    saveProjectOrder({
      projectTopic: projectTitle.trim(),
      domain,
      deadline,
      requirements: `${degree} | Deliverables: ${selectedAddons.join(", ")} | Details: ${details.trim()}`,
      studentName: "Student Applicant",
      contact: "Direct Followup",
    });

    // 2. Format WhatsApp Template & Trigger WhatsApp directly
    const formattedWhatsAppText = buildCollegeProjectTemplate({
      projectTitle: projectTitle.trim(),
      degree,
      domain,
      deadline,
      addons: selectedAddons,
      details: details.trim(),
    });
    sendToWhatsApp(formattedWhatsAppText);

    // 3. Send email in the background
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Custom College Project Order",
          name: "Student Applicant",
          contact: "Requested Direct Followup",
          topic: `${degree} - ${projectTitle.trim()}`,
          message: `Domain: ${domain}\nDeadline: ${deadline}\nDeliverables: ${selectedAddons.join(", ")}\nDetails: ${details.trim()}`,
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("College Project Formatted for WhatsApp!", {
        description: `Template sent to WhatsApp (+91 91424 79986).`,
        duration: 5000,
      });
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ffffff", "#d4d4d8", "#a1a1aa", "#71717a"],
        });
      } catch (e) {}
    }, 600);
  };

  return (
    <section id="projects" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-zinc-900 border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <GraduationCap className="w-3.5 h-3.5 text-white" />
          <span>College Projects (1st, 2nd, 3rd & Final Year)</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          College Projects for{" "}
          <span className="gradient-text-cyan-purple">
            1st, 2nd, 3rd & Final Year.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
          Save 200+ hours of study time. Whether you need a 1st year mini-project or final year major capstone, Maverick Tech builds custom 100% tested working code, full setup guides, and end-to-end implementation for your college submission.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2 bg-zinc-950/70">
          <div className="p-2.5 rounded-xl bg-white/10 text-white w-fit">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Save 200+ Study Hours</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Focus on exams and placement prep while we build and verify your project code end-to-end.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2 bg-zinc-950/70">
          <div className="p-2.5 rounded-xl bg-white/10 text-white w-fit">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Architecture & Setup Guide</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Includes clean system architecture diagrams, database schema, and step-by-step local running instructions.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2 bg-zinc-950/70">
          <div className="p-2.5 rounded-xl bg-white/10 text-white w-fit">
            <Video className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">1-on-1 Code Walkthrough</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Direct screen-sharing call to explain every module and line of code so you defend your viva with confidence.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2 bg-zinc-950/70">
          <div className="p-2.5 rounded-xl bg-white/10 text-white w-fit">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">100% Plagiarism Free</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Custom engineered repository built precisely to your college requirements with clean, modular architecture.
          </p>
        </div>
      </div>

      {/* Main Custom Project Submission Form Studio - Monochrome */}
      <div className="max-w-2xl mx-auto glass-panel rounded-2xl p-4 sm:p-5 border border-white/15 shadow-xl relative overflow-hidden bg-zinc-950/95">
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white font-outfit">
              Custom College Project Request
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-200 text-[10px] font-semibold border border-white/20">
            100% Verified Code
          </span>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-outfit">
                Project Template Created!
              </h4>
              <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed mt-1">
                We received your request for <strong>&quot;{projectTitle}&quot;</strong> and formatted your WhatsApp template.
              </p>
            </div>

            {/* Template Details Card */}
            <div className="text-left bg-black p-3 rounded-xl border border-white/10 text-[11px] font-mono text-zinc-300 space-y-1 max-w-md mx-auto">
              <div className="text-zinc-500 font-bold uppercase text-[9px]">WhatsApp Template:</div>
              <div><strong>Project:</strong> {projectTitle}</div>
              <div><strong>Degree:</strong> {degree}</div>
              <div><strong>Domain:</strong> {domain}</div>
              <div><strong>Timeline:</strong> {deadline}</div>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <button
                onClick={handleSendWhatsAppDirect}
                className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Re-open WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setProjectTitle("");
                  setDetails("");
                }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-xs hover:bg-white/10 cursor-pointer"
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
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Project Title / Concept *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Healthcare, IoT Smart Farm..."
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs border-white/10 focus:border-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Target Domain
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/10"
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
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Degree / Year Level
                </label>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/10"
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
                <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                  Timeline
                </label>
                <select
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/10"
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
              <label className="block text-[11px] font-semibold text-zinc-200 mb-1">
                Project Requirements & Description *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Briefly describe key features, tech stack, or guidelines..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl glass-input text-xs border-white/10 focus:border-white"
              />
            </div>

            {/* Row 4: Compact Deliverables */}
            <div>
              <label className="block text-[10px] font-semibold text-zinc-400 mb-1">
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
                        ? "bg-white/15 border-white/30 text-white font-medium"
                        : "bg-white/[0.02] border-white/5 text-zinc-400"
                    }`}
                  >
                    <CheckCircle2
                      className={`w-3 h-3 shrink-0 ${
                        selectedAddons.includes(addon)
                          ? "text-white"
                          : "text-zinc-600"
                      }`}
                    />
                    <span className="truncate">{addon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit directly to WhatsApp */}
            <div className="pt-2 border-t border-white/10 flex justify-between items-center gap-2">
              <p className="text-[10px] text-zinc-400">
                ⚡ Sends your full project requirements directly to WhatsApp
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
              >
                {isSubmitting ? (
                  <span>Formatting...</span>
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
    </section>
  );
}
