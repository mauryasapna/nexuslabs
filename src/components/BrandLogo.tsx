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
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-32 h-32",
    hero: "w-44 h-44 md:w-56 md:h-56",
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${sizeMap[size]} ${className} ${
        animated ? "animate-float" : ""
      }`}
    >
      {/* Ambient background glow */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 via-purple-600/30 to-blue-500/40 rounded-full blur-2xl -z-10 animate-pulse-glow" />
      )}

      {/* SVG Emblem with 3D layers, gradients and reflections */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_10px_30px_rgba(6,182,212,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="nexusGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          <linearGradient id="nexusGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>

          <linearGradient id="metalReflection" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </linearGradient>

          <filter id="coreGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Outer Orbital Ring 1 */}
        <ellipse
          cx="100"
          cy="100"
          rx="82"
          ry="36"
          transform="rotate(-25 100 100)"
          stroke="url(#nexusGradient1)"
          strokeWidth="2.5"
          strokeDasharray="16 8 4 8"
          strokeOpacity="0.75"
        />

        {/* Outer Orbital Ring 2 (Crossed) */}
        <ellipse
          cx="100"
          cy="100"
          rx="82"
          ry="36"
          transform="rotate(35 100 100)"
          stroke="url(#nexusGradient2)"
          strokeWidth="1.8"
          strokeDasharray="24 10"
          strokeOpacity="0.5"
        />

        {/* Futuristic 3D Hexagon-Diamond Core Shell */}
        {/* Top Facet */}
        <polygon
          points="100,25 155,60 100,95 45,60"
          fill="url(#nexusGradient1)"
          fillOpacity="0.9"
          filter="url(#coreGlow)"
        />
        <polygon
          points="100,25 155,60 100,95 45,60"
          fill="url(#metalReflection)"
          fillOpacity="0.35"
        />

        {/* Bottom Left Facet */}
        <polygon
          points="45,60 100,95 100,165 45,130"
          fill="url(#nexusGradient2)"
          fillOpacity="0.85"
        />
        <polygon
          points="45,60 100,95 100,165 45,130"
          fill="black"
          fillOpacity="0.25"
        />

        {/* Bottom Right Facet */}
        <polygon
          points="155,60 100,95 100,165 155,130"
          fill="url(#nexusGradient1)"
          fillOpacity="0.95"
        />
        <polygon
          points="155,60 100,95 100,165 155,130"
          fill="url(#metalReflection)"
          fillOpacity="0.2"
        />

        {/* Inner Floating Quantum Prism (The "N" / Geometric Singularity) */}
        <polygon
          points="100,55 130,75 100,135 70,115"
          fill="#ffffff"
          fillOpacity="0.25"
        />

        {/* Futuristic Glowing Neon Ridge Lines */}
        <line x1="100" y1="25" x2="100" y2="165" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.9" />
        <line x1="45" y1="60" x2="155" y2="60" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="45" y1="60" x2="100" y2="95" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="155" y1="60" x2="100" y2="95" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.8" />

        {/* Orbiting Quantum Photons / Energy Dots */}
        <circle cx="28" cy="85" r="4.5" fill="#38bdf8" filter="url(#coreGlow)" />
        <circle cx="172" cy="115" r="4.5" fill="#c084fc" filter="url(#coreGlow)" />
        <circle cx="100" cy="95" r="5" fill="#ffffff" filter="url(#coreGlow)" />
      </svg>
    </div>
  );
}
