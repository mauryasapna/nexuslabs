"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import { UserRole } from "./AuthModal";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Zap,
  Menu,
  PhoneCall,
} from "lucide-react";

interface NavbarProps {
  user: { name: string; email: string; role: UserRole } | null;
  onRoleToggle: (newRole: UserRole) => void;
  onReplayIntro: () => void;
  onOpenAuth: () => void;
  onOpenConnect: (topic?: string) => void;
  onLogout: () => void;
  onOpenSidebar: () => void;
}

export default function Navbar({
  user,
  onRoleToggle,
  onReplayIntro,
  onOpenAuth,
  onOpenConnect,
  onLogout,
  onOpenSidebar,
}: NavbarProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-black/90 border-b border-white/10 transition-all duration-300 shadow-2xl overflow-hidden">
      {/* Responsive Full-width container */}
      <div className="w-full px-2.5 sm:px-4 lg:px-6 h-16 sm:h-18 flex items-center justify-between gap-2 max-w-full">
        {/* Left: Corner Hamburger Button + Website Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          {/* Corner Hamburger Menu Button */}
          <button
            onClick={onOpenSidebar}
            className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center shrink-0"
            title="Open Services Menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>

          {/* Website Name & Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer group flex items-center gap-2 min-w-0"
            title="Go to Top / Home"
          >
            <BrandLogo size="sm" glow={true} />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-lg lg:text-xl tracking-tight text-white font-outfit truncate">
                  MAVERICK <span className="text-zinc-400">TECH</span>
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 font-light hidden sm:block truncate">
                Engineering • Websites • Mentorship
              </p>
            </div>
          </div>
        </div>

        {/* Center: Direct Core Service Links (Monochrome & Clean) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-white/[0.04] p-1 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
            <span>Projects</span>
          </button>

          <button
            onClick={() => scrollToSection("business-websites")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Building2 className="w-3.5 h-3.5 text-zinc-300" />
            <span>Business Sites</span>
          </button>

          <button
            onClick={() => scrollToSection("learn-web-dev")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-zinc-300" />
            <span>Learn Web</span>
          </button>

          <button
            onClick={() => scrollToSection("internships")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5 text-zinc-300" />
            <span>Internships</span>
          </button>

          <button
            onClick={() => onOpenConnect("Navbar Direct Contact")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-zinc-300" />
            <span>Direct Contact</span>
          </button>
        </nav>

        {/* Right: Direct Contact Call / WhatsApp Button (Monochrome White) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => onOpenConnect("Header Direct Connect")}
            className="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-black bg-white hover:bg-zinc-200 shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
}
