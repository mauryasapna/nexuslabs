"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

interface FAQSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function FAQSection({ onOpenConnect }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the Maverick Tech College Project service work?",
      a: "You simply share your project idea or problem statement. We provide 100% working source code (frontend + backend + AI/ML/IoT), complete IEEE format documentation, professional PPT presentation, and 1-on-1 viva coaching so you can defend your project with confidence.",
      badge: "College Projects",
    },
    {
      q: "Will I get 1-on-1 preparation for my Viva & project defense?",
      a: "Yes! We conduct dedicated viva coaching sessions covering common professor questions, architectural explanations, code walkthroughs, and algorithm justifications to ensure a 100% defense pass rate.",
      badge: "100% Viva Pass",
    },
    {
      q: "What is the AI Web Dev Masterclass?",
      a: "It is a live, interactive program where you learn to build production-ready fullstack web applications using cutting-edge AI coding workflows, prompt engineering, Next.js, and automated deployment tools.",
      badge: "AI Web Dev",
    },
    {
      q: "Are Maverick Tech internships verified and certified?",
      a: "Yes. All internships are real-world, project-based remote or hybrid programs. Upon successful completion, students receive a verified completion certificate, letter of recommendation (LOR), and GitHub portfolio review.",
      badge: "Internships",
    },
    {
      q: "Can I request custom modifications to IEEE reports and PPTs?",
      a: "Absolutely. All documentation is prepared in strict accordance with your college's specific formatting guidelines, font sizes, diagram standards, and IEEE citation styles.",
      badge: "Documentation",
    },
    {
      q: "How can I directly connect with Maverick Tech for urgent queries?",
      a: "You can click any 'WhatsApp' or 'Connect' button on the platform to instantly message our team directly on WhatsApp (+91 91424 79986) with your project topic and requirements.",
      badge: "Direct Connect",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskMentorWhatsApp = () => {
    sendToWhatsApp({
      source: "FAQ Section",
      details: {
        Inquiry: "General FAQ Inquiry & Clarification",
      },
    });
  };

  return (
    <section id="faq" className="py-12 sm:py-16 px-3 sm:px-6 w-full">
      <div className="w-full bg-white rounded-3xl border border-zinc-200 shadow-xl p-5 sm:p-8 relative overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 font-outfit tracking-tight">
            Got Questions? <span className="gradient-text-cyan-purple">We Have Answers.</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Everything you need to know about Maverick Tech projects, internships, web development, and 1-on-1 mentorship.
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
                    ? "bg-blue-50/40 border-blue-200 shadow-sm"
                    : "bg-zinc-50 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 border border-blue-200 text-blue-800 shrink-0">
                      {faq.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 font-outfit">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal border-t border-blue-100 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Connect CTA */}
        <div className="mt-8 text-center pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xs text-zinc-600 font-medium">
            Still have a specific question about your project or business website?
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAskMentorWhatsApp}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </button>
            <button
              onClick={() => onOpenConnect("FAQ Direct Inquiry")}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Form</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
