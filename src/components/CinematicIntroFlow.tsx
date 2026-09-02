"use client";

import React, { useState, useEffect } from "react";
import ThreeDLogoCanvas from "./ThreeDLogoCanvas";
import AuthModal, { UserRole } from "./AuthModal";
import { ArrowRight, FastForward, RotateCcw } from "lucide-react";

interface CinematicIntroFlowProps {
  onAuthenticated: (user: { name: string; email: string; role: UserRole }) => void;
  onSkipToPlatform: () => void;
}

export default function CinematicIntroFlow({
  onAuthenticated,
  onSkipToPlatform,
}: CinematicIntroFlowProps) {
  // Stage 1: Fast 3D Rotating Pyramid with Grand Website Name
  // Stage 2: Fast 3D Split Animation
  // Stage 3: Clean Authentication Modal Reveal
  const [stage, setStage] = useState<1 | 2 | 3>(1);

  // Fast automatic timeline progression
  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    if (stage === 1) {
      timer1 = setTimeout(() => {
        setStage(2);
      }, 1200); // Quick 1.2s pyramid spin
    } else if (stage === 2) {
      timer2 = setTimeout(() => {
        setStage(3);
      }, 1600); // Quick 1.6s split reveal
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [stage]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between py-6 px-4 bg-[#030712] overflow-hidden select-none">
      {/* Deep Space Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(6,182,212,0.2),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none" />

      {/* Fast 3D WebGL Canvas */}
      <ThreeDLogoCanvas
        stage={stage}
        onAnimationComplete={() => setStage(3)}
        interactive={stage === 3}
      />

      {/* Top Controls */}
      <div className="relative z-40 w-full max-w-7xl flex items-center justify-end">
        {stage < 3 ? (
          <button
            onClick={() => setStage(3)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs shadow-xl shadow-cyan-500/30 transition-all hover:scale-105 cursor-pointer"
          >
            <FastForward className="w-4 h-4" />
            <span>Skip to Login</span>
          </button>
        ) : (
          <button
            onClick={() => setStage(1)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-cyan-400" />
            <span>Replay 3D Intro</span>
          </button>
        )}
      </div>

      {/* 🌟 ONLY THE GRAND WEBSITE NAME */}
      {stage < 3 && (
        <div className="relative z-30 text-center pointer-events-none animate-in fade-in duration-300 my-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-outfit tracking-tight text-white drop-shadow-[0_0_50px_rgba(6,182,212,0.6)]">
            NEXUS<span className="text-cyan-400">LABS</span>
          </h1>
        </div>
      )}

      {/* STAGE 3: AUTHENTICATION MODAL */}
      {stage === 3 && (
        <div className="relative z-30 w-full max-w-md px-4 py-4 flex flex-col items-center justify-center my-auto animate-in fade-in zoom-in-95 duration-400">
          <AuthModal
            onLoginSuccess={onAuthenticated}
            onExploreDirectly={onSkipToPlatform}
          />
        </div>
      )}

      {/* Bottom Direct Explore Button */}
      <div className="relative z-40 flex items-center justify-center">
        <button
          onClick={onSkipToPlatform}
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-black text-white backdrop-blur-md transition-all cursor-pointer hover:scale-105 shadow-xl"
        >
          <span>Explore Platform Directly</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </button>
      </div>
    </div>
  );
}
