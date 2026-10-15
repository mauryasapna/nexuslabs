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
          colors: ["#2563eb", "#4f46e5", "#10b981", "#38bdf8"],
        });
      } catch (err) {
        // no-op
      }

      onLoginSuccess({
        name: isSignUp ? fullName : email.split("@")[0],
        email: email,
        role: role,
      });
    }, 600);
  };

  const handleQuickDemo = (demoRole: UserRole) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: demoRole === "student" ? "Aarav Sharma" : "Dr. Vikram Seth",
        email: demoRole === "student" ? "aarav.student@mavericktech.io" : "vikram.mentor@mavericktech.io",
        role: demoRole,
      });
    }, 400);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSuccess(true);
    setTimeout(() => {
      setForgotSuccess(false);
      setShowForgotModal(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in overflow-y-auto">
      {/* Modal Container */}
      <div className="w-full max-w-sm rounded-3xl p-5 sm:p-6 border border-zinc-200 relative shadow-2xl overflow-hidden my-auto bg-white text-zinc-900">
        {/* Brand Header */}
        <div className="text-center mb-4">
          <div className="relative inline-block mb-1.5">
            <BrandLogo size="sm" glow={false} />
            <span className="absolute -bottom-1 -right-1 px-1.5 py-0.2 text-[8px] font-bold tracking-widest bg-blue-50 text-blue-700 border border-blue-200 rounded-full uppercase">
              PRO
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900 font-outfit">
            {isSignUp ? "Join Maverick Tech" : "Welcome Back"}
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            {isSignUp
              ? "Access verified engineering projects & direct WhatsApp support"
              : "Login to continue to your Maverick Tech portal"}
          </p>
        </div>

        {/* Role Selector Tabs (Student vs Professional) */}
        <div className="bg-zinc-100 p-1 rounded-xl border border-zinc-200 flex items-center mb-3 relative">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
              role === "student"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student Portal</span>
          </button>
          <button
            type="button"
            onClick={() => setRole("professional")}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
              role === "professional"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional / Client</span>
          </button>
        </div>

        {/* Role Helper Info Pill */}
        <div className="mb-3 p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
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
          <div className="mb-3 p-2 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-medium">
            {error}
          </div>
        )}

        {/* Login / Sign Up Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-3">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-blue-600"
                />
                <Sparkles className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-zinc-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="name@university.edu or you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-blue-600"
              />
              <Mail className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-zinc-700">
                Password
              </label>
              {!isSignUp && (
                <button
                  type="button"
                  onClick={() => setShowForgotModal(true)}
                  className="text-[11px] text-blue-600 hover:underline cursor-pointer font-medium"
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
                className="w-full pl-9 pr-9 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:border-blue-600"
              />
              <Lock className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-zinc-400 hover:text-zinc-700 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Primary Action Button - Filled Color */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-1.5 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
        <div className="mt-3.5 text-center text-xs text-zinc-600">
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(false);
                  setError("");
                }}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
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
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            </span>
          )}
        </div>

        {/* Quick Demo & Instant Preview divider */}
        <div className="relative my-3.5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase">
            <span className="bg-white px-2 text-zinc-400 font-bold tracking-wider">
              Instant 1-Click Access
            </span>
          </div>
        </div>

        {/* Quick Demo Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => handleQuickDemo("student")}
            className="py-2 px-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Demo Student</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickDemo("professional")}
            className="py-2 px-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span>Demo Mentor</span>
          </button>
        </div>

        {/* Direct Guest Explore */}
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={onExploreDirectly}
            className="text-xs text-zinc-500 hover:text-zinc-800 font-medium transition-colors cursor-pointer"
          >
            Explore as Guest without login →
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl p-5 border border-zinc-200 max-w-xs w-full space-y-3 shadow-2xl text-zinc-900">
            <div className="flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-bold text-zinc-900 font-outfit">Reset Password</h4>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Enter your registered email address to receive password reset instructions.
            </p>
            {forgotSuccess ? (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center font-bold">
                ✓ Reset link sent to {forgotEmail}!
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-xs text-zinc-900 focus:bg-white focus:border-blue-600"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="flex-1 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/25"
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
