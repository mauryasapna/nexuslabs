"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import {
  GraduationCap,
  Briefcase,
  Building2,
  Zap,
  TrendingUp,
  PhoneCall,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import InstagramIcon from "./InstagramIcon";

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
  const instagramUrl = "https://www.instagram.com/codineaura?igsh=dmV2N2R5bmVqZ2Ns";

  // Exactly the 5 Core Ways We Help Clients & Students
  const coreHelpServices = [
    {
      id: "projects",
      title: "1. College Projects",
      desc: "1st, 2nd, 3rd & Final Year 100% tested working code & full setup",
      badge: "100% Code",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      icon: GraduationCap,
      iconColor: "text-cyan-400",
      href: "#projects",
    },
    {
      id: "business-websites",
      title: "2. Business Websites",
      desc: "Professional custom websites with instant WhatsApp lead capture",
      badge: "24-48 Hrs",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      icon: Building2,
      iconColor: "text-blue-400",
      href: "#business-websites",
    },
    {
      id: "learn-web-dev",
      title: "3. Learn Web Development",
      desc: "1-on-1 personalized mentorship to build live websites easily",
      badge: "1-on-1 Live",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
      icon: Zap,
      iconColor: "text-yellow-400",
      href: "#learn-web-dev",
    },
    {
      id: "digital-marketing",
      title: "4. Google Rank & SEO Growth",
      desc: "Rank #1 on Google search algorithms & 10x organic client traffic",
      badge: "Google #1",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      icon: TrendingUp,
      iconColor: "text-emerald-400",
      href: "#digital-marketing",
    },
    {
      id: "internships",
      title: "5. Find Internships with Me",
      desc: "Work on live production repos, get experience certificate & LOR",
      badge: "Official LOR",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      icon: Briefcase,
      iconColor: "text-purple-400",
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

      {/* Slide-In Sidebar Drawer on Demand */}
      <aside className="fixed top-0 left-0 bottom-0 z-50 w-80 sm:w-96 max-w-[90vw] bg-[#030712]/98 backdrop-blur-3xl border-r border-white/10 p-4 sm:p-5 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col justify-between animate-in slide-in-from-left duration-300">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <BrandLogo size="sm" glow={true} />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-white text-base tracking-tight font-outfit">
                    NEXUS<span className="text-cyan-400">LABS</span>
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    SERVICES
                  </span>
                </div>
                <p className="text-[10px] text-gray-400">
                  How We Help You
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Clean List of Exactly the 5 Ways We Help Clients */}
          <div className="space-y-2">
            <div className="flex items-center justify-between px-1">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                How We Help Our Clients:
              </p>
              <span className="text-[10px] font-mono text-cyan-400 font-bold">
                5 Core Offerings
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
                        ? "bg-cyan-500/15 border-cyan-500/50 shadow-md text-white"
                        : "bg-white/[0.03] hover:bg-white/[0.08] border-white/5 text-gray-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${item.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold font-outfit text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-gray-400 leading-snug line-clamp-1 max-w-[170px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Quick Actions */}
        <div className="pt-3 border-t border-white/10 space-y-2">
          <button
            onClick={() => {
              onClose();
              onOpenConnect("Menu Direct Connect");
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Direct Contact with Sapna</span>
          </button>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl bg-pink-950/40 hover:bg-pink-900/50 border border-pink-500/30 text-pink-300 font-bold text-[11px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
            <span>Follow @codineaura on Instagram</span>
          </a>
        </div>
      </aside>
    </>
  );
}
