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
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
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
    <section id="reviews" className="relative py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 uppercase tracking-widest shadow-sm">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>Client & Student Feedback</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight font-outfit">
          Real Stories. <span className="gradient-text-cyan-purple">Real Results.</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-xl mx-auto">
          Reviews from students and business owners who have used Maverick Tech for their projects, websites, and technical mentorship.
        </p>

        {/* Dynamic Average Rating Display */}
        {averageRating && (
          <div className="flex items-center justify-center gap-2 pt-1 text-xs text-zinc-600">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span>
              <strong className="text-zinc-900 font-bold">{averageRating} / 5.0</strong> ({userReviews.length} Verified Reviews)
            </span>
          </div>
        )}

        {/* Write a Review Button */}
        <div className="pt-2">
          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
          >
            <PenSquare className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      {formattedUserReviews.length > 0 && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 flex-wrap">
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
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-xs ${
                filter === tab.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                  : "bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700"
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
              className="group bg-white rounded-3xl p-5 border border-zinc-200 hover:border-zinc-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-md"
            >
              <div className="space-y-3">
                {/* Top User Info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={`${item.name} - Reviewer`}
                      className="w-11 h-11 rounded-full object-cover border border-zinc-200 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-zinc-900 font-outfit">
                          {item.name}
                        </h4>
                        {item.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-500 font-medium truncate max-w-[180px]">
                        {item.college}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-amber-500 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
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
                  <h5 className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug font-outfit">
                    &quot;{item.title}&quot;
                  </h5>
                  <p className="text-xs text-zinc-600 font-normal leading-relaxed">
                    {item.comment}
                  </p>
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                <span className="font-mono font-medium">{item.course}</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State Card */
        <div className="max-w-2xl mx-auto text-center p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-7 h-7" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-outfit mb-2">
            Share Your Experience
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-6 max-w-lg mx-auto">
            Completed a project, launched a business website, or finished mentorship with us? Be the first to drop a review and share your story!
          </p>

          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/25 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <PenSquare className="w-4 h-4" />
            <span>Write the First Review</span>
          </button>
        </div>
      )}

      {/* Review Submission Modal */}
      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </section>
  );
}
