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
  glow = false,
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
      {/* Subtle Ambient glow */}
      {glow && (
        <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-xl -z-10 animate-pulse-glow" />
      )}

      {/* Maverick "M" Futuristic Blue & Dark Chrome Emblem */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brandBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>

          <linearGradient id="brandDark" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="60%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="brandSheen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
          </linearGradient>

          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hexagonal Shield Ring */}
        <polygon
          points="100,14 176,56 176,144 100,186 24,144 24,56"
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeOpacity="0.6"
          strokeDasharray="18 6"
        />

        {/* Inner Accent Hexagon */}
        <polygon
          points="100,24 166,62 166,138 100,176 34,138 34,62"
          stroke="#4f46e5"
          strokeWidth="1.2"
          strokeOpacity="0.35"
        />

        {/* --- Iconic Geometric "M" (Maverick) Wings --- */}
        {/* Left Wing Outer Pillar */}
        <polygon
          points="40,150 40,65 68,50 68,135"
          fill="url(#brandDark)"
        />
        <polygon
          points="40,150 40,65 68,50 68,135"
          fill="url(#brandSheen)"
          fillOpacity="0.25"
        />

        {/* Left Diagonal Chevron Inward */}
        <polygon
          points="68,50 100,105 100,135 68,78"
          fill="url(#brandBlue)"
          filter="url(#logoGlow)"
        />

        {/* Right Diagonal Chevron Inward */}
        <polygon
          points="132,50 100,105 100,135 132,78"
          fill="url(#brandBlue)"
          filter="url(#logoGlow)"
        />

        {/* Right Wing Outer Pillar */}
        <polygon
          points="160,150 160,65 132,50 132,135"
          fill="url(#brandDark)"
        />
        <polygon
          points="160,150 160,65 132,50 132,135"
          fill="url(#brandSheen)"
          fillOpacity="0.25"
        />

        {/* Central Floating Diamond Apex */}
        <polygon
          points="100,38 116,62 100,86 84,62"
          fill="#3b82f6"
          filter="url(#logoGlow)"
        />

        {/* High-Precision Bevel Edge Lines */}
        <line x1="40" y1="65" x2="68" y2="50" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="160" y1="65" x2="132" y2="50" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="68" y1="50" x2="100" y2="105" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="132" y1="50" x2="100" y2="105" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="100" y1="86" x2="100" y2="155" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="4 4" />

        {/* Light Spheres */}
        <circle cx="100" cy="62" r="3.5" fill="#ffffff" />
        <circle cx="40" cy="150" r="3" fill="#2563eb" />
        <circle cx="160" cy="150" r="3" fill="#2563eb" />
      </svg>
    </div>
  );
}
