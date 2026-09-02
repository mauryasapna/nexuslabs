"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, PhoneCall, ShieldCheck, Zap } from "lucide-react";

interface FAQSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function FAQSection({ onOpenConnect }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the College Project on-demand service work?",
      a: "You simply share your project idea or problem statement. We provide 100% working source code (frontend + backend + AI/ML/IoT), complete IEEE format 10-chapter documentation, professional PPT presentation, and 1-on-1 viva coaching so you can defend your project with confidence.",
      badge: "College Projects",
    },
    {
      q: "Will I get 1-on-1 preparation for my Viva & project defense?",
      a: "Yes! We conduct dedicated viva coaching sessions covering common professor questions, architectural explanations, code walkthroughs, and algorithm justifications to ensure a 100% defense pass rate.",
      badge: "100% Viva Pass",
    },
    {
      q: "What is the AI Web Dev in 1s Masterclass?",
      a: "It is a live, interactive program where you learn to build production-ready fullstack web applications in seconds using cutting-edge AI coding workflows, prompt engineering, Next.js, and automated deployment tools.",
      badge: "AI Web Dev",
    },
    {
      q: "Are the student internships verified and industry-certified?",
      a: "Yes. All internships are real-world, project-based remote or hybrid programs. Upon successful completion, students receive a verified completion certificate, letter of recommendation (LOR), and GitHub portfolio review.",
      badge: "Internships",
    },
    {
      q: "Can I request custom modifications to IEEE reports and PPTs?",
      a: "Absolutely. All documentation is prepared in strict accordance with your college's specific formatting guidelines, font sizes, diagram standards, and IEEE citation styles.",
      badge: "Documentation",
    },
    {
      q: "How can I directly connect with you for mentorship or urgent queries?",
      a: "You can click any 'Connect With Me' button on the platform to schedule a direct 1-on-1 consultation or WhatsApp/Email discussion for personalized guidance.",
      badge: "Direct Connect",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 px-3 sm:px-6 w-full">
      <div className="w-full bg-gradient-to-b from-[#0a0f1d] to-[#030712] rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-outfit tracking-tight">
            Got Questions? <span className="gradient-text-cyan-purple">We Have Answers.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Everything you need to know about college projects, internships, AI tools, and 1-on-1 mentorship.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.05] border-cyan-500/40 shadow-lg"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-cyan-300">
                      {faq.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white font-outfit">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-light border-t border-white/5 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Connect CTA */}
        <div className="mt-8 text-center pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-gray-400">
            Still have a specific question about your project?
          </p>
          <button
            onClick={() => onOpenConnect("FAQ Direct Inquiry")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Ask Mentor 1-on-1</span>
          </button>
        </div>
      </div>
    </section>
  );
}
