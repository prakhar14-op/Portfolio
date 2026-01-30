"use client";

import React, { useRef } from "react";
import LaserFlow from "./LaserFlow";

export default function InteractiveReveal({ children }: { children: React.ReactNode }) {
    const revealImgRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative w-full h-full rounded-xl overflow-hidden bg-transparent"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', `${x}px`);
                    el.style.setProperty('--my', `${y}px`);
                }
            }}
            onMouseLeave={() => {
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', '-9999px');
                    el.style.setProperty('--my', '-9999px');
                }
            }}
        >
            {/* Background Content (The original child) */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>

            {/* The Reveal Layer (Cloned child with override styles and mask) */}
            <div
                ref={revealImgRef}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                } as React.CSSProperties}
            >
                {/* A 'highlighted' version of the child. 
              We wrap the child in a style that makes it look 'active' or 'revealed'.
              Functionally, we just clone the child here or use a specific overlay.
              For this implementation, we will use a bright border/overlay effect.
           */}
                <div className="w-full h-full bg-blue-500/10 border-2 border-blue-400/50 rounded-xl" />
            </div>
        </div>
    );
}
