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
      <div className="relative w-full max-w-lg rounded-3xl bg-[#070d1e] border border-cyan-500/30 p-5 sm:p-7 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white font-outfit">
                Write a Real Review
              </h3>
              <p className="text-[11px] text-gray-400">
                Share your authentic feedback & experience with us
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4 relative z-10 animate-in fade-in">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white font-outfit">
                Thank You for Your Review!
              </h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                Your verified review has been published live and is now visible in the community reviews showcase!
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
              <button
                onClick={handleSendOnWhatsApp}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Send Also on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
            {/* Interactive Star Rating */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Your Overall Rating *
              </label>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          (hoverRating || rating) >= star
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs font-bold text-yellow-400 font-mono ml-2">
                  {rating}.0 / 5.0 Star
                </span>
              </div>
            </div>

            {/* Name and Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  College / Business / City
                </label>
                <input
                  type="text"
                  placeholder="e.g. DTU Delhi / Singhal Logistics"
                  value={collegeOrCompany}
                  onChange={(e) => setCollegeOrCompany(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl glass-input text-xs"
                />
              </div>
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Which Service Did You Use?
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs bg-[#0b1022]"
              >
                {servicesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Review Title */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Headline / One-line Summary
              </label>
              <input
                type="text"
                placeholder="e.g. Saved 200 hours of study time! 100% recommended"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs"
              />
            </div>

            {/* Review Comment */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Your Detailed Feedback / Experience *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Share your authentic experience: Project code quality, delivery speed, mentorship guidance, or business website results..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 rounded-xl glass-input text-xs"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Review...</span>
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
