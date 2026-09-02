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
          colors: ["#06b6d4", "#a855f7", "#3b82f6", "#38bdf8"],
        });
      } catch (err) {
        // ignore in case of fallback
      }

      onLoginSuccess({
        name: fullName || (email.split("@")[0] ? email.split("@")[0].toUpperCase() : "Alex Mercer"),
        email: email,
        role: role,
      });
    }, 800);
  };

  const handleQuickDemo = (demoRole: UserRole) => {
    setRole(demoRole);
    setEmail(demoRole === "student" ? "student.demo@nexus.ai" : "mentor.lead@nexus.ai");
    setPassword("nexus2026");
    setFullName(demoRole === "student" ? "Aarav Sharma" : "Dr. Vikram Seth");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#a855f7", "#10b981"],
        });
      } catch (err) {}
      onLoginSuccess({
        name: demoRole === "student" ? "Aarav Sharma (Student)" : "Dr. Vikram Seth (Professional)",
        email: demoRole === "student" ? "student.demo@nexus.ai" : "mentor.lead@nexus.ai",
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
    <div className="w-full max-w-md mx-auto transition-all duration-700 animate-in fade-in zoom-in-95">
      {/* Glassmorphism Auth Card */}
      <div className="relative glass-panel rounded-3xl p-8 md:p-9 shadow-2xl border border-white/10 overflow-hidden">
        {/* Ambient Top Light Beam */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-32 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-0 w-60 h-32 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header with Consistent 3D Brand Logo */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative mb-3 group cursor-pointer transition-transform duration-300 hover:scale-105">
            <BrandLogo size="md" glow={true} />
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 text-[9px] font-bold tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 rounded-full uppercase">
              v2.6
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-outfit">
            {isSignUp ? "Create Your Account" : "Welcome Back"}
          </h2>
          <p className="text-xs md:text-sm text-gray-400 mt-1 font-light">
            {isSignUp
              ? "Join the next-gen student project & mentorship hub"
              : "Login to continue to your interactive portal"}
          </p>
        </div>

        {/* Role Selector Tabs (Student vs Professional) */}
        <div className="bg-black/40 p-1 rounded-xl border border-white/5 flex items-center mb-5 relative">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
              role === "student"
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Student Portal</span>
          </button>
          <button
            type="button"
            onClick={() => setRole("professional")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-300 ${
              role === "professional"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Professional / Client</span>
          </button>
        </div>

        {/* Role Helper Info Pill */}
        <div className="mb-5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-gray-300 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          {role === "student" ? (
            <span>
              <strong>Student:</strong> Request College Projects, Apply for Internships, AI Web Builder.
            </span>
          ) : (
            <span>
              <strong>Professional:</strong> Hire Interns, Digital Marketing/SEO Consulting & Client Projects.
            </span>
          )}
        </div>

        {/* Form Error */}
        {error && (
          <div className="mb-4 p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center">
            {error}
          </div>
        )}

        {/* Login / Sign Up Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-cyan-400"
                />
                <Sparkles className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="name@university.edu or you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-cyan-400"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-gray-300">
                Password
              </label>
              {!isSignUp && (
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
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
                className="w-full pl-10 pr-10 py-2.5 rounded-xl glass-input text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-cyan-400"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Primary Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 relative group overflow-hidden py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>{isSignUp ? "Complete Sign Up" : "Login"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <div className="mt-5 text-center text-xs text-gray-400">
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setError("");
                }}
                className="text-cyan-400 font-semibold hover:underline"
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
                className="text-cyan-400 font-semibold hover:underline"
              >
                Sign Up
              </button>
            </span>
          )}
        </div>

        {/* Quick Demo & Instant Preview divider */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-[#0b1022] px-2 text-gray-500 tracking-wider">
              Instant 1-Click Access
            </span>
          </div>
        </div>

        {/* Quick Demo Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => handleQuickDemo("student")}
            className="py-2 px-3 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/40 text-cyan-300 text-xs font-medium transition-all hover:border-cyan-500/60 flex items-center justify-center gap-1.5"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Demo Student</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickDemo("professional")}
            className="py-2 px-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/40 text-purple-300 text-xs font-medium transition-all hover:border-purple-500/60 flex items-center justify-center gap-1.5"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Demo Mentor</span>
          </button>
        </div>

        {/* Direct Guest Explore */}
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={onExploreDirectly}
            className="text-[11px] text-gray-400 hover:text-gray-200 transition-colors underline underline-offset-4"
          >
            Continue as Guest & Explore All Features →
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in">
          <div className="glass-panel w-full max-w-sm rounded-2xl p-6 border border-white/15 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Reset Password</h3>
                <p className="text-xs text-gray-400">Enter email for reset link</p>
              </div>
            </div>

            {forgotSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                <p className="text-sm font-semibold text-white">Reset Link Dispatched!</p>
                <p className="text-xs text-gray-400">
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
                    className="flex-1 py-2 rounded-xl bg-white/5 text-gray-300 text-xs hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-cyan-600 text-white text-xs font-semibold hover:bg-cyan-500"
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
