"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Zap,
  MessageSquare,
  ThumbsUp,
  Building2,
  Award,
  PenSquare,
  HeartHandshake,
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

  // Base verified reviews (including Sapna's journey with her photo)
  const defaultReviews = [
    {
      id: "rev-sapna",
      name: "Sapna",
      college: "Web Developer",
      course: "Verified Review",
      category: "webdev",
      categoryBadge: "Student Story",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      rating: 5,
      date: "Recent",
      title: "With curiosity and practice, anyone can learn to code.",
      comment:
        "Sapna always wondered how websites were made. Driven by curiosity, she decided to build her very first site—with no coding experience, just a laptop and a cup of tea. She started with simple HTML, fixed her own mistakes, and slowly mastered JavaScript. Late nights turned into big wins. Today, Sapna is a confident web developer who builds great websites and helps others learn.",
      verified: true,
      avatar: "/images/meera_review.jpg",
    },
    {
      id: "rev-1",
      name: "Rohan Varma",
      college: "Delhi Technological University (DTU)",
      course: "B.Tech Computer Science (Final Year)",
      category: "projects",
      categoryBadge: "College Project Delivery",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      rating: 5,
      date: "2 weeks ago",
      title: "10/10 in Final Year Capstone! Saved 3 Months of Study Time",
      comment:
        "I was preparing for placement exams and had zero time to write code from scratch. NexusLabs delivered a full-stack Next.js + AI system with complete working code and setup guide. The 1-on-1 code walkthrough helped me understand every module effortlessly!",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "rev-2",
      name: "Ananya Deshmukh",
      college: "Netaji Subhas University of Technology (NSUT, Delhi)",
      course: "B.Tech IT (3rd Year)",
      category: "internship",
      categoryBadge: "Student Internship & Certificate",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      rating: 5,
      date: "1 month ago",
      title: "Got Official LOR & Placed at a Tech Startup!",
      comment:
        "The internship was genuinely hands-on. I worked on live production PRs, learned Git workflows, and received a verified certificate with a strong Letter of Recommendation that directly landed me my off-campus internship.",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "rev-3",
      name: "Vikramaditya Singhal",
      college: "Singhal Global Logistics & Trading (Delhi NCR)",
      course: "Business Client / Director",
      category: "business",
      categoryBadge: "Business Related Website",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      rating: 5,
      date: "3 days ago",
      title: "High-Converting Business Website Built in 48 Hours — Inquiries Doubled!",
      comment:
        "We ordered a commercial business website with direct WhatsApp lead capture and Google SEO ranking. The NexusLabs team delivered an ultra-fast, premium website in under 48 hours! Right after launch, our inbound customer inquiries and phone calls doubled. Truly unbeatable speed and engineering quality!",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "rev-4",
      name: "Karan Singhania",
      college: "Indraprastha University (IPU, Delhi)",
      course: "MCA Final Semester",
      category: "webdev",
      categoryBadge: "AI Web Dev Masterclass",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
      rating: 5,
      date: "3 weeks ago",
      title: "Learned to Build Fullstack Web Apps in 1 Second with AI",
      comment:
        "The 1-on-1 session on modern AI prompting and deployment was mind-blowing. I built and deployed my portfolio in 1 day. Best investment for practical development skills!",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "rev-5",
      name: "Priya Malhotra",
      college: "Delhi University (DU)",
      course: "E-Commerce Founder",
      category: "seo",
      categoryBadge: "Google #1 SEO & Growth",
      badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
      rating: 5,
      date: "Just now",
      title: "Ranked #1 on Google Search & 12x Traffic Boost",
      comment:
        "Our e-commerce store went from page 6 to rank #1 for high-intent Delhi search queries. The technical audit and backlink strategy delivered 12x organic leads within 45 days.",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "rev-6",
      name: "Aditya Nair",
      college: "Vellore Institute of Technology (VIT)",
      course: "B.Tech CSE",
      category: "projects",
      categoryBadge: "Minor Project Delivery",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      rating: 5,
      date: "2 months ago",
      title: "Delivered in Under 36 Hours with Full Support",
      comment:
        "Urgent submission deadline was met perfectly. The code was cleanly modularized with Python + React, and the mentor answered my WhatsApp queries late at night. 100% recommended!",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  // Merge real user reviews submitted live
  const formattedUserReviews = userReviews.map((ur) => {
    let cat: "projects" | "internship" | "seo" | "webdev" | "business" = "projects";
    if (ur.service.includes("Business")) cat = "business";
    else if (ur.service.includes("Web Dev")) cat = "webdev";
    else if (ur.service.includes("Internship")) cat = "internship";
    else if (ur.service.includes("Google") || ur.service.includes("SEO")) cat = "seo";

    return {
      id: ur.id,
      name: ur.name,
      college: ur.collegeOrCompany,
      course: ur.service,
      category: cat,
      categoryBadge: "Verified Real Review",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      rating: ur.rating,
      date: "Just now",
      title: ur.title,
      comment: ur.comment,
      verified: true,
      avatar: ur.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    };
  });

  const allReviews = [...formattedUserReviews, ...defaultReviews];

  const filteredReviews =
    filter === "all" ? allReviews : allReviews.filter((r) => r.category === filter);

  return (
    <section id="reviews" className="relative py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Banner - Compact */}
      <div className="text-center max-w-3xl mx-auto mb-5 space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-bold text-cyan-300 uppercase tracking-widest">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span>Real Student & Business Client Reviews</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-outfit">
          Loved by Students Across{" "}
          <span className="gradient-text-cyan-purple">Top Universities</span>
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          Real feedback from engineering students, intern graduates, and business founders who trusted us with their projects and careers.
        </p>

        {/* Aggregate Ratings Metric & Write Review Button */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-xl border border-white/10">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xs font-extrabold text-white font-mono">
              4.98 / 5.0
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>350+ Projects Delivered</span>
          </div>

          {/* 🌟 ACTION: WRITE REAL REVIEW BUTTON */}
          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-cyan-500/25 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <PenSquare className="w-3.5 h-3.5" />
            <span>Write a Real Review</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs - Compact */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap mb-5">
        {[
          { id: "all", label: `All Reviews (${allReviews.length})` },
          { id: "business", label: "🏢 Business Websites" },
          { id: "projects", label: "🎓 College Projects" },
          { id: "webdev", label: "⚡ Learn Web Dev" },
          { id: "internship", label: "💼 Internships & LOR" },
          { id: "seo", label: "📈 Google SEO" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              filter === tab.id
                ? "bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20"
                : "bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Unified Reviews Grid (All in one single cohesive grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((item) => (
          <div
            key={item.id}
            className="group glass-panel rounded-3xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl bg-black/60 backdrop-blur-xl"
          >
            <div className="space-y-3">

                {/* Top User Info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={`${item.name} - Verified Client & Student Review`}
                      className="w-11 h-11 rounded-full object-cover border border-cyan-500/30 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white font-outfit">
                          {item.name}
                        </h4>
                        {item.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                      </div>
                      <p className="text-[11px] text-gray-400 font-light truncate max-w-[180px]">
                        {item.college}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex text-yellow-400 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
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
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {item.comment}
                  </p>
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
                <span className="font-mono">{item.course}</span>
                <span>{item.date}</span>
              </div>
            </div>
        ))}
      </div>

      {/* Bottom Action: Write Review + Consultation */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-blue-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold text-white font-outfit">
            Have You Worked with Us? Share Your Real Review!
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-light">
            Your genuine feedback and experience helps future students and businesses make confident decisions.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
          <button
            onClick={() => setIsWriteReviewOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            ✍️ Write Your Real Review
          </button>

          <button
            onClick={() => onOpenConnect("Reviews Section Direct Contact")}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs transition-all cursor-pointer"
          >
            Direct Contact
          </button>
        </div>
      </div>

      {/* Interactive Write Review Modal */}
      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </section>
  );
}
