"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Copy,
  Check,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sun,
  Moon,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Code2,
  Brain,
  Globe,
  Sliders,
  X
} from "lucide-react";

export default function SokolovskiPortfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("cases");

  // Keep live time in Chandigarh, Punjab (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const cases = [
    {
      id: "01",
      code: "SENTI-FLOW®",
      client: "Customer Sentiment & Feedback Intelligence",
      category: "APPLIED NLP / MACHINE LEARNING",
      year: "2025–2026",
      summary:
        "High-throughput NLP pipeline extracting granular sentiment vectors, topic clusters, and actionable product improvement flags from thousands of enterprise customer reviews.",
      deliverables: ["Sentiment Classifier", "Topic Modeling", "Structured JSON Export", "FastAPI Service"],
      stack: ["Python", "NLTK", "Scikit-Learn", "Pandas", "Coursera AI Project"],
      stats: "78.4% Positive / 9.4% Critical Flag Accuracy",
      link: "https://coursera.org",
      description:
        "Engineered an automated review processing pipeline designed to handle messy customer feedback. Features custom regex pre-processing, stopword normalization, TF-IDF vectorization, and multi-class sentiment polarity scoring to give product teams instant visibility into user friction points.",
    },
    {
      id: "02",
      code: "SERENE-SPECULOOS®",
      client: "Motion-Engineered Interactive Web Experience",
      category: "PRODUCT DESIGN / PRODUCTION WEB",
      year: "2025–2026",
      summary:
        "Award-caliber digital experience deployed on Netlify, uniting responsive micro-interactions, Swishy motion animations, and accessible semantic architecture.",
      deliverables: ["Full-Stack Deployment", "Swishy Animation", "Mobile Optimization", "Asset Pipeline"],
      stack: ["Netlify Live", "HTML5 / CSS3", "Modern JavaScript", "Swishy Motion"],
      stats: "Live in Production (100 Lighthouse Performance)",
      link: "https://serene-speculoos-e11f80.netlify.app",
      description:
        "Architected and deployed a live public web showcase on Netlify featuring high-frame-rate CSS/canvas motion graphics, typography-driven layouts, and cross-device responsiveness tested across modern mobile and desktop viewports.",
    },
    {
      id: "03",
      code: "ALGO-CORE®",
      client: "Mathematical & Algorithmic Problem Solving",
      category: "CORE COMPUTER SCIENCE / DATA STRUCTURES",
      year: "2025",
      summary:
        "High-performance algorithm implementations focusing on array equivalence verification, O(N) frequency hashing, and Kth-row matrix transformations in modern C++ and Python.",
      deliverables: ["O(N) Array Hasher", "Matrix In-Place Rotation", "Frequency Map", "Clean OOP Abstraction"],
      stack: ["C++17", "Python 3.12", "Data Structures", "Chitkara Academic Honors"],
      stats: "Sub-millisecond latency benchmarks",
      link: "https://github.com",
      description:
        "Curated suite of algorithmic solutions developed for academic coursework at Chitkara University. Highlights include optimal spatial and temporal complexity for multi-dimensional matrix operations and character frequency mapping without redundant memory allocations.",
    },
    {
      id: "04",
      code: "GENAI-STUDIO®",
      client: "Prompt Tuning & Large Language Model Workflows",
      category: "GENERATIVE AI / NVIDIA & GOOGLE CLOUD",
      year: "2025–2026",
      summary:
        "Comprehensive experimentation with prompt orchestration, few-shot tuning, structured schema outputs, and transformer architectures backed by NVIDIA and Google Cloud credentials.",
      deliverables: ["Prompt Templates", "Context Window Optimizer", "Pydantic Schema Enforcer", "RAG Prototype"],
      stack: ["Google Cloud GenAI", "NVIDIA Deep Learning", "Hugging Face", "Kaggle"],
      stats: "Dual Industry Certification",
      link: "https://cloud.google.com/training",
      description:
        "Hands-on development of LLM prompt architectures utilizing Google Cloud Generative AI and NVIDIA training principles. Focuses on minimizing model hallucinations, enforcing schema validation on LLM JSON outputs, and optimizing prompt token economy.",
    },
  ];

  const fragments = [
    {
      num: "01",
      title: "Communication Skills for Engineers Specialization",
      issuer: "Rice University",
      badge: "Ivy / Top Univ",
      id: "DL1D7NTKZ915",
      verifyUrl: "https://coursera.org/verify/specialization/DL1D7NTKZ915",
      note: "3-course leadership program covering crisis communication, engineering pitches, and cross-functional leadership.",
    },
    {
      num: "02",
      title: "Interpersonal Communication for Engineering Leaders",
      issuer: "Rice University",
      badge: "Leadership",
      id: "G0MER30MVRD8",
      verifyUrl: "https://coursera.org/verify/G0MER30MVRD8",
      note: "Mastered negotiations, difficult conversations, and technical team coordination with Gayle Moran & Beata Krupa.",
    },
    {
      num: "03",
      title: "Oral Communication for Engineering Leaders",
      issuer: "Rice University",
      badge: "Presentation",
      id: "V56KSCIDZ1S7",
      verifyUrl: "https://coursera.org/verify/V56KSCIDZ1S7",
      note: "High-stakes presentation structuring, executive storytelling, and visual technical demonstrations.",
    },
    {
      num: "04",
      title: "Generative AI Fundamentals",
      issuer: "NVIDIA",
      badge: "Deep Learning",
      id: "NVIDIA-AI-2025",
      verifyUrl: "https://www.nvidia.com",
      note: "Transformers, attention mechanisms, diffusion pipelines, and hardware-accelerated model inference.",
    },
    {
      num: "05",
      title: "Generative AI Enterprise Suite",
      issuer: "Google Cloud",
      badge: "Cloud AI",
      id: "GCP-GENAI-CERT",
      verifyUrl: "https://cloud.google.com",
      note: "Foundation model fine-tuning, prompt tuning, and responsible AI safety boundaries on GCP.",
    },
    {
      num: "06",
      title: "Apply AI: Analyze Customer Reviews",
      issuer: "Coursera & Chitkara",
      badge: "Applied NLP",
      id: "0304e21f-ad30-4845-a5ec",
      verifyUrl: "https://coursera.org",
      note: "Automated sentiment classification pipeline processing multi-class e-commerce review corpora.",
    },
    {
      num: "07",
      title: "Fundamentals of Cybersecurity",
      issuer: "upGrad",
      badge: "Security",
      id: "UPGRAD-SEC-2025",
      verifyUrl: "https://www.upgrad.com",
      note: "Threat modeling, network encryption, identity management, and web vulnerability analysis.",
    },
    {
      num: "08",
      title: "AI for Beginners Certification",
      issuer: "HP LIFE",
      badge: "Foundation",
      id: "HP-LIFE-AI",
      verifyUrl: "https://www.life-global.org",
      note: "Supervised vs unsupervised learning principles, algorithmic bias, and ethical AI deployment.",
    },
  ];

  const approaches = [
    {
      step: "01",
      title: "Mathematical & Algorithmic Rigor",
      body: "Every high-performance system begins with computational clarity. By designing algorithms with optimal spatial and temporal complexities in C++ and Python, software remains lean, testable, and deterministic under heavy data loads.",
    },
    {
      step: "02",
      title: "Product-Centric AI Integration",
      body: "AI is only as valuable as the real-world friction it resolves. I build NLP and Generative AI workflows focused on structured schemas, hallucination safeguards, and low-latency API layers rather than shallow wrappers.",
    },
    {
      step: "03",
      title: "Engineering Leadership & Communication",
      body: "Certified by Rice University, I bridge the gap between technical complexity and stakeholder consensus through crisp documentation, structured crisis communication, and persuasive technical storytelling.",
    },
    {
      step: "04",
      title: "Continuous Production Shipping",
      body: "From Netlify deployments to reproducible Python environments, code is built to run reliably in the wild with tight feedback loops, automated verification, and clean version control.",
    },
  ];

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans ${
        isDark ? "bg-[#0b0c10] text-[#eaeaea]" : "bg-[#fbfbfb] text-[#141416]"
      }`}
    >
      {/* Toast Notification */}
      {copiedField && (
        <div
          className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 rounded-none text-xs font-mono uppercase tracking-widest border shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-2 ${
            isDark
              ? "bg-[#14151b] border-neutral-700 text-white"
              : "bg-white border-neutral-900 text-neutral-900"
          }`}
        >
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span>Copied {copiedField} to clipboard</span>
        </div>
      )}

      {/* Case Study Detail Modal / Drawer */}
      {selectedCase !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`w-full max-w-3xl max-h-[90vh] overflow-y-auto border p-6 sm:p-10 relative shadow-2xl ${
              isDark ? "bg-[#101117] border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900"
            }`}
          >
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-500/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                  CASE {cases[selectedCase].id} / {cases[selectedCase].category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {cases[selectedCase].code}
                </h2>
                <p className="text-sm font-medium text-neutral-500">
                  {cases[selectedCase].client} • {cases[selectedCase].year}
                </p>
              </div>

              <div className="p-4 rounded-none border border-neutral-500/20 bg-neutral-500/5 font-mono text-xs">
                <span className="text-emerald-500 font-bold">KEY STAT: </span>
                {cases[selectedCase].stats}
              </div>

              <p className="text-sm leading-relaxed text-neutral-400">
                {cases[selectedCase].description}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Key Deliverables</h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {cases[selectedCase].deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {cases[selectedCase].stack.map((st, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono border border-neutral-500/30 bg-neutral-500/10"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-500/20 flex items-center justify-between">
                <a
                  href={cases[selectedCase].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold underline hover:opacity-75 transition-opacity"
                >
                  <span>Open External Asset</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-4 py-2 text-xs font-mono uppercase border border-neutral-500/30 hover:bg-neutral-500/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOP EDITORIAL NAVIGATION (Sokolovski Style) */}
      <header
        className={`sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors ${
          isDark
            ? "bg-[#0b0c10]/90 border-neutral-800/80"
            : "bg-[#fbfbfb]/90 border-neutral-200/80"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <div
                className={`w-9 h-9 flex items-center justify-center font-mono font-bold text-sm border tracking-tighter transition-transform group-hover:scale-105 ${
                  isDark ? "border-white bg-white text-black" : "border-black bg-black text-white"
                }`}
              >
                AS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight uppercase">Ankesh Singh</span>
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
                  AI/ML • Product Engineer
                </span>
              </div>
            </a>
          </div>

          {/* Center Editorial Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            {[
              { label: "Cases", href: "#cases" },
              { label: "Fragments", href: "#fragments" },
              { label: "Approach", href: "#approach" },
              { label: "About", href: "#about" },
              { label: "Contacts", href: "#contacts" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-neutral-100 dark:hover:text-white transition-colors relative py-1 hover:underline underline-offset-8"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* 1-Click Copy Email Pill (Like Eugene Sokolovski) */}
            <div
              className={`hidden sm:flex items-center border rounded-full px-3 py-1.5 text-xs font-mono transition-colors ${
                isDark ? "border-neutral-800 bg-neutral-900/60" : "border-neutral-200 bg-white"
              }`}
            >
              <a
                href="mailto:ankeshs267@gmail.com"
                className="hover:underline text-neutral-400 hover:text-neutral-200 mr-2"
              >
                ankeshs267@gmail.com
              </a>
              <button
                onClick={() => handleCopy("ankeshs267@gmail.com", "Email")}
                title="Copy Email"
                className="p-1 hover:opacity-70 transition-opacity text-neutral-400"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`p-2 border rounded-full transition-colors ${
                isDark
                  ? "border-neutral-800 hover:bg-neutral-800 text-neutral-300"
                  : "border-neutral-200 hover:bg-neutral-100 text-neutral-700"
              }`}
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Connect CTA */}
            <a
              href="tel:+919219363654"
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold border transition-all ${
                isDark
                  ? "border-white bg-white text-black hover:bg-neutral-200"
                  : "border-black bg-black text-white hover:bg-neutral-800"
              }`}
            >
              Call Direct
            </a>
          </div>
        </div>

        {/* Micro-Metadata Sub-Bar */}
        <div
          className={`border-t py-2 px-4 sm:px-8 text-[11px] font-mono uppercase tracking-wider flex items-center justify-between flex-wrap gap-2 ${
            isDark ? "border-neutral-900 bg-black/40 text-neutral-500" : "border-neutral-100 bg-neutral-50 text-neutral-400"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <strong className={isDark ? "text-neutral-300" : "text-neutral-800"}>STATUS:</strong> AVAILABLE FOR AI/ML & SWE INTERNSHIPS
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">
              <strong className={isDark ? "text-neutral-300" : "text-neutral-800"}>LOCATION:</strong> CHANDIGARH, PUNJAB (30.7333° N, 76.7794° E)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>
              <strong className={isDark ? "text-neutral-300" : "text-neutral-800"}>TIME:</strong> {currentTime || "14:25:00"} IST
            </span>
            <span>•</span>
            <span>
              <strong className={isDark ? "text-neutral-300" : "text-neutral-800"}>ACADEMIC INDEX:</strong> GPA 8.0 / 10.0
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION (Bold Editorial Typographic Architecture) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-16 border-b border-neutral-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Giant Headline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
              <span>[ 2025–2029 ]</span>
              <span>•</span>
              <span>B.E. COMPUTER SCIENCE & ARTIFICIAL INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.92]">
              Engineering <br />
              <span className="italic font-light serif text-neutral-500">&amp; Applied</span> AI <br />
              Systems.
            </h1>

            <p className="text-base sm:text-xl text-neutral-400 max-w-2xl font-normal leading-relaxed pt-2">
              Ankesh Singh is a Computer Science Engineer at <strong className={isDark ? "text-white" : "text-neutral-900"}>Chitkara University (GPA 8.0)</strong>,
              specializing in <strong className={isDark ? "text-white" : "text-neutral-900"}>Natural Language Processing</strong>, Generative AI prompt architectures, and
              <strong className={isDark ? "text-white" : "text-neutral-900"}> Rice University certified engineering leadership communication</strong>.
            </p>
          </div>

          {/* Right Editorial Dossier Block */}
          <div
            className={`lg:col-span-4 p-6 sm:p-8 border space-y-5 ${
              isDark ? "border-neutral-800 bg-[#0f1015]" : "border-neutral-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-500/20">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">QUICK DOSSIER</span>
              <span className="text-xs font-mono font-bold">2510992993</span>
            </div>

            <div className="space-y-3 text-xs font-mono leading-relaxed">
              <div className="flex justify-between py-1 border-b border-neutral-500/10">
                <span className="text-neutral-500">DEGREE</span>
                <span className="font-semibold text-right">B.E. CSE (AI/ML)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-500/10">
                <span className="text-neutral-500">INSTITUTION</span>
                <span className="font-semibold text-right">Chitkara University</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-500/10">
                <span className="text-neutral-500">ACADEMIC GPA</span>
                <span className="font-semibold text-emerald-500">8.0 / 10.0</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-500/10">
                <span className="text-neutral-500">CLASS X BOARD</span>
                <span className="font-semibold">92% (Lucknow Public)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-500/10">
                <span className="text-neutral-500">SCIENCE OLYMPIAD</span>
                <span className="font-semibold text-amber-500">2nd Position (NSO)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-500/10">
                <span className="text-neutral-500">PHONE</span>
                <a href="tel:+919219363654" className="font-semibold hover:underline">
                  +91 92193 63654
                </a>
              </div>
            </div>

            <button
              onClick={() =>
                handleCopy(
                  `Ankesh Singh | B.E. CSE (AI/ML) Chitkara University (GPA 8.0) | Phone: +91 9219363654 | Email: ankeshs267@gmail.com | Location: Chandigarh, Punjab | LinkedIn: https://www.linkedin.com/in/ankesh-singh-429274288`,
                  "Full Dossier"
                )
              }
              className={`w-full py-3 text-xs font-mono uppercase tracking-widest font-bold border transition-colors flex items-center justify-center gap-2 ${
                isDark
                  ? "border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white"
                  : "border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-black"
              }`}
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Recruiter Bio</span>
            </button>
          </div>
        </div>
      </section>

      {/* CASES SECTION (Sokolovski Style Interactive Projects Showcase) */}
      <section id="cases" className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 border-b border-neutral-500/20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">[ 01 / 04 ]</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Selected Cases
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md">
            Applied machine learning, responsive motion architectures, and algorithmic computing designed for production viability.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(idx)}
              className={`border p-8 sm:p-10 cursor-pointer transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                isDark
                  ? "border-neutral-800 bg-[#0f1015] hover:border-neutral-500"
                  : "border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-xl"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-500">
                  <span>CASE {item.id}</span>
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-flex items-center gap-1 font-semibold text-emerald-500">
                    Inspect <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                    {item.code}
                  </h3>
                  <p className="text-sm font-medium text-neutral-400">{item.client}</p>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.stack.map((st, i) => (
                    <span
                      key={i}
                      className={`text-[11px] font-mono px-2.5 py-1 border ${
                        isDark
                          ? "border-neutral-800 bg-neutral-900/60 text-neutral-300"
                          : "border-neutral-200 bg-neutral-50 text-neutral-700"
                      }`}
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-500/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-400">
                <span>{item.year}</span>
                <span className="text-emerald-500 font-bold">{item.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FRAGMENTS SECTION (Sokolovski Style Micro-Credentials & Certifications) */}
      <section id="fragments" className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 border-b border-neutral-500/20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">[ 02 / 04 ]</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Verified Fragments
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md">
            Verified institutional certificates, industry badges, and engineering credentials backed by verifiable IDs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fragments.map((frag) => (
            <div
              key={frag.num}
              className={`border p-6 flex flex-col justify-between transition-all duration-200 group ${
                isDark
                  ? "border-neutral-800 bg-[#0f1015] hover:border-neutral-600"
                  : "border-neutral-200 bg-white hover:border-neutral-400"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>FRAG {frag.num}</span>
                  <span className="px-2 py-0.5 border border-neutral-500/30 text-[10px] uppercase font-bold tracking-wider">
                    {frag.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase">{frag.issuer}</span>
                  <h4 className="text-base font-bold tracking-tight mt-1 group-hover:text-emerald-500 transition-colors">
                    {frag.title}
                  </h4>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{frag.note}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-500/10 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500 truncate max-w-[110px]" title={frag.id}>
                  {frag.id}
                </span>
                <a
                  href={frag.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-emerald-500 hover:opacity-80 inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH SECTION (The 4-Step Engineering Philosophy) */}
      <section id="approach" className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 border-b border-neutral-500/20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">[ 03 / 04 ]</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1">
              Method &amp; Approach
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-md">
            A systematic engineering and leadership framework developed across academic rigor and real-world experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((ap) => (
            <div
              key={ap.step}
              className={`border p-8 flex flex-col justify-between space-y-6 ${
                isDark ? "border-neutral-800 bg-[#0f1015]" : "border-neutral-200 bg-white"
              }`}
            >
              <div className="space-y-4">
                <div className="text-3xl font-black font-mono text-emerald-500">{ap.step}</div>
                <h3 className="text-lg font-bold tracking-tight uppercase">{ap.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{ap.body}</p>
              </div>
              <div className="pt-4 border-t border-neutral-500/10 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                PHASE {ap.step} WORKFLOW
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME SECTION (Personal Story & Academic Integrity) */}
      <section id="about" className="max-w-[1400px] mx-auto px-4 sm:px-8 py-20 border-b border-neutral-500/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">[ ABOUT ANKESH ]</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Curious Mind. <br />
              Rigorous Code. <br />
              Impactful Voice.
            </h2>

            <p className="text-sm leading-relaxed text-neutral-400">
              I am a Computer Science Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at Chitkara University.
              My work revolves around building robust applications that merge core data structures with modern applied AI.
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-500/20 font-mono text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Chandigarh / Rajpura, Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <a href="tel:+919219363654" className="hover:underline">
                  +91 92193 63654
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <a href="mailto:ankeshs267@gmail.com" className="hover:underline">
                  ankeshs267@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-500" />
                <a
                  href="https://www.linkedin.com/in/ankesh-singh-429274288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/ankesh-singh-429274288
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div
              className={`border p-8 ${
                isDark ? "border-neutral-800 bg-[#0f1015]" : "border-neutral-200 bg-white"
              }`}
            >
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4 flex items-center justify-between">
                <span>Academic Track Record</span>
                <span className="text-xs font-mono text-emerald-500">GPA 8.0</span>
              </h3>

              <div className="space-y-6">
                <div className="pb-4 border-b border-neutral-500/10">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h4 className="text-base font-semibold">B.E. Computer Science &amp; Engineering (AI/ML)</h4>
                    <span className="text-xs font-mono text-neutral-400">2025 – 2029 (Exp.)</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Chitkara University, Rajpura, Punjab • Focus on Python Problem Solving, OOP in C++, Data Structures &amp; AI Algorithms.
                  </p>
                </div>

                <div className="pb-4 border-b border-neutral-500/10">
                  <div className="flex justify-between items-baseline flex-wrap gap-1">
                    <h4 className="text-base font-semibold">Secondary &amp; Higher Secondary Schooling</h4>
                    <span className="text-xs font-mono text-neutral-400">CBSE Board</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Lucknow Public School • Class X: <strong>92%</strong> • Class XII: <strong>77%</strong> • 2nd Rank in National Science Olympiad.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase font-mono tracking-wider text-neutral-400 mb-2">
                    Core Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "C++",
                      "Java",
                      "Prompt Engineering",
                      "Natural Language Processing",
                      "Object-Oriented Programming",
                      "Netlify Deployments",
                      "Swishy Motion Design",
                      "Cybersecurity Basics",
                      "Rice Leadership Certified",
                    ].map((s, idx) => (
                      <span
                        key={idx}
                        className={`text-xs font-mono px-3 py-1 border ${
                          isDark
                            ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                            : "border-neutral-200 bg-neutral-100 text-neutral-800"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS SECTION (Sokolovski Style Questions & Collaboration) */}
      <section id="contacts" className="max-w-[1400px] mx-auto px-4 sm:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct CTA */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">[ 04 / 04 • CONTACTS ]</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-tight">
              Let's Discuss <br />
              Opportunities <br />
              &amp; Projects.
            </h2>

            <p className="text-sm text-neutral-400 max-w-md font-normal leading-relaxed">
              Available for immediate software engineering and applied AI/ML internships. Flexible with remote and hybrid arrangements across India.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:ankeshs267@gmail.com"
                  className={`px-6 py-3.5 text-xs font-mono uppercase tracking-widest font-bold border transition-all inline-flex items-center gap-2 ${
                    isDark
                      ? "border-white bg-white text-black hover:bg-neutral-200"
                      : "border-black bg-black text-white hover:bg-neutral-800"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href="tel:+919219363654"
                  className={`px-6 py-3.5 text-xs font-mono uppercase tracking-widest font-bold border transition-colors inline-flex items-center gap-2 ${
                    isDark
                      ? "border-neutral-700 hover:bg-neutral-800 text-white"
                      : "border-neutral-300 hover:bg-neutral-100 text-black"
                  }`}
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>Call +91 92193 63654</span>
                </a>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-neutral-400">
                <a
                  href="https://www.linkedin.com/in/ankesh-singh-429274288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 font-bold"
                >
                  LinkedIn Profile <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a
                  href="https://serene-speculoos-e11f80.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1 font-bold"
                >
                  Netlify Live App <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Distinctive Sokolovski Collaboration Questions */}
          <div
            className={`lg:col-span-6 p-8 sm:p-12 border space-y-6 ${
              isDark ? "border-neutral-800 bg-[#0f1015]" : "border-neutral-200 bg-white"
            }`}
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-neutral-500/20 pb-4">
              Core Alignment Questions for High-Impact Collaboration:
            </h3>

            <ol className="space-y-4 text-sm font-medium leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-emerald-500 pt-0.5">01.</span>
                <span>What core engineering problem or user bottleneck are we looking to solve?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-emerald-500 pt-0.5">02.</span>
                <span>What are the key technical and architectural constraints (latency, stack, cloud)?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-emerald-500 pt-0.5">03.</span>
                <span>What measurable business or analytical outcome is expected from this sprint?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-emerald-500 pt-0.5">04.</span>
                <span>How will we validate that the solution has been engineered to production standard?</span>
              </li>
            </ol>

            <div className="pt-6 border-t border-neutral-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-400">
                Institutional ID: ankesh2993.beai25@chitkara.edu.in
              </span>
              <button
                onClick={() =>
                  handleCopy(
                    `Candidate: Ankesh Singh\nRole: B.E. CSE (AI/ML), Chitkara University (GPA 8.0)\nPhone: +91 9219363654\nEmail: ankeshs267@gmail.com\nLinkedIn: https://www.linkedin.com/in/ankesh-singh-429274288\nLocation: Chandigarh / Rajpura, Punjab\nVerified Cert: https://coursera.org/verify/specialization/DL1D7NTKZ915\nNetlify: https://serene-speculoos-e11f80.netlify.app`,
                    "Candidate Dossier"
                  )
                }
                className="w-full sm:w-auto px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-black transition-colors"
              >
                Copy Complete Dossier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t py-12 px-4 sm:px-8 text-xs font-mono uppercase tracking-wider ${
          isDark ? "border-neutral-800 text-neutral-500" : "border-neutral-200 text-neutral-400"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Ankesh Singh • Chitkara University, Punjab (GPA 8.0)
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/ankesh-singh-429274288" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
              LinkedIn
            </a>
            <a href="https://serene-speculoos-e11f80.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
              Netlify
            </a>
            <a href="mailto:ankeshs267@gmail.com" className="hover:text-emerald-500 transition-colors">
              Email
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
