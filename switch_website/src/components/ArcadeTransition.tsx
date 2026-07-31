"use client";

import React, { useEffect, useRef, useState } from "react";
import { useArcade } from "@/context/ArcadeContext";

export default function ArcadeTransition() {
  const { isTransitioning, isArcadeMode } = useArcade();
  const [showToast, setShowToast] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [modeName, setModeName] = useState("");
  const prevTransitionRef = useRef(false);

  useEffect(() => {
    // Only trigger when isTransitioning changes from false to true
    if (isTransitioning && !prevTransitionRef.current) {
      setModeName(isArcadeMode ? "8-BIT ARCADE WORLD" : "CLASSIC OLYMPIC WORLD");
      setShowToast(true);
      setIsFadingOut(false);

      // Fade out after 1000ms
      setTimeout(() => {
        setIsFadingOut(true);
      }, 1000);

      // Completely remove from DOM after 1500ms
      setTimeout(() => {
        setShowToast(false);
        setIsFadingOut(false);
      }, 1500);
    }
    prevTransitionRef.current = isTransitioning;
  }, [isTransitioning, isArcadeMode]);

  if (!showToast) return null;

  return (
    <div
      className={`fixed top-20 right-6 z-[999999] pointer-events-none font-press-start transition-all duration-500 ${
        isFadingOut
          ? "opacity-0 translate-y-[-12px] scale-95"
          : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {/* Floating HUD Badge Notification */}
      <div className="border-3 border-black bg-[#F4C300] text-black px-4 py-3 shadow-[4px_4px_0px_#000] flex items-center gap-3 animate-bounce">
        <span className="text-lg animate-pixel-blink">⚡</span>
        <div className="flex flex-col text-left">
          <span className="text-[8px] font-silkscreen font-bold text-black/70">
            RE-WRITING DIMENSION...
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider">
            {modeName} ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}
