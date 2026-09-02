"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  Code2,
  FileText,
  HelpCircle,
  Cpu,
  Terminal,
  CheckCircle,
  Copy,
  ArrowRight,
  RefreshCw,
  Send,
  Sliders,
  ShieldCheck,
  Flame,
} from "lucide-react";

interface AIProjectCopilotStudioProps {
  onOpenConnect: (topic?: string) => void;
}

export default function AIProjectCopilotStudio({ onOpenConnect }: AIProjectCopilotStudioProps) {
  const [promptInput, setPromptInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<"architecture" | "techstack" | "abstract" | "viva">("architecture");
  const [copied, setCopied] = useState(false);

  // Pre-loaded mature AI presets
  const samplePresets = [
    "AI Healthcare Disease Predictor with React & Python FastAPI",
    "IoT Smart Agriculture Crop Monitoring with ESP32 & Cloud ML",
    "Blockchain Decentralized E-Voting System with Smart Contracts",
    "Autonomous AI Video Surveillance & Threat Detection with OpenCV",
  ];

  const [projectOutput, setProjectOutput] = useState({
    title: "AI Healthcare Disease Predictor with React & Python FastAPI",
    category: "Fullstack AI / Healthcare IEEE",
    deliveryTime: "24-48 Hours",
    difficulty: "Advanced B.Tech / M.Tech",
    architecture: `1. Client Layer: Next.js 15, TailwindCSS, WebSocket Realtime Monitor
2. AI/ML Engine: Scikit-learn + PyTorch Random Forest Ensemble (98.4% accuracy)
3. Backend Microservices: Python FastAPI with Async Pydantic Validation
4. Database & Storage: PostgreSQL for Patient Records + Redis Caching
5. Security: HIPAA-compliant JWT Authentication & AES-256 Data Encryption`,
    techstack: [
      { name: "Frontend", val: "Next.js 15, React 19, TailwindCSS, Chart.js" },
      { name: "Backend", val: "Python 3.12, FastAPI, Uvicorn, Celery" },
      { name: "AI/ML Core", val: "PyTorch, Scikit-Learn, Pandas, NumPy" },
      { name: "Database", val: "PostgreSQL, Supabase / Neon DB" },
      { name: "DevOps", val: "Docker, IEEE Report LaTeX, Git" },
    ],
    abstract: `This project introduces an intelligent machine learning diagnostic assistance system capable of multi-disease early prediction based on patient clinical parameters. Operating on an ensemble pipeline with FastAPI and Next.js, it provides real-time risk scores, interactive health dashboards, and automated medical report generation. Fully verified under IEEE 2025-2026 standards with 100% working source code.`,
    vivaQuestions: [
      {
        q: "Why did you choose Random Forest over a standard Decision Tree?",
        a: "Random Forest reduces overfitting by bagging multiple decision trees and taking an ensemble vote, improving generalization on clinical test sets.",
      },
      {
        q: "How does FastAPI achieve high concurrency compared to Flask?",
        a: "FastAPI is built on Starlette and ASGI, supporting native Python async/await non-blocking I/O event loops for handling thousands of concurrent requests.",
      },
      {
        q: "How do you handle class imbalance in medical dataset training?",
        a: "We implemented SMOTE (Synthetic Minority Over-sampling Technique) and class-weighted loss penalties to ensure high recall for rare medical conditions.",
      },
    ],
  });

  const handleGenerate = (customPrompt?: string) => {
    const query = customPrompt || promptInput || "AI Smart Energy Grid Optimizer";
    setIsGenerating(true);

    setTimeout(() => {
      setProjectOutput({
        title: query,
        category: "Custom Final Year AI Architecture",
        deliveryTime: "Instant Blueprint + 24hr Code Delivery",
        difficulty: "B.Tech Final Year / Master's Capstone",
        architecture: `1. Interface: Responsive Web & Mobile Dashboard with Realtime Graphs
2. AI Intelligence: Deep Neural Network / Transformer-based Inference
3. API Gateway: High-performance Async REST & WebSockets
4. Data Pipeline: ETL pipeline with automated cleaning & feature scaling
5. Documentation: Full IEEE 10-Chapter Project Report + PPT + Defense Script`,
        techstack: [
          { name: "UI Framework", val: "Next.js 15, TypeScript, TailwindCSS" },
          { name: "AI Core", val: "Python, PyTorch / TensorFlow, Scikit-learn" },
          { name: "API Server", val: "FastAPI / Node.js Express" },
          { name: "Storage", val: "PostgreSQL / MongoDB & Redis" },
          { name: "Documentation", val: "IEEE Format Doc + 30-Slide PPT" },
        ],
        abstract: `This system delivers an end-to-end production solution for "${query}". By integrating cutting-edge predictive models with a scalable microservices architecture, the project provides seamless automation, robust analytics, and enterprise-grade reliability. Comes with comprehensive IEEE documentation, circuit/architectural diagrams, and 1-on-1 viva coaching.`,
        vivaQuestions: [
          {
            q: `What is the core algorithm behind ${query.split(" ")[0] || "your system"}?`,
            a: "The core system utilizes supervised feature modeling combined with gradient boosting for low latency inference and high predictive accuracy.",
          },
          {
            q: "How do you validate the performance of this system?",
            a: "We evaluate using K-Fold Cross-Validation, Precision-Recall curves, F1-Score, and latency benchmarking under simulated stress loads.",
          },
          {
            q: "What are the future enhancements possible for this project?",
            a: "Integration of Edge AI computing for offline mobile deployment and federated learning for privacy-preserving distributed updates.",
          },
        ],
      });
      setIsGenerating(false);
    }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Project: ${projectOutput.title}\nCategory: ${projectOutput.category}\nAbstract:\n${projectOutput.abstract}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-copilot" className="py-8 sm:py-12 px-2 sm:px-4 lg:px-6 w-full">
      <div className="w-full bg-gradient-to-b from-cyan-950/30 via-[#0a0f1d] to-[#030712] rounded-3xl border border-cyan-500/20 shadow-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>MATURE AI PROJECT & VIVA ENGINE 2026</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-outfit tracking-tight">
              Instant AI Project Scaffolder & <span className="gradient-text-cyan-purple">Viva Coach</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mt-1">
              Type your custom final year topic or select a prompt below. Watch the AI generate full system architecture, IEEE abstract & viva defense answers in real-time.
            </p>
          </div>

          <button
            onClick={() => onOpenConnect(`Custom AI Project: ${projectOutput.title}`)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get 100% Working Code & Viva Prep</span>
          </button>
        </div>

        {/* Interactive Prompt Bar */}
        <div className="mt-6 space-y-3">
          <div className="relative flex items-center">
            <input
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
              placeholder="E.g., Blockchain Healthcare Records with Zero-Knowledge Proofs or IoT Drone Tracker..."
              className="w-full py-3.5 pl-4 pr-32 rounded-2xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-gray-500"
            />
            <button
              onClick={() => handleGenerate()}
              disabled={isGenerating}
              className="absolute right-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5" />
                  <span>Generate</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Preset Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span className="text-[11px] font-semibold text-gray-400 shrink-0 flex items-center gap-1">
              <Flame className="w-3 h-3 text-cyan-400" /> Popular:
            </span>
            {samplePresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setPromptInput(preset);
                  handleGenerate(preset);
                }}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-gray-300 hover:text-cyan-300 whitespace-nowrap transition-colors cursor-pointer"
              >
                {preset.split(" with ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* AI Output Terminal & Tabs Box */}
        <div className="mt-6 bg-[#030712]/90 rounded-2xl border border-white/10 overflow-hidden">
          {/* Header Controls */}
          <div className="px-4 py-3 bg-white/[0.03] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white font-mono truncate max-w-xs sm:max-w-md">
                {projectOutput.title}
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {projectOutput.category}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "architecture"
                    ? "bg-cyan-500/20 text-cyan-300 font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab("techstack")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "techstack"
                    ? "bg-cyan-500/20 text-cyan-300 font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Tech Stack
              </button>
              <button
                onClick={() => setActiveTab("abstract")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "abstract"
                    ? "bg-cyan-500/20 text-cyan-300 font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                IEEE Abstract
              </button>
              <button
                onClick={() => setActiveTab("viva")}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "viva"
                    ? "bg-cyan-500/20 text-cyan-300 font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Viva Q&A
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-6 min-h-[220px] text-xs sm:text-sm font-mono text-gray-300">
            {activeTab === "architecture" && (
              <div className="space-y-3">
                <p className="text-[11px] text-cyan-400 font-semibold tracking-wider uppercase">
                  // System Flow & Component Pipeline:
                </p>
                <pre className="p-4 rounded-xl bg-black/60 border border-white/5 whitespace-pre-wrap leading-relaxed text-gray-200">
                  {projectOutput.architecture}
                </pre>
              </div>
            )}

            {activeTab === "techstack" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectOutput.techstack.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-[10px] text-cyan-400 font-bold uppercase">
                      {item.name}
                    </span>
                    <span className="text-xs text-white font-semibold mt-1">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "abstract" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-purple-400 font-bold uppercase">
                    IEEE Standard Formal Abstract
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Abstract</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="p-4 rounded-xl bg-black/60 border border-white/5 leading-relaxed text-gray-200 font-sans">
                  {projectOutput.abstract}
                </p>
              </div>
            )}

            {activeTab === "viva" && (
              <div className="space-y-3">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">
                  Common Viva Defense Questions & Answers
                </p>
                <div className="space-y-2.5">
                  {projectOutput.vivaQuestions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-1 font-sans"
                    >
                      <p className="text-xs font-bold text-white flex items-start gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>Q: {item.q}</span>
                      </p>
                      <p className="text-xs text-emerald-300/90 pl-5 font-light">
                        A: {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="p-3 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Working Source Code + IEEE Report + PPT Delivered</span>
            </div>

            <button
              onClick={() => onOpenConnect(`Project Build Order: ${projectOutput.title}`)}
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Build This Project For Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
