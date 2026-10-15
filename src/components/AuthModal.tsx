"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  GraduationCap,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  KeyRound,
} from "lucide-react";
import confetti from "canvas-confetti";

export type UserRole = "student" | "professional";

interface AuthModalProps {
  onLoginSuccess: (user: { name: string; email: string; role: UserRole }) => void;
  onExploreDirectly: () => void;
}

export default function AuthModal({
  onLoginSuccess,
  onExploreDirectly,
}: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState<UserRole>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (isSignUp && !fullName)) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ffffff", "#d4d4d8", "#a1a1aa", "#71717a"],
        });
      } catch (err) {
        // ignore in case of fallback
      }

      onLoginSuccess({
        name: fullName || (email.split("@")[0] ? email.split("@")[0].toUpperCase() : "Maverick Member"),
        email: email,
        role: role,
      });
    }, 800);
  };

  const handleQuickDemo = (demoRole: UserRole) => {
    setRole(demoRole);
    setEmail(demoRole === "student" ? "student.demo@mavericktech.io" : "mentor.lead@mavericktech.io");
    setPassword("maverick2026");
    setFullName(demoRole === "student" ? "Aarav Sharma" : "Dr. Vikram Seth");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ffffff", "#e4e4e7", "#a1a1aa", "#52525b"],
        });
      } catch (err) {}
      onLoginSuccess({
        name: demoRole === "student" ? "Aarav Sharma (Student)" : "Dr. Vikram Seth (Professional)",
        email: demoRole === "student" ? "student.demo@mavericktech.io" : "mentor.lead@mavericktech.io",
        role: demoRole,
      });
    }, 600);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSuccess(true);
    setTimeout(() => {
      setShowForgotModal(false);
      setForgotSuccess(false);
      setForgotEmail("");
    }, 2000);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto transition-all duration-700 animate-in fade-in zoom-in-95">
      {/* Monochrome Glassmorphism Auth Card */}
      <div className="relative glass-panel rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/10 overflow-hidden bg-black/90">
        {/* Ambient Top Light Beam */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-32 bg-white/[0.06] rounded-full blur-3xl pointer-events-none" />

        {/* Header with Consistent 3D Brand Logo */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="relative mb-2 group cursor-pointer transition-transform duration-300 hover:scale-105">
            <BrandLogo size="sm" glow={true} />
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 text-[8px] font-bold tracking-widest bg-white/10 text-zinc-300 border border-white/20 rounded-full uppercase">
              PRO
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-outfit">
            {isSignUp ? "Join Maverick Tech" : "Welcome Back"}
          </h2>
          <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-light">
            {isSignUp
              ? "Access verified engineering projects & direct WhatsApp support"
              : "Login to continue to your Maverick Tech portal"}
          </p>
        </div>

        {/* Role Selector Tabs (Student vs Professional) */}
        <div className="bg-zinc-900/80 p-1 rounded-xl border border-white/10 flex items-center mb-3 relative">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
              role === "student"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Portal</span>
          </button>
          <button
            type="button"
            onClick={() => setRole("professional")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer ${
              role === "professional"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional / Client</span>
          </button>
        </div>

        {/* Role Helper Info Pill */}
        <div className="mb-3 p-2 rounded-xl bg-white/[0.03] border border-white/10 text-[10px] text-zinc-300 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-white shrink-0" />
          {role === "student" ? (
            <span>
              <strong>Student:</strong> Request College Projects, Apply for Internships, AI Web Mentorship.
            </span>
          ) : (
            <span>
              <strong>Professional:</strong> Custom Business Websites, Google SEO Ranking & Enterprise Solutions.
            </span>
          )}
        </div>

        {/* Form Error */}
        {error && (
          <div className="mb-3 p-2 rounded-xl bg-zinc-900 border border-white/20 text-white text-[11px] text-center">
            {error}
          </div>
        )}

        {/* Login / Sign Up Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-2.5">
          {isSignUp && (
            <div>
              <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl glass-input text-xs placeholder:text-zinc-500 focus:ring-1 focus:ring-white"
                />
                <Sparkles className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-medium text-zinc-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="name@university.edu or you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl glass-input text-xs placeholder:text-zinc-500 focus:ring-1 focus:ring-white"
              />
              <Mail className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-medium text-zinc-300">
                Password
              </label>
              {!isSignUp && (
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-[10px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Forgot Password?
                </button>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-9 py-2 rounded-xl glass-input text-xs placeholder:text-zinc-500 focus:ring-1 focus:ring-white"
              />
              <Lock className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-white cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Primary Action Button (Monochrome White) */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-1.5 py-2.5 px-4 rounded-xl font-bold text-xs text-black bg-white hover:bg-zinc-200 shadow-md transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>{isSignUp ? "Complete Sign Up" : "Login"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <div className="mt-3.5 text-center text-[11px] text-zinc-400">
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setError("");
                }}
                className="text-white font-semibold hover:underline cursor-pointer"
              >
                Login
              </button>
            </span>
          ) : (
            <span>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(true);
                  setError("");
                }}
                className="text-white font-semibold hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </span>
          )}
        </div>

        {/* Quick Demo & Instant Preview divider */}
        <div className="relative my-3.5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-[9px] uppercase">
            <span className="bg-black px-2 text-zinc-500 tracking-wider">
              Instant 1-Click Access
            </span>
          </div>
        </div>

        {/* Quick Demo Buttons (Monochrome Glass) */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleQuickDemo("student")}
            className="py-1.5 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-200 text-[11px] font-medium transition-all hover:border-white/30 flex items-center justify-center gap-1 cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5 text-white" />
            <span>Demo Student</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickDemo("professional")}
            className="py-1.5 px-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-200 text-[11px] font-medium transition-all hover:border-white/30 flex items-center justify-center gap-1 cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5 text-white" />
            <span>Demo Mentor</span>
          </button>
        </div>

        {/* Direct Guest Explore */}
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={onExploreDirectly}
            className="text-[10px] text-zinc-400 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
          >
            Continue as Guest & Explore All Features →
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in">
          <div className="glass-panel w-full max-w-sm rounded-2xl p-6 border border-white/15 relative bg-black">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Reset Password</h3>
                <p className="text-xs text-zinc-400">Enter email for reset link</p>
              </div>
            </div>

            {forgotSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-white mx-auto animate-bounce" />
                <p className="text-sm font-semibold text-white">Reset Link Dispatched!</p>
                <p className="text-xs text-zinc-400">
                  Check your inbox to create your new secure password.
                </p>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter registered email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl glass-input text-xs"
                />
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="flex-1 py-2 rounded-xl bg-white/5 text-zinc-300 text-xs hover:bg-white/10 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 cursor-pointer"
                  >
                    Send Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
