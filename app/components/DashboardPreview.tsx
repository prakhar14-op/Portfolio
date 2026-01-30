"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, MoreHorizontal, Search, Inbox, Layers } from "lucide-react";

export default function DashboardPreview() {
    return (
        <div className="relative w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl shadow-2xl overflow-hidden transition-colors duration-300 hover:border-white">
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
            <div className="relative w-full bg-[#0A0A0B] h-[300px]">
                <img
                    src="/tracker.png"
                    alt="Tracker Dashboard"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />

                {/* Overlay Gradient for smooth bottom edge integration */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0A0B] to-transparent" />
            </div>
        </div>
    );
}
