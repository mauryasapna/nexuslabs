"use client";

import React, { useState } from "react";
import {
  Code,
  GraduationCap,
  Sparkles,
  Clock,
  FileText,
  Video,
  CheckCircle2,
  Cpu,
  Database,
  ShieldCheck,
  Send,
  ExternalLink,
  ChevronRight,
  HelpCircle,
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

  // Ready projects showcase covering 1st, 2nd, 3rd, and Final Year
  const showcaseProjects = [
    {
      id: "proj-1",
      year: "final",
      yearLabel: "Final Year Capstone",
      yearBadge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      title: "AI Medical Diagnostic & Chest X-Ray Vision",
      domain: "AI / Deep Learning",
      tech: ["PyTorch", "Next.js 16", "FastAPI", "TailwindCSS"],
      image: "/images/project_building_3d.jpg",
      description:
        "CNN-based automated pneumonia and pathology detection with 98.4% validation accuracy, physician dashboard, and complete working code + setup guide.",
      stars: "4.9/5",
      downloads: "140+ Students",
    },
    {
      id: "proj-2",
      year: "final",
      yearLabel: "Final Year Capstone",
      yearBadge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      title: "Decentralized Blockchain Credential Verification",
      domain: "Web3 / Blockchain",
      tech: ["Solidity", "Ethereum", "Ethers.js", "React"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      description:
        "Tamper-proof academic transcript and certificate verification platform on Ethereum testnet with QR-code cryptographic validator.",
      stars: "5.0/5",
      downloads: "95+ Students",
    },
    {
      id: "proj-3",
      year: "3rd",
      yearLabel: "3rd Year Minor",
      yearBadge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      title: "Autonomous IoT Smart Agriculture & Weather AI",
      domain: "IoT & Fullstack",
      tech: ["ESP32 / NodeMCU", "Python", "MQTT", "Next.js"],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      description:
        "Real-time soil moisture, NPK sensors, automated solar irrigation pumps, and crop disease prediction using mobile app interface.",
      stars: "4.8/5",
      downloads: "180+ Students",
    },
    {
      id: "proj-4",
      year: "3rd",
      yearLabel: "3rd Year Minor",
      yearBadge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      title: "Fullstack MERN E-Commerce with Razorpay & Dashboard",
      domain: "Full-Stack Web",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/images/mern_ecommerce_preview.jpg",
      description:
        "Complete e-commerce platform with customer cart, admin inventory management, Razorpay payment gateway, and order tracking.",
      stars: "4.9/5",
      downloads: "210+ Students",
    },
    {
      id: "proj-5",
      year: "2nd",
      yearLabel: "2nd Year Project",
      yearBadge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      title: "Hospital & Pharmacy DBMS Management System",
      domain: "Database & Backend",
      tech: ["MySQL / PostgreSQL", "Python / Java", "Tkinter / Flask"],
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      description:
        "Relational database management system for doctor appointments, patient history records, pharmacy inventory, and billing invoices.",
      stars: "4.8/5",
      downloads: "165+ Students",
    },
  ];

  const addonsList = [
    "Full Working Code & Setup Guide",
    "Database Schema & Architecture Diagrams",
    "Step-by-Step Video Setup Walkthrough",
    "Code Customization & Feature Addition",
    "1-on-1 Zoom Code Walkthrough & Mentoring",
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
    // Persist project order to localStorage
    saveProjectOrder({
      projectTopic: projectTitle,
      domain,
      deadline,
      requirements: details,
      studentName: "Student (" + degree + ")",
      contact: "Direct Project Submission Form",
      college: degree,
    });

    // 🚀 Dispatch to Brevo API directly to nexuslab27@gmail.com
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Custom College Project Idea",
          name: `Student (${degree})`,
          contact: "+91 91424 79986 / Website Lead",
          topic: projectTitle,
          domain,
          duration: `Timeline: ${deadline}`,
          college: degree,
          message: `Deliverables: ${selectedAddons.join(", ") || "Full Working Code"}\n\nRequirements: ${details}`,
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Project Idea Dispatched via Brevo!", {
        description: `Your custom idea was sent directly to nexuslab27@gmail.com.`,
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

  // Year filter state for projects
  const [selectedYear, setSelectedYear] = useState<"all" | "1st" | "2nd" | "3rd" | "final">("all");

  return (
    <section id="projects" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner - Compact */}
      <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
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
          Save 200+ hours of study time! Whether you need a 1st year mini-project or final year major capstone, we deliver 100% tested working code, full setup guides, and end-to-end implementation.
        </p>

        {/* Year Filter Tabs - Compact */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap pt-1">
          {[
            { id: "all", label: "All Years" },
            { id: "1st", label: "🌱 1st Year" },
            { id: "2nd", label: "💻 2nd Year" },
            { id: "3rd", label: "⚡ 3rd Year" },
            { id: "final", label: "🏆 Final Year" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedYear(tab.id as any)}
              className={`px-3 py-1 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                selectedYear === tab.id
                  ? "bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Save 200+ Study Hours</h3>
          <p className="text-xs text-gray-400">
            Dedicate time to GATE, placement prep, and exams while I handle the complete engineering lifecycle.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">Architecture & Setup Guide</h3>
          <p className="text-xs text-gray-400">
            Includes system architecture diagrams, database schema, and step-by-step local running instructions.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit">
            <Video className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">1-on-1 Code Walkthrough</h3>
          <p className="text-xs text-gray-400">
            Direct Zoom/Google Meet call with me to explain every line of code so you understand your project with 100% confidence.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-white/10 space-y-2">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white">100% Plagiarism Free</h3>
          <p className="text-xs text-gray-400">
            Original architecture tailored precisely to your college guidelines with zero duplicate repository flags.
          </p>
        </div>
      </div>

      {/* Main Interactive Row: Project Submission Form + Live Project Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        {/* Interactive Custom Project Idea Submission Form - Compact & Mobile Optimized */}
        <div className="lg:col-span-6 glass-panel rounded-2xl p-3.5 sm:p-5 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-white/10 mb-3">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold text-white font-outfit">
                  Custom College Project Studio
                </h3>
              </div>
              <p className="text-[11px] text-gray-400">
                Tell me what project you want built for your final/minor semester.
              </p>
            </div>
            <span className="self-start sm:self-auto px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-semibold border border-cyan-500/20">
              Direct Mentor Delivery
            </span>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white font-outfit">
                Project Idea Received Successfully!
              </h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                I have received your project details for <strong>&quot;{projectTitle}&quot;</strong>. I will review the architecture and connect with you directly with a complete plan and milestone timeline.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => onOpenConnect(`College Project Inquiry: ${projectTitle}`)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/25 transition-all cursor-pointer"
                >
                  Chat on WhatsApp Directly
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setProjectTitle("");
                    setDetails("");
                  }}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs hover:bg-white/10 transition-colors"
                >
                  Submit Another Idea
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitIdea} className="space-y-2.5">
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                  Project Title / Concept Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Autonomous Healthcare System"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs placeholder:text-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Target Domain
                  </label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                  >
                    <option>AI & Machine Learning</option>
                    <option>Full-Stack Web (Next.js/React)</option>
                    <option>Blockchain & Smart Contracts</option>
                    <option>IoT & Embedded Hardware</option>
                    <option>Mobile App (Flutter / React Native)</option>
                    <option>Cloud Computing & DevOps</option>
                    <option>Cybersecurity & Forensics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Degree / Semester
                  </label>
                  <select
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                  >
                    <option>B.Tech / B.E (Final Year Major)</option>
                    <option>B.Tech / B.E (3rd Year Minor)</option>
                    <option>BCA / MCA Project</option>
                    <option>M.Tech / MS Thesis Project</option>
                    <option>B.Sc Computer Science / IT</option>
                    <option>Polytechnic / Diploma</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                  Project Requirements & Description *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe features, dataset, tech stack, or college guidelines..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl glass-input text-xs placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                  Required Deliverables (Select Needed):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {addonsList.map((addon) => (
                    <button
                      key={addon}
                      type="button"
                      onClick={() => toggleAddon(addon)}
                      className={`text-left p-1.5 rounded-lg border text-[10px] transition-all flex items-center gap-1.5 ${
                        selectedAddons.includes(addon)
                          ? "bg-cyan-950/50 border-cyan-500/50 text-cyan-200"
                          : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/20"
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

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1.5 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="shrink-0">Timeline:</span>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="bg-black/50 border border-white/10 rounded-lg px-2 py-0.5 text-cyan-300 text-[11px]"
                  >
                    <option>Urgent (3-5 Days)</option>
                    <option>1-2 Weeks</option>
                    <option>2-3 Weeks</option>
                    <option>1 Month+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Project Idea</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Ready Verified Projects Showcase */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Explore Pre-Built College Projects</span>
            </h3>
            <span className="text-xs text-gray-400">Ready for Instant Delivery</span>
          </div>

          <div className="space-y-3">
            {(selectedYear === "all"
              ? showcaseProjects
              : showcaseProjects.filter((p) => p.year === selectedYear)
            ).map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-4 border border-white/10 flex flex-col sm:flex-row gap-4 items-center group"
              >
                <div className="w-full sm:w-32 h-24 rounded-xl overflow-hidden relative shrink-0 border border-white/10">
                  <img
                    src={project.image}
                    alt={`${project.title} - 100% Working Code & Project Setup`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/80 text-cyan-300">
                    {project.domain}
                  </span>
                </div>

                <div className="flex-1 space-y-1 text-left w-full">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h4>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${project.yearBadge}`}>
                        {project.yearLabel}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-yellow-400 shrink-0">
                      ★ {project.stars}
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-400 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[9px] bg-white/5 text-gray-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        onOpenConnect(`Inquiry for Ready Project: ${project.title}`)
                      }
                      className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get This Project</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
