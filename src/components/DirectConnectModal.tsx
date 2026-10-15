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
  const [customTopic, setCustomTopic] = useState("");
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
    "Other (Write your own requirement)...",
  ];

  const getEffectiveTopic = () => {
    if (selectedTopic === "Other (Write your own requirement)...") {
      return customTopic.trim() || "Custom Inquiry";
    }
    return selectedTopic;
  };

  const handleOpenWhatsAppDirectly = () => {
    const finalTopic = getEffectiveTopic();
    const formattedText = buildDirectInquiryTemplate({
      name,
      contact,
      topic: finalTopic,
      message,
    });
    sendToWhatsApp(formattedText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (contact.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    const finalTopic = getEffectiveTopic();
    if (selectedTopic === "Other (Write your own requirement)..." && !customTopic.trim()) {
      toast.error("Please type your custom requirement");
      return;
    }

    setIsSending(true);

    try {
      saveDirectInquiry({
        name,
        contact,
        topic: finalTopic,
        message,
      });

      sendToWhatsApp({
        source: "Direct Connect Modal",
        details: {
          Name: name,
          Contact: contact,
          Requirement: finalTopic,
          Message: message || "Immediate callback / WhatsApp discussion requested",
        },
      });

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
      });

      setSent(true);
      toast.success("Direct WhatsApp chat opened!");
    } catch {
      toast.error("Could not format WhatsApp link. Please call directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in overflow-y-auto">
      <div className="w-full max-w-md rounded-2xl p-5 sm:p-6 border border-zinc-200 relative shadow-2xl overflow-hidden my-auto bg-white text-zinc-900">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 font-outfit">
              Connect on WhatsApp
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {sent ? (
          <div className="py-6 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 font-outfit">
                Inquiry Sent Directly to WhatsApp!
              </h4>
              <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed mt-1">
                Thank you <strong>{name}</strong>! Your inquiry for <strong>&quot;{getEffectiveTopic()}&quot;</strong> has opened directly in WhatsApp. Our team is ready to connect with you.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={handleOpenWhatsAppDirectly}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/25 flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Re-open WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Topic / Requirement *
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium shadow-sm"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              {/* Custom Write Option Input */}
              {selectedTopic === "Other (Write your own requirement)..." && (
                <div className="mt-2 animate-in fade-in slide-in-from-top-1">
                  <input
                    type="text"
                    required
                    placeholder="Type your custom requirement or topic..."
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-blue-400 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-zinc-700">
                    WhatsApp Number *
                  </label>
                  <span className={`text-[10px] font-mono font-bold ${contact.length === 10 ? 'text-emerald-600' : 'text-zinc-500'}`}>
                    {contact.length}/10 digits
                  </span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                  placeholder="10-digit number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm font-mono tracking-wider"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Message / Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Describe your project, deadline, or requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm resize-none"
              />
            </div>

            <p className="text-[11px] text-zinc-500 leading-tight">
              ⚡ Submitting opens WhatsApp directly with your exact inquiry details filled.
            </p>

            <div className="flex gap-2 pt-2 border-t border-zinc-200">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSending}
                className="flex-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/25 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                {isSending ? (
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
    </div>
  );
}
