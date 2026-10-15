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

    try {
      saveDirectInquiry({
        name,
        contact,
        topic: selectedTopic,
        message,
      });

      sendToWhatsApp({
        source: "Direct Connect Modal",
        details: {
          Name: name,
          Contact: contact,
          Requirement: selectedTopic,
          Message: message || "Immediate callback / WhatsApp discussion requested",
        },
      });

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
      });

      setSent(true);
      toast.success("WhatsApp template prepared and opened!");
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
          <div className="py-5 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
                Inquiry Template Generated!
              </h4>
              <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed mt-1">
                Thank you <strong>{name}</strong>! Your details were formatted and opened in WhatsApp.
              </p>
            </div>

            {/* Formatted Template Preview */}
            <div className="text-left bg-zinc-50 p-3 rounded-xl border border-zinc-200 text-xs font-mono text-zinc-800 space-y-1">
              <div className="text-zinc-500 font-bold uppercase text-[9px]">WhatsApp Template Sent:</div>
              <div><strong>Name:</strong> {name}</div>
              <div><strong>Contact:</strong> {contact}</div>
              <div><strong>Topic:</strong> {selectedTopic}</div>
              {message && <div><strong>Message:</strong> {message}</div>}
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 9142479986"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm"
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
              ⚡ Submitting formats your details into an instant template and opens WhatsApp directly with our team.
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
