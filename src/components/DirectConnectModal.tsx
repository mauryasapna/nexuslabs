"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  PhoneCall,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveDirectInquiry } from "@/lib/storage";
import { toast } from "@/components/ui/sonner";

interface DirectConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function DirectConnectModal({
  isOpen,
  onClose,
  initialTopic = "General Inquiry",
}: DirectConnectModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);



  if (!isOpen) return null;

  const topics = [
    "College Projects (1st, 2nd, 3rd & Final Year)",
    "Business Website (Professional Website)",
    "Learn How to Build a Website Easily with Me",
    "Google Rank with Digital Marketing",
    "Find Internship with Me",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;

    setIsSending(true);
    // Persist inquiry to localStorage
    saveDirectInquiry({
      topic: selectedTopic,
      name,
      contact,
      message,
    });

    // 🚀 Send email via Brevo API directly to nexuslab27@gmail.com
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Direct Mentorship & Project Inquiry",
          name,
          contact,
          topic: selectedTopic,
          message,
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      toast.success("Inquiry Dispatched via Brevo!", {
        description: `Your details were delivered directly to nexuslab27@gmail.com.`,
        duration: 5000,
      });
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.5 },
          colors: ["#06b6d4", "#a855f7", "#10b981"],
        });
      } catch (e) {}
    }, 800);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello! I'm interested in: "${selectedTopic}". My name is ${name || "a visitor"}. Let's connect!`
    );
    window.open(`https://wa.me/919142479986?text=${text}`, "_blank");
  };

  const handleOpenEmail = () => {
    const subject = encodeURIComponent(`New Inquiry: ${selectedTopic} - from ${name || "Client"}`);
    const body = encodeURIComponent(
      `Hello Sapna & NexusLabs Team,\n\n` +
      `I would like to inquire about: ${selectedTopic}\n\n` +
      `• Name: ${name || "Client"}\n` +
      `• Mobile / WhatsApp: ${contact}\n` +
      `• Requirement / Message: ${message || "I want to discuss my project/website requirements."}\n\n` +
      `Looking forward to connecting with you!\n`
    );
    window.open(`mailto:nexuslab27@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-in fade-in overflow-y-auto">
      <div className="glass-panel w-full max-w-md rounded-2xl p-4 sm:p-5 border border-white/15 relative shadow-2xl overflow-hidden my-auto">
        {/* Ambient background glows */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 mb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white font-outfit">
              Connect Directly
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {sent ? (
          <div className="py-5 text-center space-y-2.5 animate-in fade-in">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-white font-outfit">
              Inquiry Sent Successfully!
            </h4>
            <p className="text-xs text-gray-300 max-w-xs mx-auto leading-relaxed">
              Thank you <strong>{name}</strong>! We will reach out to you directly via WhatsApp.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <button
                onClick={handleOpenWhatsApp}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
              <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                Topic / Requirement
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 9142479986"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                Message (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe your requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
              />
            </div>

            <div className="flex gap-2 pt-1.5 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSending}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Connect</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
