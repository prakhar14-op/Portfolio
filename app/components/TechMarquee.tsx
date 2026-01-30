"use client";

import { motion } from "framer-motion";

const SKILLS = [
    "Deep Learning", "Computer Vision", "PyTorch", "TensorFlow", "OpenCV", "YOLO-World",
    "React", "Next.js", "Tailwind CSS", "C++", "Python", "Mathematics", "Geometric Algorithms",
    "U-Net", "Transformers", "Git", "Figma"
];

export default function TechMarquee() {
    return (
        <div className="relative flex overflow-hidden py-10 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent border-y border-white/5">
            <div className="absolute inset-0 bg-transparent z-10 pointer-events-none" />
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 opacity-50">
                            {skill}
                        </span>
                    </div>
                ))}
            </motion.div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020204] to-transparent z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020204] to-transparent z-20" />
        </div>
    );
}
