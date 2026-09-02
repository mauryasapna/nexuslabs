"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Award,
  CheckCircle2,
  Calendar,
  Users,
  DollarSign,
  ArrowRight,
  Sparkles,
  Laptop,
  Layers,
  Code2,
  FileCheck,
  Zap,
  Phone,
  Send,
  ExternalLink,
  MessageCircle,
  Mail,
  MessageSquare,
} from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import confetti from "canvas-confetti";
import { saveCustomInternship, saveInternshipApplication } from "@/lib/storage";
import { toast } from "@/components/ui/sonner";

interface InternshipSectionProps {
  onOpenConnect: (roleName?: string) => void;
}

export default function InternshipSection({
  onOpenConnect,
}: InternshipSectionProps) {
  // Pre-defined role application modal state
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantCollege, setApplicantCollege] = useState("");
  const [applicantDuration, setApplicantDuration] = useState("3 Months (Recommended)");
  const [isApplying, setIsApplying] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);

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

  const internshipPositions = [
    {
      id: "intern-1",
      title: "AI & Machine Learning Engineering Intern",
      type: "Remote / Hybrid",
      duration: "2 - 6 Months",
      stipend: "Performance-Based + Incentive Bonus",
      tags: ["Python", "FastAPI", "PyTorch", "LLM APIs", "Next.js"],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      description:
        "Work on cutting-edge AI SaaS applications, fine-tune models, integrate AI agents, build reactive user interfaces, and collaborate directly with senior mentors on production features.",
      openings: "3 Openings Left",
    },
    {
      id: "intern-2",
      title: "Fullstack Web & 3D Interactive Dev Intern",
      type: "100% Remote",
      duration: "1 - 3 Months",
      stipend: "Certificate + Milestone Stipend",
      tags: ["React 19", "Next.js 15", "TailwindCSS", "Three.js"],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description:
        "Design futuristic glassmorphic dashboards, 3D WebGL interactions, high-converting landing pages, and responsive components for live client platforms.",
      openings: "4 Openings Left",
    },
    {
      id: "intern-3",
      title: "Digital Marketing & SEO Growth Intern",
      type: "Remote",
      duration: "2 - 4 Months",
      stipend: "High Conversion Commission + Stipend",
      tags: ["Google Search Console", "Ahrefs", "Content AI", "Funnels"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description:
        "Analyze website keywords, run on-page and off-page SEO audits, implement backlinks outreach, optimize meta tags, and drive organic traffic growth for live websites.",
      openings: "2 Openings Left",
    },
    {
      id: "intern-4",
      title: "Backend & Cloud Microservices Intern",
      type: "Remote",
      duration: "3 Months",
      stipend: "Stipend + ISO Certificate",
      tags: ["Node.js", "Python", "PostgreSQL", "Docker", "REST API"],
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      description:
        "Build automated data pipelines, secure authentication microservices, database schemas, and deploy scalable cloud backend systems.",
      openings: "3 Openings Left",
    },
  ];

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

    // 🚀 Send email via Brevo API directly to nexuslab27@gmail.com
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
      `Hello Sir/Ma'am! I want to apply for a custom internship:\n` +
      `• Desired Domain: ${customDomain}\n` +
      `• Name: ${customName}\n` +
      `• Contact: ${customContact}\n` +
      `• College: ${customCollege || "Not specified"} (${customYear})\n` +
      `• Preferred Mode: ${customMode} (${customDuration})\n` +
      `• Skills/Interest: ${customSkills || "Ready to learn"}\n` +
      `Please help me get this internship!`
    );
    window.open(`https://wa.me/919142479986?text=${text}`, "_blank");
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail) return;

    setIsApplying(true);
    // Persist to browser localStorage database
    if (selectedRole) {
      saveInternshipApplication({
        roleName: selectedRole,
        applicantName,
        applicantEmail,
        applicantCollege,
        applicantDuration,
      });
    }

    // 🚀 Send email via Brevo API directly to nexuslab27@gmail.com
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: `Internship Application: ${selectedRole}`,
          name: applicantName,
          contact: applicantEmail,
          topic: selectedRole || "Internship Role",
          college: applicantCollege,
          duration: applicantDuration,
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsApplying(false);
      setApplicationSuccess(true);
      toast.success("Internship Application Dispatched!", {
        description: `Your application for ${selectedRole} was emailed to nexuslab27@gmail.com.`,
        duration: 5000,
      });
      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
          colors: ["#a855f7", "#06b6d4", "#3b82f6", "#10b981"],
        });
      } catch (e) {}
    }, 1000);
  };

  return (
    <section id="internships" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header - Compact */}
      <div className="text-center max-w-3xl mx-auto mb-6 space-y-1.5">
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
          Collaborate directly with me on live production software repositories and engineering systems. Contribute real code, master Git pull request workflows, and earn an official experience certificate and personalized Letter of Recommendation (LOR).
        </p>
      </div>

      {/* 🌟 CUSTOM INTERNSHIP SUBMISSION BOX - Compact */}
      <div className="mb-8 glass-panel rounded-2xl p-4 sm:p-6 border border-purple-500/30 shadow-xl relative overflow-hidden bg-gradient-to-b from-[#0b0f1f]/95 to-[#050714]/95">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-white/10 mb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/40">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>Custom Domain Choice</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white font-outfit">
                Want a Specific Internship of Your Choice?
              </h3>
              <p className="text-xs text-gray-300 font-light max-w-xl">
                Tell us <strong>which domain you want to intern in</strong> (e.g. AI/ML, Fullstack Web, Mobile App Dev, Cybersecurity, Cloud DevOps). We will review your profile and assign you a tailored production project!
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Placement Support</span>
              </span>
            </div>
          </div>

          {customSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white font-outfit">
                Custom Internship Application Received!
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
                Thank you <strong>{customName}</strong>! Your application for the <strong>&quot;{customDomain}&quot;</strong> internship has been registered. We will connect with you directly via WhatsApp/Call.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const subject = encodeURIComponent(`Custom Internship Request: ${customDomain} - ${customName}`);
                    const body = encodeURIComponent(
                      `Hello Sapna,\n\nI want to apply for a custom internship:\n\n• Desired Domain: ${customDomain}\n• Name: ${customName}\n• Contact: ${customContact}\n• College: ${customCollege} (${customYear})\n• Mode: ${customMode} (${customDuration})\n• Skills/Interest: ${customSkills || "Ready to learn"}\n\nLooking forward to your guidance!\n`
                    );
                    window.open(`mailto:nexuslab27@gmail.com?subject=${subject}&body=${body}`, "_blank");
                  }}
                  className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-lg shadow-amber-600/25 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email nexuslab27@gmail.com</span>
                </button>

                <button
                  onClick={handleCustomWhatsAppSend}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>

                <button
                  onClick={() => setCustomSubmitted(false)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCustomSubmit} className="space-y-4">
              {/* Row 1: Custom Internship Domain & Preferred Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-200 mb-1.5">
                    Konsi Internship Karni Hai? (Desired Internship Domain) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI / Machine Learning, Fullstack Web Dev, Python Backend, React Native App, UI/UX, SEO..."
                    value={customDomain}
                    onChange={(e) => setCustomDomain(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm border-purple-500/40 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1.5">
                    Work Mode & Duration
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={customMode}
                      onChange={(e) => setCustomMode(e.target.value)}
                      className="w-full px-2.5 py-3 rounded-xl glass-input text-xs bg-[#0b1022]"
                    >
                      <option>100% Remote</option>
                      <option>Hybrid</option>
                    </select>
                    <select
                      value={customDuration}
                      onChange={(e) => setCustomDuration(e.target.value)}
                      className="w-full px-2.5 py-3 rounded-xl glass-input text-xs bg-[#0b1022]"
                    >
                      <option>1 Month</option>
                      <option>2 Months</option>
                      <option>3 Months</option>
                      <option>6 Months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 2: Student Name, Phone/WhatsApp, College, Year */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aman Gupta"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. +91 9142479986"
                    value={customContact}
                    onChange={(e) => setCustomContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1.5">
                    College / University Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DTU, NSUT, IPU, DU, AKTU..."
                    value={customCollege}
                    onChange={(e) => setCustomCollege(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-200 mb-1.5">
                    Current Year
                  </label>
                  <select
                    value={customYear}
                    onChange={(e) => setCustomYear(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>Final Year / Graduate</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Current Skills / What you want to learn */}
              <div>
                <label className="block text-xs font-bold text-gray-200 mb-1.5">
                  Your Current Skills / What do you want to learn? (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Know basics of C++/Python, want to learn live project deployment, Git workflows..."
                  value={customSkills}
                  onChange={(e) => setCustomSkills(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-gray-400">
                  ⚡ Guaranteed response within 2 hours • Direct 1-on-1 Delhi mentorship desk.
                </p>

                <button
                  type="submit"
                  disabled={isCustomSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-bold text-xs sm:text-sm shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  {isCustomSubmitting ? (
                    "Registering Your Request..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit My Custom Internship Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Internship Perks Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16">
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
            Weekly code reviews, resume enhancement sessions, and technical interview mockups.
          </p>
        </div>
      </div>

      {/* Popular Internship Tracks Grid */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white font-outfit mb-4">
          Popular Live Internship Openings (Select & Apply Directly):
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internshipPositions.map((internship) => (
          <div
            key={internship.id}
            className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Top row */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30 uppercase">
                      {internship.type}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      • {internship.openings}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors font-outfit">
                    {internship.title}
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-white/10 shadow-md">
                  <img
                    src={internship.image}
                    alt={`${internship.title} - Official Internship with LOR & Certificate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 font-light mb-4 leading-relaxed">
                {internship.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {internship.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta & Apply Trigger */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase text-gray-500 font-semibold">
                  Duration & Perks
                </p>
                <p className="text-xs text-cyan-300 font-medium">
                  {internship.duration} • {internship.stipend}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedRole(internship.title);
                  setApplicationSuccess(false);
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-lg shadow-purple-600/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Apply for Role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pre-Defined Role Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/15 relative shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400">
                  Internship Application
                </span>
                <h3 className="text-xl font-bold text-white font-outfit">
                  {selectedRole}
                </h3>
              </div>
              <button
                onClick={() => setSelectedRole(null)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {applicationSuccess ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Application Submitted to Mentor!
                </h4>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Congratulations <strong>{applicantName}</strong>! Your application for the <strong>{selectedRole}</strong> position has been logged. I will review your profile and reach out via WhatsApp/Email for the introductory screening.
                </p>
                <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      const subject = encodeURIComponent(`Internship Application: ${selectedRole} - ${applicantName}`);
                      const body = encodeURIComponent(
                        `Hello Sapna,\n\nI have applied for the ${selectedRole} internship.\n\n• Name: ${applicantName}\n• Contact: ${applicantEmail}\n• College: ${applicantCollege}\n• Duration: ${applicantDuration}\n\nLooking forward to your response!\n`
                      );
                      window.open(`mailto:nexuslab27@gmail.com?subject=${subject}&body=${body}`, "_blank");
                    }}
                    className="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-md shadow-amber-600/20 cursor-pointer flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send to nexuslab27@gmail.com</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedRole(null);
                      onOpenConnect(`Internship Application: ${selectedRole}`);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-500/25 cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Patel"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Direct WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +91 9142479986"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      College / University
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. IIT, NIT, State Tech Univ"
                      value={applicantCollege}
                      onChange={(e) => setApplicantCollege(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Internship Preferred Duration
                  </label>
                  <select
                    value={applicantDuration}
                    onChange={(e) => setApplicantDuration(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl glass-input text-xs bg-[#0b1022]"
                  >
                    <option>1 Month (Fast-Track Certificate)</option>
                    <option>3 Months (Recommended - Deep Client Work)</option>
                    <option>6 Months (Full-Cycle Engineering & LOR)</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-[11px] text-purple-200 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    No prior corporate experience needed! We evaluate based on your enthusiasm to learn and experiment with modern tools.
                  </span>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isApplying}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isApplying ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
