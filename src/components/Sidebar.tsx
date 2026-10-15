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
      iconColor: "text-blue-600 bg-blue-50",
    },
    {
      id: "business-websites",
      title: "2. Business Websites",
      desc: "Professional custom websites with instant WhatsApp lead capture",
      icon: Building2,
      href: "#business-websites",
      iconColor: "text-emerald-600 bg-emerald-50",
    },
    {
      id: "learn-web-dev",
      title: "3. Learn Web Development",
      desc: "1-on-1 personalized mentorship to build live websites easily",
      icon: Zap,
      href: "#learn-web-dev",
      iconColor: "text-amber-600 bg-amber-50",
    },
    {
      id: "digital-marketing",
      title: "4. Google Rank & SEO Growth",
      desc: "Rank #1 on Google search algorithms & 10x organic client traffic",
      icon: TrendingUp,
      href: "#digital-marketing",
      iconColor: "text-purple-600 bg-purple-50",
    },
    {
      id: "internships",
      title: "5. Find Internships with Us",
      desc: "Work on live production repos, get experience certificate & LOR",
      icon: Briefcase,
      href: "#internships",
      iconColor: "text-indigo-600 bg-indigo-50",
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
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      {/* Slide-In Sidebar Drawer on Demand */}
      <aside className="fixed top-0 left-0 bottom-0 z-50 w-80 sm:w-96 max-w-[90vw] bg-white border-r border-zinc-200 p-4 sm:p-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-left duration-300 text-zinc-900">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-3.5 border-b border-zinc-200 mb-4">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="sm" glow={false} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-zinc-900 text-base tracking-tight font-outfit">
                    MAVERICK <span className="text-blue-600">TECH</span>
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    SERVICES
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 font-medium">
                  How We Help You
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
              title="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Clean List of Exactly the 5 Ways We Help Clients */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                Our Core Offerings:
              </p>
              <span className="text-[10px] font-mono text-blue-600 font-bold">
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
                        ? "bg-blue-50/70 border-blue-200 text-blue-950 shadow-xs"
                        : "bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl border border-zinc-200 group-hover:scale-105 transition-transform ${item.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold font-outfit text-zinc-900">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-zinc-500 leading-snug line-clamp-1 max-w-[170px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Quick Actions - Filled Color Button */}
        <div className="pt-3 border-t border-zinc-200 space-y-2">
          <button
            onClick={() => {
              onClose();
              onOpenConnect("Menu Direct Connect");
            }}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </button>
        </div>
      </aside>
    </>
  );
}
