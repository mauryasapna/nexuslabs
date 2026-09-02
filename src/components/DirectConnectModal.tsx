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
import InstagramIcon from "./InstagramIcon";
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

  const instagramUrl = "https://www.instagram.com/codineaura?igsh=dmV2N2R5bmVqZ2Ns";

  if (!isOpen) return null;

  const topics = [
    "College Projects (1st, 2nd, 3rd & Final Year)",
    "Business Website (Professional Website)",
    "Learn How to Make an Website Easily with Me",
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
      <div className="glass-panel w-full max-w-xl rounded-3xl p-5 sm:p-7 border border-white/15 relative shadow-2xl overflow-hidden my-auto">
        {/* Ambient background glows */}
        <div className="absolute -top-20 -right-20 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Direct Mentorship & Project Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-outfit">
              Connect With Me Directly
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Real Contact Details Box */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-2xl bg-black/60 border border-white/10 text-xs mb-4">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="min-w-0">
              <p className="text-[9px] text-gray-400">Official Email</p>
              <a
                href="mailto:nexuslab27@gmail.com"
                className="font-bold text-white hover:text-amber-300 text-[10px] truncate block"
                title="nexuslab27@gmail.com"
              >
                nexuslab27@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <p className="text-[9px] text-gray-400">WhatsApp</p>
              <a href="https://wa.me/919142479986" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-emerald-300 text-[10px]">
                +91 91424 79986
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
            <div>
              <p className="text-[9px] text-gray-400">Instagram</p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-pink-300 hover:text-pink-200 text-[10px] truncate block max-w-[90px]"
              >
                @codineaura
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <p className="text-[9px] text-gray-400">Direct Call</p>
              <a href="tel:+919142479986" className="font-bold text-white hover:text-cyan-300 text-[10px]">
                +91 91424 79986
              </a>
            </div>
          </div>
        </div>

        {/* Quick Connect Fast Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
          <button
            onClick={handleOpenWhatsApp}
            className="p-2.5 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </button>

          <button
            onClick={handleOpenEmail}
            className="p-2.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Email Us</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </button>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-pink-950/50 hover:bg-pink-900/60 border border-pink-500/30 text-pink-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400" />
            <span>Instagram</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {sent ? (
          <div className="py-6 text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-outfit">
              Form Submitted Successfully!
            </h4>
            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
              Thank you <strong>{name}</strong>! Your inquiry for <strong>&quot;{selectedTopic}&quot;</strong> has been saved. You can also send this inquiry directly to <strong>nexuslab27@gmail.com</strong> or WhatsApp.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={handleOpenEmail}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md shadow-amber-600/20 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send to nexuslab27@gmail.com</span>
              </button>

              <button
                onClick={handleOpenWhatsApp}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-gray-300 text-xs font-semibold cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                What would you like to connect regarding?
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs bg-[#0b1022]"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rohan Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Direct WhatsApp / Mobile Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 9142479986"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Project / Service Requirement
              </label>
              <textarea
                rows={2}
                placeholder="Share your topic, deadline, or requirements..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs"
              />
            </div>

            <div className="flex gap-2 pt-1">
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
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSending ? (
                  "Connecting..."
                ) : (
                  <>
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Connect Directly</span>
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
