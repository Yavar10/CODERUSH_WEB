"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ArcadeContextType {
  isArcadeMode: boolean;
  isTransitioning: boolean;
  toggleArcadeMode: () => void;
  playRetroSound: (type?: "coin" | "warp" | "select" | "powerup") => void;
}

const ArcadeContext = createContext<ArcadeContextType>({
  isArcadeMode: false,
  isTransitioning: false,
  toggleArcadeMode: () => {},
  playRetroSound: () => {},
});

export const ArcadeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isArcadeMode, setIsArcadeMode] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem("coderush_arcade_mode");
    if (stored === "true") {
      setIsArcadeMode(true);
    }
  }, []);

  const playRetroSound = (type: "coin" | "warp" | "select" | "powerup" = "warp") => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (type === "coin") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(987.77, ctx.currentTime); // B5
        osc.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.08); // E6
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === "warp") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.4);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.8);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.8);
      } else if (type === "select") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
      } else if (type === "powerup") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        const notes = [261.63, 329.63, 392.0, 523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);
        });
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch {
      // Audio policy fallback
    }
  };

  const toggleArcadeMode = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    playRetroSound(isArcadeMode ? "select" : "warp");

    // Add glitch animation class directly onto document.body so the whole website glitches live in front of the user
    document.body.classList.add("live-glitch-active");

    // Immediately flip the state so the user sees the page morph instantly
    setIsArcadeMode((prev) => {
      const next = !prev;
      localStorage.setItem("coderush_arcade_mode", String(next));
      return next;
    });

    setTimeout(() => {
      document.body.classList.remove("live-glitch-active");
      setIsTransitioning(false);
    }, 550);
  };

  return (
    <ArcadeContext.Provider
      value={{
        isArcadeMode,
        isTransitioning,
        toggleArcadeMode,
        playRetroSound,
      }}
    >
      {children}
    </ArcadeContext.Provider>
  );
};

export const useArcade = () => useContext(ArcadeContext);
