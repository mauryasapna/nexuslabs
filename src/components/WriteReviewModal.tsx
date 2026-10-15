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
    if (!name.trim() || !title.trim() || !comment.trim()) {
      alert("Please fill in all required fields (Name, Title, Review)");
      return;
    }

    setIsSubmitting(true);

    const newReview: StoredReview = {
      id: "rev_" + Date.now(),
      name: name.trim(),
      collegeOrCompany: collegeOrCompany.trim() || "Engineering Student",
      service,
      rating,
      title: title.trim(),
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
    };

    saveStoredReview(newReview);
    onReviewSubmitted(newReview);

    handleSendOnWhatsApp();

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in overflow-y-auto">
      <div className="w-full max-w-md rounded-2xl p-5 sm:p-6 border border-zinc-200 relative shadow-2xl overflow-hidden my-auto bg-white text-zinc-900">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-200 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 font-outfit">
                Write a Review
              </h3>
              <p className="text-[11px] text-zinc-500">
                Share your feedback with the Maverick Tech community
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-5 text-center space-y-3 relative z-10 animate-in fade-in">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-zinc-900 font-outfit">
                Thank You for Your Review!
              </h4>
              <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
                Your review has been published and formatted for WhatsApp!
              </p>
            </div>

            <div className="pt-2 flex justify-center gap-2">
              <button
                onClick={handleSendOnWhatsApp}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/25 flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Re-open WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
            {/* Star Rating Select */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-zinc-700">
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
                          ? "text-amber-500 fill-amber-400"
                          : "text-zinc-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-zinc-700 ml-2">
                  {rating} / 5 Stars
                </span>
              </div>
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Service Taken *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-blue-600 focus:bg-white font-medium shadow-sm"
              >
                {servicesList.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Client Name & College/Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  College / Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. SRM / Infosys"
                  value={collegeOrCompany}
                  onChange={(e) => setCollegeOrCompany(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm"
                />
              </div>
            </div>

            {/* Review Title */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Headline / Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 100% Working Code & Scored A+ in Viva!"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm"
              />
            </div>

            {/* Review Body */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Detailed Review *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Write your experience with our mentorship, project speed, communication, or code quality..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-600 focus:bg-white shadow-sm resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 border-t border-zinc-200 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 disabled:opacity-50"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isSubmitting ? "Publishing..." : "Submit Review"}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
