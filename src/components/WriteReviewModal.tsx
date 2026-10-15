"use client";

import React, { useState } from "react";
import {
  Star,
  X,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveStoredReview, StoredReview } from "@/lib/storage";
import { buildReviewTemplate, sendToWhatsApp } from "@/lib/whatsapp";

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted: (review: StoredReview) => void;
}

export default function WriteReviewModal({
  isOpen,
  onClose,
  onReviewSubmitted,
}: WriteReviewModalProps) {
  const [name, setName] = useState("");
  const [collegeOrCompany, setCollegeOrCompany] = useState("");
  const [service, setService] = useState("College Projects (1st-Final Yr)");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    "College Projects (1st-Final Yr)",
    "Business Website (Professional)",
    "Learn Web Dev Easily with Me",
    "Google Rank / SEO Digital Marketing",
    "Student Internship & Certificate",
  ];

  const handleSendOnWhatsApp = () => {
    const formatted = buildReviewTemplate({
      name,
      collegeOrCompany,
      service,
      rating,
      title,
      comment,
    });
    sendToWhatsApp(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    const newReview = saveStoredReview({
      name: name.trim(),
      collegeOrCompany: collegeOrCompany.trim() || "Verified Student / Client",
      service,
      rating,
      title: title.trim() || "Excellent Experience with Maverick Tech!",
      comment: comment.trim(),
      avatar: `https://images.unsplash.com/photo-${rating === 5 ? "1535713875002-d1d0cf377fde" : "1570295999919-56ceb5ecca61"}?auto=format&fit=crop&w=200&q=80`,
    });

    // Format WhatsApp template and trigger
    const formattedWhatsApp = buildReviewTemplate({
      name: name.trim(),
      collegeOrCompany: collegeOrCompany.trim() || "Verified Student / Client",
      service,
      rating,
      title: title.trim() || "Excellent Experience with Maverick Tech!",
      comment: comment.trim(),
    });
    sendToWhatsApp(formattedWhatsApp);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onReviewSubmitted(newReview);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ffffff", "#d4d4d8", "#a1a1aa", "#71717a"],
        });
      } catch (e) {}
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-zinc-950 border border-white/15 p-4 sm:p-5 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3 relative z-10">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-white fill-white" />
            <h3 className="text-sm sm:text-base font-bold text-white font-outfit">
              Write a Review for Maverick Tech
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-5 text-center space-y-3 relative z-10 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-outfit">
                Thank You for Your Review!
              </h4>
              <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed">
                Your review has been published and formatted for WhatsApp!
              </p>
            </div>

            <div className="pt-2 flex justify-center gap-2">
              <button
                onClick={handleSendOnWhatsApp}
                className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Re-open WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/10 text-zinc-300 text-xs font-semibold hover:bg-white/15 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
            {/* Star Rating Select */}
            <div className="space-y-1">
              <label className="block text-[11px] font-semibold text-zinc-300">
                Overall Rating *
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 cursor-pointer transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        (hoverRating || rating) >= star
                          ? "text-white fill-white"
                          : "text-zinc-600"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-zinc-300 ml-2">
                  {rating} / 5 Stars
                </span>
              </div>
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                Service Taken *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-zinc-900 border-white/10"
              >
                {servicesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Client Name & College/Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                  College / Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. DTU / TechCorp"
                  value={collegeOrCompany}
                  onChange={(e) => setCollegeOrCompany(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            {/* Review Title */}
            <div>
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                Headline / Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 100% Working Code & Great Guidance!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="block text-[11px] font-semibold text-zinc-300 mb-1">
                Your Review / Experience *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Share your experience with Maverick Tech projects or services..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 border-t border-white/10 flex justify-between items-center gap-2">
              <p className="text-[10px] text-zinc-400">
                ⚡ Automatically shares your formatted review on WhatsApp
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                {isSubmitting ? (
                  "Publishing..."
                ) : (
                  <>
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Publish & Send WhatsApp</span>
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
