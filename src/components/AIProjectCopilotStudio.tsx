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
  MessageCircle,
} from "lucide-react";
import { sendToWhatsApp } from "@/lib/whatsapp";

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

  const handleWhatsAppOrder = () => {
    sendToWhatsApp({
      source: "AI Project Inquiry",
      details: {
        "Selected Project": projectOutput.title,
        Category: projectOutput.category,
        "Expected Timeline": projectOutput.deliveryTime,
        "Deliverables Needed": "Complete Source Code + IEEE Report + PPT + 1-on-1 Viva Prep",
      },
      message: "Hello Maverick Tech Team! I would like to get the 100% working source code and viva coaching session for this project.",
    });
  };

  return (
    <section id="ai-copilot" className="py-8 sm:py-12 px-2 sm:px-4 lg:px-6 w-full">
      <div className="w-full bg-white rounded-3xl border border-zinc-200 shadow-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-2">
              <Cpu className="w-3.5 h-3.5 text-blue-600 animate-spin" />
              <span>AI PROJECT & VIVA BLUEPRINT ENGINE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 font-outfit tracking-tight">
              Instant AI Project Scaffolder & <span className="gradient-text-silver">Viva Coach</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl mt-1">
              Type your custom final year topic or select a prompt below. Watch the AI generate full system architecture, IEEE abstract & viva defense answers in real-time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsAppOrder}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
            <button
              onClick={() => onOpenConnect(`Custom AI Project: ${projectOutput.title}`)}
              className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Customize Details</span>
            </button>
          </div>
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
              className="w-full py-3.5 pl-4 pr-32 rounded-2xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all placeholder:text-zinc-400 shadow-sm"
            />
            <button
              onClick={() => handleGenerate()}
              disabled={isGenerating}
              className="absolute right-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-500/20 disabled:opacity-50"
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
            <span className="text-[11px] font-semibold text-zinc-500 shrink-0 flex items-center gap-1">
              <Flame className="w-3 h-3 text-amber-500" /> Popular:
            </span>
            {samplePresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setPromptInput(preset);
                  handleGenerate(preset);
                }}
                className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-[11px] text-zinc-700 whitespace-nowrap transition-colors cursor-pointer font-medium"
              >
                {preset.split(" with ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* AI Output Terminal & Tabs Box */}
        <div className="mt-6 bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
          {/* Header Controls */}
          <div className="px-4 py-3 bg-zinc-100/90 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-zinc-900 font-mono truncate max-w-xs sm:max-w-md">
                {projectOutput.title}
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                {projectOutput.category}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-zinc-200 shadow-xs">
              {(["architecture", "techstack", "abstract", "viva"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {tab === "architecture" && "Architecture"}
                  {tab === "techstack" && "Tech Stack"}
                  {tab === "abstract" && "IEEE Abstract"}
                  {tab === "viva" && "Viva Q&A"}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-6 min-h-[220px] text-xs sm:text-sm font-mono text-zinc-800">
            {activeTab === "architecture" && (
              <div className="space-y-3">
                <p className="text-[11px] text-blue-600 font-bold tracking-wider uppercase font-mono">
                  // System Flow & Component Pipeline:
                </p>
                <pre className="p-4 rounded-xl bg-white border border-zinc-200 whitespace-pre-wrap leading-relaxed text-zinc-800 shadow-xs">
                  {projectOutput.architecture}
                </pre>
              </div>
            )}

            {activeTab === "techstack" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectOutput.techstack.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-zinc-200 flex flex-col justify-between shadow-xs"
                  >
                    <span className="text-[10px] text-zinc-500 font-bold uppercase">
                      {item.name}
                    </span>
                    <span className="text-xs text-zinc-900 font-bold mt-1">
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "abstract" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-blue-600 font-bold uppercase">
                    IEEE Standard Formal Abstract
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer font-bold"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Abstract</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="p-4 rounded-xl bg-white border border-zinc-200 leading-relaxed text-zinc-800 font-sans shadow-xs">
                  {projectOutput.abstract}
                </p>
              </div>
            )}

            {activeTab === "viva" && (
              <div className="space-y-3">
                <p className="text-[10px] text-blue-600 font-bold uppercase">
                  Common Viva Defense Questions & Answers
                </p>
                <div className="space-y-2.5">
                  {projectOutput.vivaQuestions.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-zinc-200 space-y-1 font-sans shadow-xs"
                    >
                      <p className="text-xs font-bold text-zinc-900 flex items-start gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>Q: {item.q}</span>
                      </p>
                      <p className="text-xs text-zinc-600 pl-5 font-normal leading-relaxed">
                        A: {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="p-3 bg-zinc-100/90 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-zinc-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Working Source Code + IEEE Report + PPT Delivered</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-emerald-500/20 active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Build This on WhatsApp</span>
              </button>
              <button
                onClick={() => onOpenConnect(`Project Build Order: ${projectOutput.title}`)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-500/20 active:scale-95"
              >
                <span>Customize</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
