"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Zap,
  TrendingUp,
  X,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConnect: (topic?: string) => void;
  onReplayIntro?: () => void;
}

export default function Sidebar({
  isOpen,
  onClose,
  onOpenConnect,
}: SidebarProps) {
  const [activeItem, setActiveItem] = useState("projects");

  const coreHelpServices = [
    {
      id: "projects",
      title: "1. College Projects",
      desc: "1st, 2nd, 3rd & Final Year 100% tested working code & full setup",
      icon: GraduationCap,
      href: "#projects",
    },
    {
      id: "business-websites",
      title: "2. Business Websites",
      desc: "Professional custom websites with instant WhatsApp lead capture",
      icon: Building2,
      href: "#business-websites",
    },
    {
      id: "learn-web-dev",
      title: "3. Learn Web Development",
      desc: "1-on-1 personalized mentorship to build live websites easily",
      icon: Zap,
      href: "#learn-web-dev",
    },
    {
      id: "digital-marketing",
      title: "4. Google Rank & SEO Growth",
      desc: "Rank #1 on Google search algorithms & 10x organic client traffic",
      icon: TrendingUp,
      href: "#digital-marketing",
    },
    {
      id: "internships",
      title: "5. Find Internships with Us",
      desc: "Work on live production repos, get experience certificate & LOR",
      icon: Briefcase,
      href: "#internships",
    },
  ];

  const handleLinkClick = (item: typeof coreHelpServices[0]) => {
    setActiveItem(item.id);
    onClose();
    const el = document.querySelector(item.href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop Overlay (Click to close) */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
      />

      {/* Slide-In Sidebar Drawer on Demand (Monochrome) */}
      <aside className="fixed top-0 left-0 bottom-0 z-50 w-80 sm:w-96 max-w-[90vw] bg-black/95 backdrop-blur-3xl border-r border-white/10 p-4 sm:p-5 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col justify-between animate-in slide-in-from-left duration-300">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="sm" glow={true} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-white text-base tracking-tight font-outfit">
                    MAVERICK <span className="text-zinc-400">TECH</span>
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase rounded-full bg-white/10 text-white border border-white/20">
                    SERVICES
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400">
                  How We Help You
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              title="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Clean List of Exactly the 5 Ways We Help Clients */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                Our Core Offerings:
              </p>
              <span className="text-[10px] font-mono text-zinc-300 font-bold">
                5 Pillars
              </span>
            </div>

            <div className="space-y-2 pt-1">
              {coreHelpServices.map((item) => {
                const Icon = item.icon;
                const isSelected = activeItem === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? "bg-white/10 border-white/25 text-white"
                        : "bg-white/[0.03] hover:bg-white/[0.08] border-white/5 text-zinc-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold font-outfit text-white group-hover:text-zinc-200 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-zinc-400 leading-snug line-clamp-1 max-w-[170px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Quick Actions (Monochrome) */}
        <div className="pt-3 border-t border-white/10 space-y-2">
          <button
            onClick={() => {
              onClose();
              onOpenConnect("Menu Direct Connect");
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </button>
        </div>
      </aside>
    </>
  );
}
