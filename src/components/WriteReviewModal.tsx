"use client";

import React, { useState } from "react";
import {
  Star,
  X,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  User,
  GraduationCap,
  MessageSquare,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";
import { saveStoredReview, StoredReview } from "@/lib/storage";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    const newReview = saveStoredReview({
      name: name.trim(),
      collegeOrCompany: collegeOrCompany.trim() || "Verified Student / Client",
      service,
      rating,
      title: title.trim() || "Excellent Experience & Mentorship!",
      comment: comment.trim(),
      avatar: `https://images.unsplash.com/photo-${rating === 5 ? "1535713875002-d1d0cf377fde" : "1570295999919-56ceb5ecca61"}?auto=format&fit=crop&w=200&q=80`,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onReviewSubmitted(newReview);

      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#ec4899", "#eab308", "#10b981"],
        });
      } catch (e) {}
    }, 600);
  };

  const handleSendOnWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello! I just submitted a review for NexusLabs:\n` +
      `• Name: ${name}\n` +
      `• Organization/College: ${collegeOrCompany}\n` +
      `• Service: ${service}\n` +
      `• Rating: ${rating} / 5 Stars\n` +
      `• Title: ${title}\n` +
      `• Review: ${comment}\n` +
      `Thank you!`
    );
    window.open(`https://wa.me/919142479986?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-[#070d1e] border border-cyan-500/30 p-4 sm:p-5 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow backdrop */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3 relative z-10">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <h3 className="text-sm sm:text-base font-bold text-white font-outfit">
              Write a Review
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-5 text-center space-y-2.5 relative z-10 animate-in fade-in">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-outfit">
                Thank You for Your Review!
              </h4>
              <p className="text-xs text-gray-300 max-w-xs mx-auto leading-relaxed">
                Your review has been published live in the community showcase!
              </p>
            </div>

            <div className="pt-2 flex justify-center gap-2">
              <button
                onClick={handleSendOnWhatsApp}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Share on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-4 py-1.5 rounded-xl bg-white/10 text-white font-semibold text-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5 relative z-10">
            {/* Interactive Star Rating */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/10">
              <span className="text-[11px] font-semibold text-gray-300">Rating:</span>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    className="p-0.5 cursor-pointer hover:scale-125 focus:outline-none"
                  >
                    <Star
                      className={`w-4 h-4 transition-colors ${
                        (hoverRating || rating) >= star
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-[11px] font-bold text-yellow-400 font-mono ml-1.5">
                  {rating}.0
                </span>
              </div>
            </div>

            {/* Name and Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-0.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-0.5">
                  College / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. DTU Delhi"
                  value={collegeOrCompany}
                  onChange={(e) => setCollegeOrCompany(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-300 mb-0.5">
                Service Used
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs bg-[#0b1022]"
              >
                {servicesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Review Headline */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-300 mb-0.5">
                Headline (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Excellent guidance & fast delivery!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
              />
            </div>

            {/* Review Comment */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-300 mb-0.5">
                Feedback *
              </label>
              <textarea
                rows={2}
                required
                placeholder="Share your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-xl glass-input text-xs"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-1 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Publish Review</span>
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
