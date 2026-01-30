"use client";

import React from "react";
import { Github, Terminal, Code2, Cpu, User, Database, Globe, Zap, Activity } from "lucide-react";
import DashboardPreview from "./DashboardPreview";
import { cn } from "@/lib/utils"; // Assuming utils or inline cn



export default function HeroUiLayout({ isReveal = false }: { isReveal?: boolean }) {
    // Styles based on Reveal/Base state
    const containerClass = isReveal ? "opacity-100" : "opacity-30";
    const dashboardClass = isReveal ? "contrast-125 brightness-125" : "contrast-75 brightness-75";
    // Ghost items are HIDDEN in base, VISIBLE in reveal
    const ghostClass = isReveal ? "opacity-100 scale-105" : "opacity-0 scale-95";

    return (
        <div className={cn("relative w-full h-full flex flex-col items-center justify-end pb-0 transition-opacity duration-300", containerClass)}>

            {/* Bottom Dotted Grid Floor */}
            <div
                className="absolute bottom-0 w-[150%] h-[400px] left-[-25%] pointer-events-none"
                style={{
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                }}
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(${isReveal ? '#a78bfa' : '#4c1d95'} 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                        opacity: isReveal ? 0.6 : 0.2
                    }}
                />
            </div>


            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full flex items-end justify-center md:justify-end pb-20">

                {/* --- LEFT STACK (Cascading Outwards) --- */}

                {/* L1: Stakeholder (Top, near beam) */}
                <div className={cn("absolute top-[10%] left-[25%] w-[260px] p-4 rounded-xl border border-white/10 bg-[#0A0A0B]/90 backdrop-blur-md transition-all duration-300 group hover:border-white pointer-events-auto z-20", ghostClass)}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-sm text-slate-400 font-medium">Stakeholder communication</div>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400">Medium</span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400">Management</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <div className="w-4 h-4 rounded-full border border-slate-600 border-t-transparent animate-spin" /> 50%
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-purple-300">JP</div>
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-blue-300">AS</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* L2: Frontend (Mid, stepped left) */}
                <div className={cn("absolute top-[20%] left-[18%] w-[260px] p-4 rounded-xl border border-white/10 bg-[#0A0A0B]/90 backdrop-blur-md transition-all duration-300 group hover:border-white pointer-events-auto z-30", ghostClass)}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-sm text-slate-400 font-medium">Frontend Architecture</div>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-pink-300">High</span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-cyan-300">React</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-emerald-400">
                                <Activity className="w-4 h-4" /> Active
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-orange-300">MK</div>
                                <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-teal-300">DL</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* L3: Security Audit (Bottom, stepped further left) */}
                <div className={cn("absolute top-[30%] left-[11%] w-[260px] p-4 rounded-xl border border-white/10 bg-[#0A0A0B]/90 backdrop-blur-md transition-all duration-300 group hover:border-white pointer-events-auto z-40", ghostClass)}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-sm text-slate-400 font-medium">Security Audit</div>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-red-300">Critical</span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400">Infra</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-orange-400">
                                <Zap className="w-4 h-4" /> Scanning
                            </div>
                            <div className="w-6 h-6 rounded-full bg-red-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-red-300">Bot</div>
                        </div>
                    </div>
                </div>


                {/* --- RIGHT STACK (Cascading Outwards) --- */}

                {/* R1: Cloud Infra (Top, near beam) */}
                <div className={cn("absolute top-[10%] right-[8%] w-[260px] p-4 rounded-xl border border-white/10 bg-[#0A0A0B]/90 backdrop-blur-md transition-all duration-300 group hover:border-white pointer-events-auto z-20", ghostClass)}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-sm text-slate-400 font-medium">Cloud Infrastructure</div>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-yellow-300">DevOps</span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400">AWS</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <div className="w-4 h-4 rounded-full border border-slate-600 border-t-transparent animate-spin" /> Running
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-indigo-300">AL</div>
                                <div className="w-6 h-6 rounded-full bg-rose-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-rose-300">SJ</div>
                                <div className="w-6 h-6 rounded-full bg-slate-700/50 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-slate-300">+2</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* R2: System Analysis (Mid, stepped right) */}
                <div className={cn("absolute top-[20%] right-[4%] w-[260px] p-4 rounded-xl border border-white/10 bg-[#0A0A0B]/90 backdrop-blur-md transition-all duration-300 group hover:border-white pointer-events-auto z-30", ghostClass)}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-sm text-slate-400 font-medium">System analysis</div>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-purple-300">Research</span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-green-300">Planning</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-emerald-400">
                                <Zap className="w-4 h-4 text-yellow-400" /> On Track
                            </div>
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-green-300">SK</div>
                                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-red-300">MJ</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* R3: Database Cluster (Bottom, stepped further right) */}
                <div className={cn("absolute top-[30%] right-[0%] w-[260px] p-4 rounded-xl border border-white/10 bg-[#0A0A0B]/90 backdrop-blur-md transition-all duration-300 group hover:border-white pointer-events-auto z-40", ghostClass)}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-sm text-slate-400 font-medium">Database Cluster</div>
                            <div className="flex gap-2">
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-blue-300">Storage</span>
                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400">Redis</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                            <div className="flex items-center gap-2 text-xs text-blue-400">
                                <Database className="w-4 h-4" /> Syncing
                            </div>
                            <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-[#0A0A0B] flex items-center justify-center text-[8px] text-blue-300">DB</div>
                        </div>
                    </div>
                </div>


                {/* Main Content Group (Restored) */}
                <div className="relative flex items-end gap-6">

                    {/* Dashboard */}
                    <div className={cn("transition-all duration-300 group pointer-events-auto", dashboardClass)}>
                        <DashboardPreview />
                    </div>

                    {/* Trainer Card (Mock) */}
                    <div className={cn("hidden lg:block w-[280px] h-[360px] rounded-xl border border-white/10 bg-[#0A0A0B] overflow-hidden transition-all duration-300", dashboardClass)}>
                        <div className="h-full w-full p-4 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm font-medium text-slate-400">Trainer</span>
                                <User className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="flex-1 rounded-lg bg-gradient-to-b from-purple-500/10 to-transparent flex items-end p-4 border border-white/5 relative overflow-hidden group">
                                {/* Image placeholder */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                                <div className="relative z-10">
                                    <h4 className="text-white font-bold">Prakhar Sharma</h4>
                                    <p className="text-xs text-purple-300">B.tech student</p>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <div className="flex-1 h-2 rounded-full bg-slate-800"><div className="w-2/3 h-full rounded-full bg-purple-500" /></div>
                                <span className="text-xs text-slate-500">75%</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
