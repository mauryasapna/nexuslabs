"use client";

import React from "react";
import BrandLogo from "./BrandLogo";
import {
  GraduationCap,
  Briefcase,
  Mail,
  ShieldCheck,
  RotateCcw,
  MapPin,
  Phone,
  PhoneCall,
  Star,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

interface FooterProps {
  onReplayIntro: () => void;
  onOpenConnect: (topic?: string) => void;
}

export default function Footer({ onReplayIntro, onOpenConnect }: FooterProps) {
  return (
    <footer className="relative bg-zinc-50 border-t border-zinc-200 pt-10 pb-10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8">
        {/* 1. TOP WHATSAPP CONNECT STRIP */}
        <div className="p-5 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Connect on WhatsApp</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 font-outfit">
              Need a Custom Project, Internship, or Tech Consulting?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-normal">
              Connect directly with our senior mentors on WhatsApp for live updates and support.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp Call Button - Filled Color */}
            <button
              onClick={() => onOpenConnect("Footer WhatsApp Urgent Connect")}
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-500/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp / Call: +91 91424 79986</span>
            </button>
          </div>
        </div>

        {/* 2. COMPREHENSIVE MULTI-COLUMN SERVICE DIRECTORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-zinc-200">
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" glow={false} />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-zinc-900 font-outfit">
                  MAVERICK <span className="text-blue-600">TECH</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
              India&apos;s premier engineering project studio & AI development academy. We build ready-to-submit capstone projects, provide verified student internships with LOR, and build high-performance business websites.
            </p>

            {/* Official Contact Card */}
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2 max-w-sm text-xs">
              <div className="flex items-center gap-2 text-zinc-700">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span className="font-bold text-zinc-900">Bangalore, India (Headquarters & Mentorship Desk)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:nexuslab27@gmail.com" className="hover:text-blue-600 transition-colors font-mono">
                  nexuslab27@gmail.com (Email Support)
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+919142479986" className="hover:text-emerald-600 transition-colors font-mono">
                  +91 91424 79986 (Direct Call)
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="https://wa.me/919142479986" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors font-mono">
                  +91 91424 79986 (Direct WhatsApp)
                </a>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-900 shadow-xs transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-zinc-600" />
                <span>Replay 3D Cinematic Opening</span>
              </button>
            </div>
          </div>

          {/* Col 2: College Projects & Business Websites */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 flex items-center gap-1.5 font-outfit">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Projects & Business</span>
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors font-semibold">
                  College Projects (1st-Final Yr)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  100% Working Source Code
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Setup Guide & Architecture
                </a>
              </li>
              <li className="pt-2 border-t border-zinc-200">
                <a href="#business-websites" className="hover:text-blue-600 transition-colors font-semibold text-zinc-800">
                  Business Website (Professional)
                </a>
              </li>
              <li>
                <a href="#business-websites" className="hover:text-blue-600 transition-colors">
                  Company & Retail Shop Sites
                </a>
              </li>
              <li>
                <a href="#business-websites" className="hover:text-blue-600 transition-colors">
                  WhatsApp Direct Lead Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Learn Web Dev, Google Rank & Internships */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 flex items-center gap-1.5 font-outfit">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>Learning, SEO & Career</span>
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#learn-web-dev" className="hover:text-blue-600 transition-colors font-semibold text-zinc-800">
                  Learn Web Dev Easily
                </a>
              </li>
              <li>
                <a href="#learn-web-dev" className="hover:text-blue-600 transition-colors">
                  1-on-1 Personal Live Mentorship
                </a>
              </li>
              <li className="pt-2 border-t border-zinc-200">
                <a href="#digital-marketing" className="hover:text-blue-600 transition-colors font-semibold text-zinc-800">
                  Google Rank with Marketing
                </a>
              </li>
              <li>
                <a href="#digital-marketing" className="hover:text-blue-600 transition-colors">
                  Rank #1 on Google & 10x Traffic
                </a>
              </li>
              <li className="pt-2 border-t border-zinc-200">
                <a href="#internships" className="hover:text-blue-600 transition-colors font-semibold text-zinc-800">
                  Find Internship with Maverick Tech
                </a>
              </li>
              <li>
                <a href="#internships" className="hover:text-blue-600 transition-colors">
                  Live Codebase, Certificate & LOR
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social, Reviews & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 flex items-center gap-1.5 font-outfit">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Social & Reviews</span>
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#reviews" className="hover:text-blue-600 transition-colors">
                  Community Reviews
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-600 transition-colors">
                  Write a Review
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-600 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenConnect("Direct Mentorship Request")}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer font-medium"
                >
                  1-on-1 Mentorship Request
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT & TRUST BADGES */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <p>© 2026 MAVERICK TECH • All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-zinc-600">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              100% Confidential Code
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Submissions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
