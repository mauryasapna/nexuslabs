"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import {
  GraduationCap,
  Briefcase,
  Zap,
  TrendingUp,
  Mail,
  ShieldCheck,
  Heart,
  RotateCcw,
  MapPin,
  Phone,
  PhoneCall,
  MessageSquare,
  Star,
  CheckCircle2,
  FileCode,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import InstagramIcon from "./InstagramIcon";

interface FooterProps {
  onReplayIntro: () => void;
  onOpenConnect: (topic?: string) => void;
}

export default function Footer({ onReplayIntro, onOpenConnect }: FooterProps) {
  const instagramUrl = "https://www.instagram.com/codineaura?igsh=dmV2N2R5bmVqZ2Ns";

  return (
    <footer className="relative bg-[#02050e] border-t border-white/10 pt-8 pb-8 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6">
        {/* 1. TOP NEWSLETTER, INSTAGRAM & DIRECT WHATSAPP CONNECT STRIP */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-pink-950/40 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 text-xs font-bold border border-pink-500/30">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Follow Us on Instagram @codineaura</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-outfit">
              Need a Custom Project, Internship, or Daily AI Tech Tips?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              Connect directly with our senior mentors in Delhi on WhatsApp or DM us on Instagram for live updates.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Instagram Follow Button */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-rose-400 text-white font-bold text-xs shadow-lg shadow-pink-500/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @codineaura</span>
            </a>

            {/* WhatsApp Call Button */}
            <button
              onClick={() => onOpenConnect("Footer WhatsApp Urgent Connect")}
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp / Call: +91 91424 79986</span>
            </button>
          </div>
        </div>

        {/* 2. COMPREHENSIVE MULTI-COLUMN SERVICE DIRECTORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Delhi Location & Social */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" glow={true} />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-outfit">
                  NEXUS<span className="text-cyan-400">LABS</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              India&apos;s premier engineering project studio & AI development academy. We build ready-to-submit capstone projects, provide verified student internships with LOR, and teach 1-second AI web development.
            </p>

            {/* Official Contact Card (Bangalore & Delhi) */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 max-w-sm text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="font-semibold text-white">Bangalore, India (Headquarters & Mentorship Desk)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:nexuslab27@gmail.com" className="hover:text-amber-300 transition-colors font-mono">
                  nexuslab27@gmail.com (Email Support)
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919142479986" className="hover:text-emerald-300 transition-colors font-mono">
                  +91 91424 79986 (Direct Call)
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <PhoneCall className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="https://wa.me/919142479986" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors font-mono">
                  +91 91424 79986 (Direct WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors font-mono"
                >
                  @codineaura (Official Instagram)
                </a>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Replay 3D Cinematic Opening</span>
              </button>
            </div>
          </div>

          {/* Col 2: College Projects & Business Websites */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-outfit">
              <GraduationCap className="w-4 h-4" />
              <span>Projects & Business</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors font-medium">
                  College Projects (1st-Final Yr)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  100% Working Source Code
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  Setup Guide & Architecture
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <a href="#business-websites" className="hover:text-cyan-300 transition-colors font-medium text-cyan-300">
                  Business Website (Professional)
                </a>
              </li>
              <li>
                <a href="#business-websites" className="hover:text-cyan-300 transition-colors">
                  Company & Retail Shop Sites
                </a>
              </li>
              <li>
                <a href="#business-websites" className="hover:text-cyan-300 transition-colors">
                  WhatsApp Direct Lead Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Learn Web Dev, Google Rank & Internships */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-outfit">
              <Briefcase className="w-4 h-4" />
              <span>Learning, SEO & Career</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#learn-web-dev" className="hover:text-yellow-300 transition-colors font-medium text-yellow-300">
                  Learn Web Dev Easily with Me
                </a>
              </li>
              <li>
                <a href="#learn-web-dev" className="hover:text-yellow-300 transition-colors">
                  1-on-1 Personal Live Mentorship
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <a href="#digital-marketing" className="hover:text-pink-300 transition-colors font-medium text-pink-300">
                  Google Rank with Marketing
                </a>
              </li>
              <li>
                <a href="#digital-marketing" className="hover:text-pink-300 transition-colors">
                  Rank #1 on Google & 10x Traffic
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <a href="#internships" className="hover:text-purple-300 transition-colors font-medium text-purple-300">
                  Find Internship with Me
                </a>
              </li>
              <li>
                <a href="#internships" className="hover:text-purple-300 transition-colors">
                  Live Codebase, Certificate & LOR
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social, Reviews & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-pink-400 flex items-center gap-1.5 font-outfit">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>Social & Reviews</span>
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors flex items-center gap-1.5 text-pink-400 font-semibold"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram: @codineaura</span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-pink-300 transition-colors">
                  Student Success Stories (350+)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-pink-300 transition-colors">
                  DTU, NSUT, IPU, DU Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenConnect("Direct Mentorship Request")}
                  className="hover:text-pink-300 transition-colors text-left cursor-pointer"
                >
                  1-on-1 Mentorship Request
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT & TRUST BADGES */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <p>© 2026 NEXUSLABS • Delhi, India. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@codineaura</span>
            </a>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              100% Confidential Code
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Verified Submissions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
