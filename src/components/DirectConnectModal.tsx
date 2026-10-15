"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  Mail,
  Sparkles,
  CheckCircle2,
  X,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveDirectInquiry } from "@/lib/storage";
import { toast } from "@/components/ui/sonner";
import { buildDirectInquiryTemplate, sendToWhatsApp } from "@/lib/whatsapp";

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

  const handleOpenWhatsAppDirectly = () => {
    const formattedText = buildDirectInquiryTemplate({
      name,
      contact,
      topic: selectedTopic,
      message,
    });
    sendToWhatsApp(formattedText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      toast.error("Please enter your name and phone number");
      return;
    }

    setIsSending(true);

    // 1. Persist inquiry to localStorage
    saveDirectInquiry({
      topic: selectedTopic,
      name: name.trim(),
      contact: contact.trim(),
      message: message.trim(),
    });

    // 2. Format WhatsApp Template & Trigger WhatsApp directly
    const formattedWhatsAppText = buildDirectInquiryTemplate({
      name: name.trim(),
      contact: contact.trim(),
      topic: selectedTopic,
      message: message.trim(),
    });
    sendToWhatsApp(formattedWhatsAppText);

    // 3. Dispatch to Brevo API in the background
    try {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "Direct Mentorship & Project Inquiry",
          name: name.trim(),
          contact: contact.trim(),
          topic: selectedTopic,
          message: message.trim(),
        }),
      }).catch((err) => console.error("Brevo dispatch error:", err));
    } catch (err) {
      console.error("Brevo fetch error:", err);
    }

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
      toast.success("Inquiry Formatted for WhatsApp!", {
        description: `Template sent to WhatsApp (+91 91424 79986).`,
        duration: 5000,
      });
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.5 },
          colors: ["#ffffff", "#d4d4d8", "#a1a1aa", "#71717a"],
        });
      } catch (e) {}
    }, 600);
  };

  const handleOpenEmail = () => {
    const subject = encodeURIComponent(`New Inquiry: ${selectedTopic} - from ${name || "Client"}`);
    const body = encodeURIComponent(
      `Hello Maverick Tech Team,\n\n` +
      `I would like to inquire about: ${selectedTopic}\n\n` +
      `• Name: ${name || "Client"}\n` +
      `• Mobile / WhatsApp: ${contact}\n` +
      `• Requirement / Message: ${message || "I want to discuss my requirements."}\n\n` +
      `Looking forward to connecting with you!\n`
    );
    window.open(`mailto:nexuslab27@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-in fade-in overflow-y-auto">
      <div className="glass-panel w-full max-w-md rounded-2xl p-4 sm:p-5 border border-white/15 relative shadow-2xl overflow-hidden my-auto bg-black/95">
        {/* Subtle Ambient Monochrome Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/[0.05] rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 mb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-white" />
            <h3 className="text-base font-bold text-white font-outfit">
              Connect on WhatsApp
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {sent ? (
          <div className="py-5 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-outfit">
                Inquiry Template Generated!
              </h4>
              <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed mt-1">
                Thank you <strong>{name}</strong>! Your details were formatted and opened in WhatsApp.
              </p>
            </div>

            {/* Formatted Template Preview */}
            <div className="text-left bg-zinc-950 p-3 rounded-xl border border-white/10 text-[11px] font-mono text-zinc-300 space-y-1">
              <div className="text-zinc-500 font-bold uppercase text-[9px]">WhatsApp Template Sent:</div>
              <div><strong>Name:</strong> {name}</div>
              <div><strong>Contact:</strong> {contact}</div>
              <div><strong>Topic:</strong> {selectedTopic}</div>
              {message && <div><strong>Message:</strong> {message}</div>}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={handleOpenWhatsAppDirectly}
                className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Re-open WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="px-4 py-2 rounded-xl bg-white/10 text-zinc-300 text-xs font-semibold hover:bg-white/15 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                Topic / Requirement *
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/15"
              >
                {topics.map((t) => (
                  <option key={t} value={t} className="bg-zinc-900 text-white">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
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
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
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
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                Message / Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Describe your project, deadline, or requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
              />
            </div>

            <p className="text-[10px] text-zinc-400 leading-tight">
              ⚡ Submitting formats your details into an instant template and opens WhatsApp directly with our team.
            </p>

            <div className="flex gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSending}
                className="flex-2 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isSending ? (
                  "Formatting..."
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
    </div>
  );
}
