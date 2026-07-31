"use client";

import { useEffect, useState } from "react";

export default function RetroLoader() {
  const [progress, setProgress] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Stepped pixel progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          // Auto dismiss after a brief moment
          setTimeout(() => setIsDismissed(true), 400);
          return 100;
        }
        return prev + 20;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      onClick={() => setIsDismissed(true)}
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#07111F] text-white transition-opacity duration-500 cursor-pointer ${
        isReady ? "opacity-90" : "opacity-100"
      }`}
    >
      {/* Scanline overlay */}
      <div className="scanlines-overlay absolute inset-0 opacity-40 pointer-events-none" />
      <div className="pixel-grid-dark absolute inset-0 opacity-30 pointer-events-none" />

      {/* Arcade Window */}
      <div className="relative z-10 w-11/12 max-w-lg border-4 border-white bg-black/90 p-6 md:p-10 pixel-shadow-gold text-center">
        {/* Retro Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-white/20 pb-3 mb-6 font-press-start text-[10px] text-[#D4AF37]">
          <span>CREDIT 01</span>
          <span className="animate-pixel-blink">INSERT COIN</span>
          <span>1P ACTIVE</span>
        </div>

        {/* Pixel Coin / Arcade Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 border-4 border-[#F4C300] bg-[#D4AF37] flex items-center justify-center font-press-start text-2xl text-black shadow-[4px_4px_0px_#000] animate-pixel-float">
            🪙
          </div>
        </div>

        {/* Title */}
        <h2 className="font-press-start text-xl md:text-2xl text-white tracking-widest uppercase mb-2">
          CODE RUSH<span className="text-[#D4AF37]"> 3.0</span>
        </h2>
        <p className="font-silkscreen text-xs text-white/60 uppercase tracking-wider mb-8">
          CPBYTE COMPETITIVE ARENA
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between font-press-start text-[10px] text-white/70 mb-2">
            <span>LOADING ARENA...</span>
            <span>{progress}%</span>
          </div>

          <div className="h-5 w-full border-2 border-white bg-zinc-900 p-1 flex gap-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`h-full flex-1 transition-all duration-75 ${
                  i < progress / 10
                    ? "bg-gradient-to-r from-[#0085C7] via-[#F4C300] to-[#DF0024]"
                    : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-8 pt-4 border-t-2 border-white/10 font-press-start text-xs text-[#F4C300]">
          {isReady ? (
            <span className="animate-pixel-blink text-green-400">
              ▶ PRESS START / CLICK TO ENTER ◀
            </span>
          ) : (
            <span className="animate-pixel-blink text-white/50">
              INITIALIZING 8-BIT ENGINE...
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
