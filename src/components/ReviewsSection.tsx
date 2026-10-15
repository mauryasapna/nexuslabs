"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  CheckCircle2,
  PenSquare,
  MessageSquare,
  Sparkles,
  Award,
} from "lucide-react";
import WriteReviewModal from "./WriteReviewModal";
import { getStoredReviews, StoredReview } from "@/lib/storage";

interface ReviewsSectionProps {
  onOpenConnect: (topic?: string) => void;
}

export default function ReviewsSection({ onOpenConnect }: ReviewsSectionProps) {
  const [filter, setFilter] = useState<"all" | "projects" | "internship" | "seo" | "webdev" | "business">("all");
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [userReviews, setUserReviews] = useState<StoredReview[]>([]);

  useEffect(() => {
    setUserReviews(getStoredReviews());
  }, []);

  const handleReviewSubmitted = (newReview: StoredReview) => {
    setUserReviews((prev) => [newReview, ...prev]);
  };

  // Format stored user reviews
  const formattedUserReviews = userReviews.map((ur) => {
    let cat: "projects" | "internship" | "seo" | "webdev" | "business" = "projects";
    if (ur.service.includes("Business")) cat = "business";
    else if (ur.service.includes("Web Dev") || ur.service.includes("Web")) cat = "webdev";
    else if (ur.service.includes("Internship")) cat = "internship";
    else if (ur.service.includes("Google") || ur.service.includes("SEO")) cat = "seo";

    return {
      id: ur.id,
      name: ur.name,
      college: ur.collegeOrCompany,
      course: ur.service,
      category: cat,
      categoryBadge: "Verified Client Review",
      badgeColor: "bg-white/10 text-white border-white/20",
      rating: ur.rating,
      date: new Date(ur.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      title: ur.title,
      comment: ur.comment,
      verified: true,
      avatar: ur.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    };
  });

  const filteredReviews =
    filter === "all"
      ? formattedUserReviews
      : formattedUserReviews.filter((r) => r.category === filter);

  // Compute average rating dynamically if reviews exist
  const averageRating =
    userReviews.length > 0
      ? (
          userReviews.reduce((sum, r) => sum + r.rating, 0) / userReviews.length
        ).toFixed(1)
      : null;

  return (
    <section id="reviews" className="relative py-10 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/15 text-[11px] font-bold text-zinc-300 uppercase tracking-widest">
          <Star className="w-3 h-3 text-white fill-white" />
          <span>Client & Student Feedback</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Verified Reviews from{" "}
          <span className="gradient-text-silver">Students & Partners</span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
          Read genuine reviews from engineering students and business partners, or share your own experience with Maverick Tech.
        </p>

        {/* Action Button & Stats */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {averageRating && (
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <div className="flex text-white">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                ))}
              </div>
              <span className="text-xs font-extrabold text-white font-mono">
                {averageRating} / 5.0
              </span>
            </div>
          )}

          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <PenSquare className="w-3.5 h-3.5" />
            <span>Write a Review</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs if multiple reviews exist */}
      {formattedUserReviews.length > 0 && (
        <div className="flex items-center justify-center gap-1.5 flex-wrap mb-6">
          {[
            { id: "all", label: `All Reviews (${formattedUserReviews.length})` },
            { id: "projects", label: "🎓 College Projects" },
            { id: "business", label: "🏢 Business Websites" },
            { id: "webdev", label: "⚡ Web Dev Mentorship" },
            { id: "internship", label: "💼 Internships" },
            { id: "seo", label: "📈 Google SEO" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-white text-black border-white shadow-sm"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Reviews Display or Empty State */}
      {filteredReviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="group glass-panel rounded-3xl p-5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl bg-zinc-950/80 backdrop-blur-xl"
            >
              <div className="space-y-3">
                {/* Top User Info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={`${item.name} - Reviewer`}
                      className="w-11 h-11 rounded-full object-cover border border-white/20 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white font-outfit">
                          {item.name}
                        </h4>
                        {item.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 font-light truncate max-w-[180px]">
                        {item.college}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-white shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>

                {/* Category Badge */}
                <div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeColor}`}>
                    {item.categoryBadge}
                  </span>
                </div>

                {/* Title & Comment */}
                <div className="space-y-1.5">
                  <h5 className="text-xs sm:text-sm font-bold text-white leading-snug font-outfit">
                    &quot;{item.title}&quot;
                  </h5>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {item.comment}
                  </p>
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-400">
                <span className="font-mono">{item.course}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State Card */
        <div className="max-w-2xl mx-auto text-center p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl backdrop-blur-xl">
          <div className="w-14 h-14 rounded-2xl bg-white/10 text-white border border-white/20 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-7 h-7" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white font-outfit mb-2">
            Share Your Experience
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6 max-w-lg mx-auto">
            Have you completed a college project, launched a business website, completed an internship, or learned web development with Maverick Tech? Click below to submit your review!
          </p>

          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="px-6 py-3 rounded-2xl bg-white hover:bg-zinc-200 text-black font-bold text-sm shadow-xl transition-all cursor-pointer active:scale-95 inline-flex items-center gap-2"
          >
            <PenSquare className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>
      )}

      {/* Interactive Write Review Modal */}
      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </section>
  );
}
