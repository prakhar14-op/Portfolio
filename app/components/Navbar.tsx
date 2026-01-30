"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
        >
            <div className="flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
                <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Work</a>
                <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
                <div className="h-4 w-px bg-white/10 mx-2" />
                <div className="flex gap-4">
                    <a href="https://github.com/prakhar14-op" target="_blank" className="text-slate-400 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href="mailto:prakhar2005dtu@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
                </div>
            </div>
        </motion.nav>
    );
}
