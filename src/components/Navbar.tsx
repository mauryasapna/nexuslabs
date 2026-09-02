"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import { UserRole } from "./AuthModal";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Zap,
  Sparkles,
  ChevronDown,
  LogOut,
  Layers,
  PhoneCall,
  Menu,
  Home,
  HelpCircle,
  MessageSquare,
  Phone,
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
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const activeRole = user?.role || "student";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#030712]/95 border-b border-white/10 transition-all duration-300 shadow-2xl overflow-hidden">
      {/* Responsive Full-width container (Zero cut-off on mobile phones) */}
      <div className="w-full px-2.5 sm:px-4 lg:px-6 h-16 sm:h-18 flex items-center justify-between gap-2 max-w-full">
        {/* Left: Corner Hamburger Button + Website Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
          {/* Corner Hamburger Menu Button */}
          <button
            onClick={onOpenSidebar}
            className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 text-gray-200 hover:text-cyan-400 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center shrink-0"
            title="Open Services Menu"
          >
            <Menu className="w-5 h-5 text-cyan-400" />
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
                  NEXUS<span className="text-cyan-400">LABS</span>
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-light hidden sm:block truncate">
                Explore • Build • Showcase
              </p>
            </div>
          </div>
        </div>

        {/* Center: Direct Core Service Links (Visible on desktop/tablets) */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-white/[0.04] p-1 rounded-2xl border border-white/10 shrink-0">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-200 hover:text-cyan-400 hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Projects</span>
          </button>

          <button
            onClick={() => scrollToSection("business-websites")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-200 hover:text-cyan-400 hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Business Sites</span>
          </button>

          <button
            onClick={() => scrollToSection("learn-web-dev")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-200 hover:text-yellow-400 hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>Learn Web</span>
          </button>

          <button
            onClick={() => scrollToSection("internships")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-200 hover:text-purple-400 hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Internships</span>
          </button>

          <button
            onClick={() => onOpenConnect("Navbar Direct Contact")}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-200 hover:text-emerald-400 hover:bg-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Contact</span>
          </button>
        </nav>

        {/* Right: Direct Contact Call / WhatsApp Button (Clean & Mobile-Friendly) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => onOpenConnect("Header Direct Connect")}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Contact</span>
          </button>
        </div>
      </div>
    </header>
  );
}
