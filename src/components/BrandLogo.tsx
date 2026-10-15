"use client";

import React from "react";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  glow?: boolean;
  animated?: boolean;
}

export default function BrandLogo({
  size = "md",
  className = "",
  glow = true,
  animated = false,
}: BrandLogoProps) {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-18 h-18",
    xl: "w-28 h-28",
    hero: "w-40 h-40 md:w-52 md:h-52",
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${sizeMap[size]} ${className} ${
        animated ? "animate-float" : ""
      }`}
    >
      {/* Subtle Monochrome Ambient glow */}
      {glow && (
        <div className="absolute inset-0 bg-white/[0.08] rounded-full blur-xl -z-10 animate-pulse-glow" />
      )}

      {/* Maverick "M" Futuristic Platinum / Chrome Emblem */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_8px_24px_rgba(255,255,255,0.15)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Platinum / Chrome Gradients */}
          <linearGradient id="chromeLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#d4d4d8" />
            <stop offset="100%" stopColor="#71717a" />
          </linearGradient>

          <linearGradient id="chromeDark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#27272a" />
            <stop offset="60%" stopColor="#52525b" />
            <stop offset="100%" stopColor="#a1a1aa" />
          </linearGradient>

          <linearGradient id="mirrorSheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
          </linearGradient>

          <filter id="monoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hexagonal Shield Ring */}
        <polygon
          points="100,14 176,56 176,144 100,186 24,144 24,56"
          stroke="url(#chromeLight)"
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeDasharray="18 6"
        />

        {/* Inner Subtle Accent Hexagon */}
        <polygon
          points="100,24 166,62 166,138 100,176 34,138 34,62"
          stroke="#ffffff"
          strokeWidth="1"
          strokeOpacity="0.15"
        />

        {/* --- Iconic Geometric "M" (Maverick) Wings --- */}
        {/* Left Wing Outer Pillar */}
        <polygon
          points="40,150 40,65 68,50 68,135"
          fill="url(#chromeDark)"
        />
        <polygon
          points="40,150 40,65 68,50 68,135"
          fill="url(#mirrorSheen)"
          fillOpacity="0.2"
        />

        {/* Left Diagonal Chevron Inward */}
        <polygon
          points="68,50 100,105 100,135 68,78"
          fill="url(#chromeLight)"
          filter="url(#monoGlow)"
        />

        {/* Right Diagonal Chevron Inward */}
        <polygon
          points="132,50 100,105 100,135 132,78"
          fill="url(#chromeLight)"
          filter="url(#monoGlow)"
        />

        {/* Right Wing Outer Pillar */}
        <polygon
          points="160,150 160,65 132,50 132,135"
          fill="url(#chromeDark)"
        />
        <polygon
          points="160,150 160,65 132,50 132,135"
          fill="url(#mirrorSheen)"
          fillOpacity="0.2"
        />

        {/* Central Floating Diamond / Prism Apex */}
        <polygon
          points="100,38 116,62 100,86 84,62"
          fill="#ffffff"
          fillOpacity="0.9"
          filter="url(#monoGlow)"
        />

        {/* High-Precision Bevel Edge Lines */}
        <line x1="40" y1="65" x2="68" y2="50" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="160" y1="65" x2="132" y2="50" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="68" y1="50" x2="100" y2="105" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="132" y1="50" x2="100" y2="105" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="100" y1="86" x2="100" y2="155" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" />

        {/* Quantum Light Spheres */}
        <circle cx="100" cy="62" r="3" fill="#ffffff" filter="url(#monoGlow)" />
        <circle cx="40" cy="150" r="2.5" fill="#d4d4d8" />
        <circle cx="160" cy="150" r="2.5" fill="#d4d4d8" />
      </svg>
    </div>
  );
}
