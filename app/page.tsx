"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Github,
  Linkedin,
  Anchor,
  Search,
  Activity,
  Brain,
  ExternalLink,
  Mail,
  GraduationCap,
  Award,
  ChevronRight,
} from "lucide-react";
import Navbar from "./components/Navbar";
import TechMarquee from "./components/TechMarquee";
import BeamHero from "./components/BeamHero";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const DATA = {
  name: "Prakhar Sharma",
  contact: {
    email: "prakhar2005dtu@gmail.com",
    github: "github.com/prakhar14-op",
    linkedin: "Linkedin",
    location: "New Delhi, India",
    phone: "+91 8595509454"
  },
  education: [
    {
      school: "Delhi Technological University",
      degree: "B.Tech in Mathematics and Computing",
      score: "CGPA: 8.0",
      period: "2024 – 2028",
    },
    {
      school: "SBVJ-Block Saket (CBSE)",
      degree: "Class XII",
      score: "92.3% (Math: 95%)",
      period: "2023",
    },
  ],
  experience: [
    {
      role: "Research Intern",
      company: "MACS, DTU",
      period: "Oct 2025 – Present",
      desc: "Developing hybrid deep learning architecture (U-Net + ConvLSTM) for pancreatic cancer detection.",
    },
    {
      role: "Open Source Contributor",
      company: "Hacktoberfest 2025",
      period: "Oct 2025",
      desc: "Super Contributor badge. 10+ high-quality PRs in React UI and backend logic.",
    },
  ],
  projects: [
    {
      title: "Maritime Hazard Monitoring",
      tech: ["YOLO-World", "CLIP", "DBSCAN"],
      desc: "Multimodal verification for disaster reports using verification framework fusing YOLO-World and CLIP.",
      icon: Anchor,
      color: "from-blue-400 to-cyan-300",
    },
    {
      title: "Scene Localization",
      tech: ["Grounding DINO", "OpenCV"],
      desc: "Zero-shot visual grounding with natural language queries and geometric post-processing.",
      icon: Search,
      color: "from-purple-400 to-pink-300",
    },
    {
      title: "Pancreatic Cancer Detection",
      tech: ["U-Net", "ConvLSTM"],
      desc: "Hybrid architecture for spatiotemporal analysis of volumetric medical imaging.",
      icon: Activity,
      color: "from-emerald-400 to-teal-300",
    },
    {
      title: "Generative LSTM Model",
      tech: ["TensorFlow", "Keras"],
      desc: "92% accuracy text generation with 26ms latency using Stacked LSTMs.",
      icon: Brain,
      color: "from-amber-400 to-orange-300",
    },
  ],
};

// --- Components ---

function GhostCard({ children, className, colSpan = "col-span-1" }: { children: React.ReactNode, className?: string, colSpan?: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white/5 border border-white/5 transition-colors duration-500 hover:bg-white/10 hover:border-white/10",
        colSpan,
        className
      )}
    >
      <div className="relative h-full p-6 flex flex-col z-10 text-slate-500 group-hover:text-slate-300 transition-colors">
        {children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="relative min-h-screen text-slate-300 selection:bg-purple-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <BeamHero />

      {/* --- TECH MARQUEE --- */}
      <TechMarquee />

      {/* --- PROJECTS GRID --- */}
      <section id="projects" className="max-w-7xl mx-auto px-4 py-32 z-20 relative">
        <div className="flex items-end justify-between mb-16 px-4">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Featured Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
          </div>
          <a href={`https://${DATA.contact.github}`} target="_blank" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            View Github <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DATA.projects.map((project, i) => (
            <GhostCard key={i} colSpan={i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}>
              <div className="flex items-start justify-between mb-4">
                <div className={cn("p-3 rounded-lg bg-gradient-to-br opacity-80 backdrop-blur-md border border-white/10 shadow-lg", project.color)}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="mb-6 flex-grow leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </GhostCard>
          ))}
        </div>
      </section>

      {/* --- EDUCATION & EXPERIENCE --- */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20 z-20 relative grid md:grid-cols-2 gap-16">
        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Brain className="w-6 h-6 text-purple-400" /> Experience
          </h2>
          <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
            {DATA.experience.map((exp, i) => (
              <div key={i} className="group relative">
                <div className="absolute left-[-38px] top-1 w-4 h-4 rounded-full bg-black border-2 border-slate-700 group-hover:border-purple-500 group-hover:scale-125 transition-all" />

                <div className="mb-1 flex flex-wrap items-center gap-x-2">
                  <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300">{exp.company}</span>
                </div>
                <span className="text-sm font-mono text-slate-500 block mb-2">{exp.period}</span>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-indigo-400" /> Education
          </h2>
          <div className="space-y-6">
            {DATA.education.map((edu, i) => (
              <GhostCard key={i} className="bg-white/[0.02]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-bold">{edu.school}</h3>
                    <p className="text-purple-200/80 text-sm">{edu.degree}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-slate-300">{edu.score}</span>
                </div>
              </GhostCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5 bg-black/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's build something <span className="text-purple-500">extraordinary.</span></h2>
          <div className="flex justify-center gap-6 mb-12">
            <a href={`https://${DATA.contact.github}`} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hover:border-purple-500/50"><Github className="w-6 h-6" /></a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hover:border-purple-500/50"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${DATA.contact.email}`} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 hover:border-purple-500/50"><Mail className="w-6 h-6" /></a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Prakhar Sharma. All rights reserved.</p>
            <p>Designed with Huly Aesthetics & LaserFlow.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
