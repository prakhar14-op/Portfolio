"use client";

import React, { useRef } from "react";
import LaserFlow from "./LaserFlow";
import HeroUiLayout from "./HeroUiLayout";

export default function BeamHero() {
    const revealImgRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative w-full h-[900px] overflow-hidden bg-[#060010]"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const el = revealImgRef.current;
                if (el) {
                    // Adjust y based on user snippet logic if needed, but simple coordinate map is best for DOM
                    // User snippet had: el.style.setProperty('--my', `${y + rect.height * 0.5}px`); 
                    // because their image was top: -50%.
                    // We are using absolute inset-0, so we use direct Y.
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
            {/* 1. Laser Flow Background (The Beam) */}
            <LaserFlow
                horizontalBeamOffset={0.1}
                verticalBeamOffset={0.0}
                color="#9278ce" // User requested specific purple
                horizontalSizing={0.5}
                verticalSizing={2.0} // User snippet value
                wispDensity={1}
                wispSpeed={15}
                wispIntensity={5}
                flowSpeed={0.35}
                flowStrength={0.25}
                fogIntensity={0.45}
                fogScale={0.3}
                fogFallSpeed={0.6}
                decay={1.1}
                falloffStart={1.2}
            />

            {/* 2. Text Content (Left Side) - Overlay on top of LaserFlow, independent of flashlight? 
           User "image 1" doesn't show text, but portfolio needs it.
           I'll place it absolutely on the left, independent of the flashlight Reveal Logic 
           to keep text readable always.
       */}
            <div className="absolute inset-0 z-30 pointer-events-none flex items-center">
                <div className="max-w-7xl mx-auto w-full px-4">
                    <div className="max-w-xl pointer-events-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300 backdrop-blur-md mb-6">
                            High Performance Compute
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6 leading-[0.9]">
                            Everything <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-200">AI & Math</span> <br />
                            for Future.
                        </h1>
                        <p className="text-lg text-purple-100/60 leading-relaxed mb-8">
                            Specializing in Deep Learning, Geometric Algorithms, and High-Performance Compute.
                        </p>
                        <button className="px-8 py-4 rounded-full bg-white text-black font-bold tracking-tight hover:scale-105 transition-transform">
                            SEE PROJECTS →
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. Base Layer (Dimmed Dashboard & Grid) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <HeroUiLayout isReveal={false} />
            </div>

            {/* 4. Reveal Layer (Flashlight Effect) */}
            <div
                ref={revealImgRef}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    // Mask Logic from User Snippet
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                } as React.CSSProperties}
            >
                {/* Lit up content */}
                <HeroUiLayout isReveal={true} />
            </div>

            {/* 5. Bottom Flare (Ambiance) */}
            <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none z-0" />

        </div>
    );
}
