"use client";

import React, { useState } from "react";
import CinematicIntroFlow from "@/components/CinematicIntroFlow";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import HomeTopSlidebar from "@/components/HomeTopSlidebar";
import BusinessWebsiteSection from "@/components/BusinessWebsiteSection";
import CollegeProjectsSection from "@/components/CollegeProjectsSection";
import InternshipSection from "@/components/InternshipSection";
import AIWebDevSection from "@/components/AIWebDevSection";
import DigitalMarketingSection from "@/components/DigitalMarketingSection";
import AboutMeSection from "@/components/AboutMeSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ReviewsSection from "@/components/ReviewsSection";
import DirectConnectModal from "@/components/DirectConnectModal";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import AuthModal, { UserRole } from "@/components/AuthModal";
import { saveUserSession, getUserSession } from "@/lib/storage";

export default function HomePage() {
  // Cinematic 3-Step Intro Flow State (default false: direct website access)
  const [showCinematicIntro, setShowCinematicIntro] = useState(false);

  // Toggleable Sidebar State (Opens when hamburger is clicked)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Authenticated User State
  const [user, setUser] = useState<{
    name: string;
    email: string;
    role: UserRole;
  } | null>(null);

  // Load existing session from LocalStorage on mount
  React.useEffect(() => {
    const session = getUserSession();
    if (session) {
      setUser({
        name: session.name,
        email: session.email,
        role: session.role,
      });
    }
  }, []);

  // Direct Connect & Auth Modals
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [connectTopic, setConnectTopic] = useState("General Inquiry");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthenticated = (userData: {
    name: string;
    email: string;
    role: UserRole;
  }) => {
    setUser(userData);
    saveUserSession({
      name: userData.name,
      email: userData.email,
      role: userData.role,
      loginTime: new Date().toISOString(),
    });
    setShowCinematicIntro(false);
    setShowAuthModal(false);
  };

  const handleSkipToPlatform = () => {
    setShowCinematicIntro(false);
  };

  const handleReplayIntro = () => {
    setShowCinematicIntro(true);
  };

  const handleOpenConnect = (topic = "General Mentorship Inquiry") => {
    setConnectTopic(topic);
    setShowConnectModal(true);
  };

  const handleRoleToggle = (newRole: UserRole) => {
    if (user) {
      const updated = { ...user, role: newRole };
      setUser(updated);
      saveUserSession({
        name: updated.name,
        email: updated.email,
        role: updated.role,
        loginTime: new Date().toISOString(),
      });
    } else {
      const newUser = {
        name: newRole === "student" ? "Aarav Sharma (Student)" : "Dr. Vikram Seth (Professional)",
        email: newRole === "student" ? "student@nexus.ai" : "mentor@nexus.ai",
        role: newRole,
      };
      setUser(newUser);
      saveUserSession({
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        loginTime: new Date().toISOString(),
      });
    }
  };

  const handleLogout = () => {
    setUser(null);
    saveUserSession(null);
  };

  // If currently displaying the 3-step cinematic opening experience
  if (showCinematicIntro) {
    return (
      <CinematicIntroFlow
        onAuthenticated={handleAuthenticated}
        onSkipToPlatform={handleSkipToPlatform}
      />
    );
  }

  return (
    <div id="home" className="min-h-screen bg-[#030712] text-gray-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200 pb-16 lg:pb-0 overflow-x-hidden w-full">
      {/* Background ambient lighting pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none -z-10" />

      {/* Top Navbar with Clean Hamburger Button & Full Width */}
      <Navbar
        user={user}
        onRoleToggle={handleRoleToggle}
        onReplayIntro={handleReplayIntro}
        onOpenAuth={() => setShowAuthModal(true)}
        onOpenConnect={() => handleOpenConnect("General Inquiry")}
        onLogout={handleLogout}
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />

      {/* Slide-In Sidebar (Triggered by Hamburger Click) */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenConnect={handleOpenConnect}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Full-Width Content Area */}
      <main className="w-full flex-1 px-2 sm:px-4 lg:px-8 py-2 overflow-x-hidden transition-all">
        {/* 🌟 UNIFIED EXPANSIVE AUTO-SLIDING HIGHLIGHTS */}
        <HomeTopSlidebar
          onOpenConnect={handleOpenConnect}
          onReplayIntro={handleReplayIntro}
        />

        {/* 1. College Projects (1st, 2nd, 3rd, Final Year) */}
        <CollegeProjectsSection onOpenConnect={handleOpenConnect} />

        {/* 2. Business Website (Professional Website) */}
        <BusinessWebsiteSection onOpenConnect={handleOpenConnect} />

        {/* 3. Learn How to Make an Website Easily with Me */}
        <AIWebDevSection onOpenConnect={handleOpenConnect} />

        {/* 4. Google Rank with the Help of Digital Marketing */}
        <DigitalMarketingSection onOpenConnect={handleOpenConnect} />

        {/* 5. Find Internship with Me */}
        <InternshipSection onOpenConnect={handleOpenConnect} />

        {/* 🌟 About Me (Developer & Mentor Showcase) */}
        <AboutMeSection onOpenConnect={handleOpenConnect} />

        {/* 🌟 Vision & Mission of the Platform */}
        <VisionMissionSection />

        {/* Verified Student & Business Client Reviews */}
        <ReviewsSection onOpenConnect={handleOpenConnect} />

        {/* Footer */}
        <Footer
          onReplayIntro={handleReplayIntro}
          onOpenConnect={handleOpenConnect}
        />
      </main>

      {/* Mobile Bottom Navigation Dock */}
      <MobileBottomNav
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenConnect={() => handleOpenConnect("Mobile Connect")}
      />

      {/* Direct Connect Modal */}
      <DirectConnectModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        initialTopic={connectTopic}
      />

      {/* Auth Modal Overlay */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 border border-white/10 text-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Close ✕</span>
            </button>
            <AuthModal
              onLoginSuccess={handleAuthenticated}
              onExploreDirectly={() => setShowAuthModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
