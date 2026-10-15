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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-t border-zinc-200 px-2 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        <a
          href="#projects"
          className="flex flex-col items-center gap-1 p-1 text-zinc-600 hover:text-blue-600 transition-colors"
        >
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <span className="text-[10px] font-bold">Projects</span>
        </a>

        <a
          href="#business-websites"
          className="flex flex-col items-center gap-1 p-1 text-zinc-600 hover:text-blue-600 transition-colors"
        >
          <Building2 className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold">Business</span>
        </a>

        {/* Center Menu Button - Filled Color */}
        <button
          onClick={onOpenSidebar}
          className="flex flex-col items-center -mt-5 p-2.5 rounded-2xl bg-blue-600 border border-blue-500 text-white shadow-lg shadow-blue-500/25 cursor-pointer active:scale-95 transition-all"
        >
          <SlidersHorizontal className="w-5 h-5 text-white" />
          <span className="text-[9px] font-bold mt-0.5">Menu</span>
        </button>

        <a
          href="#learn-web-dev"
          className="flex flex-col items-center gap-1 p-1 text-zinc-600 hover:text-blue-600 transition-colors"
        >
          <Zap className="w-5 h-5 text-amber-500" />
          <span className="text-[10px] font-bold">Learn Web</span>
        </a>

        <button
          onClick={onOpenConnect}
          className="flex flex-col items-center gap-1 p-1 text-zinc-600 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
