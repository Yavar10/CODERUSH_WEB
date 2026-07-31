"use client";

import React, { useState } from "react";
import { useArcade } from "@/context/ArcadeContext";

export default function ArcadePortalButton() {
  const { isArcadeMode, toggleArcadeMode } = useArcade();
  const [, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-6 right-3 sm:bottom-8 sm:right-10 z-30 flex items-center pointer-events-auto">
      {isArcadeMode ? (
        /* CLASSIC OLYMPIC WORLD PORTAL WIDGET (Renders inside Arcade Mode) */
        <button
          onClick={toggleArcadeMode}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center gap-2.5 sm:gap-3.5 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#D4AF37] text-zinc-900 shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_45px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer select-none"
          title="Return to Classic Olympic Dimension"
        >
          {/* Olympic Torch & Laurel Icon Badge */}
          <div className="relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#F4C300] to-[#B8860B] text-white shadow-md group-hover:rotate-12 transition-transform duration-300">
            <span className="text-base sm:text-xl">🏛️</span>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8C6A1A]">
              PORTAL
            </span>
            <span className="font-anton text-xs sm:text-sm tracking-wider uppercase text-zinc-900 flex items-center gap-1">
              CLASSIC WORLD
              <span className="text-[#D4AF37] text-[10px] sm:text-xs font-sans group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </div>

          {/* Golden Aura Ring */}
          <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/50 opacity-0 group-hover:opacity-100 animate-ping pointer-events-none duration-1000" />
        </button>
      ) : (
        /* 8-BIT ARCADE COIN MACHINE WIDGET (Renders inside Classic Mode) */
        <button
          onClick={toggleArcadeMode}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center gap-2.5 sm:gap-4 p-2 pr-3.5 sm:p-3 sm:pr-6 border-3 sm:border-4 border-black bg-[#F4C300] text-black font-press-start shadow-[4px_4px_0px_#000] sm:shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-1 active:translate-y-1 transition-all duration-200 cursor-pointer select-none animate-pixel-float"
          title="Insert Coin to Enter 8-Bit Arcade World"
        >
          {/* Animated 8-bit Coin Slot Box */}
          <div className="relative flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 border-2 sm:border-3 border-black bg-black text-[#F4C300] shadow-[1px_1px_0px_#000] sm:shadow-[2px_2px_0px_#000] overflow-hidden shrink-0">
            <span className="text-lg sm:text-2xl animate-pixel-pulse">🪙</span>

            {/* Floating Coin Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1 text-[7px] sm:text-[8px] font-silkscreen font-bold text-black/80">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-600 animate-pixel-blink" />
              <span>INSERT COIN</span>
            </div>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-wider font-bold text-black group-hover:text-red-700 transition-colors">
              ARCADE WORLD
            </span>
          </div>

          <span className="text-xs sm:text-sm text-[#DF0024] animate-pixel-blink font-bold ml-0.5 sm:ml-1">
            ▶
          </span>

          {/* Retro Corner Accents */}
          <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-2 sm:border-t-3 border-l-2 sm:border-l-3 border-black" />
          <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-2 sm:border-t-3 border-r-2 sm:border-r-3 border-black" />
          <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b-2 sm:border-b-3 border-l-2 sm:border-l-3 border-black" />
          <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b-2 sm:border-b-3 border-r-2 sm:border-r-3 border-black" />
        </button>
      )}
    </div>
  );
}
