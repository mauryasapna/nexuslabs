"use client";

import React from "react";
import {
  GraduationCap,
  Building2,
  Zap,
  SlidersHorizontal,
  MessageCircle,
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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-2xl border-t border-white/10 px-2 py-2 shadow-[0_-10px_25px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-around">
        <a
          href="#projects"
          className="flex flex-col items-center gap-1 p-1 text-zinc-400 hover:text-white transition-colors"
        >
          <GraduationCap className="w-5 h-5 text-white" />
          <span className="text-[10px] font-semibold">Projects</span>
        </a>

        <a
          href="#business-websites"
          className="flex flex-col items-center gap-1 p-1 text-zinc-400 hover:text-white transition-colors"
        >
          <Building2 className="w-5 h-5 text-zinc-300" />
          <span className="text-[10px] font-semibold">Business</span>
        </a>

        {/* Center Menu Button (Monochrome) */}
        <button
          onClick={onOpenSidebar}
          className="flex flex-col items-center -mt-5 p-2.5 rounded-2xl bg-white border border-white text-black shadow-lg shadow-white/10 cursor-pointer active:scale-95 transition-all"
        >
          <SlidersHorizontal className="w-5 h-5 text-black" />
          <span className="text-[9px] font-bold mt-0.5">Menu</span>
        </button>

        <a
          href="#learn-web-dev"
          className="flex flex-col items-center gap-1 p-1 text-zinc-400 hover:text-white transition-colors"
        >
          <Zap className="w-5 h-5 text-zinc-300" />
          <span className="text-[10px] font-semibold">Learn Web</span>
        </a>

        <button
          onClick={onOpenConnect}
          className="flex flex-col items-center gap-1 p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
