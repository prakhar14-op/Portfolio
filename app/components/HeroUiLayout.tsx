"use client";

import React from "react";
import { Github, Terminal, Code2, Cpu, User } from "lucide-react";
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

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-[600px] flex items-end justify-center md:justify-end pb-20">

                {/* Main Content Group */}
                <div className="relative flex items-end gap-6">

                    {/* Dashboard */}
                    <div className={cn("transition-all duration-300", dashboardClass)}>
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
                                    <h4 className="text-white font-bold">John Arnold</h4>
                                    <p className="text-xs text-purple-300">Cardio specialist</p>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <div className="flex-1 h-2 rounded-full bg-slate-800"><div className="w-2/3 h-full rounded-full bg-purple-500" /></div>
                                <span className="text-xs text-slate-500">75%</span>
                            </div>
                        </div>
                    </div>

                    {/* Ghost Box 1: Github */}
                    <div className={cn("absolute -top-12 -left-12 p-3 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md transition-all duration-300", ghostClass)}>
                        <Github className="w-6 h-6 text-white" />
                    </div>

                    {/* Ghost Box 2: Terminal */}
                    <div className={cn("absolute top-32 -right-16 p-3 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md transition-all duration-300 delay-75", ghostClass)}>
                        <Terminal className="w-6 h-6 text-purple-400" />
                    </div>

                    {/* Ghost Box 3: Code */}
                    <div className={cn("absolute -bottom-8 left-1/2 p-3 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md transition-all duration-300 delay-100", ghostClass)}>
                        <Code2 className="w-6 h-6 text-blue-400" />
                    </div>

                </div>
            </div>

        </div>
    );
}
