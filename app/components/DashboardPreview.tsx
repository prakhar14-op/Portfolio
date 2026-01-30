"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, MoreHorizontal, Search, Inbox, Layers } from "lucide-react";

export default function DashboardPreview() {
    return (
        <div className="relative w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <span className="text-xs font-medium text-slate-400">Tracker</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-slate-400 w-48">
                        <Search className="w-3 h-3" />
                        <span>Search...</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex h-[300px]">
                {/* Sidebar */}
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><Layers className="w-5 h-5" /></div>
                    <div className="p-2 rounded-lg hover:bg-white/5 text-slate-500"><Inbox className="w-5 h-5" /></div>
                </div>

                {/* Kanban Board Mockup */}
                <div className="flex-1 p-6 flex gap-6 overflow-hidden relative">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

                    {/* Column 1 */}
                    <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            <span>Backlog</span>
                            <span className="bg-white/5 px-1.5 py-0.5 rounded">12</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-2">
                            <div className="w-8 h-1 rounded-full bg-orange-500/50" />
                            <div className="h-2 w-3/4 bg-slate-700/50 rounded" />
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-2">
                            <div className="w-8 h-1 rounded-full bg-blue-500/50" />
                            <div className="h-2 w-full bg-slate-700/50 rounded" />
                            <div className="h-2 w-1/2 bg-slate-700/50 rounded" />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                            <span>In Progress</span>
                            <span className="bg-blue-500/10 px-1.5 py-0.5 rounded text-blue-400">3</span>
                        </div>
                        <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20 space-y-2 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            <div className="flex justify-between">
                                <div className="w-8 h-1 rounded-full bg-purple-500/50" />
                                <MoreHorizontal className="w-3 h-3 text-slate-600" />
                            </div>
                            <div className="h-2 w-2/3 bg-slate-600/80 rounded" />
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-4 h-4 rounded-full bg-pink-500/50 border border-white/10" />
                                <div className="h-1 w-12 bg-slate-700/50 rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex-1 space-y-3 opacity-50">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            <span>Done</span>
                            <span className="bg-white/5 px-1.5 py-0.5 rounded">45</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5 border border-white/5 space-y-2">
                            <div className="w-8 h-1 rounded-full bg-green-500/50" />
                            <div className="h-2 w-1/2 bg-slate-700/50 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
