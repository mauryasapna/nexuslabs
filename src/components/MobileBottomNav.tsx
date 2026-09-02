"use client";

import React from "react";
import {
  GraduationCap,
  Building2,
  Zap,
  SlidersHorizontal,
  PhoneCall,
  Briefcase,
} from "lucide-react";

interface MobileBottomNavProps {
  onOpenSidebar: () => void;
  onOpenConnect: () => void;
}

export default function MobileBottomNav({
  onOpenSidebar,
  onOpenConnect,
}: MobileBottomNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#030712]/95 backdrop-blur-2xl border-t border-white/10 px-2 py-2 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-around">
        <a
          href="#projects"
          className="flex flex-col items-center gap-1 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <GraduationCap className="w-5 h-5 text-cyan-400" />
          <span className="text-[10px] font-semibold">Projects</span>
        </a>

        <a
          href="#business-websites"
          className="flex flex-col items-center gap-1 p-1 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <Building2 className="w-5 h-5 text-blue-400" />
          <span className="text-[10px] font-semibold">Business</span>
        </a>

        {/* Center Menu Button */}
        <button
          onClick={onOpenSidebar}
          className="flex flex-col items-center -mt-5 p-2 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 border border-cyan-400/40 text-white shadow-lg shadow-cyan-500/30 cursor-pointer"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span className="text-[9px] font-bold mt-0.5">Menu</span>
        </button>

        <a
          href="#learn-web-dev"
          className="flex flex-col items-center gap-1 p-1 text-gray-400 hover:text-yellow-400 transition-colors"
        >
          <Zap className="w-5 h-5 text-yellow-400" />
          <span className="text-[10px] font-semibold">Learn Web</span>
        </a>

        <button
          onClick={onOpenConnect}
          className="flex flex-col items-center gap-1 p-1 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
        >
          <PhoneCall className="w-5 h-5 text-emerald-400" />
          <span className="text-[10px] font-semibold">Contact</span>
        </button>
      </div>
    </div>
  );
}
