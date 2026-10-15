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

  const handleSubmitIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle.trim()) {
      toast.error("Please enter your project title or topic.");
      return;
    }

    setIsSubmitting(true);

    try {
      saveProjectOrder({
        projectTitle,
        domain,
        degree,
        details,
        deadline,
        addons: selectedAddons,
      });

      sendToWhatsApp({
        source: "College Projects Form",
        details: {
          Project: projectTitle,
          Domain: domain,
          Degree: degree,
          Timeline: deadline,
          Addons: selectedAddons.join(", "),
          CustomNotes: details || "Standard full implementation requested",
        },
      });

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });

      setSubmitted(true);
      toast.success("Order request prepared! Direct WhatsApp opened.");
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsAppDirect = () => {
    sendToWhatsApp({
      source: "College Projects Direct Button",
      details: {
        Project: projectTitle || "Custom College Project",
        Domain: domain,
        Degree: degree,
      },
    });
  };

  return (
    <section id="projects" className="py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-sm">
          <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
          <span>🎓 1. College Projects (1st, 2nd, 3rd & Final Year)</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Save Your Time To Study — <span className="gradient-text-cyan-purple">We Build Your Project</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 font-normal max-w-xl mx-auto">
          100% working source code, step-by-step setup guide, architecture diagrams, and 1-on-1 code explanation.
        </p>
      </div>

      {/* 4 Pillars of Project Delivery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-sm space-y-2">
          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 w-fit border border-blue-200">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-zinc-900">24-48 Hours Fast Delivery</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Quick turnaround with verified working code so you never miss your college semester deadlines.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-sm space-y-2">
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 w-fit border border-emerald-200">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-zinc-900">IEEE Documentation Included</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Complete project reports, ER diagrams, DFDs, PPT presentation slides, and installation manuals.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-sm space-y-2">
          <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 w-fit border border-purple-200">
            <Video className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-zinc-900">1-on-1 Code Walkthrough</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Direct screen-sharing call to explain every module and line of code so you defend your viva with confidence.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-sm space-y-2">
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 w-fit border border-amber-200">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-zinc-900">100% Plagiarism Free</h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Custom engineered repository built precisely to your college requirements with clean, modular architecture.
          </p>
        </div>
      </div>

      {/* Main Custom Project Submission Form Studio */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
              Custom College Project Request
            </h3>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
            100% Verified Code
          </span>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 font-outfit">
                Project Template Created!
              </h4>
              <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed mt-1">
                We received your request for <strong>&quot;{projectTitle}&quot;</strong> and formatted your WhatsApp template.
              </p>
            </div>

            {/* Template Details Card */}
            <div className="text-left bg-zinc-50 p-3.5 rounded-xl border border-zinc-200 text-xs font-mono text-zinc-800 space-y-1 max-w-md mx-auto">
              <div className="text-zinc-500 font-bold uppercase text-[10px]">WhatsApp Template:</div>
              <div><strong>Project:</strong> {projectTitle}</div>
              <div><strong>Degree:</strong> {degree}</div>
              <div><strong>Domain:</strong> {domain}</div>
              <div><strong>Timeline:</strong> {deadline}</div>
            </div>

            <div className="pt-2 flex flex-wrap justify-center gap-2">
              <button
                onClick={handleSendWhatsAppDirect}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/25 cursor-pointer flex items-center gap-1.5 active:scale-95"
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
                className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-700 text-xs font-bold cursor-pointer"
              >
                Submit Another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitIdea} className="space-y-3.5">
            {/* Row 1: Title & Domain */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Project Title / Problem Statement *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Lung Disease Detection System"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Technology Domain
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium shadow-sm"
                >
                  <option>AI & Machine Learning</option>
                  <option>Full-Stack Web (MERN / Next.js)</option>
                  <option>Mobile App (Flutter / React Native)</option>
                  <option>IoT, Robotics & Arduino/ESP32</option>
                  <option>Blockchain & Smart Contracts</option>
                  <option>Cloud Computing & DevOps</option>
                </select>
              </div>
            </div>

            {/* Row 2: Degree Year & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Academic Year
                </label>
                <select
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium shadow-sm"
                >
                  <option>1st Year (C/C++/Python Basics)</option>
                  <option>2nd Year (OOP / Data Structures)</option>
                  <option>3rd Year (Mini Project / Web & DB)</option>
                  <option>B.Tech / B.E (Final Year Major Project)</option>
                  <option>MCA / M.Tech (Advanced Research)</option>
                  <option>Diploma / Polytechnic</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Delivery Deadline
                </label>
                <select
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-medium shadow-sm"
                >
                  <option>Urgent (24 - 48 Hours)</option>
                  <option>1 Week</option>
                  <option>2-3 Weeks</option>
                  <option>Flexible (Next Month)</option>
                </select>
              </div>
            </div>

            {/* Specific Instructions */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Specific Features or College Guidelines (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention mandatory algorithms, database preference, UI theme, or teacher constraints..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm resize-none"
              />
            </div>

            {/* Addons Selection */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                Included Deliverables:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon);
                  return (
                    <button
                      type="button"
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`px-2.5 py-1.5 rounded-lg border text-left text-[11px] font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                        isChecked
                          ? "bg-blue-50 border-blue-300 text-blue-900 font-bold"
                          : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isChecked ? "text-blue-600" : "text-zinc-400"
                        }`}
                      />
                      <span className="truncate">{addon}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Submit Buttons - Filled Colors */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "Generating Template..." : "Order Project via WhatsApp"}</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsAppDirect}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Direct WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
